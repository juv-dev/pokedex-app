<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { applyRecommendedSets, downloadBytes, type ApplyResult } from '../../lib/saveEditor'
import { getAnilSpecies } from '../../lib/anilData'
import { megaOptionsFor } from '../../lib/recommendedSet'

/**
 * "Generar sets" (Mi partida): un botón abre un diálogo que aplica EVs, IVs y movimientos del
 * set recomendado a cada Pokémon del equipo y las cajas y descarga una copia nueva del `.rxdata`.
 * El archivo original nunca se toca; el resultado se re-verifica antes de ofrecer la descarga.
 */
const props = defineProps<{
  bytes: Uint8Array | null
  fileName: string
  species: string[]
}>()

const dialog = ref<HTMLDialogElement | null>(null)
const includeNatureItemAbility = ref(false)
const busy = ref(false)
const error = ref('')
const result = ref<ApplyResult | null>(null)
const megaChoices = reactive<Record<string, string>>({})

const outName = computed(() => `${(props.fileName || 'Partida').replace(/\.rxdata$/i, '')} (sets aplicados).rxdata`)

const megaSpecies = computed(() =>
  [...new Set(props.species)]
    .map(internalName => ({
      internalName,
      name: getAnilSpecies(internalName)?.name ?? internalName,
      megas: megaOptionsFor(internalName)
    }))
    .filter(s => s.megas.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name, 'es'))
)

function open() {
  error.value = ''
  result.value = null
  dialog.value?.showModal()
}
function close() {
  dialog.value?.close()
}
function onDialogClick(e: MouseEvent) {
  if (e.target === dialog.value) close()
}

async function generate() {
  if (!props.bytes || busy.value) return
  busy.value = true
  error.value = ''
  result.value = null
  try {
    const chosen: Record<string, string> = {}
    for (const [internalName, form] of Object.entries(megaChoices)) {
      if (form) chosen[internalName] = form
    }
    result.value = await applyRecommendedSets(props.bytes, {
      includeNatureItemAbility: includeNatureItemAbility.value,
      onlyOptimo: false,
      megaChoices: chosen
    })
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'No se pudieron generar los cambios.'
  } finally {
    busy.value = false
  }
}

function download() {
  if (result.value?.verified) downloadBytes(result.value.output, outName.value)
}
</script>

