<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DexNode, CompetitiveSet, MoveDetail, LoadedTemplateSet, TemplateCardVM, SavedBuild, StatSextet, TemplateDiff } from './lib/types'
import {
  buildAnilNodes, computeSet, pickItem, pickMoveset,
  movesDetailedFromPool, familyOrderedSpeciesKeys
} from './lib/engine'
import { findRootInternalName, getAnilAbilityDetail } from './lib/anilData'
import { resolveCompetitiveTemplate, buildGameData } from './lib/templateRegistry'
import { selectClosestTemplate, diffSavedVsTemplate } from './lib/templateDiff'
import { scoreBuild, qualityTier, type QualityTier } from './lib/buildScore'
import { toCardVM, heuristicToCardVM } from './lib/templateView'
import { PHYSICAL_BOOSTS, SPECIAL_BOOSTS } from './lib/constants'
import { hudThemeVars } from './hudTheme'
import { loadInternalNames, markInternalName, saveInternalNames } from './lib/collection'
import { fetchTeamDetail } from './lib/team'
import { useSaveFile } from './composables/useSaveFile'
import { usePokemonDrafts } from './composables/usePokemonDrafts'
import AppHeader from './components/AppHeader.vue'
import PokedexBrowse from './components/dex/PokedexBrowse.vue'
import PokemonSheet from './components/sheet/PokemonSheet.vue'
import ImportSaveView from './components/save/ImportSaveView.vue'
import ConfigureView from './components/configure/ConfigureView.vue'
import ReviewChangesView from './components/review/ReviewChangesView.vue'
import FlowRail, { type FlowStep } from './components/save/FlowRail.vue'

const DEX_SEEN_STORAGE_KEY = 'anil-dex.seen-species.v1'

type AppView = 'pokedex' | 'pokemon-detail' | 'import-save' | 'configure-pokemon' | 'review-changes'

const view = ref<AppView>('pokedex')
const detailContext = ref<'pokedex' | 'save'>('pokedex')
const searchTerm = ref('')
const seenInternalNames = ref(loadInternalNames(DEX_SEEN_STORAGE_KEY))

const {
  roster: saveRoster,
  fileName: saveFileName,
  summaries: saveSummaries,
  bytes: saveBytes,
  saveId,
  ownedInternalNames,
  loaded: saveLoaded,
  status: saveStatus,
  statusMessage: saveStatusMessage,
  readFile: onImportFile
} = useSaveFile()

const drafts = usePokemonDrafts()
watch(saveId, id => { if (id) void drafts.loadSave(id) })

const importSteps: FlowStep[] = [
  { label: 'Seleccionar archivo', state: 'active' },
  { label: 'Analizar equipo y cajas', state: 'todo' },
  { label: 'Configurar Pokémon', state: 'todo' }
]
const configureSteps: FlowStep[] = [
  { label: 'Partida analizada', state: 'done' },
  { label: 'Configurar Pokémon', state: 'current' },
  { label: 'Revisar cambios', state: 'todo' },
  { label: 'Generar .rxdata', state: 'todo' },
  { label: 'Descargar copia', state: 'todo' }
]

const wideLayout = computed(() => view.value !== 'import-save' && view.value !== 'configure-pokemon')

const saveDetailEvs = ref<number[] | null>(null)
const saveDetailIvs = ref<number[] | null>(null)
const saveDetailBuild = ref<SavedBuild | null>(null)
let saveDetailToken = 0

/** Selección independiente por vista: la Pokédex y "Mi partida" no comparten el Pokémon activo. */
const dexTarget = ref('BULBASAUR')
const saveTarget = ref<string | null>(null)

const nodes = ref<DexNode[] | null>(null)
const idx = ref(0)

const loading = ref(false)
const errorMsg = ref('')

const set = ref<CompetitiveSet | null>(null)
const movesChosen = ref<MoveDetail[]>([])
const templateState = ref<'loading' | 'ready' | 'absent' | 'error'>('loading')
const loadedTemplateSet = ref<LoadedTemplateSet | null>(null)
const templateGameData = buildGameData()

const activeNode = computed(() => (nodes.value ? nodes.value[idx.value] : null))
watch(activeNode, node => {
  if (!node) return
  seenInternalNames.value = markInternalName(seenInternalNames.value, node.internalName)
  saveInternalNames(DEX_SEEN_STORAGE_KEY, seenInternalNames.value)
})

