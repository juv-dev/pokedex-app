<script setup lang="ts">
import { computed } from 'vue'
import { TYPE_ES } from '../../lib/constants'
import type { TeamSlotMon } from '../../lib/roster'
import TypeIcon from '../TypeIcon.vue'

export type { TeamSlotMon }

const props = withDefaults(defineProps<{
  index: number
  mon?: TeamSlotMon | null
  layout?: 'sidebar' | 'preview'
  active?: boolean
  teamMark?: boolean
}>(), { mon: null, layout: 'sidebar', active: false, teamMark: false })

const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const label = computed(() => 'ESPACIO ' + String(props.index).padStart(2, '0'))
const slotNum = computed(() => String(props.index).padStart(2, '0'))
const interactive = computed(() => !!props.mon)

function activate() {
  if (props.mon) emit('select', props.mon.internalName)
}
</script>

<template>
  <component
    :is="interactive ? 'button' : 'div'"
    :type="interactive ? 'button' : undefined"
    class="mp-slot"
    :class="[`mp-slot--${layout}`, { 'is-filled': !!mon, 'is-active': active }]"
    :aria-current="active ? 'true' : undefined"
    @click="activate"
  >
    <span class="mp-slot-thumb">
      <img v-if="mon" :src="mon.sprite" :alt="mon.name" loading="lazy">
      <span v-else class="mp-slot-ring" aria-hidden="true"></span>
    </span>

    <span v-if="layout === 'sidebar'" class="mp-slot-body">
      <span class="mp-slot-kicker">{{ mon ? mon.num : label }}</span>
      <span class="mp-slot-name">{{ mon ? mon.name : 'Sin Pokémon' }}</span>
    </span>

    <span v-else class="mp-slot-body mp-slot-body--preview">
      <span class="mp-slot-kicker">{{ mon ? mon.num : slotNum }}</span>
      <span class="mp-slot-name">{{ mon ? mon.name : '—' }}</span>
      <span v-if="mon && mon.level != null" class="mp-slot-meta">Nv. {{ mon.level }}</span>
      <span v-if="mon && mon.types && mon.types.length" class="mp-slot-types">
        <span v-for="t in mon.types" :key="t" class="mp-slot-type" :title="TYPE_ES[t] ?? t">
          <TypeIcon :type="t" decorative />
        </span>
      </span>
    </span>

    <span v-if="teamMark" class="mp-slot-mark" aria-label="En el equipo">&rarr;</span>
  </component>
</template>
