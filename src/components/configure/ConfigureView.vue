<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { fetchTeamDetail, type TeamSummary } from '../../lib/team'
import { buildInstanceRows, filterRows, boxOptions, paginate, type Scope } from '../../lib/configureRows'
import { recommendedSetFor, megaOptionsFor, type RecommendedSet } from '../../lib/recommendedSet'
import { canEvolve } from '../../lib/anilData'
import { recommendMegaForTeam, type MegaRecommendation } from '../../lib/megaRecommendation'
import { scoreBuild } from '../../lib/buildScore'
import { megaSpriteUrl } from '../../lib/engine'
import { instanceKeyOf, locationOf } from '../../lib/instanceKey'
import { useFavorites } from '../../composables/useFavorites'
import type { usePokemonDrafts } from '../../composables/usePokemonDrafts'
import type { PokemonDraft } from '../../lib/draftStore'
import type { SavedBuild, StatSextet } from '../../lib/types'
import ScopeSelector from './ScopeSelector.vue'
import Paginator from './Paginator.vue'
import InstanceGallery from './InstanceGallery.vue'
import InstanceConfigPanel from './InstanceConfigPanel.vue'

const props = defineProps<{
  summaries: TeamSummary[]
  saveId: string
  drafts: ReturnType<typeof usePokemonDrafts>
  fileName: string
  initialKey?: string | null
}>()

const emit = defineEmits<{
  (e: 'open-detail', instanceKey: string, order: string[]): void
  (e: 'review'): void
  (e: 'change-file'): void
}>()

const { favorites, toggleFavorite: toggleFav } = useFavorites()
const favoriteSet = computed(() => new Set(favorites.value))

const scope = ref<Scope['scope']>('all')
const box = ref<number | 'all'>('all')
const query = ref('')
const favOnly = ref(false)
const evoOnly = ref(false)
const pendingOnly = ref(false)
const page = ref(1)
const pageSize = ref(6)
const activeKey = ref<string | null>(null)

function canStillEvolve(row: { internalName: string; form?: number }): boolean {
  return canEvolve(row.internalName, row.form ?? 0)
}

const allRows = computed(() => buildInstanceRows(props.summaries))
const boxes = computed(() => boxOptions(allRows.value))
const scopeCounts = computed(() => {
  const rows = allRows.value
  return {
    all: rows.length,
    team: rows.filter(r => r.location.source === 'team').length,
    box: rows.filter(r => r.location.source === 'box').length
  }
})
const scopedRows = computed(() => filterRows(allRows.value, {
  scope: scope.value, box: box.value, query: query.value, favOnly: favOnly.value, favorites: favoriteSet.value
}))
const evoPendingCount = computed(() => allRows.value.filter(r => canStillEvolve(r)).length)

watch([scope, box, query, favOnly, evoOnly, pendingOnly], () => { page.value = 1 })
watch(() => props.initialKey, key => { if (key) activeKey.value = key }, { immediate: true })

const configuredCount = computed(() => props.summaries.reduce((n, s) => n + (props.drafts.getDraft(instanceKeyOf(s)) ? 1 : 0), 0))

/**
 * "Listo" = el set con el que la partida YA trae al ejemplar coincide (casi) con el que aplicaría
 * la herramienta, sea cual sea su nivel. Así, tras exportar y reimportar la copia optimizada, esos
 * ejemplares dejan de aparecer como pendientes aunque su mejor set no llegue a "óptimo".
 */
const evaluated = reactive(new Set<string>())
const readyKeys = reactive(new Set<string>())
const evaluating = reactive(new Set<string>())
/** Ejemplares sin un set recomendado calculable: dejan de contar como pendientes. */
const noSet = reactive(new Set<string>())
/** Mega detectada por la megapiedra que ya lleva el ejemplar (sin borrador de por medio). */
const detectedForm = reactive(new Map<string, string>())

function isReady(instanceKey: string): boolean { return readyKeys.has(instanceKey) }
function isPending(instanceKey: string): boolean {
  return !props.drafts.getDraft(instanceKey) && !readyKeys.has(instanceKey) && !noSet.has(instanceKey)
}
const readyCount = computed(() =>
  allRows.value.filter(r => !props.drafts.getDraft(r.instanceKey) && readyKeys.has(r.instanceKey)).length
)
const noSetCount = computed(() => allRows.value.filter(r => !props.drafts.getDraft(r.instanceKey) && noSet.has(r.instanceKey)).length)
const pendingCount = computed(() => allRows.value.filter(r => isPending(r.instanceKey)).length)
/** La partida ya está al día: no hay borradores ni ejemplares pendientes por configurar. */
const nothingToDo = computed(() => allRows.value.length > 0 && configuredCount.value === 0 && pendingCount.value === 0)

