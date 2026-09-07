<script setup lang="ts">
import { computed } from 'vue'
import type { TemplateCardVM, TemplateGameData } from '../../lib/types'
import { anilMoveCategoryEs, getAnilMoveNumber } from '../../lib/anilData'
import { typeGradient } from '../../hudTheme'

/** Lista compacta de movimientos del set (ref. C3U3T / pB0nc). Nunca hardcodea el set. */
const props = defineProps<{
  card: TemplateCardVM | null
  gameData: TemplateGameData
  nodeTypes: string[]
  title?: string
}>()

const rows = computed(() => {
  const e = props.card
  if (!e) return []
  return e.moveIds
    .map((id, i) => {
      const data = props.gameData.move(id)
      const type = data?.type ?? 'normal'
      const isStatus = (data?.category ?? '') === 'Status'
      const note = isStatus ? 'Utilidad' : props.nodeTypes.includes(type) ? 'STAB' : 'Cobertura'
      const moveNum = getAnilMoveNumber(id)
      return {
        key: id + i,
        order: moveNum ?? Number.POSITIVE_INFINITY,
        num: moveNum != null ? '#' + moveNum : '—',
        name: data?.name ?? e.moves[i] ?? id,
        category: anilMoveCategoryEs(data?.category ?? '') || '—',
        note,
        power: data?.power != null ? String(data.power) : '—',
        accuracy: data?.accuracy != null ? String(data.accuracy) : null,
        pp: data?.pp != null ? String(data.pp) : '—',
        type
      }
    })
    .sort((a, b) => a.order - b.order)
})
</script>

<template>
  <section class="sheet-moves">
    <header class="sheet-moves-head">
      <h2>{{ title || 'Movimientos' }}</h2>
      <span class="sheet-moves-cols">POT · PP</span>
    </header>

    <p v-if="!rows.length" class="sheet-moves-empty">Sin datos del set.</p>

    <ul v-else class="sheet-moves-list">
      <li v-for="m in rows" :key="m.key" class="sheet-move">
        <span class="sheet-move-bar" :style="{ background: typeGradient(m.type) }" aria-hidden="true"></span>
        <span class="sheet-move-body">
          <span class="sheet-move-name">{{ m.num }} · {{ m.name }}</span>
          <span class="sheet-move-meta">{{ m.category }} · {{ m.note }}</span>
        </span>
        <span class="sheet-move-nums">
          <span class="sheet-move-pot">{{ m.power }}</span>
          <span v-if="m.accuracy" class="sheet-move-acc">{{ m.accuracy }}</span>
          <span class="sheet-move-pp">{{ m.pp }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>
