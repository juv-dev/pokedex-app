<script setup lang="ts">
import { computed, ref } from 'vue'
import type { RosterEntry } from '../SaveView.vue'
import BoxFilter from './BoxFilter.vue'

/**
 * Barra lateral de "Mi partida" con una partida cargada (referencia pen.dev pB0nc): filtro por
 * caja y listado real de las cajas del `.rxdata` (el equipo se ve en "Vista del equipo").
 */
const props = defineProps<{
  roster: RosterEntry[]
  activeInternalName: string | null
  ownedCount: number
  total: number
}>()

const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const activeBox = ref<number | 'all'>('all')

const boxes = computed(() => {
  const map = new Map<number, string>()
  props.roster.forEach(r => {
    if (!r.inParty && r.boxIndex != null) map.set(r.boxIndex, r.boxLabel)
  })
  return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([value, label]) => ({ value, label }))
})

/** El equipo ya se ve en "Vista del equipo"; el índice solo lista los Pokémon de las cajas. */
const boxMons = computed(() => props.roster.filter(r => !r.inParty))
const rows = computed(() =>
  activeBox.value === 'all'
    ? boxMons.value
    : boxMons.value.filter(r => r.boxIndex === activeBox.value)
)
</script>

<template>
  <aside class="hud-rail mp-roster" aria-label="Índice de la partida">
    <div class="hud-rail-head">
      <span class="hud-rail-title">ÍNDICE NACIONAL</span>
      <span class="mp-roster-total">{{ ownedCount }} / {{ total }}</span>
    </div>

    <BoxFilter :boxes="boxes" :model="activeBox" @update:model="v => (activeBox = v)" />

    <div class="mp-roster-list">
      <button
        v-for="r in rows" :key="r.internalName" type="button"
        class="mp-roster-row" :class="{ 'is-active': r.internalName === activeInternalName }"
        :aria-current="r.internalName === activeInternalName ? 'true' : undefined"
        @click="emit('select', r.internalName)"
      >
        <span class="mp-roster-thumb"><img :src="r.sprite" :alt="r.name" loading="lazy"></span>
        <span class="mp-roster-col">
          <span class="mp-roster-num">{{ r.num }} · {{ r.boxLabel }}</span>
          <span class="mp-roster-name">{{ r.name }}</span>
        </span>
      </button>
      <p v-if="!rows.length" class="mp-roster-empty">Esa caja está vacía.</p>
    </div>
  </aside>
</template>
