<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DexNode, TemplateCardVM, TemplateGameData } from '../../lib/types'
import { NATURE_TABLE } from '../../lib/constants'
import { getAnilSpecies } from '../../lib/anilData'
import PokemonSummary from './PokemonSummary.vue'
import CompetitivePanel from './CompetitivePanel.vue'
import GeneralInfo from './GeneralInfo.vue'
import StatBlock from './StatBlock.vue'
import MoveList from './MoveList.vue'
import MegaEvolution from './MegaEvolution.vue'

/**
 * Ficha unificada (ref. pen.dev C3U3T / pB0nc): un solo layout para Información + Estadísticas +
 * Megaevolución, sin pestañas. `context` decide qué paneles y qué origen de EV/IV se usan.
 */
const props = defineProps<{
  node: DexNode
  nodes: DexNode[]
  idx: number
  cards: TemplateCardVM[]
  gameData: TemplateGameData
  context: 'dex' | 'save'
  crumbs: string[]
  saveEvs?: number[] | null
  saveIvs?: number[] | null
  prevAvailable?: boolean
  nextAvailable?: boolean
}>()

const emit = defineEmits<{
  (e: 'back'): void
  (e: 'form-select', index: number): void
  (e: 'prev'): void
  (e: 'next'): void
}>()

const plan = ref<'opt' | 'via'>('opt')
watch(() => props.cards, () => { plan.value = 'opt' })

const activeCard = computed<TemplateCardVM | null>(() => {
  if (!props.cards.length) return null
  return plan.value === 'opt' ? props.cards[0] : props.cards[1] ?? props.cards[0]
})

const baseStatsArr = computed(() => [
  props.node.stats.hp, props.node.stats.attack, props.node.stats.defense,
  props.node.stats['special-attack'], props.node.stats['special-defense'], props.node.stats.speed
])

const NATURE_STAT_IDX: Record<string, number> = {
  'Ataque': 1, 'Defensa': 2, 'At. Esp.': 3, 'Def. Esp.': 4, 'Velocidad': 5
}
const natureRow = computed(() =>
  NATURE_TABLE.find(n => n.key === (activeCard.value?.natureKey || '').toUpperCase()) || null
)
const raisesIdx = computed(() => (natureRow.value?.raises ? NATURE_STAT_IDX[natureRow.value.raises] ?? null : null))
const lowersIdx = computed(() => (natureRow.value?.lowers ? NATURE_STAT_IDX[natureRow.value.lowers] ?? null : null))

const recommendedEvs = computed(() => activeCard.value?.evs ?? [0, 0, 0, 0, 0, 0])
const statEvs = computed(() =>
  props.context === 'save' && props.saveEvs && props.saveEvs.length ? props.saveEvs : recommendedEvs.value
)
const statIvs = computed(() => (props.saveIvs && props.saveIvs.length ? props.saveIvs : [31, 31, 31, 31, 31, 31]))

const hasMegas = computed(() => props.nodes.some(n => n.stageKind === 'mega'))

/** Cómo se obtiene ESTE Pokémon: "Desde {pre-evolución} · {método}". Null en formas base y megas. */
const evoInfo = computed(() => {
  const n = props.node
  if (n.stageKind === 'base' || n.stageKind === 'mega' || !n.evoLabel) return null
  const method = n.evoLabel.replace(/^Evoluciona\s+/i, '')
  const from = n.parentInternalName ? getAnilSpecies(n.parentInternalName)?.name : null
  return from ? `Desde ${from} · ${method}` : method
})
const lastCrumb = computed(() => props.crumbs[props.crumbs.length - 1] ?? '')
const headCrumbs = computed(() => props.crumbs.slice(0, -1))
const showNav = computed(() => props.context === 'dex' && (props.prevAvailable || props.nextAvailable))
</script>

<template>
  <div class="sheet" :class="`sheet--${context}`">
    <div class="sheet-topbar">
      <button type="button" class="sheet-back" @click="emit('back')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span v-for="(c, i) in headCrumbs" :key="i" class="sheet-crumb">{{ c }}<span class="sheet-crumb-sep">/</span></span>
        <span class="sheet-crumb sheet-crumb-cur">{{ lastCrumb }}</span>
      </button>
    </div>

    <div class="sheet-grid">
      <div class="sheet-row-top">
        <PokemonSummary :node="node" />
        <CompetitivePanel :cards="cards" :base-stats="baseStatsArr" :evo-info="evoInfo" v-model:plan="plan" />
      </div>

      <div class="sheet-row-lower" :class="hasMegas ? 'has-mega' : ''">
        <GeneralInfo v-if="context === 'dex'" :node="node" />
        <StatBlock
          :base-stats="baseStatsArr"
          :evs="statEvs"
          :ivs="statIvs"
          :raises-idx="raisesIdx"
          :lowers-idx="lowersIdx"
        />
        <div class="sheet-col-side">
          <MoveList
            :card="activeCard" :game-data="gameData" :node-types="node.types"
            :title="context === 'save' ? 'Movimientos del set' : 'Movimientos'"
          />
          <MegaEvolution v-if="hasMegas" :nodes="nodes" :active-idx="idx" @select="i => emit('form-select', i)" />
        </div>
      </div>
    </div>

    <div v-if="showNav" class="sheet-nav">
      <button type="button" class="sheet-nav-btn" :disabled="!prevAvailable" @click="emit('prev')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
        Anterior
      </button>
      <button type="button" class="sheet-nav-btn" :disabled="!nextAvailable" @click="emit('next')">
        Siguiente
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
      </button>
    </div>
  </div>
</template>
