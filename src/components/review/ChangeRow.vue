<script setup lang="ts">
import { computed } from 'vue'
import type { PokemonDraft } from '../../lib/draftStore'

const props = defineProps<{
  draft: PokemonDraft
  speciesName: string
  locationLabel: string
  slotLabel: string
  nickname: string | null
  sprite?: string
  num?: number | null
}>()

const emit = defineEmits<{ (e: 'edit', instanceKey: string): void }>()

const numLabel = computed(() =>
  props.num != null ? '#' + String(props.num).padStart(3, '0') : ''
)

const badge = computed(() => {
  if (props.draft.selectedFormId !== '') return 'Mega elegida'
  const tier = props.draft.recommendedSet.tier
  if (tier === 'optimo') return 'Set optimizado'
  if (tier === 'viable') return 'Set viable'
  return 'Set ' + tier
})
</script>

<template>
  <div class="chg">
    <div class="chg-id">
      <span v-if="sprite" class="chg-thumb"><img :src="sprite" :alt="speciesName"></span>
      <span class="chg-id-body">
        <span class="chg-name">
          {{ speciesName }}<span v-if="numLabel" class="chg-num"> · {{ numLabel }}</span>
        </span>
        <span v-if="nickname && nickname !== speciesName" class="chg-nick">"{{ nickname }}"</span>
        <span class="chg-loc">{{ locationLabel }}<template v-if="slotLabel !== '—'"> · {{ slotLabel }}</template></span>
      </span>
    </div>

    <div class="chg-forms">
      <template v-if="draft.selectedFormId">
        <span class="chg-form-from">Forma actual</span>
        <span class="chg-arrow" aria-hidden="true">→</span>
        <span class="chg-form-to">{{ draft.selectedFormId }}</span>
      </template>
      <span v-else class="chg-form-plain">Aplica el set recomendado · EVs, IVs, movimientos, naturaleza, objeto y habilidad</span>
    </div>

    <span class="chg-tier" :class="'is-' + draft.recommendedSet.tier">{{ badge }}</span>

    <button type="button" class="chg-edit" :aria-label="'Editar ' + speciesName" @click="emit('edit', draft.instanceKey)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.chg {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1.3fr) auto auto;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--rad-md, 14px);
  border: 1px solid rgba(255, 255, 255, .07);
  background: rgba(12, 11, 34, .38);
  font-size: 13px;
}
.chg-id { display: flex; align-items: center; gap: 12px; min-width: 0; }
.chg-thumb {
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(10, 9, 30, .4);
}
.chg-thumb img { width: 34px; height: 34px; image-rendering: pixelated; }
.chg-id-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.chg-name { font-family: var(--font-ui); font-weight: 700; }
.chg-num { font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: rgba(210, 216, 255, .5); }
.chg-nick { font-size: 11px; color: rgba(210, 216, 255, .55); }
.chg-loc { font-family: var(--font-mono); font-size: 10px; color: rgba(210, 216, 255, .45); }
.chg-forms { display: flex; align-items: center; gap: 8px; font-size: 12px; min-width: 0; }
.chg-form-plain { color: rgba(210, 216, 255, .55); font-size: 11px; }
.chg-form-from { color: rgba(210, 216, 255, .5); }
.chg-arrow { color: var(--ok, #7dffc4); }
.chg-form-to { color: #fff; font-weight: 700; }
.chg-tier {
  font-size: 10px; font-weight: 700; letter-spacing: .04em;
  padding: 4px 10px; border-radius: var(--rad-pill, 999px);
  white-space: nowrap;
}
.chg-tier.is-optimo { color: var(--ok, #7dffc4); background: var(--ok-soft, rgba(125, 255, 196, .14)); }
.chg-tier.is-viable { color: var(--ok, #7dffc4); background: rgba(125, 255, 196, .1); }
.chg-tier.is-mega { color: var(--warn, #f4b447); background: rgba(244, 180, 71, .14); }
.chg-edit {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: rgba(215, 220, 255, .6);
  background: rgba(12, 11, 34, .5);
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 9px;
  cursor: pointer;
}
.chg-edit:hover { color: #fff; border-color: rgba(255, 255, 255, .18); }
.chg-edit svg { width: 14px; height: 14px; }
@media (max-width: 720px) {
  .chg { grid-template-columns: 1fr auto; }
}
</style>