const themeVars = computed(() => hudThemeVars(activeNode.value?.types))

const templateCards = computed<TemplateCardVM[]>(() => {
  if (!activeNode.value?.isMega && templateState.value === 'ready' && loadedTemplateSet.value) {
    const entries = loadedTemplateSet.value.entries
    const ordered = [...entries.filter(e => e.isPrimary), ...entries.filter(e => !e.isPrimary)]
    return ordered.map(e => toCardVM(e, templateGameData))
  }
  if (set.value) return [heuristicToCardVM(set.value, movesChosen.value, templateGameData)]
  return []
})

async function selectNode(list: DexNode[], newIdx: number) {
  nodes.value = list
  idx.value = newIdx
  const node = list[newIdx]
  loading.value = true
  errorMsg.value = ''
  templateState.value = 'loading'
  loadedTemplateSet.value = null
  try {
    const nodeAbilities = node.abilities.map(a => ({ id: a.anilId ?? '', name: a.ability.name, hidden: a.is_hidden }))
    const computedSet = computeSet(node, nodeAbilities, getAnilAbilityDetail)
    const movesDetailed: MoveDetail[] = movesDetailedFromPool(
      [...templateGameData.legalMovepool(node.internalName)], templateGameData.move
    )
    const hasBoost = movesDetailed.some(m => PHYSICAL_BOOSTS.includes(m.name) || SPECIAL_BOOSTS.includes(m.name))
    if (!node.isMega) computedSet.item = pickItem(computedSet.classification.role, hasBoost, computedSet.classification.baseSpeed)
    set.value = computedSet
    movesChosen.value = pickMoveset(movesDetailed, node.types, computedSet.classification.role, computedSet.classification.mainOffense, computedSet.item)
    const resolved = await resolveCompetitiveTemplate(node.internalName)
    loadedTemplateSet.value = resolved?.loaded ?? null
    templateState.value = resolved ? (resolved.loaded.templateState === 'error' ? 'error' : 'ready') : 'absent'
  } catch {
    errorMsg.value = `No se pudo calcular el detalle de ${node.displayName}.`
  } finally {
    loading.value = false
  }
}

const navSection = computed<'pokedex' | 'save'>(() => {
  if (view.value === 'pokedex') return 'pokedex'
  if (view.value === 'pokemon-detail') return detailContext.value === 'save' ? 'save' : 'pokedex'
  return 'save'
})

/** Orden activo al abrir la ficha desde Configurar sets: respeta el filtro/orden que ve
 *  el usuario en ese momento en vez del orden crudo del roster. Se limpia al navegar por
 *  fuera de ese contexto (búsqueda del header, etc.) para no dejar un orden obsoleto. */
const configureOrder = ref<string[] | null>(null)

function onRailSelect(internalName: string, order: string[] | null = null) {
  configureOrder.value = order
  if (navSection.value === 'save') {
    view.value = 'pokemon-detail'
    detailContext.value = 'save'
    loadSaveDetail(internalName)
    searchAndSelect(internalName, true)
  } else {
    searchAndSelect(internalName)
  }
}

function loadSaveDetail(internalName: string) {
  saveDetailEvs.value = null
  saveDetailIvs.value = null
  saveDetailBuild.value = null
  const summary = saveSummaries.value.find(s => s.internalName === internalName)
  if (!summary) return
  const token = ++saveDetailToken
  fetchTeamDetail(summary)
    .then(detail => {
      if (token !== saveDetailToken) return
      saveDetailEvs.value = detail.evs
      saveDetailIvs.value = detail.ivs
      saveDetailBuild.value = {
        internalName,
        natureKey: (detail.natureKey ?? '').toUpperCase(),
        abilityId: detail.abilityId ?? '',
        itemId: detail.itemId ?? '',
        evs: detail.evs.slice(0, 6) as StatSextet,
        ivs: detail.ivs.slice(0, 6) as StatSextet,
        moveIds: detail.currentMoves.map(m => m.name)
      }
    })
    .catch(() => { /* datos de partida opcionales */ })
}

const saveQuality = computed<{ score: number; tier: QualityTier; entry: LoadedTemplateSet['entries'][number] } | null>(() => {
  const build = saveDetailBuild.value
  const set = loadedTemplateSet.value
  if (!build || !set || detailContext.value !== 'save') return null
  const match = selectClosestTemplate(build, set, templateGameData)
  if (!match) return null
  const score = scoreBuild(build, match.entry)
  return { score, tier: qualityTier(score), entry: match.entry }
})

