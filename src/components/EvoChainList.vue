<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../lib/types'
import { TYPE_ES } from '../lib/constants'

/**
 * "LÍNEA EVOLUTIVA" del `Añil Dex - HUD.dc.html`. Recorre los nodos no-mega de la cadena
 * real de Añil y marca el activo. `cond` = etiqueta de método real; `tag` = BASE / EVO / ACTUAL.
 */
const props = defineProps<{ nodes: DexNode[]; activeIdx: number }>()
const emit = defineEmits<{ (e: 'select', idx: number): void }>()

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
      tag: idx === props.activeIdx ? 'ACTUAL' : node.stageKind === 'base' ? 'BASE' : 'EVO'
    }))
)
</script>

<template>
  <div class="hud-card1">
    <div class="hud-evo-title">LÍNEA EVOLUTIVA</div>
    <div class="hud-evo-sub">Toca cualquier forma para verla en detalle.</div>
    <div class="hud-evo-list">
      <button
        v-for="r in rows" :key="r.idx" type="button"
        class="hud-evo-row" :class="{ 'is-current': r.idx === activeIdx }"
        @click="emit('select', r.idx)"
      >
        <img class="hud-evo-img" :src="r.sprite" :alt="r.name">
        <span class="hud-evo-body">
          <span class="hud-evo-name">{{ r.name }}</span>
          <span class="hud-evo-types">{{ r.types }}</span>
          <span class="hud-evo-cond">{{ r.cond }}</span>
        </span>
        <span class="hud-evo-tag">{{ r.tag }}</span>
      </button>
    </div>
  </div>
</template>
