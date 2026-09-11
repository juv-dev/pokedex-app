<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { pokemonGeneration, localSpriteUrl } from '../../lib/engine'
import { TYPE_ES } from '../../lib/constants'
import type { InstanceRow } from '../../lib/configureRows'
import type { MegaOption } from '../../lib/recommendedSet'
import type { MegaRecommendation } from '../../lib/megaRecommendation'
import type { PokemonDraft } from '../../lib/draftStore'
import type { DraftSaveState } from '../../composables/usePokemonDrafts'

const props = defineProps<{
  row: InstanceRow | null
  draft: PokemonDraft | undefined
  saveState: DraftSaveState | 'none'
  megaForms: MegaOption[]
  recommendation: MegaRecommendation | null
  favorite: boolean
  ready?: boolean
  megaForm?: string
  megaSprite?: string
}>()

const emit = defineEmits<{
  (e: 'select-form', formName: string): void
  (e: 'toggle-favorite', internalName: string): void
  (e: 'open-detail'): void
  (e: 'apply'): void
  (e: 'discard'): void
}>()

const alreadyOptimal = computed(() => !props.draft && !!props.ready)

const editing = ref(false)
watch(() => props.row?.instanceKey, () => { editing.value = false })
const showSummary = computed(() => !!props.draft && !editing.value)
const showEditor = computed(() => !alreadyOptimal.value && (!props.draft || editing.value))

const REGION: Record<string, string> = {
  I: 'Kanto', II: 'Johto', III: 'Hoenn', IV: 'Sinnoh', V: 'Teselia',
  VI: 'Kalos', VII: 'Alola', VIII: 'Galar', IX: 'Paldea'
}

