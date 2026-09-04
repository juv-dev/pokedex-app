<script setup lang="ts">
import { computed } from 'vue'
import type { TemplateCardVM } from '../../lib/types'
import { ToggleGroupRoot, ToggleGroupItem } from 'reka-ui'

/**
 * "Resumen competitivo" / "Vista rápida" de la ficha (ref. C3U3T / pB0nc): estado Óptimo/Viable,
 * selector real, estadísticas rápidas y naturaleza / objeto / habilidad con su número.
 */
const props = defineProps<{
  cards: TemplateCardVM[]
  baseStats: number[]
  plan: 'opt' | 'via'
  evoInfo?: string | null
}>()

const emit = defineEmits<{ (e: 'update:plan', value: 'opt' | 'via'): void }>()

const active = computed<TemplateCardVM | null>(() => {
  if (!props.cards.length) return null
  return props.plan === 'opt' ? props.cards[0] : props.cards[1] ?? props.cards[0]
})

const badge = computed(() => {
  const e = active.value
  if (!e) return '—'
  if (e.tier === 'optimo') return 'ÓPTIMO'
  if (e.tier === 'viable') return 'VIABLE'
  return e.tierLabel.toUpperCase()
})

function splitNum(raw: string): { name: string; num: string | null } {
  const m = raw.match(/^(.*?)\s*\(n\.º\s*(\d+)\)\s*$/)
  return m ? { name: m[1], num: m[2] } : { name: raw || '—', num: null }
}
const info = computed(() => {
  const e = active.value
  const build = (raw: string) => {
    const s = splitNum(raw || '')
    return s.num ? `${s.name} · n.º ${s.num}` : s.name
  }
  const rows = [
    { k: 'Naturaleza', v: e ? build(e.natureDisplay) : '—' },
    { k: 'Objeto', v: e ? build(e.itemDisplay) : '—' },
    { k: 'Habilidad', v: e ? build(e.abilityDisplay) : '—' }
  ]
  if (props.evoInfo) rows.push({ k: 'Evolución', v: props.evoInfo })
  return rows
})

const QUICK = [
  { idx: 0, label: 'PS' },
  { idx: 2, label: 'Defensa' },
  { idx: 3, label: 'At. Esp.' },
  { idx: 5, label: 'Velocidad' }
]
function grade(value: number): string {
  if (value >= 110) return 'Alta'
  if (value >= 85) return 'Moderada'
  if (value >= 65) return 'Base'
  return 'Baja'
}
const quick = computed(() =>
  QUICK.map(q => {
    const value = props.baseStats[q.idx] ?? 0
    return { label: q.label, value, grade: grade(value) }
  })
)
</script>

<template>
  <section class="sheet-comp">
    <header class="sheet-comp-head">
      <h2>Resumen competitivo</h2>
      <span class="sheet-comp-badge" :class="plan === 'opt' ? 'is-opt' : 'is-via'">
        <span class="sheet-comp-dot" aria-hidden="true"></span>{{ badge }}
      </span>
    </header>

    <ToggleGroupRoot
      class="sheet-plan" type="single" :model-value="plan"
      @update:model-value="v => v && emit('update:plan', v as 'opt' | 'via')"
    >
      <ToggleGroupItem class="sheet-plan-item" value="opt">Óptimo</ToggleGroupItem>
      <ToggleGroupItem class="sheet-plan-item" value="via">Viable</ToggleGroupItem>
    </ToggleGroupRoot>

    <div class="sheet-quick">
      <div v-for="q in quick" :key="q.label" class="sheet-quick-box">
        <span class="sheet-quick-val">{{ q.value }}</span>
        <span class="sheet-quick-k">{{ q.label }}</span>
        <span class="sheet-quick-grade">{{ q.grade }}</span>
      </div>
    </div>

    <dl class="sheet-comp-info">
      <div v-for="r in info" :key="r.k" class="sheet-comp-info-row">
        <dt>{{ r.k }}</dt>
        <dd>{{ r.v }}</dd>
      </div>
    </dl>
  </section>
</template>
