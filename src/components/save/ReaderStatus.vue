<script setup lang="ts">
import { computed } from 'vue'

export type ReaderState = 'idle' | 'reading' | 'done' | 'error'

const props = defineProps<{
  state: ReaderState
  fileName?: string | null
  errorMsg?: string | null
}>()

const STATE_LABEL: Record<ReaderState, string> = {
  idle: 'En espera',
  reading: 'Leyendo',
  done: 'Completado',
  error: 'Error'
}

const stateLabel = computed(() => STATE_LABEL[props.state])
const hint = computed(() => {
  if (props.state === 'reading') return 'Analizando el archivo de partida…'
  if (props.state === 'done') return 'Equipo detectado correctamente.'
  if (props.state === 'error') return props.errorMsg || 'El archivo no es un .rxdata válido.'
  return 'Selecciona un archivo .rxdata para detectar automáticamente tu equipo.'
})
const rows = computed(() => [
  { k: 'Formato', v: '.rxdata', ok: false },
  { k: 'Subida', v: 'Ninguna', ok: true },
  { k: 'Lectura', v: 'Offline', ok: false },
  { k: 'Archivo', v: props.fileName || 'Sin cargar', ok: !!props.fileName }
])
</script>

<template>
  <section class="mp-reader" :class="`is-${state}`" aria-live="polite">
    <span class="mp-reader-ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M20 8V6a2 2 0 0 0-2-2h-2M20 16v2a2 2 0 0 1-2 2h-2" />
        <path d="M4 12h16" />
      </svg>
    </span>

    <p class="mp-reader-k">Estado del lector</p>
    <p class="mp-reader-state">{{ stateLabel }}</p>
    <p class="mp-reader-hint">{{ hint }}</p>

    <dl class="mp-reader-rows">
      <div v-for="r in rows" :key="r.k" class="mp-reader-row">
        <dt>{{ r.k }}</dt>
        <dd :class="{ 'is-ok': r.ok }">{{ r.v }}</dd>
      </div>
    </dl>
  </section>
</template>