function setToEntry(set: RecommendedSet): Parameters<typeof scoreBuild>[1] {
  return {
    nature: set.nature ?? '', ability: set.ability ?? '', item: set.item ?? '',
    evs: set.evs as StatSextet, moves: set.moves.map(mv => mv.id)
  } as unknown as Parameters<typeof scoreBuild>[1]
}

/** ¿La partida ya trae exactamente el set que la herramienta escribiría? (lo que aplica `applyDraftChanges`). */
function alreadyHasSet(build: SavedBuild, set: RecommendedSet): boolean {
  const u = (v: string | null | undefined) => (v ?? '').toUpperCase()
  if (set.nature && u(build.natureKey) !== u(set.nature)) return false
  if (set.ability && u(build.abilityId) !== u(set.ability)) return false
  const recItem = u(set.item)
  if (recItem && u(build.itemId) !== recItem) return false
  const saved = new Set(build.moveIds.map(m => u(m)))
  for (const mv of set.moves) if (!saved.has(u(mv.id))) return false
  for (let i = 0; i < 6; i++) if (Math.abs((build.evs[i] ?? 0) - (set.evs[i] ?? 0)) > 4) return false
  return true
}

const filtered = computed(() => {
  let rows = scopedRows.value
  if (pendingOnly.value) rows = rows.filter(r => isPending(r.instanceKey))
  if (evoOnly.value) rows = rows.filter(r => canStillEvolve(r))
  return rows
})
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize.value)))
const pageRows = computed(() => paginate(filtered.value, page.value, pageSize.value))
watch(totalPages, tp => { if (page.value > tp) page.value = tp })

async function evaluateCurrent(instanceKey: string): Promise<void> {
  if (evaluated.has(instanceKey) || evaluating.has(instanceKey)) return
  const summary = props.summaries.find(s => instanceKeyOf(s) === instanceKey)
  if (!summary) return
  evaluating.add(instanceKey)
  try {
    const detail = await fetchTeamDetail(summary)
    const build: SavedBuild = {
      internalName: summary.internalName,
      natureKey: (detail.natureKey ?? '').toUpperCase(),
      abilityId: detail.abilityId ?? '',
      itemId: detail.itemId ?? '',
      evs: detail.evs.slice(0, 6) as StatSextet,
      ivs: detail.ivs.slice(0, 6) as StatSextet,
      moveIds: detail.currentMoves.map(m => m.name)
    }
    // Si ya carga una megapiedra de su especie, se compara contra el set de ESA mega
    // y el ejemplar se muestra con esa forma aunque no haya borrador (p. ej. tras reimportar).
    const heldItem = (detail.itemId ?? '').toUpperCase()
    const megaForm = megaOptionsFor(summary.internalName).find(m => (m.megaStone ?? '').toUpperCase() === heldItem && heldItem !== '')
    if (megaForm) detectedForm.set(instanceKey, megaForm.formName)
    else detectedForm.delete(instanceKey)
    const rec = await recommendedSetFor(summary.internalName, megaForm ? { megaFormName: megaForm.formName } : {})
    if (!rec) { noSet.add(instanceKey); evaluated.add(instanceKey); return }
    if (alreadyHasSet(build, rec) || scoreBuild(build, setToEntry(rec)) >= 82) readyKeys.add(instanceKey)
    evaluated.add(instanceKey)
  } catch {
    /* la evaluación es opcional: sin datos, el ejemplar se trata como pendiente */
  } finally {
    evaluating.delete(instanceKey)
  }
}

/** Evalúa primero lo visible y luego, en segundo plano y en serie, el resto del roster. */
let backfillRun = 0
async function backfillEvaluation(): Promise<void> {
  const run = ++backfillRun
  for (const r of pageRows.value) await evaluateCurrent(r.instanceKey)
  for (const r of allRows.value) {
    if (run !== backfillRun) return
    await evaluateCurrent(r.instanceKey)
  }
}

let pending: Promise<void> = Promise.resolve()
function track(p: Promise<void>): void { pending = pending.then(() => p).catch(() => {}) }