<template>
  <div v-if="bytes" class="gs-trigger-row">
    <button type="button" class="gs-trigger" @click="open">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12M8 11l4 4 4-4M5 21h14" />
      </svg>
      Generar sets recomendados
    </button>
  </div>

  <dialog ref="dialog" class="gs-modal" @click="onDialogClick">
    <div class="gs-inner">
      <header class="gs-head">
        <div>
          <span class="gs-eyebrow">Mi partida</span>
          <h2 class="gs-title">Generar sets</h2>
        </div>
        <button type="button" class="gs-x" aria-label="Cerrar" @click="close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>

      <p class="gs-lede">
        Aplica el set recomendado a cada Pokémon del equipo y las cajas y te descarga una copia nueva.
        Tu <code>{{ fileName || 'archivo' }}</code> no se modifica.
      </p>

      <div class="gs-opts">
        <label class="gs-opt">
          <input type="checkbox" v-model="includeNatureItemAbility">
          <span class="gs-opt-body">
            <span class="gs-opt-name">Naturaleza, objeto y habilidad</span>
            <span class="gs-opt-hint">además de EVs, IVs y los 4 movimientos</span>
          </span>
        </label>
      </div>

      <section v-if="megaSpecies.length" class="gs-mega">
        <div class="gs-mega-head">
          <span class="gs-mega-title">Megaevoluciones</span>
          <span class="gs-mega-hint">El set se calcula para la mega y se le pone su piedra, objeto y habilidad.</span>
        </div>
        <ul class="gs-mega-list">
          <li v-for="s in megaSpecies" :key="s.internalName" class="gs-mega-row">
            <span class="gs-mega-name">{{ s.name }}</span>
            <select v-model="megaChoices[s.internalName]" :aria-label="`Forma para ${s.name}`">
              <option value="">Forma base</option>
              <option v-for="m in s.megas" :key="m.formName" :value="m.formName">{{ m.formName }}</option>
            </select>
          </li>
        </ul>
      </section>

      <button type="button" class="gs-run" :disabled="busy" @click="generate">
        <span v-if="busy" class="gs-spin" aria-hidden="true"></span>
        {{ busy ? 'Generando…' : 'Generar' }}
      </button>

      <p v-if="error" class="gs-error" role="alert">{{ error }}</p>

      <div v-if="result" class="gs-result">
        <div class="gs-chips">
          <span class="gs-chip">{{ result.totals.applied }} aplicados</span>
          <span v-if="result.totals.skipped" class="gs-chip">{{ result.totals.skipped }} salteados</span>
          <span v-if="result.totals.megaApplied" class="gs-chip">{{ result.totals.megaApplied }} con mega</span>
          <span class="gs-chip" :class="result.verified ? 'is-ok' : 'is-bad'">
            {{ result.verified ? '✓ verificado' : '✕ verificación falló' }}
          </span>
        </div>

        <p class="gs-note" :class="{ 'is-bad': !result.verified }">
          <template v-if="result.verified">
            Solo cambiaron EVs, IVs, movimientos y estadísticas<template v-if="includeNatureItemAbility">, más naturaleza, objeto y habilidad</template>.
            El resto del guardado quedó intacto.
          </template>
          <template v-else>
            Se detectaron {{ result.diffs.length }} cambios inesperados. No se ofrece la descarga; tu partida sigue igual.
          </template>
        </p>

        <button v-if="result.verified" type="button" class="gs-dl" @click="download">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          Descargar «{{ outName }}»
        </button>

        <p v-if="result.verified" class="gs-tiny">Probalo en el juego. Si algo se ve mal, seguí con tu partida actual.</p>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.gs-trigger-row {
  margin-top: var(--sp-4, 16px);
  display: flex;
}
.gs-trigger {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font: inherit;
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 700;
  color: var(--ok-ink, #06301f);
  background: linear-gradient(180deg, var(--ok, #7dffc4), var(--ok-strong, #22c98a));
  border: none;
  border-radius: var(--rad-pill, 999px);
  padding: 10px 18px;
  cursor: pointer;
  transition: filter .14s ease, transform .14s ease;
}
.gs-trigger svg { width: 15px; height: 15px; }
.gs-trigger:hover { filter: brightness(1.08); }
.gs-trigger:active { transform: translateY(1px); }
.gs-trigger:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.gs-modal {
  padding: 0;
  border: none;
  background: transparent;
  color: #eef0ff;
  max-width: 440px;
  width: calc(100vw - 32px);
}
.gs-modal::backdrop {
  background: rgba(8, 7, 22, .66);
  backdrop-filter: blur(3px);
}
.gs-inner {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4, 16px);
  padding: 22px;
  border-radius: var(--rad-lg, 20px);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  border-top-color: var(--bd-soft-top, rgba(255, 255, 255, .28));
  background: linear-gradient(158deg, #423a7d 0%, #1d2544 100%);
  box-shadow: 0 24px 60px rgba(0, 0, 0, .5);
  font-family: var(--font-ui);
}

.gs-head { display: flex; align-items: flex-start; justify-content: space-between; }
.gs-eyebrow {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--ok, #7dffc4);
}
.gs-title { margin: 3px 0 0; font-size: 19px; font-weight: 800; letter-spacing: -.01em; }
.gs-x {
  flex: none;
  width: 30px; height: 30px;
  display: grid; place-items: center;
  color: rgba(230, 233, 255, .6);
  background: rgba(10, 9, 30, .4);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  border-radius: 9px;
  cursor: pointer;
}
.gs-x:hover { color: #fff; }
.gs-x svg { width: 15px; height: 15px; }

.gs-lede { margin: 0; font-size: 13px; line-height: 1.55; color: rgba(222, 226, 255, .78); }
.gs-lede code {
  font-family: var(--font-mono);
  font-size: 11.5px;
  padding: 1px 5px;
  border-radius: 5px;
  background: rgba(10, 9, 30, .45);
  color: #fff;
}

.gs-opts { display: flex; flex-direction: column; gap: 8px; }
.gs-opt {
  display: flex;
  gap: 11px;
  padding: 12px 13px;
  border-radius: var(--rad-md, 14px);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  background: rgba(10, 9, 30, .32);
  cursor: pointer;
}
.gs-opt:hover { border-color: rgba(125, 255, 196, .35); }
.gs-opt input {
  margin-top: 1px;
  width: 16px; height: 16px;
  flex: none;
  accent-color: var(--ok-strong, #22c98a);
}
.gs-opt-body { display: flex; flex-direction: column; gap: 2px; }
.gs-opt-name { font-size: 13px; font-weight: 600; }
.gs-opt-hint { font-size: 11.5px; color: rgba(210, 214, 255, .55); }

.gs-mega {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 12px 13px;
  border-radius: var(--rad-md, 14px);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  background: rgba(10, 9, 30, .32);
}
.gs-mega-head { display: flex; flex-direction: column; gap: 2px; }
.gs-mega-title { font-size: 13px; font-weight: 600; }
.gs-mega-hint { font-size: 11.5px; color: rgba(210, 214, 255, .55); }
.gs-mega-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 200px;
  overflow-y: auto;
}
.gs-mega-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 12.5px;
}
.gs-mega-name { font-weight: 500; }
.gs-mega-row select {
  font: inherit;
  font-family: var(--font-ui);
  font-size: 12px;
  color: #eef0ff;
  background: rgba(10, 9, 30, .55);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .12));
  border-radius: 7px;
  padding: 5px 8px;
  max-width: 55%;
}
.gs-mega-row select:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.gs-run, .gs-dl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-family: var(--font-ui);
  font-size: 13.5px;
  font-weight: 800;
  color: var(--ok-ink, #06301f);
  background: linear-gradient(180deg, var(--ok, #7dffc4), var(--ok-strong, #22c98a));
  border: none;
  border-radius: var(--rad-pill, 999px);
  padding: 12px 18px;
  cursor: pointer;
  transition: filter .14s ease;
}
.gs-run:hover:not(:disabled), .gs-dl:hover { filter: brightness(1.08); }
.gs-run:disabled { opacity: .65; cursor: progress; }
.gs-dl svg { width: 16px; height: 16px; }
.gs-run:focus-visible, .gs-dl:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.gs-spin {
  width: 14px; height: 14px;
  border: 2px solid rgba(6, 48, 31, .35);
  border-top-color: var(--ok-ink, #06301f);
  border-radius: 50%;
  animation: gs-rot .7s linear infinite;
}
@keyframes gs-rot { to { transform: rotate(360deg); } }

.gs-error {
  margin: 0;
  font-size: 12.5px;
  color: var(--danger, #ff8a7a);
}

.gs-result {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
}
.gs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.gs-chip {
  font-family: var(--font-mono);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  padding: 4px 9px;
  border-radius: var(--rad-pill, 999px);
  background: rgba(10, 9, 30, .4);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  color: rgba(224, 227, 255, .8);
}
.gs-chip.is-ok { color: var(--ok, #7dffc4); background: var(--ok-soft, rgba(125, 255, 196, .14)); border-color: rgba(125, 255, 196, .3); }
.gs-chip.is-bad { color: var(--danger, #ff8a7a); background: var(--danger-soft, rgba(255, 138, 122, .14)); border-color: rgba(255, 138, 122, .3); }

.gs-note { margin: 0; font-size: 12px; line-height: 1.5; color: rgba(214, 218, 255, .7); }
.gs-note.is-bad { color: var(--danger, #ff8a7a); }
.gs-tiny { margin: 0; font-size: 11px; color: rgba(210, 214, 255, .45); }

@media (prefers-reduced-motion: reduce) {
  .gs-spin { animation-duration: 1.6s; }
  .gs-trigger:active { transform: none; }
}
</style>