const saveComparison = computed<TemplateDiff | null>(() => {
  const build = saveDetailBuild.value
  const q = saveQuality.value
  if (!build || !q) return null
  return diffSavedVsTemplate(build, q.entry, templateGameData)
})

function onNav(section: 'pokedex' | 'save') {
  if (section === 'pokedex') {
    view.value = 'pokedex'
    searchAndSelect(dexTarget.value)
  } else {
    view.value = saveLoaded.value ? 'configure-pokemon' : 'import-save'
  }
}

watch(saveLoaded, loaded => {
  if (loaded && view.value === 'import-save') view.value = 'configure-pokemon'
})

function onDetailBack() {
  view.value = detailContext.value === 'save' ? 'configure-pokemon' : 'pokedex'
}

const configureInitialKey = ref<string | null>(null)

function onConfigDetail(instanceKey: string, order: string[]) {
  const entry = saveRoster.value.find(r => r.instanceKey === instanceKey)
  if (entry) onRailSelect(entry.internalName, order)
}

function onReviewEdit(instanceKey: string) {
  configureInitialKey.value = instanceKey
  view.value = 'configure-pokemon'
}

async function searchAndSelect(internalName: string, keepSaveView = false, dest: AppView = 'pokedex') {
  if (keepSaveView) saveTarget.value = internalName
  else { view.value = dest; dexTarget.value = internalName }
  loading.value = true
  errorMsg.value = ''
  nodes.value = null
  try {
    const root = findRootInternalName(internalName)
    const list = await buildAnilNodes(root, true)
    if (!list.length) throw new Error('not found')
    let focusIdx = list.findIndex(n => n.internalName === internalName && n.stageKind !== 'mega')
    if (focusIdx < 0) focusIdx = 0
    await selectNode(list, focusIdx)
  } catch {
    loading.value = false
    errorMsg.value = 'No pude encontrar esa especie en los datos de Añil.'
  }
}

function onFormDot(i: number) {
  if (nodes.value && i >= 0 && i < nodes.value.length) selectNode(nodes.value, i)
}

function onHeaderSelect(internalName: string) {
  if (navSection.value === 'save') onRailSelect(internalName)
  else onDexOpen(internalName)
}
function onDexOpen(internalName: string) {
  detailContext.value = 'pokedex'
  void searchAndSelect(internalName, false, 'pokemon-detail')
}

/** Mismo orden que el índice (líneas evolutivas juntas) para navegar Anterior / Siguiente. */
const speciesOrder = familyOrderedSpeciesKeys()
const stripPrevName = computed(() => {
  if (!activeNode.value) return null
  const i = speciesOrder.indexOf(activeNode.value.internalName)
  return i > 0 ? speciesOrder[i - 1] : null
})
const stripNextName = computed(() => {
  if (!activeNode.value) return null
  const i = speciesOrder.indexOf(activeNode.value.internalName)
  return i >= 0 && i < speciesOrder.length - 1 ? speciesOrder[i + 1] : null
})
function onStripPrev() { if (stripPrevName.value) searchAndSelect(stripPrevName.value, false, 'pokemon-detail') }
function onStripNext() { if (stripNextName.value) searchAndSelect(stripNextName.value, false, 'pokemon-detail') }

/** Anterior / Siguiente dentro del equipo y las cajas de la partida: respeta el orden filtrado
 *  de Configurar sets cuando la ficha se abrió desde ahí, y si no cae al orden del roster. */
const saveOrder = computed(() => configureOrder.value ?? saveRoster.value.map(r => r.internalName))
const savePrevName = computed(() => {
  if (!activeNode.value) return null
  const i = saveOrder.value.indexOf(activeNode.value.internalName)
  return i > 0 ? saveOrder.value[i - 1] : null
})
const saveNextName = computed(() => {
  if (!activeNode.value) return null
  const i = saveOrder.value.indexOf(activeNode.value.internalName)
  return i >= 0 && i < saveOrder.value.length - 1 ? saveOrder.value[i + 1] : null
})
function onSavePrev() { if (savePrevName.value) onRailSelect(savePrevName.value, configureOrder.value) }
function onSaveNext() { if (saveNextName.value) onRailSelect(saveNextName.value, configureOrder.value) }