watch(() => props.saveId, () => { evaluated.clear(); readyKeys.clear(); noSet.clear(); detectedForm.clear() })
watch(pageRows, rows => { for (const r of rows) track(evaluateCurrent(r.instanceKey)) }, { immediate: true })
watch(allRows, () => { track(backfillEvaluation()) }, { immediate: true })


/** Forma final por ejemplar: la del borrador si existe, si no la mega que ya lleva puesta. */
function megaFormFor(instanceKey: string): string | undefined {
  return props.drafts.getDraft(instanceKey)?.selectedFormId || detectedForm.get(instanceKey) || undefined
}

/** Foto de la mega elegida (o detectada) por ejemplar, para que galería y panel la muestren así. */
const megaSprites = reactive(new Map<string, { form: string; url: string }>())
async function refreshMegaSprites(): Promise<void> {
  const wanted = new Map<string, { species: string; form: string }>()
  for (const draft of props.drafts.drafts.values()) {
    if (draft.selectedFormId) wanted.set(draft.instanceKey, { species: draft.speciesId, form: draft.selectedFormId })
  }
  for (const [key, form] of detectedForm) {
    if (wanted.has(key)) continue
    const row = allRows.value.find(r => r.instanceKey === key)
    if (row) wanted.set(key, { species: row.internalName, form })
  }
  for (const key of [...megaSprites.keys()]) if (!wanted.has(key)) megaSprites.delete(key)
  for (const [key, { species, form }] of wanted) {
    if (megaSprites.get(key)?.form === form) continue
    const url = await megaSpriteUrl(species, form)
    if (url) megaSprites.set(key, { form, url })
  }
}
watch(
  () => [
    [...props.drafts.drafts.values()].map(d => `${d.instanceKey}|${d.selectedFormId}`).join(','),
    [...detectedForm.entries()].map(([k, f]) => `${k}|${f}`).join(',')
  ].join(';'),
  () => { void refreshMegaSprites() },
  { immediate: true }
)
function megaSpriteFor(instanceKey: string): string | undefined {
  return megaSprites.get(instanceKey)?.url
}
const activeReady = computed(() => !!activeKey.value && readyKeys.has(activeKey.value))
const activeMegaForm = computed(() => (activeKey.value ? megaFormFor(activeKey.value) : undefined))

const activeRow = computed(() => allRows.value.find(r => r.instanceKey === activeKey.value) ?? null)
const activeDraft = computed<PokemonDraft | undefined>(() => (activeKey.value ? props.drafts.getDraft(activeKey.value) : undefined))
const activeMegaForms = computed(() => (activeRow.value ? megaOptionsFor(activeRow.value.internalName) : []))
const activeMegaRec = computed<MegaRecommendation | null>(() => {
  const row = activeRow.value
  if (!row || !activeMegaForms.value.length) return null
  const others = props.summaries.filter(s => instanceKeyOf(s) !== row.instanceKey).map(s => s.types)
  return recommendMegaForTeam({ internalName: row.internalName, teamTypes: others })
})
const activeSaveState = computed(() => (activeKey.value ? props.drafts.stateOf(activeKey.value) : 'none'))
const activeFavorite = computed(() => !!activeRow.value && favoriteSet.value.has(activeRow.value.internalName.toUpperCase()))

function draftStateFor(instanceKey: string): 'none' | ReturnType<typeof props.drafts.stateOf> {
  return props.drafts.getDraft(instanceKey) ? props.drafts.stateOf(instanceKey) : 'none'
}

async function ensureDraft(instanceKey: string, formName = ''): Promise<void> {
  const row = allRows.value.find(r => r.instanceKey === instanceKey)
  if (!row) return
  const existing = props.drafts.getDraft(instanceKey)
  const set = await recommendedSetFor(row.internalName, formName ? { megaFormName: formName } : {})
  if (!set) { noSet.add(instanceKey); return }
  noSet.delete(instanceKey)
  const draft: PokemonDraft = {
    saveId: props.saveId,
    instanceKey,
    location: locationOf({ inParty: row.location.source === 'team', boxIndex: row.location.box, boxSlot: row.location.slot }),
    speciesId: row.internalName,
    selectedFormId: formName,
    favorite: favoriteSet.value.has(row.internalName.toUpperCase()),
    recommendedSet: set,
    reviewState: existing?.reviewState ?? 'pending',
    updatedAt: Date.now()
  }
  await props.drafts.saveDraft(draft)
}

