<script setup lang="ts">
import { computed } from 'vue'
import type { DexNode } from '../../lib/types'
import { TYPE_ES } from '../../lib/constants'
import { typeChipBg, typeChipText } from '../../hudTheme'
import TypeIcon from '../TypeIcon.vue'

/** Resumen superior de la ficha unificada (ref. pen.dev C3U3T / pB0nc): retrato + identidad. */
const props = defineProps<{ node: DexNode }>()

const dexNum = computed(() => (props.node.dexNum == null ? '—' : '#' + String(props.node.dexNum).padStart(3, '0')))

function chipStyle(type: string) {
  return { background: typeChipBg(type), color: typeChipText(type), borderColor: typeChipText(type) }
}
</script>

<template>
  <section class="sheet-summary">
    <div class="sheet-summary-stage">
      <span class="sheet-summary-halo" aria-hidden="true"></span>
      <img class="sheet-summary-sprite" :src="node.sprite" :alt="node.displayName" draggable="false">
    </div>

    <div class="sheet-summary-body">
      <p class="sheet-summary-kicker">{{ dexNum }}<span v-if="node.genus"> · {{ node.genus.toUpperCase() }}</span></p>
      <h1 class="sheet-summary-name">{{ node.displayName }}</h1>
      <div class="sheet-summary-types">
        <span v-for="t in node.types" :key="t" class="hud-type-chip" :style="chipStyle(t)">
          <span class="hud-type-chip-ico"><TypeIcon :type="t" decorative /></span>
          {{ TYPE_ES[t] ?? t }}
        </span>
      </div>
    </div>
  </section>
</template>
