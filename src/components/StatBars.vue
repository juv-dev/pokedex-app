<script setup lang="ts">
import { computed } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'reka-ui'

/**
 * Seis filas de estadística base del `Añil Dex - HUD.dc.html` (icono emoji + etiqueta + valor
 * mono + barra con glow). Las marcas ▲/▼ y los colores de naturaleza replican `renderVals`.
 */
const props = defineProps<{
  stats: number[]
  raisesIdx?: number | null
  lowersIdx?: number | null
}>()

const META: Array<[string, string]> = [
  ['♥', 'PS'],
  ['✳', 'Ataque'],
  ['🛡', 'Defensa'],
  ['◎', 'At. Esp.'],
  ['◍', 'Def. Esp.'],
  ['≶', 'Velocidad']
]

const rows = computed(() => META.map(([icon, label], i) => {
  const value = props.stats[i] ?? 0
  const up = props.raisesIdx === i
  const down = props.lowersIdx === i
  return {
    icon, label, value,
    pct: Math.round((value / 180) * 100),
    mark: up ? '▲' : down ? '▼' : '',
    markFg: up ? '#ff8f6b' : '#7fb4ff',
    labelFg: up ? '#ffb59c' : down ? '#a9c8ff' : 'rgba(232,235,255,.92)',
    valueFg: up ? '#ff8f6b' : down ? '#7fb4ff' : '#fff',
    bar: up ? 'linear-gradient(90deg,#ffb08a,#ff5f3c)'
      : down ? 'linear-gradient(90deg,#a8c8ff,#4b7fe0)'
        : value >= 120 ? 'linear-gradient(90deg,#ffcf5c,#ff8a3c)' : 'linear-gradient(90deg,#a7ffd8,#3ddc99)',
    glow: up ? 'rgba(255,110,70,.5)'
      : down ? 'rgba(80,140,240,.45)'
        : value >= 120 ? 'rgba(255,160,60,.5)' : 'rgba(60,220,150,.45)'
  }
}))
</script>

<template>
  <div class="hud-stat-rows">
    <div v-for="s in rows" :key="s.label" class="hud-stat-row">
      <span class="hud-stat-ico">{{ s.icon }}</span>
      <span class="hud-stat-label" :style="{ color: s.labelFg }">
        {{ s.label }}<span v-if="s.mark" class="mark" :style="{ color: s.markFg }">{{ s.mark }}</span>
      </span>
      <span class="hud-stat-val" :style="{ color: s.valueFg }">{{ s.value }}</span>
      <ProgressRoot
        class="hud-stat-track" :model-value="s.value" :max="180"
        :aria-label="`${s.label}: ${s.value} de 180`"
      >
        <ProgressIndicator
          class="hud-stat-fill"
          :style="{ width: s.pct + '%', background: s.bar, boxShadow: '0 0 12px ' + s.glow }"
        />
      </ProgressRoot>
    </div>
  </div>
</template>