function onSelect(instanceKey: string): void {
  activeKey.value = instanceKey
  if (!evaluated.has(instanceKey)) track(evaluateCurrent(instanceKey))
}

function onSelectForm(formName: string): void {
  if (activeKey.value) track(ensureDraft(activeKey.value, formName))
}

function onApply(): void {
  if (activeKey.value && !props.drafts.getDraft(activeKey.value)) track(ensureDraft(activeKey.value))
}

function onDiscard(): void {
  if (activeKey.value) track(props.drafts.removeDraft(activeKey.value))
}

const confirmClearAll = ref(false)
function onClearAll(): void {
  if (!confirmClearAll.value) { confirmClearAll.value = true; return }
  confirmClearAll.value = false
  track(props.drafts.clearAll())
}

const applyingAll = ref(false)
const applyAllProgress = ref(0)
async function applyAllPending(): Promise<void> {
  if (applyingAll.value) return
  applyingAll.value = true
  applyAllProgress.value = 0
  try {
    for (const row of allRows.value) {
      if (props.drafts.getDraft(row.instanceKey)) continue
      await evaluateCurrent(row.instanceKey)
      if (readyKeys.has(row.instanceKey) || noSet.has(row.instanceKey)) continue
      await ensureDraft(row.instanceKey)
      applyAllProgress.value += 1
    }
  } finally {
    applyingAll.value = false
  }
}
function onApplyAll(): void { track(applyAllPending()) }

defineExpose({ whenIdle: () => pending })

function onToggleFavorite(internalName: string): void {
  toggleFav(internalName)
  const draft = activeDraft.value
  if (draft && draft.speciesId === internalName) {
    void props.drafts.saveDraft({ ...draft, favorite: !draft.favorite })
  }
}

function onOpenDetail(): void {
  if (activeKey.value) emit('open-detail', activeKey.value, filtered.value.map(r => r.internalName))
}
</script>

