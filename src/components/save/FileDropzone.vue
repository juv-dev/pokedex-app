<script setup lang="ts">
import { ref, computed } from 'vue'

export type DropzoneState = 'idle' | 'loading' | 'success' | 'error'

const props = withDefaults(defineProps<{
  state?: DropzoneState
  statusMsg?: string | null
  path?: string
}>(), {
  state: 'idle',
  statusMsg: null,
  path: '%AppData%\\Roaming\\Pokemon Anil\\Partida 1.rxdata'
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

    <h2 class="mp-drop-title">{{ busy ? 'Leyendo tu partida…' : '¿Qué Pokémon tienes en tu partida?' }}</h2>
    <p class="mp-drop-text">
      {{ busy
        ? 'Analizando el archivo en tu navegador. Puede tardar unos segundos; no cierres esta pestaña.'
        : 'Arrastra tu archivo aquí o selecciónalo. Se procesa en tu navegador y no se envía a ningún servidor.' }}
    </p>

    <template v-if="!busy">
      <button type="button" class="mp-drop-btn" @click.stop="pick">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        </svg>
        Elegir archivo de partida
      </button>

      <p class="mp-drop-path">{{ path }}</p>
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
