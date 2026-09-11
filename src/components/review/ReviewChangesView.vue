<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TeamSummary } from '../../lib/team'
import type { usePokemonDrafts } from '../../composables/usePokemonDrafts'
import { instanceKeyOf } from '../../lib/instanceKey'
import { getAnilSpecies } from '../../lib/anilData'
import { applyDraftChanges, downloadBytes, type DraftApplyResult } from '../../lib/saveEditor'
import ChangeRow from './ChangeRow.vue'

const props = defineProps<{
  summaries: TeamSummary[]
  drafts: ReturnType<typeof usePokemonDrafts>
  bytes: Uint8Array | null
}>()

const emit = defineEmits<{
  (e: 'edit', instanceKey: string): void
  (e: 'back'): void
  (e: 'done'): void
}>()

const OUT_NAME = 'Pokemon_Anil_optimizado.rxdata'

const busy = ref(false)
const error = ref('')
const result = ref<DraftApplyResult | null>(null)

const summaryByKey = computed(() => {
  const map = new Map<string, TeamSummary>()
  for (const s of props.summaries) map.set(instanceKeyOf(s), s)
  return map
})

const rows = computed(() =>
  [...props.drafts.drafts.values()]
    .map(draft => {
      const s = summaryByKey.value.get(draft.instanceKey)
      if (!s) return null
      return {
        draft,
        sprite: s.sprite,
        num: s.dexNum,
        speciesName: getAnilSpecies(s.internalName)?.name ?? s.displayName,
        nickname: s.nickname,
        locationLabel: s.inParty ? 'Equipo' : (s.boxName || `Caja ${(s.boxIndex ?? 0) + 1}`),
        slotLabel: s.inParty || s.boxSlot == null ? '—' : String(s.boxSlot + 1)
      }
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .sort((a, b) => a.speciesName.localeCompare(b.speciesName, 'es'))
)

const totals = computed(() => {
  const configured = rows.value.length
  const megas = rows.value.filter(r => r.draft.selectedFormId !== '').length
  return {
    analyzed: props.summaries.length,
    configured,
    megas,
    untouched: Math.max(0, props.summaries.length - configured)
  }
})

const incomplete = computed(() => rows.value.filter(r => r.draft.recommendedSet.moves.length < 4))

function confirm(): void {
  if (!props.bytes || !rows.value.length || busy.value) return
  busy.value = true
  error.value = ''
  result.value = null
  try {
    const out = applyDraftChanges(props.bytes, [...props.drafts.drafts.values()])
    result.value = out
    if (out.verified) downloadBytes(out.output, OUT_NAME)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'No se pudo serializar el archivo.'
  } finally {
    busy.value = false
  }
}

function downloadAgain(): void {
  if (result.value?.verified) downloadBytes(result.value.output, OUT_NAME)
}
</script>

<template>
  <div class="rev-screen">
    <nav class="rev-crumbs" aria-label="Ruta">
      <span>Mi partida</span>
      <span class="rev-crumb-sep">/</span>
      <span>Configurar Pokémon</span>
      <span class="rev-crumb-sep">/</span>
      <span class="rev-crumb-cur">Revisar cambios</span>
    </nav>

    <header class="rev-head">
      <h2 class="rev-title">Revisa los cambios antes de generar</h2>
      <p class="rev-sub">
        Nada se escribe en la partida original. Confirma las formas y sets guardados en el borrador local.
      </p>
    </header>

    <div class="rev-tiles">
      <div class="rev-tile">
        <span class="rev-tile-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h4M13 6h4M7 18h4M13 18h4M6.5 8v3M17.5 8v3M6.5 13v3M17.5 13v3" /></svg>
        </span>
        <span class="rev-n">{{ totals.analyzed }}</span>
        <span class="rev-k">Pokémon analizados</span>
      </div>
      <div class="rev-tile is-ok">
        <span class="rev-tile-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><path d="M17 21v-8H7v8M7 3v5h8" /></svg>
        </span>
        <span class="rev-n">{{ totals.configured }}</span>
        <span class="rev-k">Cambios guardados</span>
      </div>
      <div class="rev-tile is-mega">
        <span class="rev-tile-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
        </span>
        <span class="rev-n">{{ totals.megas }}</span>
        <span class="rev-k">Megas elegidas</span>
      </div>
      <div class="rev-tile">
        <span class="rev-tile-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V7z" /></svg>
        </span>
        <span class="rev-n">{{ totals.untouched }}</span>
        <span class="rev-k">Se exportan igual</span>
      </div>
    </div>

    <p v-if="incomplete.length" class="rev-warn">
      ⚠ {{ incomplete.length }} ejemplar(es) con un set incompleto (menos de 4 movimientos). Se exportan
      igual, pero conviene revisarlos.
    </p>

    <div class="rev-layout">
      <section class="rev-list">
        <header class="rev-list-head">
          <h3 class="rev-list-title">Cambios guardados</h3>
          <span class="rev-list-filter">Todos los cambios</span>
        </header>
        <p v-if="!rows.length" class="rev-empty">
          Todavía no configuraste ningún Pokémon. Vuelve a "Configurar Pokémon" y elige al menos uno.
        </p>
        <ChangeRow
          v-for="r in rows" :key="r.draft.instanceKey"
          :draft="r.draft" :species-name="r.speciesName" :nickname="r.nickname" :sprite="r.sprite" :num="r.num"
          :location-label="r.locationLabel" :slot-label="r.slotLabel"
          @edit="emit('edit', $event)"
        />
      </section>

      <aside class="rev-confirm-panel">
        <h3 class="rev-confirm-title">Confirmar exportación</h3>
        <p class="rev-confirm-sub">Se generará una copia nueva con todos los cambios guardados.</p>

        <div class="rev-file">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M9 13l2 2 4-4" />
          </svg>
          <span class="rev-file-body">
            <b>{{ OUT_NAME }}</b>
            <span>Compatible con Pokémon Añil</span>
          </span>
        </div>

        <template v-if="!result">
          <ul class="rev-check">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>{{ totals.configured }} configuraciones incluidas</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>Archivo original protegido</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>Procesamiento 100 % local</li>
            <li class="is-warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>{{ totals.untouched }} Pokémon permanecen iguales</li>
          </ul>
        </template>

        <p v-else-if="result.verified" class="rev-result is-ok">
          {{ result.applied }} sets aplicados y verificados. Se comparó la copia con el original: solo
          cambiaron EVs, IVs, movimientos, naturaleza, objeto, habilidad y estadísticas.
        </p>
        <p v-else class="rev-result is-bad">
          La verificación encontró {{ result.diffs.length }} diferencia(s) fuera de lo esperado.
          No se ofrece la descarga; tu partida original no se modificó.
        </p>

        <p v-if="error" class="rev-error" role="alert">Error de serialización: {{ error }}</p>

        <p class="rev-backup">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" />
          </svg>
          Guarda un respaldo y reemplaza tu partida en el juego con la copia descargada. Si vuelves a
          importar el archivo original, seguirá pidiendo estos cambios.
        </p>

        <button
          v-if="!result"
          type="button" class="rev-confirm" :disabled="!rows.length || busy"
          @click="confirm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 15V3M7 10l5 5 5-5M5 21h14" />
          </svg>
          {{ busy ? 'Generando…' : 'Confirmar y generar .rxdata' }}
        </button>
        <template v-else-if="result.verified">
          <button type="button" class="rev-confirm" @click="emit('done')">Volver a Mi partida</button>
          <button type="button" class="rev-back" @click="downloadAgain">Descargar «{{ OUT_NAME }}» de nuevo</button>
        </template>

        <button v-if="!result || !result.verified" type="button" class="rev-back" @click="emit('back')">Volver a configurar</button>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.rev-screen {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4, 16px);
  animation: anilRise .22s ease;
}
.rev-screen :focus-visible { outline: none; box-shadow: var(--focus-ring); }

.rev-crumbs {
  display: flex;
  align-items: center;
  gap: var(--sp-2, 8px);
  font-size: 13px;
  color: rgba(205, 212, 255, .5);
}
.rev-crumb-sep { color: rgba(205, 212, 255, .3); }
.rev-crumb-cur { color: #fff; font-weight: 600; }

.rev-head { display: flex; flex-direction: column; gap: 6px; }
.rev-title { margin: 0; font-size: 30px; font-weight: 800; letter-spacing: -.01em; }
.rev-sub { margin: 0; font-size: 13.5px; color: rgba(210, 216, 255, .58); }

.rev-tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-3, 12px);
}
@media (max-width: 860px) { .rev-tiles { grid-template-columns: repeat(2, 1fr); } }
.rev-tile {
  position: relative;
  padding: 18px 18px 16px;
  border-radius: var(--rad-lg, 20px);
  border: 1px solid rgba(255, 255, 255, .07);
  background: rgba(20, 18, 44, .5);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.rev-tile-ico {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin-bottom: 8px;
  color: rgba(210, 216, 255, .55);
  background: rgba(255, 255, 255, .05);
}
.rev-tile-ico svg { width: 16px; height: 16px; }
.rev-tile.is-ok .rev-tile-ico { color: var(--ok, #7dffc4); background: rgba(125, 255, 196, .12); }
.rev-tile.is-mega .rev-tile-ico { color: var(--warn, #f4b447); background: rgba(244, 180, 71, .12); }
.rev-n { font-family: var(--font-ui); font-size: 26px; font-weight: 800; font-variant-numeric: tabular-nums; }
.rev-tile.is-ok .rev-n { color: var(--ok, #7dffc4); }
.rev-tile.is-mega .rev-n { color: var(--warn, #f4b447); }
.rev-k { font-size: 12px; color: rgba(210, 216, 255, .55); }

.rev-warn {
  margin: 0;
  font-size: 12.5px;
  color: var(--warn, #f4b447);
  background: rgba(244, 180, 71, .1);
  border: 1px solid rgba(244, 180, 71, .25);
  border-radius: var(--rad-sm, 10px);
  padding: 10px 12px;
}

.rev-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: var(--sp-4, 16px);
  align-items: start;
}
@media (max-width: 1080px) { .rev-layout { grid-template-columns: 1fr; } }

.rev-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: var(--rad-lg, 20px);
  border: 1px solid rgba(255, 255, 255, .07);
  background: rgba(20, 18, 44, .45);
}
.rev-list-head { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3, 12px); }
.rev-list-title {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(210, 216, 255, .55);
}
.rev-list-filter {
  font-size: 11.5px;
  color: rgba(210, 216, 255, .55);
  padding: 6px 12px;
  border-radius: var(--rad-pill, 999px);
  background: rgba(12, 11, 34, .5);
  border: 1px solid rgba(255, 255, 255, .08);
}
.rev-empty { margin: 0; padding: 28px; text-align: center; color: rgba(210, 216, 255, .5); }

.rev-confirm-panel {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3, 12px);
  padding: 22px;
  border-radius: var(--rad-lg, 20px);
  border: 1px solid rgba(165, 107, 255, .28);
  border-top-color: rgba(165, 107, 255, .45);
  background: linear-gradient(175deg, rgba(52, 38, 100, .5), rgba(24, 19, 48, .72));
  position: sticky;
  top: 20px;
}
@media (max-width: 1080px) { .rev-confirm-panel { position: static; } }
.rev-confirm-title { margin: 0; font-size: 20px; font-weight: 800; }
.rev-confirm-sub { margin: -4px 0 4px; font-size: 12.5px; color: rgba(210, 216, 255, .6); }
.rev-file {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  border-radius: var(--rad-md, 14px);
  background: rgba(10, 9, 30, .4);
  border: 1px solid rgba(255, 255, 255, .07);
}
.rev-file svg { width: 20px; height: 20px; color: var(--ok, #7dffc4); flex: 0 0 auto; }
.rev-file-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.rev-file-body b { font-family: var(--font-mono); font-size: 12px; font-weight: 700; }
.rev-file-body span { font-size: 10.5px; color: rgba(210, 216, 255, .5); }
.rev-check { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
.rev-check li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12.5px;
  color: rgba(215, 220, 255, .82);
}
.rev-check svg { width: 15px; height: 15px; flex: 0 0 auto; color: var(--ok, #7dffc4); }
.rev-check li.is-warn { color: rgba(244, 180, 71, .82); }
.rev-check li.is-warn svg { color: var(--warn, #f4b447); }
.rev-result { margin: 0; font-size: 12px; line-height: 1.55; }
.rev-result.is-ok { color: var(--ok, #7dffc4); }
.rev-result.is-bad { color: var(--danger, #ff8a7a); }
.rev-error { margin: 0; font-size: 12px; color: var(--danger, #ff8a7a); }
.rev-backup {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 0;
  padding: 11px 13px;
  border-radius: var(--rad-sm, 10px);
  font-size: 11.5px;
  line-height: 1.5;
  color: rgba(244, 180, 71, .85);
  background: rgba(244, 180, 71, .09);
  border: 1px solid rgba(244, 180, 71, .22);
}
.rev-backup svg { width: 14px; height: 14px; flex: 0 0 auto; margin-top: 1px; }
.rev-confirm {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-size: 13.5px;
  font-weight: 800;
  color: var(--ok-ink, #06301f);
  background: linear-gradient(180deg, var(--ok, #7dffc4), var(--ok-strong, #22c98a));
  border: none;
  border-radius: var(--rad-pill, 999px);
  padding: 14px 20px;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(45, 220, 150, .3);
}
.rev-confirm svg { width: 15px; height: 15px; }
.rev-confirm:disabled { opacity: .45; cursor: default; box-shadow: none; }
.rev-back {
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(215, 220, 255, .7);
  background: rgba(12, 11, 34, .4);
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: var(--rad-pill, 999px);
  padding: 11px 18px;
  cursor: pointer;
}
.rev-back:hover { filter: brightness(1.2); }
</style>