<template>
  <div class="cfg">
    <div class="cfg-lead">
      <nav class="cfg-crumbs" aria-label="Ruta">Mi partida / Configurar sets</nav>
      <div class="cfg-lead-row">
        <div>
          <h2 class="cfg-title">Configurar Pokémon</h2>
          <p class="cfg-subtitle">
            Revisa los {{ summaries.length }} ejemplares detectados. Cada uno recibe un set para su
            forma actual; las formas alternativas son opcionales.
          </p>
        </div>
        <div class="cfg-lead-actions">
          <button
            v-if="pendingCount" type="button" class="cfg-apply-all"
            :disabled="applyingAll" @click="onApplyAll"
          >
            {{ applyingAll ? `Aplicando… ${applyAllProgress}/${pendingCount}` : `Aplicar set recomendado a ${pendingCount} pendiente${pendingCount === 1 ? '' : 's'}` }}
          </button>
          <button v-if="configuredCount" type="button" class="cfg-review" @click="emit('review')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" /><path d="M9 14l2 2 4-4" />
            </svg>
            Revisar {{ configuredCount }} cambio{{ configuredCount === 1 ? '' : 's' }}
          </button>
        </div>
      </div>
    </div>

    <div class="cfg-grid">
      <section class="cfg-panel">
        <h3 class="cfg-panel-title">Explorar y configurar Pokémon</h3>
        <p class="cfg-panel-sub">
          Elige Todos, Equipo actual o Cajas. Los estados Configurado y Pendiente se manejan como filtros.
        </p>

        <ScopeSelector
          :scope="scope" :box="box" :boxes="boxes" :counts="scopeCounts"
          :pending="{ count: pendingCount, active: pendingOnly }"
          :evo="{ count: evoPendingCount, active: evoOnly }"
          @update:scope="scope = $event" @update:box="box = $event"
          @toggle-pending="pendingOnly = !pendingOnly" @toggle-evo="evoOnly = !evoOnly"
        />

        <div class="cfg-toolbar">
          <label class="cfg-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              v-model="query" type="search"
              placeholder="Buscar por nombre, ID, caja o slot…" aria-label="Buscar ejemplar"
            >
          </label>
          <button
            type="button" class="cfg-fav-toggle" :class="{ 'is-on': favOnly }"
            :aria-pressed="favOnly" @click="favOnly = !favOnly"
          >
            <svg viewBox="0 0 24 24" :fill="favOnly ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" />
            </svg>
            Favoritos<span v-if="favoriteSet.size" class="cfg-fav-n">{{ favoriteSet.size }}</span>
          </button>
        </div>

        <InstanceGallery
          :rows="pageRows" :active-key="activeKey" :favorites="favoriteSet"
          :draft-state="draftStateFor" :ready="isReady"
          :mega-sprite="megaSpriteFor" :mega-form="megaFormFor"
          @select="onSelect" @toggle-favorite="onToggleFavorite"
        />
        <p v-if="!pageRows.length" class="cfg-empty">Nada coincide con el filtro.</p>
        <Paginator
          :page="page" :total-pages="totalPages" :page-size="pageSize" :total="filtered.length"
          @update:page="page = $event"
        />
      </section>

      <aside class="cfg-side">
        <div v-if="nothingToDo" class="cfg-alldone">
          <svg class="cfg-alldone-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" />
          </svg>
          <p class="cfg-alldone-title">Tu partida ya está optimizada</p>
          <p class="cfg-alldone-sub">
            Los {{ allRows.length }} ejemplares ya tienen su mejor configuración. No hay nada que
            configurar en esta partida.
          </p>
          <button type="button" class="cfg-alldone-btn" @click="emit('change-file')">Cargar otra partida</button>
        </div>

        <p v-if="!nothingToDo" class="cfg-draft-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
          </svg>
          <template v-if="configuredCount === 0">Sin cambios todavía</template>
          <template v-else>{{ configuredCount }} cambio{{ configuredCount === 1 ? '' : 's' }} guardado{{ configuredCount === 1 ? '' : 's' }}</template><template v-if="readyCount"> · {{ readyCount }} ya listos</template><template v-if="pendingCount"> · {{ pendingCount }} pendientes</template><template v-if="noSetCount"> · {{ noSetCount }} sin set disponible</template>
        </p>
        <p v-if="!nothingToDo" class="cfg-safety">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M9 14l2 2 3.5-3.5" />
          </svg>
          Exporta una copia .rxdata. El original no se toca: los cambios solo quedan en el archivo
          que descargues y debes usar ESA copia en el juego.
        </p>
        <button v-if="!nothingToDo" type="button" class="cfg-change-file" @click="emit('change-file')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 4v6h6M21 20v-6h-6" /><path d="M3.5 10a9 9 0 0 1 15-3.5L21 9M20.5 14a9 9 0 0 1-15 3.5L3 15" />
          </svg>
          Cargar otra partida
        </button>
        <button
          v-if="configuredCount" type="button" class="cfg-clear-all"
          :class="{ 'is-confirming': confirmClearAll }" @click="onClearAll" @blur="confirmClearAll = false"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
          </svg>
          {{ confirmClearAll ? `Confirmar: borrar los ${configuredCount} borradores` : 'Descartar todos los borradores' }}
        </button>

        <InstanceConfigPanel
          :row="activeRow" :draft="activeDraft" :save-state="activeSaveState"
          :mega-forms="activeMegaForms" :recommendation="activeMegaRec" :favorite="activeFavorite"
          :ready="activeReady" :mega-form="activeMegaForm"
          :mega-sprite="activeKey ? megaSpriteFor(activeKey) : ''"
          @select-form="onSelectForm" @toggle-favorite="onToggleFavorite"
          @open-detail="onOpenDetail" @apply="onApply" @discard="onDiscard"
        />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.cfg {
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: anilRise .22s ease;
}
.cfg :focus-visible { outline: none; box-shadow: var(--focus-ring); }

