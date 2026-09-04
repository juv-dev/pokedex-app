<script setup lang="ts">
import { computed } from 'vue'
import TeamSlot, { type TeamSlotMon } from './TeamSlot.vue'

const props = defineProps<{
  slots: Array<TeamSlotMon | null>
  fileName?: string | null
  readState: string
  activeInternalName?: string | null
}>()

const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const cells = computed(() =>
  Array.from({ length: 6 }, (_, i) => props.slots[i] ?? null)
)
const count = computed(() => cells.value.filter(Boolean).length)
</script>

<template>
  <aside class="hud-rail mp-sidebar" aria-label="Mi equipo">
    <div class="hud-rail-head">
      <span class="hud-rail-title">MI EQUIPO</span>
      <span class="mp-sidebar-count">{{ count }} / 6</span>
    </div>

    <div class="mp-sidebar-list">
      <TeamSlot
        v-for="(mon, i) in cells" :key="i"
        :index="i + 1" :mon="mon" layout="sidebar"
        :active="!!mon && mon.internalName === activeInternalName"
        @select="internalName => emit('select', internalName)"
      />
    </div>

    <dl class="mp-sidebar-foot">
      <div class="mp-sidebar-foot-row">
        <dt>Archivo</dt>
        <dd>{{ fileName || 'Sin cargar' }}</dd>
      </div>
      <div class="mp-sidebar-foot-row">
        <dt>Lectura</dt>
        <dd class="is-off">{{ readState }}</dd>
      </div>
    </dl>
  </aside>
</template>
