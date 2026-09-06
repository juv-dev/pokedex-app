<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DexNode, CompetitiveSet, MoveDetail, LoadedTemplateSet, TemplateCardVM } from './lib/types'
import {
  buildAnilNodes, computeSet, pickItem, pickMoveset,
  movesDetailedFromPool, familyOrderedSpeciesKeys
} from './lib/engine'
import { findRootInternalName, allAnilSpecies, getAnilAbilityDetail } from './lib/anilData'
import { resolveCompetitiveTemplate, buildGameData } from './lib/templateRegistry'
import { toCardVM, heuristicToCardVM } from './lib/templateView'
import { PHYSICAL_BOOSTS, SPECIAL_BOOSTS } from './lib/constants'
import { hudThemeVars } from './hudTheme'
import { loadInternalNames, markInternalName, saveInternalNames } from './lib/collection'
import { fetchTeamDetail, type TeamSummary } from './lib/team'
import AppHeader from './components/AppHeader.vue'
import DexRail from './components/DexRail.vue'
import PokemonSheet from './components/sheet/PokemonSheet.vue'
import SaveView, { type RosterEntry } from './components/SaveView.vue'
import TeamSidebar from './components/save/TeamSidebar.vue'
import SaveRosterSidebar from './components/save/SaveRosterSidebar.vue'
import type { TeamSlotMon } from './components/save/TeamSlot.vue'

const DEX_SEEN_STORAGE_KEY = 'anil-dex.seen-species.v1'

const view = ref<'dex' | 'save'>('dex')
const saveDetailOpen = ref(false)
const searchTerm = ref('')
const seenInternalNames = ref(loadInternalNames(DEX_SEEN_STORAGE_KEY))
const ownedInternalNames = ref<string[]>([])
const saveRoster = ref<RosterEntry[]>([])
const saveTeamMons = ref<Array<TeamSlotMon | null>>([])
const saveFileName = ref('')
const saveSummaries = ref<TeamSummary[]>([])
const saveDetailEvs = ref<number[] | null>(null)
const saveDetailIvs = ref<number[] | null>(null)
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

function onRailSelect(internalName: string) {
  const inSave = view.value === 'save'
  if (inSave) {
    saveDetailOpen.value = true
    loadSaveDetail(internalName)
  }
  searchAndSelect(internalName, inSave)
}

function loadSaveDetail(internalName: string) {
  saveDetailEvs.value = null
  saveDetailIvs.value = null
  const summary = saveSummaries.value.find(s => s.internalName === internalName)
  if (!summary) return
  const token = ++saveDetailToken
  fetchTeamDetail(summary)
    .then(detail => {
      if (token !== saveDetailToken) return
      saveDetailEvs.value = detail.evs
      saveDetailIvs.value = detail.ivs
    })
    .catch(() => { /* datos de partida opcionales */ })
}

function onViewChange(v: 'dex' | 'save') {
  view.value = v
  if (v === 'dex') {
    saveDetailOpen.value = false
    searchAndSelect(dexTarget.value)
  } else if (saveTarget.value) {
    saveDetailOpen.value = true
    loadSaveDetail(saveTarget.value)
    searchAndSelect(saveTarget.value, true)
  } else {
    saveDetailOpen.value = false
  }
}

async function searchAndSelect(internalName: string, keepSaveView = false) {
  if (keepSaveView) saveTarget.value = internalName
  else { view.value = 'dex'; dexTarget.value = internalName }
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

/** Nombre a resaltar en el índice: la especie base cuando el nodo activo es una mega/forma. */
const railActiveName = computed(() => {
  const n = activeNode.value
  if (!n) return null
  return n.stageKind === 'mega' ? (nodes.value?.[0]?.internalName ?? n.internalName) : n.internalName
})

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
function onStripPrev() { if (stripPrevName.value) searchAndSelect(stripPrevName.value) }
function onStripNext() { if (stripNextName.value) searchAndSelect(stripNextName.value) }

/** Anterior / Siguiente dentro del equipo y las cajas de la partida, en el orden del roster. */
const saveOrder = computed(() => saveRoster.value.map(r => r.internalName))
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
function onSavePrev() { if (savePrevName.value) onRailSelect(savePrevName.value) }
function onSaveNext() { if (saveNextName.value) onRailSelect(saveNextName.value) }

function onOwnedChange(internalNames: string[]) { ownedInternalNames.value = internalNames }
function onRosterChange(roster: RosterEntry[]) { saveRoster.value = roster }
function onTeamMons(slots: Array<TeamSlotMon | null>) { saveTeamMons.value = slots }
function onFileName(name: string) { saveFileName.value = name }
function onSummariesChange(list: TeamSummary[]) { saveSummaries.value = list }

const totalSpecies = Object.keys(allAnilSpecies()).length
const ownedCount = computed(() => ownedInternalNames.value.length)

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
        :view="view"
        @update:view="onViewChange"
        @select="searchAndSelect"
        @search="searchTerm = $event"
      />

      <div class="hud-body">
        <DexRail
          v-if="view === 'dex'"
          :active-internal-name="railActiveName"
          :search-term="searchTerm"
          @select="onRailSelect"
        />
        <SaveRosterSidebar
          v-else-if="saveRoster.length"
          :roster="saveRoster"
          :active-internal-name="activeNode?.internalName || null"
          :owned-count="ownedCount"
          :total="totalSpecies"
          @select="onRailSelect"
        />
        <TeamSidebar
          v-else
          :slots="saveTeamMons"
          :file-name="saveFileName || null"
          read-state="Offline"
          :active-internal-name="activeNode?.internalName || null"
          @select="onRailSelect"
        />

        <main class="hud-main">
          <template v-if="view === 'dex'">
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
              @form-select="onFormDot"
              @prev="onStripPrev"
              @next="onStripNext"
            />
          </template>

          <template v-else-if="saveDetailOpen">
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
              :prev-available="!!savePrevName"
              :next-available="!!saveNextName"
              @back="saveDetailOpen = false"
              @form-select="onFormDot"
              @prev="onSavePrev"
              @next="onSaveNext"
            />
          </template>

          <div v-show="view === 'save'">
            <SaveView
              v-show="view === 'save' && !saveDetailOpen"
              @owned-change="onOwnedChange"
              @roster-change="onRosterChange"
              @team-mons="onTeamMons"
              @file-name="onFileName"
              @summaries-change="onSummariesChange"
              @select="onRailSelect"
            />
          </div>
        </main>
      </div>

      <footer class="hud-foot-note">
        Sprites, stats, evoluciones y movepool: PokéAPI · Sets competitivos calculados 100% offline, sin IA en tiempo real
      </footer>
    </div>
  </div>
</template>