.cfg-lead { display: flex; flex-direction: column; gap: 8px; }
.cfg-crumbs { font-size: 11px; font-weight: 600; color: var(--pk-muted); }
.cfg-lead-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.cfg-lead-actions { flex: 0 0 auto; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.cfg-title { margin: 0; font-size: 28px; font-weight: 800; color: var(--pk-text); }
.cfg-subtitle { margin: 6px 0 0; font-size: 12px; font-weight: 500; line-height: 1.5; color: var(--pk-muted); max-width: 62ch; }
.cfg-apply-all {
  height: 44px;
  padding: 0 18px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 10px;
  font-weight: 700;
  color: var(--pk-text);
  background: #211C3D;
  outline: 1px solid #3A3656;
  outline-offset: -0.5px;
}
.cfg-apply-all:hover:not(:disabled) { outline-color: #55B999; color: var(--pk-mint); }
.cfg-apply-all:disabled { opacity: .6; cursor: default; }
.cfg-review {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 18px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 10px;
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
  box-shadow: 0 0 14px 0 rgba(56, 231, 162, .27);
}
.cfg-review svg { width: 17px; height: 17px; }
.cfg-review:disabled { opacity: .45; cursor: default; box-shadow: none; }

.cfg-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 326px;
  gap: 24px;
  align-items: start;
}
@media (max-width: 1160px) { .cfg-grid { grid-template-columns: 1fr; } }

.cfg-panel {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 17px;
  background: rgba(23, 21, 47, .8);
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
}
.cfg-panel-title { margin: 0; font-size: 17px; font-weight: 400; color: var(--pk-text); }
.cfg-panel-sub { margin: 0; font-size: 10px; font-weight: 500; line-height: 1.5; color: var(--pk-muted); }

.cfg-toolbar { display: flex; gap: 8px; flex-wrap: wrap; }
.cfg-search {
  flex: 1 1 220px;
  min-width: 180px;
  display: flex;
  align-items: center;
  gap: 7px;
  height: 38px;
  padding: 0 11px;
  border-radius: 9px;
  background: #0F0D22;
  outline: 1px solid #302D4B;
  outline-offset: -0.5px;
}
.cfg-search svg { width: 14px; height: 14px; color: var(--pk-muted); flex: 0 0 auto; }
.cfg-search input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  color: var(--pk-text);
  font: inherit;
  font-size: 9px;
}
.cfg-search input::placeholder { color: var(--pk-muted-2); }
.cfg-fav-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  padding: 0 12px;
  border-radius: 9px;
  cursor: pointer;
  font: inherit;
  font-size: 8px;
  color: #FF9FC5;
  background: #281A31;
  outline: 1px solid #56304A;
  outline-offset: -0.5px;
}
.cfg-fav-toggle svg { width: 13px; height: 13px; }
.cfg-fav-toggle.is-on { color: var(--pk-pink); outline-color: var(--pk-pink); }
.cfg-fav-n {
  font-size: 7px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 6px;
  background: #482342;
}

.cfg-empty { margin: 0; padding: 36px; text-align: center; color: var(--pk-muted); }

.cfg-side {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: sticky;
  top: 20px;
}
@media (max-width: 1160px) { .cfg-side { position: static; } }
.cfg-draft-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  height: 34px;
  padding: 0 14px;
  border-radius: 17px;
  font-size: 9px;
  color: var(--pk-mint);
  background: #2A3345;
  outline: 1px solid #4A6C63;
  outline-offset: -0.5px;
}
.cfg-draft-pill svg { width: 14px; height: 14px; flex: 0 0 auto; }
.cfg-safety {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0 11px;
  min-height: 44px;
  border-radius: 10px;
  font-size: 8px;
  line-height: 1.25;
  color: #B8B4C9;
  background: #15132D;
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
}
.cfg-safety svg { width: 15px; height: 15px; flex: 0 0 auto; color: var(--pk-mint); }
.cfg-clear-all {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;
  font: inherit;
  font-size: 9.5px;
  font-weight: 600;
  color: var(--pk-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px 2px;
}
.cfg-clear-all svg { width: 12px; height: 12px; }
.cfg-clear-all:hover { color: var(--pk-danger); }
.cfg-clear-all.is-confirming { color: var(--pk-danger); font-weight: 700; }

.cfg-change-file {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  height: 34px;
  padding: 0 14px;
  border-radius: 17px;
  font: inherit;
  font-size: 9.5px;
  font-weight: 700;
  color: var(--pk-text);
  background: #211C3D;
  outline: 1px solid #3A3656;
  outline-offset: -0.5px;
  border: none;
  cursor: pointer;
}
.cfg-change-file svg { width: 13px; height: 13px; flex: 0 0 auto; }
.cfg-change-file:hover { outline-color: #55B999; color: var(--pk-mint); }

.cfg-alldone {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 30px 20px;
  border-radius: 17px;
  background: linear-gradient(-170.704deg, #1E2A3E 5%, #17152F 95%);
  outline: 1px solid #3E7569;
  outline-offset: -0.5px;
}
.cfg-alldone-ico { width: 40px; height: 40px; color: var(--pk-mint); }
.cfg-alldone-title { margin: 4px 0 0; font-size: 15px; font-weight: 800; color: var(--pk-text); }
.cfg-alldone-sub { margin: 0; font-size: 10px; line-height: 1.5; color: var(--pk-muted); max-width: 34ch; }
.cfg-alldone-btn {
  margin-top: 8px;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
}
.cfg-alldone-btn:hover { filter: brightness(1.06); }
</style>
