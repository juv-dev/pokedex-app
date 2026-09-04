<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { loadSpeciesIndex, type SpeciesIndexEntry } from '../lib/engine'

/**
 * Cabecera del `Añil Dex - HUD.dc.html`: distintivo ◉ AÑIL DEX, conmutador Pokédex | Mi partida
 * y campo "Buscar Pokémon…". La búsqueda mantiene su desplegable real (nombre o número).
 */
const props = defineProps<{ view: 'dex' | 'save' }>()
const emit = defineEmits<{
  (e: 'update:view', view: 'dex' | 'save'): void
  (e: 'select', internalName: string): void
  (e: 'search', term: string): void
}>()

const query = ref('')
const debouncedQuery = ref('')
const index = ref<SpeciesIndexEntry[]>([])
const dropOpen = ref(false)
const highlight = ref(0)
let debounceTimer: ReturnType<typeof setTimeout> | undefined

onMounted(async () => { index.value = await loadSpeciesIndex() })

function parseNumberQuery(raw: string): number | null {
  const cleaned = raw.trim().toLowerCase().replace(/^(#|n\.?º|n°|nro\.?|num\.?|no\.?)\s*/, '').trim()
  return /^\d+$/.test(cleaned) ? parseInt(cleaned, 10) : null
}

const matches = computed<SpeciesIndexEntry[]>(() => {
  const q = debouncedQuery.value.trim().toLowerCase()
  if (!q) return []
  const numQuery = parseNumberQuery(debouncedQuery.value)
  return index.value.filter(entry => (
    numQuery !== null ? entry.num === numQuery : entry.name.toLowerCase().includes(q)
  ))
})
const visible = computed(() => matches.value.slice(0, 40))
const showDrop = computed(() => dropOpen.value && debouncedQuery.value.trim() !== '')

watch(visible, () => { highlight.value = 0 })
watch(debouncedQuery, v => emit('search', v))

function onInput() {
  clearTimeout(debounceTimer)
  const raw = query.value
  if (!raw.trim()) {
    debouncedQuery.value = ''
    dropOpen.value = false
    return
  }
  debounceTimer = setTimeout(() => {
    debouncedQuery.value = raw
    dropOpen.value = true
  }, 180)
}

function pick(internalName: string) {
  query.value = ''
  debouncedQuery.value = ''
  dropOpen.value = false
  emit('select', internalName)
}

function moveHighlight(delta: number) {
  const list = visible.value
  if (!list.length) return
  dropOpen.value = true
  highlight.value = (highlight.value + delta + list.length) % list.length
}

function onEnter() {
  const list = visible.value
  if (!list.length) return
  const i = highlight.value >= 0 && highlight.value < list.length ? highlight.value : 0
  pick(list[i].internalName)
}

function onFocusOut(e: FocusEvent) {
  const related = e.relatedTarget as HTMLElement | null
  if (!related || !related.closest('.hud-search')) dropOpen.value = false
}
</script>

<template>
  <header class="hud-header">
    <div class="hud-brand">
      <div class="hud-brand-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h5.5M15.5 12H21" />
          <circle cx="12" cy="12" r="3.1" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div>
        <div class="hud-brand-name">AÑIL DEX</div>
        <div class="hud-brand-sub">Pokédex en español</div>
      </div>
    </div>

    <div class="hud-toggle">
      <button type="button" :class="{ 'is-active': props.view === 'dex' }" @click="emit('update:view', 'dex')">Pokédex</button>
      <button type="button" :class="{ 'is-active': props.view === 'save' }" @click="emit('update:view', 'save')">Mi partida</button>
    </div>

    <div class="hud-search" @focusout="onFocusOut">
      <div class="hud-search-field">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path>
        </svg>
        <input
          v-model="query" type="text" placeholder="Buscar Pokémon…" autocomplete="off"
          aria-label="Buscar Pokémon por nombre o número"
          @input="onInput"
          @focus="dropOpen = true"
          @keydown.down.prevent="moveHighlight(1)"
          @keydown.up.prevent="moveHighlight(-1)"
          @keydown.enter.prevent="onEnter"
          @keydown.esc="dropOpen = false"
        >
      </div>

      <div v-if="showDrop" class="hud-search-drop" role="listbox" aria-label="Resultados de búsqueda">
        <div class="hud-search-head">{{ matches.length }} resultados</div>
        <div v-if="!visible.length" class="hud-search-empty">Sin coincidencias — probá otro nombre o número.</div>
        <button
          v-for="(r, i) in visible" :key="r.internalName" type="button"
          class="search-drop-item" :class="{ 'is-highlight': i === highlight }"
          role="option" :aria-selected="i === highlight" tabindex="-1"
          @mousedown.prevent="pick(r.internalName)" @mouseenter="highlight = i"
        >
          <span class="search-drop-num">{{ String(r.num).padStart(3, '0') }}</span>
          <span class="search-drop-name">{{ r.name }}</span>
        </button>
      </div>
    </div>
  </header>
</template>
