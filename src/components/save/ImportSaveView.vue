<script setup lang="ts">
import { computed } from 'vue'
import FileDropzone, { type DropzoneState } from './FileDropzone.vue'
import type { SaveStatus } from '../../composables/useSaveFile'

/**
 * "Importar partida" (Pencil · frame Pf1H0): zona de carga del `.rxdata`, resumen de lo que se
 * analizará y leyenda de estados. La lectura ocurre en `useSaveFile`; este componente solo
 * presenta y emite el archivo elegido.
 */
const props = defineProps<{
  status: SaveStatus
  fileName: string | null
  statusMessage: string
}>()

const emit = defineEmits<{ (e: 'file', file: File): void }>()

const isError = computed(() =>
  props.status === 'error-lectura' || props.status === 'incompatible' || props.status === 'corrupto'
)

const dropzoneState = computed<DropzoneState>(() => {
  if (props.status === 'analizando') return 'loading'
  if (isError.value) return 'error'
  if (props.status === 'analizada') return 'success'
  return 'idle'
})

const activeState = computed<'ok' | 'loading' | 'error' | null>(() => {
  if (props.status === 'analizada') return 'ok'
  if (props.status === 'analizando') return 'loading'
  if (isError.value) return 'error'
  return null
})

const coverage = [
  { key: 'team', title: 'Equipo actual', text: 'Los 6 Pokémon que llevas en la partida' },
  { key: 'boxes', title: 'Cajas', text: 'Todos los ejemplares, su caja y slot' },
  { key: 'forms', title: 'Formas y megas', text: 'Opciones disponibles sin cambiar la forma actual' },
  { key: 'comp', title: 'Datos competitivos', text: 'Movimientos, IDs, EVs, IVs, objetos y naturalezas' }
] as const

const states = [
  { key: 'ok', label: 'Archivo válido' },
  { key: 'loading', label: 'Analizando partida' },
  { key: 'error', label: 'Formato no compatible' }
] as const
</script>

<template>
  <div class="imp">
    <div class="imp-topbar">
      <span class="imp-local" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3l7 4v5c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V7z" /><path d="M9 12l2 2 4-4" />
        </svg>
        Procesado localmente
      </span>
    </div>

    <FileDropzone
      :state="dropzoneState"
      :status-msg="statusMessage || null"
      @file="(file: File) => emit('file', file)"
    />

    <section class="imp-cov" aria-label="Qué se analizará">
      <header class="imp-cov-head">
        <h2 class="imp-cov-title">QUÉ SE ANALIZARÁ</h2>
        <p class="imp-cov-note">El resultado pasa directamente a Configurar Pokémon</p>
      </header>
      <div class="imp-cov-grid">
        <article v-for="c in coverage" :key="c.key" class="imp-cov-card">
          <span class="imp-cov-ico" aria-hidden="true">
            <svg v-if="c.key === 'team'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" /></svg>
            <svg v-else-if="c.key === 'boxes'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="5" rx="1" /><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M10 13h4" /></svg>
            <svg v-else-if="c.key === 'forms'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.8L18 9l-4.1 1.2L12 15l-1.9-4.8L6 9l4.1-1.2zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M8 17v-5M13 17V8M18 17v-8" /></svg>
          </span>
          <h3 class="imp-cov-card-title">{{ c.title }}</h3>
          <p class="imp-cov-card-text">{{ c.text }}</p>
        </article>
      </div>
    </section>

    <ul class="imp-states" aria-label="Estados de análisis">
      <li
        v-for="s in states" :key="s.key"
        class="imp-state" :class="[`is-${s.key}`, { 'is-active': activeState === s.key }]"
      >
        <span class="imp-state-ico" aria-hidden="true">
          <svg v-if="s.key === 'ok'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg>
          <svg v-else-if="s.key === 'loading'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9" /></svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
        </span>
        {{ s.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.imp {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: anilRise .22s ease;
}
.imp-topbar { display: flex; justify-content: flex-end; }
.imp-local {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 14px;
  border-radius: 18px;
  font-size: 10px;
  font-weight: 700;
  color: var(--pk-mint);
  background: #173A35;
  outline: 1px solid #3E7569;
  outline-offset: -0.5px;
}
.imp-local svg { width: 15px; height: 15px; }

.imp-cov {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: 17px;
  background: rgba(19, 26, 43, .87);
  outline: 1px solid #343E54;
  outline-offset: -0.5px;
}
.imp-cov-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.imp-cov-title { margin: 0; font-size: 11px; font-weight: 800; letter-spacing: .12em; color: var(--pk-text); }
.imp-cov-note { margin: 0; font-size: 9px; font-weight: 600; color: var(--pk-mint); }
.imp-cov-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
@media (max-width: 900px) { .imp-cov-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .imp-cov-grid { grid-template-columns: 1fr; } }
.imp-cov-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border-radius: 11px;
  background: #17172E;
  outline: 1px solid #2D3950;
  outline-offset: -0.5px;
}
.imp-cov-ico {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: var(--pk-mint);
  background: #203A39;
}
.imp-cov-ico svg { width: 17px; height: 17px; }
.imp-cov-card-title { margin: 0; font-size: 11px; font-weight: 400; color: var(--pk-text); }
.imp-cov-card-text { margin: 0; font-size: 9px; line-height: 1.22; color: var(--pk-muted-2); }

.imp-states { list-style: none; margin: 0; padding: 0; display: flex; gap: 10px; }
@media (max-width: 620px) { .imp-states { flex-wrap: wrap; } }
.imp-state {
  flex: 1 1 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 52px;
  padding: 0 14px;
  border-radius: 11px;
  font-size: 10px;
  background: #15132D;
  outline: 1px solid #302D4B;
  outline-offset: -0.5px;
  opacity: .78;
}
.imp-state-ico { display: inline-flex; }
.imp-state-ico svg { width: 16px; height: 16px; }
.imp-state.is-ok { color: var(--pk-mint); }
.imp-state.is-loading { color: var(--pk-blue); }
.imp-state.is-error { color: var(--pk-danger); }
.imp-state.is-active { opacity: 1; outline-color: currentColor; }
</style>
