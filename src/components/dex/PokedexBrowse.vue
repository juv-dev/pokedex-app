<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { loadSpeciesIndex, localSpriteUrl, pokemonGeneration, type SpeciesIndexEntry } from '../../lib/engine'
import { TYPE_ES } from '../../lib/constants'
import { getAnilSpecies } from '../../lib/anilData'
import { megaOptionsFor } from '../../lib/recommendedSet'
import { useFavorites } from '../../composables/useFavorites'

/**
 * Pokédex — navegación (Pencil · frame DlStu): introducción + fila de filtros, panel con grilla
 * paginada de tarjetas y panel derecho "SELECCIÓN ACTUAL" con la ficha rápida del elegido.
 */
const props = defineProps<{
  ownedInternalNames: string[]
  searchTerm: string
}>()

const emit = defineEmits<{ (e: 'open', internalName: string): void }>()

const PAGE_SIZE = 12
const REGION: Record<string, string> = {
  I: 'Kanto', II: 'Johto', III: 'Hoenn', IV: 'Sinnoh', V: 'Teselia',
  VI: 'Kalos', VII: 'Alola', VIII: 'Galar', IX: 'Paldea'
}
const GENERATIONS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
const TYPES = Object.keys(TYPE_ES)

const { favorites, toggleFavorite, isFavorite } = useFavorites()

const entries = ref<SpeciesIndexEntry[]>([])
const brokenSprites = ref(new Set<string>())
const genFilter = ref<string>('all')
const typeFilter = ref<string>('all')
const partidaOnly = ref(false)
const megaOnly = ref(false)
const favOnly = ref(false)
const showGen = ref(false)
const showType = ref(false)
const page = ref(1)
const selected = ref<string | null>(null)

onMounted(async () => {
  entries.value = await loadSpeciesIndex()
  if (!selected.value && entries.value.length) selected.value = entries.value[0].internalName
})

const ownedSet = computed(() => new Set(props.ownedInternalNames.map(n => n.toUpperCase())))
const favCount = computed(() => favorites.value.length)
const anyFilter = computed(() =>
  genFilter.value !== 'all' || typeFilter.value !== 'all' || partidaOnly.value || megaOnly.value || favOnly.value || props.searchTerm.trim() !== ''
)