const numLabel = computed(() =>
  props.row && props.row.num != null ? '#' + String(props.row.num).padStart(3, '0') : 'Añil'
)
const artworkUrl = computed(() => {
  const r = props.row
  if (!r) return ''
  if (props.megaSprite) return props.megaSprite
  const local = localSpriteUrl(r.internalName)
  if (local) return local
  return r.num != null && r.num <= 1025
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${r.num}.png`
    : r.sprite
})
const typeText = computed(() => (props.row?.types ?? []).map(t => TYPE_ES[t] ?? t).join(' / '))
function onArtworkError(ev: Event) {
  const img = ev.target as HTMLImageElement
  if (props.row && img.src !== props.row.sprite) img.src = props.row.sprite
}
const region = computed(() => {
  const n = props.row?.num
  if (n == null) return 'Añil'
  return REGION[pokemonGeneration(n) ?? ''] ?? 'Añil'
})
const facts = computed(() => {
  const r = props.row
  if (!r) return []
  return [
    { k: 'Región', v: region.value },
    { k: 'Nivel', v: String(r.level) },
    { k: 'Ubicación', v: r.locationLabel },
    { k: 'Formas', v: String(props.megaForms.length + 1) }
  ]
})

const selectedForm = computed(() => props.draft?.selectedFormId ?? '')

const draftPill = computed(() => {
  switch (props.saveState) {
    case 'saving': return 'Guardando…'
    case 'saved': return 'Guardado localmente'
    case 'error': return 'Error al guardar'
    default: return 'Forma actual · guardado automático'
  }
})
</script>

<template>
  <aside class="cfg-panel" aria-label="Configuración del ejemplar">
    <p v-if="!row" class="cfg-panel-empty">Elegí un Pokémon de la galería para configurarlo.</p>

    <template v-else>
      <p class="cfg-panel-eyebrow">Ejemplar seleccionado</p>

      <div class="cfg-feature">
        <button type="button" class="cfg-detail-link cfg-feature-open" @click="emit('open-detail')" aria-label="Ver ficha completa">
          <span class="cfg-feature-sprite"><img :src="artworkUrl" :alt="row.speciesName" @error="onArtworkError"></span>
          <span class="cfg-feature-num">{{ numLabel }}</span>
          <span class="cfg-feature-name">{{ draft?.selectedFormId || megaForm || row.speciesName }}</span>
          <span v-if="typeText" class="cfg-feature-type">{{ typeText }}</span>
          <span class="cfg-feature-loc">{{ row.locationLabel }}<template v-if="row.slotLabel !== '—'"> · Slot {{ row.slotLabel }}</template></span>
        </button>
        <button
          type="button" class="cfg-panel-fav" :class="{ 'is-on': favorite }"
          :aria-label="favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
          @click="emit('toggle-favorite', row.internalName)"
        >
          <svg viewBox="0 0 24 24" :fill="favorite ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <p v-if="alreadyOptimal" class="cfg-panel-optimal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </svg>
        <span v-if="megaForm">Este ejemplar ya lleva {{ megaForm }} con su mejor configuración. No necesita cambios.</span>
        <span v-else>Este ejemplar ya trae su mejor configuración. No necesita cambios.</span>
      </p>
      <p v-else-if="draft" class="cfg-panel-save" :class="'is-' + saveState">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><path d="M17 21v-8H7v8M7 3v5h8" />
        </svg>
        {{ draftPill }}
      </p>
      <p v-else class="cfg-panel-preview">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
        </svg>
        Vista previa del set recomendado — todavía no aplicado.
      </p>

      <dl class="cfg-panel-facts">
        <div v-for="f in facts" :key="f.k">
          <dt>{{ f.k }}</dt>
          <dd>{{ f.v }}</dd>
        </div>
      </dl>

      <button v-if="alreadyOptimal" type="button" class="cfg-panel-apply" @click="emit('apply')">
        Configurar de todos modos
      </button>

      <template v-else-if="showSummary">
        <p class="cfg-panel-done">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Ya tiene su mejor configuración guardada en el borrador.
        </p>
        <div class="cfg-panel-actions">
          <button type="button" class="cfg-panel-edit" @click="editing = true">Editar cambios</button>
          <button type="button" class="cfg-panel-discard" @click="emit('discard')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
            </svg>
            Descartar cambios
          </button>
        </div>
      </template>

      <template v-else-if="showEditor">
      <p v-if="favorite" class="cfg-panel-favnote">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" />
        </svg>
        Guardado en Favoritos
      </p>

      <template v-if="megaForms.length">
        <p class="cfg-panel-formtitle">Forma (opcional)</p>
        <p class="cfg-panel-autosave">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 8h.01M6 16h12M6 12h.01" />
          </svg>
          Al elegir una forma, el borrador se actualiza automáticamente.
        </p>

        <div class="cfg-form-opts">
          <label class="cfg-form-opt" :class="{ 'is-on': selectedForm === '' }">
            <input type="radio" value="" :checked="selectedForm === ''" @change="emit('select-form', '')">
            <span class="cfg-form-radio" aria-hidden="true"></span>
            <span class="cfg-form-body">
              <span class="cfg-form-name">Forma actual</span>
              <span class="cfg-form-type">{{ row.speciesName }}</span>
              <span class="cfg-form-desc">Sin megapiedra</span>
            </span>
          </label>

          <p class="cfg-form-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            Sin mega: este selector no aparece y se configura directamente el set.
          </p>

          <label
            v-for="f in megaForms" :key="f.formName"
            class="cfg-form-opt cfg-form-opt--mega"
            :class="{ 'is-on': selectedForm === f.formName, 'is-rec': recommendation && recommendation.formName === f.formName }"
          >
            <input type="radio" :value="f.formName" :checked="selectedForm === f.formName" @change="emit('select-form', f.formName)">
            <span class="cfg-form-radio" aria-hidden="true"></span>
            <span class="cfg-form-body">
              <span class="cfg-form-head">
                <span class="cfg-form-name">{{ f.formName }}</span>
                <span v-if="recommendation && recommendation.formName === f.formName" class="cfg-form-rec">Recomendada</span>
              </span>
              <span class="cfg-form-type">{{ f.megaStoneName }}</span>
              <span v-if="f.megaMove" class="cfg-form-desc">{{ f.megaMove }}</span>
            </span>
          </label>
        </div>

        <p v-if="recommendation && recommendation.reasons.length" class="cfg-form-why">
          <span class="cfg-form-why-k">¿Por qué {{ recommendation.label }}?</span>
          {{ recommendation.reasons.join(' ') }} La recomendación es contextual — no significa que sea
          la mejor mega en general, ni se aplica sola.
        </p>
      </template>
      <p v-else class="cfg-panel-note">Sin formas alternativas — se usa la forma actual.</p>

      <div class="cfg-panel-actions">
        <button v-if="!draft" type="button" class="cfg-panel-apply" @click="emit('apply')">Aplicar set recomendado</button>
        <button v-else type="button" class="cfg-panel-edit" @click="editing = false">Listo</button>
        <button v-if="draft" type="button" class="cfg-panel-discard" @click="emit('discard')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
          </svg>
          Descartar
        </button>
      </div>
      </template>
    </template>
  </aside>
</template>

<style scoped>
.cfg-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border-radius: 17px;
  background: #241C43;
  outline: 1px solid #3B375A;
  outline-offset: -0.5px;
  font-size: 11px;
}
.cfg-panel-empty { margin: 0; color: var(--pk-muted); }

.cfg-panel-eyebrow {
  margin: 0;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--pk-muted);
}
.cfg-feature { position: relative; }
.cfg-detail-link.cfg-feature-open {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 18px 12px;
  border-radius: 14px;
  background: radial-gradient(ellipse 50% 50% at 50% 50%, #392257 0%, #15132E 100%);
  border: none;
  cursor: pointer;
  font: inherit;
  color: inherit;
}
.cfg-feature-sprite { width: 130px; height: 130px; display: grid; place-items: center; }
.cfg-feature-sprite img { width: 100%; height: 100%; object-fit: contain; }
.cfg-feature-num { font-size: 10px; color: #86819B; }
.cfg-feature-name { font-size: 19px; font-weight: 800; color: var(--pk-text); }
.cfg-feature-type {
  padding: 4px 10px;
  border-radius: 9px;
  font-size: 9px;
  font-weight: 700;
  color: #FF8DC0;
  background: #482342;
}
.cfg-feature-loc { margin-top: 2px; font-size: 8.5px; color: var(--pk-muted-2); }
.cfg-panel-fav {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: var(--pk-pink);
  background: #482342;
  outline: 1px solid #70405E;
  outline-offset: -0.5px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
}
.cfg-panel-fav svg { width: 16px; height: 16px; }
.cfg-panel-fav:not(.is-on) svg { opacity: .55; }

.cfg-panel-save {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 10px;
  border-radius: 9px;
  font-size: 9px;
  color: var(--pk-mint);
  background: #173A35;
  outline: 1px solid #3E7569;
  outline-offset: -0.5px;
}
.cfg-panel-save svg { width: 15px; height: 15px; flex: 0 0 auto; }
.cfg-panel-save.is-saving { color: var(--warn, #f4b447); outline-color: rgba(244, 180, 71, .4); background: rgba(244, 180, 71, .1); }
.cfg-panel-save.is-error { color: var(--pk-danger); outline-color: rgba(255, 139, 156, .4); background: rgba(255, 139, 156, .1); }

.cfg-panel-optimal {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 10px;
  border-radius: 9px;
  font-size: 9.5px;
  line-height: 1.4;
  color: var(--pk-mint);
  background: var(--ok-soft, rgba(101, 243, 181, .12));
  outline: 1px solid rgba(101, 243, 181, .3);
  outline-offset: -0.5px;
}
.cfg-panel-optimal svg { width: 15px; height: 15px; flex: 0 0 auto; margin-top: 1px; }
.cfg-panel-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 10px;
  border-radius: 9px;
  font-size: 9.5px;
  color: var(--pk-muted);
  background: #17152F;
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
}
.cfg-panel-preview svg { width: 14px; height: 14px; flex: 0 0 auto; }
.cfg-panel-done {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 10px;
  border-radius: 9px;
  font-size: 9.5px;
  line-height: 1.4;
  color: var(--pk-mint);
  background: var(--ok-soft, rgba(101, 243, 181, .12));
  outline: 1px solid rgba(101, 243, 181, .3);
  outline-offset: -0.5px;
}
.cfg-panel-done svg { width: 14px; height: 14px; flex: 0 0 auto; margin-top: 1px; }
.cfg-panel-done b { font-weight: 700; }
.cfg-panel-actions { display: flex; flex-wrap: wrap; gap: 8px; }
.cfg-panel-apply,
.cfg-panel-edit {
  font: inherit;
  font-size: 10px;
  font-weight: 700;
  border: none;
  border-radius: 9px;
  padding: 9px 14px;
  cursor: pointer;
}
.cfg-panel-apply {
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
}
.cfg-panel-edit {
  color: var(--pk-text);
  background: #211C3D;
  outline: 1px solid #3A3656;
  outline-offset: -0.5px;
}
.cfg-panel-edit:hover { outline-color: #55B999; color: var(--pk-mint); }
.cfg-panel-discard {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: inherit;
  font-size: 9.5px;
  font-weight: 600;
  color: var(--pk-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 9px 6px;
}
.cfg-panel-discard svg { width: 12px; height: 12px; }
.cfg-panel-discard:hover { color: var(--pk-danger); }

.cfg-panel-facts { margin: 0; display: flex; gap: 5px; }
.cfg-panel-facts > div {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 7px;
  border-radius: 7px;
  background: #17152F;
}
.cfg-panel-facts dt { font-size: 6px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--pk-muted); }
.cfg-panel-facts dd { margin: 0; font-size: 9px; font-weight: 700; color: var(--pk-text); }

.cfg-panel-favnote {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 6px 9px;
  border-radius: 8px;
  font-size: 8px;
  color: #FFB0CF;
  background: #281A31;
}
.cfg-panel-favnote svg { width: 12px; height: 12px; color: #FF9FC5; }

.cfg-panel-formtitle { margin: 2px 0 0; font-size: 12px; font-weight: 400; color: var(--pk-text); }
.cfg-panel-autosave {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin: 0;
  padding: 7px 9px;
  border-radius: 8px;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.35;
  color: #B8CFF0;
  background: #15132D;
}
.cfg-panel-autosave svg { width: 13px; height: 13px; flex: 0 0 auto; color: var(--pk-blue); }
.cfg-panel-note { margin: 0; font-size: 9px; color: var(--pk-muted); }

.cfg-form-opts { display: flex; flex-direction: column; gap: 8px; }
.cfg-form-opt {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  background: #211C3D;
  outline: 1px solid #3A3656;
  outline-offset: -0.5px;
}
.cfg-form-opt input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}
.cfg-form-opt.is-on { background: #2A3345; outline-color: #55B999; }
.cfg-form-opt.is-rec:not(.is-on) { outline-color: #7D6540; }
.cfg-form-radio {
  flex: 0 0 auto;
  margin-top: 1px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  outline: 2px solid #77738E;
  outline-offset: -1px;
}
.cfg-form-opt.is-on .cfg-form-radio { background: var(--pk-mint); outline-color: var(--pk-mint); }
.cfg-form-body { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.cfg-form-head { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.cfg-form-name { font-size: 11px; font-weight: 700; color: var(--pk-text); }
.cfg-form-type { font-size: 9px; color: var(--pk-muted); }
.cfg-form-opt.is-rec .cfg-form-type { color: #FFD98B; }
.cfg-form-desc { font-size: 9px; color: var(--pk-muted-2); }
.cfg-form-rec {
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: #FFD06F;
  background: #45391F;
  border-radius: 7px;
  padding: 4px 7px;
}
.cfg-form-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 9px;
  border-radius: 8px;
  font-size: 8px;
  line-height: 1.25;
  color: #B8B4C9;
  background: #17152F;
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
}
.cfg-form-note svg { width: 14px; height: 14px; flex: 0 0 auto; color: var(--pk-blue); }
.cfg-form-why {
  margin: 0;
  padding: 11px;
  border-radius: 9px;
  font-size: 9px;
  line-height: 1.22;
  color: #D8D2E5;
  background: #2D263D;
  outline: 1px solid #705A38;
  outline-offset: -0.5px;
}
.cfg-form-why-k {
  display: block;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: #FFD06F;
  margin-bottom: 4px;
}
</style>
