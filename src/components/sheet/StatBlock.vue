<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent, ProgressRoot, ProgressIndicator } from 'reka-ui'
import StatBars from '../StatBars.vue'

/**
 * Bloque de estadísticas de la ficha unificada: selector Base / EVs / IVs y barras.
 * `evs` son los EV a mostrar (recomendados en Pokédex, reales de la partida en "Mi partida").
 */
const props = withDefaults(defineProps<{
  baseStats: number[]
  evs: number[]
  ivs: number[]
  raisesIdx?: number | null
  lowersIdx?: number | null
  showIvs?: boolean
}>(), { raisesIdx: null, lowersIdx: null, showIvs: true })

const STAT_META: Array<[string, string]> = [
  ['♥', 'PS'], ['✳', 'Ataque'], ['🛡', 'Defensa'], ['◎', 'At. Esp.'], ['◍', 'Def. Esp.'], ['≶', 'Velocidad']
]

const mode = ref<'base' | 'evs' | 'ivs'>('base')
watch(() => props.showIvs, v => { if (!v && mode.value === 'ivs') mode.value = 'base' })

function bars(values: number[], max: number) {
  return STAT_META.map(([icon, label], i) => {
    const value = values[i] ?? 0
    return { icon, label, value, pct: Math.max(0, Math.min(100, Math.round((value / max) * 100))) }
  })
}
const evBars = computed(() => bars(props.evs, 252))
const ivBars = computed(() => bars(props.ivs, 31))
</script>

<template>
  <TabsRoot v-model="mode" class="sheet-stats" as="section">
    <header class="sheet-stats-head">
      <h2>Estadísticas</h2>
      <TabsList class="sheet-seg" aria-label="Tipo de estadística">
        <TabsTrigger class="sheet-seg-item" value="base">Base</TabsTrigger>
        <TabsTrigger class="sheet-seg-item" value="evs">EVs</TabsTrigger>
        <TabsTrigger v-if="showIvs" class="sheet-seg-item" value="ivs">IVs</TabsTrigger>
      </TabsList>
    </header>

    <TabsContent value="base" class="sheet-stats-panel">
      <StatBars :stats="baseStats" :raises-idx="raisesIdx" :lowers-idx="lowersIdx" />
    </TabsContent>

    <TabsContent value="evs" class="sheet-stats-panel">
      <div class="hud-stat-rows">
        <div v-for="s in evBars" :key="'ev-' + s.label" class="hud-stat-row">
          <span class="hud-stat-ico">{{ s.icon }}</span>
          <span class="hud-stat-label">{{ s.label }}</span>
          <span class="hud-stat-val">{{ s.value }}</span>
          <ProgressRoot class="hud-stat-track" :model-value="s.value" :max="252" :aria-label="`EV ${s.label}: ${s.value} de 252`">
            <ProgressIndicator class="hud-stat-fill" :style="{ width: s.pct + '%', background: 'linear-gradient(90deg,#ffcf5c,#ff8a3c)', boxShadow: '0 0 12px rgba(255,160,60,.45)' }" />
          </ProgressRoot>
        </div>
      </div>
    </TabsContent>

    <TabsContent v-if="showIvs" value="ivs" class="sheet-stats-panel">
      <div class="hud-stat-rows">
        <div v-for="s in ivBars" :key="'iv-' + s.label" class="hud-stat-row">
          <span class="hud-stat-ico">{{ s.icon }}</span>
          <span class="hud-stat-label">{{ s.label }}</span>
          <span class="hud-stat-val">{{ s.value }}</span>
          <ProgressRoot class="hud-stat-track" :model-value="s.value" :max="31" :aria-label="`IV ${s.label}: ${s.value} de 31`">
            <ProgressIndicator class="hud-stat-fill" :style="{ width: s.pct + '%', background: 'linear-gradient(90deg,#7fe7ff,#3aa0d8)', boxShadow: '0 0 12px rgba(90,190,235,.45)' }" />
          </ProgressRoot>
        </div>
      </div>
    </TabsContent>
  </TabsRoot>
</template>
