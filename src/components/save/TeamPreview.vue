<script setup lang="ts">
import { computed } from 'vue'
import TeamSlot, { type TeamSlotMon } from './TeamSlot.vue'

const props = withDefaults(defineProps<{
  slots: Array<TeamSlotMon | null>
  loading?: boolean
}>(), { loading: false })

const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const cells = computed(() =>
  Array.from({ length: 6 }, (_, i) => props.slots[i] ?? null)
)
const detected = computed(() => cells.value.filter(Boolean).length)
const title = computed(() => (detected.value > 0 ? 'Vista del equipo' : 'Vista previa del equipo'))
</script>

<template>
  <section class="mp-preview" :aria-label="title" :aria-busy="loading ? 'true' : undefined">
    <header class="mp-preview-head">
      <h2>{{ loading ? 'Leyendo tu partida' : title }}</h2>
      <span v-if="loading" class="mp-preview-count is-loading" role="status">
        <span class="mp-preview-spin" aria-hidden="true"></span>
        Analizando…
      </span>
      <span v-else class="mp-preview-count">{{ detected }} / 6 detectados</span>
    </header>

    <div v-if="loading" class="mp-preview-wait" role="status">
      <span class="mp-preview-spin-lg" aria-hidden="true"></span>
      <p class="mp-preview-wait-title">Analizando tu partida…</p>
      <p class="mp-preview-wait-sub">Leyendo el equipo y las cajas del PC. Puede tardar unos segundos.</p>
    </div>
    <div v-else class="mp-preview-grid">
      <TeamSlot
        v-for="(mon, i) in cells" :key="i"
        :index="i + 1" :mon="mon" layout="preview"
        @select="internalName => emit('select', internalName)"
      />
    </div>
  </section>
</template>
