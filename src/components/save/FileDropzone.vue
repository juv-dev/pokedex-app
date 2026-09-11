<script setup lang="ts">
import { ref, computed } from 'vue'

export type DropzoneState = 'idle' | 'loading' | 'success' | 'error'

const props = withDefaults(defineProps<{
  state?: DropzoneState
  statusMsg?: string | null
}>(), {
  state: 'idle',
  statusMsg: null
})

const emit = defineEmits<{ (e: 'file', file: File): void }>()

const dragOver = ref(false)
const inputEl = ref<HTMLInputElement | null>(null)

const visualState = computed<DropzoneState | 'dragover'>(() => (dragOver.value ? 'dragover' : props.state))
const busy = computed(() => props.state === 'loading')

function pick() {
  inputEl.value?.click()
}
function onChange(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) emit('file', file)
  input.value = ''
}
function onDrop(e: DragEvent) {
  dragOver.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file) emit('file', file)
}
</script>

<template>
  <section
    class="mp-drop" :class="`is-${visualState}`"
    role="button" tabindex="0"
    :aria-busy="busy ? 'true' : undefined"
    aria-label="Zona de carga de archivo de partida. Arrastra un .rxdata o pulsa para elegirlo."
    @dragenter.prevent="dragOver = true"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
    @drop.prevent="onDrop"
    @click="pick"
    @keydown.enter.prevent="pick"
    @keydown.space.prevent="pick"
  >
    <span class="mp-drop-ico" aria-hidden="true">
      <svg v-if="!busy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 15V4M8 8l4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
      <span v-else class="mp-drop-spinner"></span>
    </span>

    <h2 class="mp-drop-title">{{ busy ? 'Leyendo tu partida…' : 'Descubre qué Pokémon tienes en tu partida' }}</h2>
    <p class="mp-drop-text">
      {{ busy
        ? 'Analizando el archivo en tu navegador. Puede tardar unos segundos; no cierres esta pestaña.'
        : 'Arrastra aquí tu archivo o selecciónalo para detectar automáticamente tu equipo, cajas y datos competitivos.' }}
    </p>

    <template v-if="!busy">
      <button type="button" class="mp-drop-btn" @click.stop="pick">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        </svg>
        Elegir archivo de partida
      </button>

      <ul class="mp-drop-hints">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M9 14l2 2 3.5-3.5" />
          </svg>
          Solo .rxdata
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 8.8a15 15 0 0 1 20 0M5 12.7a10 10 0 0 1 14 0M8.5 16.4a5 5 0 0 1 7 0M12 20h.01M3 3l18 18" />
          </svg>
          Funciona sin conexión
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          Tu archivo permanece privado
        </li>
      </ul>

      <p class="mp-drop-next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        Siguiente: Configurar Pokémon por equipo o caja
      </p>
    </template>

    <input
      ref="inputEl" class="mp-drop-input" type="file" accept=".rxdata,.bak"
      aria-hidden="true" tabindex="-1" @change="onChange"
    >

    <p v-if="statusMsg" class="mp-drop-status" :class="{ 'is-error': state === 'error' }" role="status">
      {{ statusMsg }}
    </p>
  </section>
</template>
