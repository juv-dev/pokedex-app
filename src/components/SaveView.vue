<script setup lang="ts">
import { computed, ref } from 'vue'
import { readSaveFile, type FoundPokemon } from '../lib/marshal'
import { fetchTeamSummary, type TeamSummary } from '../lib/team'
import { mapPool } from '../lib/engine'
import { uniqueOwnedInternalNames } from '../lib/collection'
import ReaderStatus, { type ReaderState } from './save/ReaderStatus.vue'
import FileDropzone, { type DropzoneState } from './save/FileDropzone.vue'
import TeamPreview from './save/TeamPreview.vue'
import type { TeamSlotMon } from './save/TeamSlot.vue'

/**
 * Pantalla "Mi partida" (referencia pen.dev Tquft): lector de .rxdata con estado del lector,
 * zona de carga y vista previa del equipo. Toda la lectura reutiliza `marshal` / `team`; el
 * archivo se procesa en el navegador y nunca se sube a un servidor.
 */
export interface RosterEntry {
  internalName: string
  num: string
  name: string
  sprite: string
  types: string[]
  where: string
  inParty: boolean
  boxIndex: number | null
  boxLabel: string
}

const emit = defineEmits<{
  (e: 'owned-change', internalNames: string[]): void
  (e: 'roster-change', roster: RosterEntry[]): void
  (e: 'team-mons', slots: Array<TeamSlotMon | null>): void
  (e: 'file-name', name: string): void
  (e: 'summaries-change', summaries: TeamSummary[]): void
  (e: 'select', internalName: string): void
}>()

const fileName = ref('')
const status = ref('')
const statusIsError = ref(false)
const loading = ref(false)
const summaries = ref<TeamSummary[]>([])

function paintFrame(): Promise<void> {
  if (typeof requestAnimationFrame !== 'function') return Promise.resolve()
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
}

const party = computed(() => summaries.value.filter(s => s.inParty))
const ownedInternalNames = computed(() => uniqueOwnedInternalNames(summaries.value))

function toSlotMon(s: TeamSummary): TeamSlotMon {
  return {
    internalName: s.internalName,
    sprite: s.sprite,
    num: s.dexNum != null ? '#' + String(s.dexNum).padStart(3, '0') : '#—',
    name: s.nickname || s.displayName,
    level: s.level,
    types: s.types
  }
}
const teamMons = computed<Array<TeamSlotMon | null>>(() =>
  Array.from({ length: 6 }, (_, i) => (party.value[i] ? toSlotMon(party.value[i]!) : null))
)

const roster = computed<RosterEntry[]>(() => {
  const list = [...summaries.value].sort((a, b) => {
    if (a.inParty !== b.inParty) return a.inParty ? -1 : 1
    return (a.boxIndex ?? 999) - (b.boxIndex ?? 999)
  })
  return list.map((s, i) => {
    const boxLabel = s.inParty ? 'Equipo' : (s.boxName || `Caja ${(s.boxIndex ?? 0) + 1}`)
    return {
      internalName: s.internalName,
      num: s.dexNum != null ? '#' + String(s.dexNum).padStart(3, '0') : '#' + String(i + 1).padStart(3, '0'),
      name: s.nickname || s.displayName,
      sprite: s.sprite,
      types: s.types,
      where: boxLabel,
      inParty: s.inParty,
      boxIndex: s.inParty ? null : s.boxIndex,
      boxLabel
    }
  })
})

const readerState = computed<ReaderState>(() => {
  if (loading.value) return 'reading'
  if (statusIsError.value) return 'error'
  return summaries.value.length ? 'done' : 'idle'
})
const dropzoneState = computed<DropzoneState>(() => {
  if (loading.value) return 'loading'
  if (statusIsError.value) return 'error'
  return summaries.value.length ? 'success' : 'idle'
})

const loaded = computed(() => summaries.value.length > 0)

async function onFile(file: File) {
  await processFile(file)
}
async function onChangeFile(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) await processFile(file)
  input.value = ''
}

async function processFile(file: File) {
  fileName.value = file.name
  emit('file-name', file.name)
  summaries.value = []
  emit('owned-change', [])
  emit('roster-change', [])
  emit('team-mons', teamMons.value)
  emit('summaries-change', [])
  status.value = 'Leyendo y analizando el archivo de partida…'
  statusIsError.value = false
  loading.value = true
  await paintFrame()
  try {
    const found = await readSaveFile(file)
    if (!found.length) {
      status.value = 'No se encontraron Pokémon en ese archivo.'
      statusIsError.value = true
      return
    }
    await loadSummaries(found)
    status.value = `${summaries.value.length} Pokémon leídos de tu partida (equipo + caja PC).`
  } catch {
    status.value = 'No se pudo leer el archivo. ¿Es un .rxdata válido de Pokémon Essentials?'
    statusIsError.value = true
  } finally {
    loading.value = false
  }
}

async function loadSummaries(pokemons: FoundPokemon[]) {
  const results = await mapPool(pokemons, 8, p => fetchTeamSummary(p))
  summaries.value = results.filter((s): s is TeamSummary => s !== null)
  emit('owned-change', ownedInternalNames.value)
  emit('roster-change', roster.value)
  emit('team-mons', teamMons.value)
  emit('summaries-change', summaries.value)
}
</script>

<template>
  <div class="mp-screen">
    <nav class="mp-crumbs" aria-label="Ruta">
      <span class="mp-crumb-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M7 12h.01M11 12h.01M17 10l2 2-2 2M15 12H9" />
        </svg>
      </span>
      <span>Mi partida</span>
      <span class="mp-crumb-sep">/</span>
      <span class="mp-crumb-cur">{{ loaded ? 'Equipo' : 'Importar archivo' }}</span>
      <span class="mp-badge" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3l7 4v5c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V7z" /><path d="M9 12l2 2 4-4" />
        </svg>
        Procesado localmente
      </span>
    </nav>

    <div v-if="!loaded" class="mp-import-grid">
      <ReaderStatus :state="readerState" :file-name="fileName || null" :error-msg="statusIsError ? status : null" />
      <FileDropzone
        :state="dropzoneState"
        :status-msg="status || null"
        @file="onFile"
      />
    </div>

    <div v-else class="mp-loaded">
      <span class="mp-loaded-check" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4L19 7" /></svg>
      </span>
      <div class="mp-loaded-body">
        <span class="mp-loaded-title">Partida cargada</span>
        <span class="mp-loaded-sub">{{ fileName }} · {{ summaries.length }} Pokémon · lectura offline</span>
      </div>
      <label class="mp-loaded-btn" for="mpChangeFile">Cambiar archivo</label>
      <input id="mpChangeFile" class="mp-drop-input" type="file" accept=".rxdata,.bak" @change="onChangeFile">
    </div>

    <TeamPreview :slots="teamMons" :loading="loading" @select="name => emit('select', name)" />
  </div>
</template>
