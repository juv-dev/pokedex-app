<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../../lib/types'
import { capitalizeWords, pokemonRegion } from '../../lib/engine'

/** "Información general" de la ficha unificada (ref. C3U3T). Solo datos del modelo actual. */
const props = defineProps<{ node: DexNode }>()

const eggGroups = computed(() =>
  props.node.eggGroups.map(g => capitalizeWords(g.name)).join(' · ') || '—'
)
const abilities = computed(() => {
  const seen = new Set<string>()
  return props.node.abilities
    .map(a => ({
      name: capitalizeWords(a.ability.name.toLowerCase()),
      hidden: a.is_hidden
    }))
    .filter(a => (seen.has(a.name) ? false : (seen.add(a.name), true)))
})
const region = computed(() => pokemonRegion(props.node.dexNum))

const rows = computed(() => [
  { k: 'Especie', v: props.node.genus || '—' },
  { k: 'Altura', v: `${props.node.heightM} m` },
  { k: 'Peso', v: `${props.node.weightKg} kg` },
  { k: 'Grupo huevo', v: eggGroups.value },
  { k: 'Región', v: region.value }
])
</script>

<template>
  <section class="sheet-info">
    <h2 class="sheet-info-title">Información</h2>
    <dl class="sheet-info-list">
      <div v-for="r in rows" :key="r.k" class="sheet-info-row">
        <dt>{{ r.k }}</dt>
        <dd>{{ r.v }}</dd>
      </div>
      <div class="sheet-info-row sheet-info-row--abilities">
        <dt>Habilidades</dt>
        <dd>
          <span v-for="a in abilities" :key="a.name" class="sheet-info-ability">
            {{ a.name }}<span v-if="a.hidden" class="sheet-info-hidden"> (oculta)</span>
          </span>
        </dd>
      </div>
    </dl>
  </section>
</template>
