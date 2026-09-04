<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../../lib/types'
import { TYPE_ES } from '../../lib/constants'
import { getAnilItemNumberByName } from '../../lib/anilData'

/** "Megaevoluciones y formas" de la ficha unificada (ref. C3U3T). Se oculta si no hay megas. */
const props = defineProps<{ nodes: DexNode[]; activeIdx: number }>()
const emit = defineEmits<{ (e: 'select', idx: number): void }>()

function statArr(s: DexNode['stats']): number[] {
  return [s.hp, s.attack, s.defense, s['special-attack'], s['special-defense'], s.speed]
}

const megas = computed(() => {
  const list = props.nodes
    .map((node, idx) => ({ node, idx }))
    .filter(({ node }) => node.stageKind === 'mega')
    .map(({ node, idx }) => {
      const stats = statArr(node.stats)
      let stone = node.megaStone || node.evoLabel || ''
      if (node.megaStone) {
        const num = getAnilItemNumberByName(node.megaStone)
        stone = num != null ? `${node.megaStone} · n.º ${num}` : node.megaStone
      }
      return {
        idx,
        sprite: node.sprite,
        name: node.displayName,
        types: node.types.map(t => TYPE_ES[t] ?? t).join(' / '),
        stone,
        total: stats.reduce((a, b) => a + b, 0),
        peak: Math.max(...stats)
      }
    })
  // Exactamente una forma marcada: mayor total de base, y a igualdad, mayor pico de estadística.
  let bestIdx = -1
  list.forEach((m, i) => {
    if (bestIdx < 0) { bestIdx = i; return }
    const b = list[bestIdx]
    if (m.total > b.total || (m.total === b.total && m.peak > b.peak)) bestIdx = i
  })
  return list.map((m, i) => ({ ...m, strongest: list.length > 1 && i === bestIdx }))
})
</script>

<template>
  <section v-if="megas.length" class="sheet-mega">
    <header class="sheet-mega-head">
      <h2>Megaevolución</h2>
      <span>{{ megas.length }} {{ megas.length === 1 ? 'forma' : 'formas' }}</span>
    </header>
    <div class="sheet-mega-grid">
      <button
        v-for="m in megas" :key="m.idx" type="button"
        class="sheet-mega-card" :class="{ 'is-current': m.idx === activeIdx, 'is-strongest': m.strongest }"
        :aria-current="m.idx === activeIdx ? 'true' : undefined"
        @click="emit('select', m.idx)"
      >
        <span v-if="m.strongest" class="sheet-mega-star" title="Forma más fuerte" aria-label="Forma más fuerte">★</span>
        <img class="sheet-mega-img" :src="m.sprite" :alt="m.name">
        <span class="sheet-mega-name">{{ m.name }}</span>
        <span class="sheet-mega-types">{{ m.types }}</span>
        <span v-if="m.stone" class="sheet-mega-stone">{{ m.stone }}</span>
      </button>
    </div>
  </section>
</template>
