<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import {
  SelectRoot, SelectTrigger, SelectValue, SelectIcon,
  SelectPortal, SelectContent, SelectViewport, SelectItem, SelectItemText, SelectItemIndicator
} from 'reka-ui'
import { loadSpeciesIndex, localSpriteUrl, pokemonGeneration, type SpeciesIndexEntry } from '../lib/engine'

/**
 * Panel lateral "ÍNDICE NACIONAL" de la Pokédex (ref. pen.dev C3U3T): contador filtrado/total,
 * filtro "Todos" + región y lista de especies (sprite real, nº, nombre, flecha verde en la
 * activa). Los exclusivos de Añil usan su sprite local del juego.
 */
const props = defineProps<{
  activeInternalName: string | null
  searchTerm: string
}>()
const emit = defineEmits<{ (e: 'select', internalName: string): void }>()

const REGIONS: Array<{ value: string; label: string }> = [
  { value: 'all', label: 'Todas las regiones' },
  { value: 'I', label: 'Kanto' },
  { value: 'II', label: 'Johto' },
  { value: 'III', label: 'Hoenn' },
  { value: 'IV', label: 'Sinnoh' },
  { value: 'V', label: 'Teselia' },
  { value: 'VI', label: 'Kalos' },
  { value: 'VII', label: 'Alola' },
  { value: 'VIII', label: 'Galar' },
  { value: 'IX', label: 'Paldea' },
  { value: 'anil', label: 'Exclusivos de Añil' }
]

const entries = ref<SpeciesIndexEntry[]>([])
const brokenSprites = ref(new Set<string>())
const region = ref<string>('all')
const listEl = ref<HTMLElement | null>(null)

onMounted(async () => { entries.value = await loadSpeciesIndex() })

watch(() => props.activeInternalName, async () => {
  await nextTick()
  listEl.value?.querySelector('.hud-rail-row.is-active')?.scrollIntoView({ block: 'nearest' })
}, { immediate: true })

function parseNumberQuery(raw: string): number | null {
  const cleaned = raw.trim().toLowerCase().replace(/^(#|n\.?º|n°|nro\.?|num\.?|no\.?)\s*/, '').trim()
  return /^\d+$/.test(cleaned) ? parseInt(cleaned, 10) : null
}

const regionLabel = computed(() => REGIONS.find(r => r.value === region.value)?.label ?? 'Todas las regiones')

function spriteFor(e: SpeciesIndexEntry): string {
  const local = localSpriteUrl(e.internalName)
  if (local) return local
  return e.num > 1025
    ? `/anil-sprites/${e.internalName.toLowerCase()}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.num}.png`
}
function markBroken(internalName: string) {
  const next = new Set(brokenSprites.value)
  next.add(internalName)
  brokenSprites.value = next
}
function onImgError(ev: Event, internalName: string) {
  const img = ev.target as HTMLImageElement
  const fallback = `/anil-sprites/${internalName.toLowerCase()}.png`
  if (!img.src.endsWith(fallback)) { img.src = fallback; return }
  markBroken(internalName)
}

const rows = computed(() => {
  const query = props.searchTerm.trim().toLowerCase()
  const numberQuery = parseNumberQuery(props.searchTerm)
  return entries.value
    .filter(e => {
      if (query) {
        if (numberQuery !== null ? e.num !== numberQuery : !e.name.toLowerCase().includes(query)) return false
      }
      if (region.value === 'all') return true
      const gen = pokemonGeneration(e.num)
      return region.value === 'anil' ? gen === null : gen === region.value
    })
    .map(e => ({
      internalName: e.internalName,
      num: '#' + String(e.num).padStart(3, '0'),
      name: e.name,
      active: e.internalName === props.activeInternalName,
      img: spriteFor(e)
    }))
})
</script>

<template>
  <aside class="hud-rail">
    <div class="hud-rail-head">
      <span class="hud-rail-title">ÍNDICE NACIONAL</span>
      <span class="hud-rail-count">{{ rows.length }} / {{ entries.length }}</span>
    </div>

    <div class="mp-boxfilter">
      <button
        type="button" class="mp-boxfilter-all"
        :class="{ 'is-active': region === 'all' }" :aria-pressed="region === 'all'"
        @click="region = 'all'"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <line x1="4" y1="7" x2="20" y2="7" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="17" x2="14" y2="17" />
        </svg>
        Todos
      </button>

      <SelectRoot v-model="region">
        <SelectTrigger class="mp-boxfilter-box" :class="{ 'is-active': region !== 'all' }" aria-label="Filtrar por región">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" />
          </svg>
          <SelectValue class="mp-boxfilter-value">{{ regionLabel }}</SelectValue>
          <SelectIcon class="mp-boxfilter-chev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent class="mp-select-content" position="popper" :side-offset="6">
            <SelectViewport class="mp-select-viewport">
              <SelectItem v-for="r in REGIONS" :key="r.value" :value="r.value" class="mp-select-item">
                <SelectItemIndicator class="mp-select-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4L19 7" /></svg>
                </SelectItemIndicator>
                <SelectItemText>{{ r.label }}</SelectItemText>
              </SelectItem>
            </SelectViewport>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </div>

    <div ref="listEl" class="hud-rail-list">
      <button
        v-for="r in rows" :key="r.internalName" type="button"
        class="hud-rail-row" :class="{ 'is-active': r.active }"
        :aria-current="r.active ? 'true' : undefined"
        @click="emit('select', r.internalName)"
      >
        <span class="hud-rail-thumb">
          <img
            v-if="!brokenSprites.has(r.internalName)"
            :src="r.img" alt="" loading="lazy"
            @error="onImgError($event, r.internalName)"
          >
        </span>
        <span class="hud-rail-col">
          <span class="hud-rail-num">{{ r.num }}</span>
          <span class="hud-rail-name">{{ r.name }}</span>
        </span>
        <span class="hud-rail-mark" aria-hidden="true">{{ r.active ? '→' : '' }}</span>
      </button>
      <p v-if="entries.length && !rows.length" class="mp-roster-empty">Sin resultados.</p>
    </div>
  </aside>
</template>