function parseNumberQuery(raw: string): number | null {
  const cleaned = raw.trim().toLowerCase().replace(/^(#|n\.?º|n°|nro\.?|num\.?|no\.?)\s*/, '').trim()
  return /^\d+$/.test(cleaned) ? parseInt(cleaned, 10) : null
}
function artworkFor(e: SpeciesIndexEntry): string {
  const local = localSpriteUrl(e.internalName)
  if (local) return local
  return e.num > 1025
    ? `/anil-sprites/${e.internalName.toLowerCase()}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.num}.png`
}
function onImgError(ev: Event, internalName: string) {
  const img = ev.target as HTMLImageElement
  const pixel = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
  const local = `/anil-sprites/${internalName.toLowerCase()}.png`
  if (img.src.includes('official-artwork') && !img.src.startsWith('/')) {
    const num = img.src.split('/').pop()
    img.src = pixel + num
    return
  }
  if (!img.src.endsWith(local)) { img.src = local; return }
  brokenSprites.value = new Set(brokenSprites.value).add(internalName)
}
function typeLabel(types: string[], sep = ' · '): string {
  return types.map(t => TYPE_ES[t] ?? t).join(sep)
}

const filtered = computed(() => {
  const q = props.searchTerm.trim().toLowerCase()
  const numQuery = parseNumberQuery(props.searchTerm)
  return entries.value.filter(e => {
    if (q && (numQuery !== null ? e.num !== numQuery : !e.name.toLowerCase().includes(q))) return false
    if (genFilter.value !== 'all' && pokemonGeneration(e.num) !== genFilter.value) return false
    if (typeFilter.value !== 'all' && !e.types.includes(typeFilter.value)) return false
    if (partidaOnly.value && !ownedSet.value.has(e.internalName.toUpperCase())) return false
    if (megaOnly.value && megaOptionsFor(e.internalName).length === 0) return false
    if (favOnly.value && !isFavorite(e.internalName)) return false
    return true
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / PAGE_SIZE)))
const pageRows = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filtered.value.slice(start, start + PAGE_SIZE)
})
const rangeLabel = computed(() => {
  if (!filtered.value.length) return 'Sin resultados'
  const from = (page.value - 1) * PAGE_SIZE + 1
  const to = Math.min(page.value * PAGE_SIZE, filtered.value.length)
  return `Mostrando ${from}–${to}`
})
const pagePills = computed<Array<number | '…'>>(() => {
  const last = totalPages.value
  if (last <= 6) return Array.from({ length: last }, (_, i) => i + 1)
  const around = [page.value].filter(p => p > 1 && p < last)
  const out: Array<number | '…'> = [1]
  if (around[0] && around[0] > 2) out.push('…')
  out.push(...around)
  if (page.value < last - 1) out.push('…')
  out.push(last)
  return out
})

watch([genFilter, typeFilter, partidaOnly, megaOnly, favOnly, () => props.searchTerm], () => { page.value = 1 })
watch(totalPages, tp => { if (page.value > tp) page.value = tp })

function resetFilters() {
  genFilter.value = 'all'
  typeFilter.value = 'all'
  partidaOnly.value = false
  megaOnly.value = false
  favOnly.value = false
  showGen.value = false
  showType.value = false
}
function go(p: number) {
  if (p >= 1 && p <= totalPages.value && p !== page.value) page.value = p
}

const active = computed(() => entries.value.find(e => e.internalName === selected.value) ?? null)
const activeSpecies = computed(() => (active.value ? getAnilSpecies(active.value.internalName) : null))
const facts = computed(() => {
  const e = active.value
  const sp = activeSpecies.value
  if (!e) return []
  return [
    { k: 'Región', v: REGION[pokemonGeneration(e.num) ?? ''] ?? 'Añil' },
    { k: 'Altura', v: sp?.heightM != null ? `${sp.heightM} m` : '—' },
    { k: 'Peso', v: sp?.weightKg != null ? `${sp.weightKg} kg` : '—' },
    { k: 'Formas', v: String(megaOptionsFor(e.internalName).length + 1) }
  ]
})
</script>

<template>
  <div class="pdx">
    <header class="pdx-intro">
      <p class="pdx-eyebrow">ÍNDICE NACIONAL</p>
      <h2 class="pdx-title">Explora todos los Pokémon</h2>
      <p class="pdx-subtitle">Filtra visualmente por generación, tipo o disponibilidad en tu partida.</p>

      <div class="pdx-filters">
        <button type="button" class="pdx-filter" :class="{ 'is-active': !anyFilter }" @click="resetFilters">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          Todos
        </button>
        <button type="button" class="pdx-filter" :class="{ 'is-active': genFilter !== 'all' }" @click="showGen = !showGen; showType = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /></svg>
          Generación
        </button>
        <button type="button" class="pdx-filter" :class="{ 'is-active': typeFilter !== 'all' }" @click="showType = !showType; showGen = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c-3 4-6 6.5-6 10a6 6 0 0 0 12 0c0-3.5-3-6-6-10z" /></svg>
          Tipo
        </button>
        <button type="button" class="pdx-filter" :class="{ 'is-active': partidaOnly }" @click="partidaOnly = !partidaOnly">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="5" rx="1" /><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M10 13h4" /></svg>
          En mi partida
        </button>
        <button type="button" class="pdx-filter" :class="{ 'is-active': megaOnly }" @click="megaOnly = !megaOnly">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.8L18 9l-4.1 1.2L12 15l-1.9-4.8L6 9l4.1-1.2zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg>
          Con mega
        </button>
        <button type="button" class="pdx-filter pdx-filter--fav" :class="{ 'is-active': favOnly }" @click="favOnly = !favOnly">
          <svg viewBox="0 0 24 24" :fill="favOnly ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" /></svg>
          Favoritos<span v-if="favCount" class="pdx-filter-n">{{ favCount }}</span>
        </button>
      </div>

      <div v-if="showGen" class="pdx-subfilter">
        <button type="button" :class="{ 'is-on': genFilter === 'all' }" @click="genFilter = 'all'">Todas</button>
        <button v-for="g in GENERATIONS" :key="g" type="button" :class="{ 'is-on': genFilter === g }" @click="genFilter = g">{{ REGION[g] }}</button>
      </div>
      <div v-if="showType" class="pdx-subfilter">
        <button type="button" :class="{ 'is-on': typeFilter === 'all' }" @click="typeFilter = 'all'">Todos</button>
        <button v-for="t in TYPES" :key="t" type="button" :class="{ 'is-on': typeFilter === t }" @click="typeFilter = t">{{ TYPE_ES[t] }}</button>
      </div>
    </header>

    <div class="pdx-content">
      <section class="pdx-grid-panel">
        <div class="pdx-grid-head">
          <span class="pdx-grid-count">{{ filtered.length }} Pokémon</span>
          <span class="pdx-grid-visible">{{ rangeLabel }}</span>
        </div>

        <div class="pdx-grid">
          <button
            v-for="e in pageRows" :key="e.internalName" type="button"
            class="pdx-card" :class="{ 'is-owned': ownedSet.has(e.internalName.toUpperCase()), 'is-selected': e.internalName === selected }"
            @click="selected = e.internalName"
          >
            <span class="pdx-card-top">
              <span class="pdx-card-sprite">
                <img
                  v-if="!brokenSprites.has(e.internalName)"
                  :src="artworkFor(e)" alt="" loading="lazy"
                  @error="onImgError($event, e.internalName)"
                >
              </span>
              <span v-if="ownedSet.has(e.internalName.toUpperCase())" class="pdx-card-owned">✓ En partida</span>
              <span
                v-else class="pdx-card-fav" :class="{ 'is-on': isFavorite(e.internalName) }"
                role="button" tabindex="0"
                :aria-label="isFavorite(e.internalName) ? 'Quitar de favoritos' : 'Añadir a favoritos'"
                @click.stop="toggleFavorite(e.internalName)"
                @keydown.enter.stop.prevent="toggleFavorite(e.internalName)"
              >
                <svg viewBox="0 0 24 24" :fill="isFavorite(e.internalName) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" /></svg>
              </span>
            </span>
            <span class="pdx-card-num">#{{ String(e.num).padStart(3, '0') }}</span>
            <span class="pdx-card-name">{{ e.name }}</span>
            <span class="pdx-card-type">{{ typeLabel(e.types) }}</span>
          </button>
        </div>

        <p v-if="!pageRows.length" class="pdx-empty">Nada coincide con el filtro.</p>

        <div class="pdx-pager">
          <span class="pdx-pager-count">Página {{ page }} de {{ totalPages }}</span>
          <div v-if="totalPages > 1" class="pdx-pager-pages">
            <button type="button" :disabled="page <= 1" aria-label="Página anterior" @click="go(page - 1)">‹</button>
            <button
              v-for="(p, i) in pagePills" :key="i" type="button"
              :class="{ 'is-active': p === page }" :disabled="p === '…'"
              @click="typeof p === 'number' && go(p)"
            >{{ p }}</button>
            <button type="button" :disabled="page >= totalPages" aria-label="Página siguiente" @click="go(page + 1)">›</button>
          </div>
        </div>
      </section>

      <aside class="pdx-featured">
        <p class="pdx-featured-eyebrow">SELECCIÓN ACTUAL</p>
        <p class="pdx-featured-title">Pokémon seleccionado</p>

        <template v-if="active">
          <div class="pdx-feature-card">
            <span class="pdx-feature-sprite">
              <img :src="artworkFor(active)" :alt="active.name" @error="onImgError($event, active.internalName)">
            </span>
            <span class="pdx-feature-num">#{{ String(active.num).padStart(3, '0') }}</span>
            <span class="pdx-feature-name">{{ active.name }}</span>
            <span class="pdx-feature-type">{{ typeLabel(active.types, ' / ') }}</span>
          </div>

          <dl class="pdx-feature-facts">
            <div v-for="f in facts" :key="f.k">
              <dt>{{ f.k }}</dt>
              <dd>{{ f.v }}</dd>
            </div>
          </dl>

          <button type="button" class="pdx-feature-cta" @click="emit('open', active.internalName)">
            Ver ficha completa
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>

          <p class="pdx-feature-actions-title">Acciones</p>
          <p class="pdx-feature-persist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 8h.01M6 16h12M6 12h.01" /></svg>
            Favoritos guardados localmente
          </p>
          <div class="pdx-feature-quick">
            <button type="button" class="pdx-feature-quick-btn is-fav" @click="favOnly = true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" /></svg>
              Ver favoritos · {{ favCount }}
            </button>
            <button type="button" class="pdx-feature-quick-btn" @click="megaOnly = true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.8L18 9l-4.1 1.2L12 15l-1.9-4.8L6 9l4.1-1.2z" /></svg>
              Megas
            </button>
          </div>
        </template>
      </aside>
    </div>

    <div class="pdx-legend">
      <span><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3l7 17 2.5-6.5L20 11z" /></svg> Clic: seleccionar</span>
      <span class="is-fav"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" /></svg> Corazón: guardar</span>
    </div>

    <p class="pdx-footer">Sprites, estadísticas, evoluciones y movimientos: PokéAPI · Información procesada localmente</p>
  </div>
</template>

<style scoped>
.pdx { display: flex; flex-direction: column; gap: 18px; animation: anilRise .22s ease; }
.pdx :focus-visible { outline: none; box-shadow: var(--focus-ring); }

.pdx-intro { display: flex; flex-direction: column; gap: 8px; }
.pdx-eyebrow { margin: 0; font-size: 11px; font-weight: 800; letter-spacing: .18em; color: var(--pk-mint); }
.pdx-title { margin: 0; font-size: 30px; font-weight: 800; letter-spacing: -.02em; color: var(--pk-text); }
.pdx-subtitle { margin: 0; font-size: 13px; color: var(--pk-muted); }

.pdx-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.pdx-filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 10px;
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  color: var(--pk-muted);
  background: #17152D;
  outline: 1px solid #282540;
  outline-offset: -0.5px;
  border: none;
  cursor: pointer;
}
.pdx-filter svg { width: 14px; height: 14px; }
.pdx-filter.is-active { color: var(--pk-mint); background: #24223B; outline-color: #4A6C63; }
.pdx-filter--fav { color: #FF9FC5; }
.pdx-filter--fav.is-active { color: var(--pk-pink); background: #281A31; outline-color: #56304A; }
.pdx-filter-n {
  font-size: 8px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 6px;
  background: #482342;
}

.pdx-subfilter { display: flex; flex-wrap: wrap; gap: 6px; }
.pdx-subfilter button {
  font: inherit;
  font-size: 10px;
  font-weight: 600;
  padding: 6px 11px;
  border-radius: 8px;
  color: var(--pk-muted);
  background: #17152D;
  outline: 1px solid #282540;
  outline-offset: -0.5px;
  border: none;
  cursor: pointer;
}
.pdx-subfilter button.is-on { color: var(--pk-mint); background: #24223B; outline-color: #4A6C63; }

.pdx-content { display: grid; grid-template-columns: minmax(0, 1fr) 304px; gap: 18px; align-items: start; }
@media (max-width: 1100px) { .pdx-content { grid-template-columns: 1fr; } }

.pdx-grid-panel {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(18, 16, 39, .8);
  outline: 1px solid #302D4B;
  outline-offset: -0.5px;
}
.pdx-grid-head { display: flex; align-items: center; justify-content: space-between; }
.pdx-grid-count { font-size: 13px; color: var(--pk-text); }
.pdx-grid-visible { font-size: 10px; color: var(--pk-muted-2); }

.pdx-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
@media (max-width: 900px) { .pdx-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .pdx-grid { grid-template-columns: repeat(2, 1fr); } }
.pdx-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  padding: 12px;
  border-radius: 13px;
  background: var(--pk-card);
  outline: 1px solid #302E4A;
  outline-offset: -0.5px;
  border: none;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-align: left;
  transition: outline-color .14s ease;
}
.pdx-card:hover { outline-color: #4a466a; }
.pdx-card.is-owned { outline-color: #31564F; }
.pdx-card.is-selected { outline: 1px solid var(--pk-mint); }
.pdx-card-top { display: flex; width: 100%; align-items: flex-start; justify-content: space-between; }
.pdx-card-sprite { width: 72px; height: 72px; display: grid; place-items: center; border-radius: 13px; }
.pdx-card-sprite img { width: 100%; height: 100%; object-fit: contain; }
.pdx-card-owned {
  padding: 6px 9px;
  border-radius: 12px;
  font-size: 9px;
  font-weight: 700;
  color: var(--pk-mint);
  background: #173A35;
  white-space: nowrap;
}
.pdx-card-fav { display: grid; place-items: center; width: 16px; height: 16px; color: rgba(255, 122, 174, .5); }
.pdx-card-fav.is-on { color: var(--pk-pink); }
.pdx-card-fav svg { width: 16px; height: 16px; }
.pdx-card-num { font-size: 10px; color: var(--pk-muted-2); }
.pdx-card-name { font-size: 14px; color: var(--pk-text); }
.pdx-card-type {
  padding: 4px 7px;
  border-radius: 7px;
  font-size: 9px;
  font-weight: 600;
  color: #BDB8D1;
  background: #25243E;
}
.pdx-empty { margin: 0; padding: 40px; text-align: center; color: var(--pk-muted); }

.pdx-pager { display: flex; align-items: center; justify-content: space-between; margin-top: 2px; }
.pdx-pager-count { font-size: 10px; color: var(--pk-muted-2); }
.pdx-pager-pages { display: inline-flex; gap: 6px; }
.pdx-pager-pages button {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  font: inherit;
  font-size: 10px;
  color: var(--pk-muted);
  background: #17152F;
  border: none;
  cursor: pointer;
}
.pdx-pager-pages button:disabled { opacity: .4; cursor: default; }
.pdx-pager-pages button.is-active { color: var(--pk-mint-ink); background: var(--pk-mint); }

.pdx-featured {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  border-radius: 18px;
  background: linear-gradient(-170.704deg, #282044 5.064%, #17152F 94.936%);
  outline: 1px solid #3B375A;
  outline-offset: -0.5px;
  position: sticky;
  top: 20px;
}
@media (max-width: 1100px) { .pdx-featured { position: static; } }
.pdx-featured-eyebrow { margin: 0; font-size: 10px; font-weight: 800; letter-spacing: .18em; color: var(--pk-mint); }
.pdx-featured-title { margin: 0; font-size: 18px; color: var(--pk-text); }
.pdx-feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 12px;
  border-radius: 14px;
  background: radial-gradient(ellipse 50% 50% at 50% 50%, #392257 0%, #15132E 100%);
}
.pdx-feature-sprite { width: 180px; height: 180px; display: grid; place-items: center; }
.pdx-feature-sprite img { width: 100%; height: 100%; object-fit: contain; }
.pdx-feature-num { font-size: 10px; color: #86819B; }
.pdx-feature-name { font-size: 21px; font-weight: 800; color: var(--pk-text); }
.pdx-feature-type {
  padding: 5px 10px;
  border-radius: 9px;
  font-size: 9px;
  font-weight: 700;
  color: #FF8DC0;
  background: #482342;
}
.pdx-feature-facts { margin: 0; padding: 14px; border-radius: 13px; background: rgba(18, 16, 39, .67); }
.pdx-feature-facts > div { display: flex; justify-content: space-between; padding: 7px 0; }
.pdx-feature-facts dt { font-size: 10px; color: var(--pk-muted); }
.pdx-feature-facts dd { margin: 0; font-size: 10px; font-weight: 600; color: var(--pk-text); }
.pdx-feature-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
  box-shadow: 0 0 16px 0 rgba(66, 232, 162, .33);
}
.pdx-feature-cta svg { width: 15px; height: 15px; }
.pdx-feature-actions-title { margin: 0; font-size: 11px; font-weight: 700; color: var(--pk-text); }
.pdx-feature-persist {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 7px 9px;
  border-radius: 8px;
  font-size: 8px;
  font-weight: 600;
  color: #D7A9C0;
  background: #20172F;
}
.pdx-feature-persist svg { width: 12px; height: 12px; color: #FF9FC5; }
.pdx-feature-quick { display: flex; gap: 8px; }
.pdx-feature-quick-btn {
  flex: 1 1 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 36px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 10px;
  font-weight: 600;
  color: var(--pk-muted);
  background: #1B1835;
}
.pdx-feature-quick-btn svg { width: 14px; height: 14px; }
.pdx-feature-quick-btn.is-fav { color: #FF9FC5; }

.pdx-legend { display: flex; justify-content: flex-end; gap: 12px; }
.pdx-legend span { display: inline-flex; align-items: center; gap: 5px; font-size: 9px; font-weight: 600; color: var(--pk-mint); }
.pdx-legend span svg { width: 12px; height: 12px; }
.pdx-legend span.is-fav { color: #FF9FC5; }

.pdx-footer { margin: 0; text-align: center; font-size: 9px; color: var(--pk-muted-2); }
</style>
