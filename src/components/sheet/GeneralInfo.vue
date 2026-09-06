<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../../lib/types'
import { pokemonRegion } from '../../lib/engine'

/** "Información general" de la ficha unificada (ref. C3U3T). Solo datos del modelo actual. */
const props = defineProps<{ node: DexNode }>()

const region = computed(() => pokemonRegion(props.node.dexNum))

const rows = computed(() => [
  { k: 'Especie', v: props.node.genus || '—' },
  { k: 'Altura', v: `${props.node.heightM} m` },
  { k: 'Peso', v: `${props.node.weightKg} kg` },
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
    </dl>
  </section>
</template>
