<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../../lib/types'
import { TYPE_ES } from '../../lib/constants'

const props = defineProps<{ nodes: DexNode[]; activeIdx: number }>()
const emit = defineEmits<{ (e: 'select', idx: number): void }>()

const activeNode = computed<DexNode | null>(() => props.nodes[props.activeIdx] ?? null)

const currentLineIdx = computed(() => {
  const n = activeNode.value
  if (!n || n.stageKind !== 'mega') return props.activeIdx
  return props.nodes.findIndex(x => x.internalName === n.parentInternalName)
})

const rows = computed(() =>
  props.nodes
    .map((node, idx) => ({ node, idx }))
    .filter(({ node }) => node.stageKind !== 'mega')
    .map(({ node, idx }) => ({
      idx,
      sprite: node.sprite,
      name: node.displayName,
      types: node.types.map(t => TYPE_ES[t] ?? t).join(' / '),
      cond: node.stageKind === 'base' ? 'Forma base' : node.evoLabel,
      current: idx === currentLineIdx.value
    }))
)
</script>

<template>
  <section v-if="rows.length > 1" class="sheet-evo">
    <header class="sheet-evo-head">
      <h2>Línea evolutiva</h2>
      <span>{{ rows.length }} {{ rows.length === 1 ? 'forma' : 'formas' }}</span>
    </header>
    <div class="sheet-evo-list">
      <button
        v-for="r in rows" :key="r.idx" type="button"
        class="sheet-evo-row" :class="{ 'is-current': r.current }"
        :aria-current="r.current ? 'true' : undefined"
        @click="emit('select', r.idx)"
      >
        <img class="sheet-evo-img" :src="r.sprite" :alt="r.name">
        <span class="sheet-evo-body">
          <span class="sheet-evo-name">{{ r.name }}</span>
          <span class="sheet-evo-types">{{ r.types }}</span>
          <span class="sheet-evo-cond">{{ r.cond }}</span>
        </span>
      </button>
    </div>
  </section>
</template>