function pad3(n: number | null) { return n != null ? '#' + String(n).padStart(3, '0') : 'Añil' }
const dexCrumbs = computed(() => {
  const n = activeNode.value
  return n ? ['Pokédex', pad3(n.dexNum), n.displayName] : ['Pokédex']
})
const saveCrumbs = computed(() => {
  const n = activeNode.value
  if (!n) return ['Mi partida']
  const where = saveRoster.value.find(r => r.internalName === n.internalName)?.boxLabel ?? 'Equipo'
  return ['Mi partida', where, n.displayName]
})

searchAndSelect('BULBASAUR')
</script>

<template>
  <div class="hud-shell" :style="themeVars">
    <div class="hud-container">
      <AppHeader
        :view="navSection"
        @update:view="onNav"
        @select="onHeaderSelect"
        @search="searchTerm = $event"
      />

      <div class="hud-body" :class="{ 'hud-body--wide': wideLayout }">
        <FlowRail
          v-if="view === 'import-save'"
          eyebrow="Mi partida"
          title="Importa y configura tu partida"
          subtitle="Carga el archivo una sola vez. Al terminar el análisis pasas directamente a configurar los Pokémon detectados."
          :steps="importSteps"
        />
        <FlowRail
          v-else-if="view === 'configure-pokemon'"
          eyebrow="Mi partida"
          title="Configurar Pokémon"
          :file-name="saveFileName || null"
          steps-label="Flujo de configuración"
          :steps="configureSteps"
        />

        <main class="hud-main">
          <PokedexBrowse
            v-if="view === 'pokedex'"
            :owned-internal-names="ownedInternalNames"
            :search-term="searchTerm"
            @open="onDexOpen"
          />

          <template v-else-if="view === 'pokemon-detail' && detailContext === 'pokedex'">
            <div v-if="loading && !nodes" class="hud-status">Buscando…</div>
            <div v-else-if="errorMsg && !nodes" class="hud-status is-error">{{ errorMsg }}</div>
            <PokemonSheet
              v-else-if="activeNode && nodes"
              :node="activeNode"
              :nodes="nodes"
              :idx="idx"
              :cards="templateCards"
              :game-data="templateGameData"
              context="dex"
              :crumbs="dexCrumbs"
              :prev-available="!!stripPrevName"
              :next-available="!!stripNextName"
              @back="view = 'pokedex'"
              @form-select="onFormDot"
              @prev="onStripPrev"
              @next="onStripNext"
            />
          </template>

          <template v-else-if="view === 'pokemon-detail' && detailContext === 'save'">
            <div v-if="loading && !nodes" class="hud-status">Buscando…</div>
            <div v-else-if="errorMsg && !nodes" class="hud-status is-error">{{ errorMsg }}</div>
            <PokemonSheet
              v-else-if="activeNode && nodes"
              :node="activeNode"
              :nodes="nodes"
              :idx="idx"
              :cards="templateCards"
              :game-data="templateGameData"
              context="save"
              :crumbs="saveCrumbs"
              :save-evs="saveDetailEvs"
              :save-ivs="saveDetailIvs"
              :save-quality="saveQuality"
              :save-comparison="saveComparison"
              :prev-available="!!savePrevName"
              :next-available="!!saveNextName"
              @back="onDetailBack"
              @form-select="onFormDot"
              @prev="onSavePrev"
              @next="onSaveNext"
            />
          </template>

          <ImportSaveView
            v-else-if="view === 'import-save'"
            :status="saveStatus"
            :file-name="saveFileName || null"
            :status-message="saveStatusMessage"
            @file="onImportFile"
          />

          <ConfigureView
            v-else-if="view === 'configure-pokemon'"
            :summaries="saveSummaries"
            :save-id="saveId"
            :drafts="drafts"
            :file-name="saveFileName"
            :initial-key="configureInitialKey"
            @open-detail="onConfigDetail"
            @review="view = 'review-changes'"
            @change-file="view = 'import-save'"
          />

          <ReviewChangesView
            v-else-if="view === 'review-changes'"
            :summaries="saveSummaries"
            :drafts="drafts"
            :bytes="saveBytes"
            @back="view = 'configure-pokemon'"
            @edit="onReviewEdit"
            @done="view = 'import-save'"
          />
        </main>
      </div>
    </div>
  </div>
</template>
