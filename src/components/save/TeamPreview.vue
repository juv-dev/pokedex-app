<script setup lang="ts">
import { computed } from 'vue'
import TeamSlot, { type TeamSlotMon } from './TeamSlot.vue'

const props = defineProps<{
  slots: Array<TeamSlotMon | null>
}>()

const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const cells = computed(() =>
  Array.from({ length: 6 }, (_, i) => props.slots[i] ?? null)
)
const detected = computed(() => cells.value.filter(Boolean).length)
const title = computed(() => (detected.value > 0 ? 'Vista del equipo' : 'Vista previa del equipo'))
</script>

<template>
  <section class="mp-preview" :aria-label="title">
    <header class="mp-preview-head">
      <h2>{{ title }}</h2>
      <span class="mp-preview-count">{{ detected }} / 6 detectados</span>
    </header>
    <div class="mp-preview-grid">
      <TeamSlot
        v-for="(mon, i) in cells" :key="i"
        :index="i + 1" :mon="mon" layout="preview"
        @select="internalName => emit('select', internalName)"
      />
    </div>
  </section>
</template>
