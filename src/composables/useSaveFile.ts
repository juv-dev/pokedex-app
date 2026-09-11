import { computed, ref } from 'vue'
import { readSaveFile } from '../lib/marshal'
import { mapPool } from '../lib/engine'
import { fetchTeamSummary, type TeamSummary } from '../lib/team'
import { buildRoster, type RosterEntry, type TeamSlotMon } from '../lib/roster'
import { saveIdOf } from '../lib/instanceKey'

export type SaveStatus =
  | 'sin-archivo'
  | 'analizando'
  | 'analizada'
  | 'incompatible'
  | 'error-lectura'
  | 'corrupto'

const STATUS_MESSAGE: Record<SaveStatus, string> = {
  'sin-archivo': '',
  'analizando': 'Leyendo y analizando el archivo de partida…',
  'analizada': '',
  'incompatible': 'El archivo no contiene Pokémon o es de una versión de Essentials no compatible.',
  'error-lectura': 'No se pudo leer el archivo. ¿Es un .rxdata válido de Pokémon Essentials?',
  'corrupto': 'El archivo parece incompleto o dañado y no se pudo terminar de leer.'
}

function classifyReadError(error: unknown): Extract<SaveStatus, 'incompatible' | 'error-lectura' | 'corrupto'> {
  const message = error instanceof Error ? error.message : ''
  if (/Formato Marshal no reconocido|major/i.test(message)) return 'incompatible'
  if (/desconocido|posici[oó]n|undefined reading|Cannot read/i.test(message)) return 'corrupto'
  return 'error-lectura'
}

function toSlotMon(summary: TeamSummary): TeamSlotMon {
  return {
    internalName: summary.internalName,
    sprite: summary.sprite,
    num: summary.dexNum != null ? '#' + String(summary.dexNum).padStart(3, '0') : '#—',
    name: summary.nickname || summary.displayName,
    level: summary.level,
    types: summary.types
  }
}

/** Single source of truth for the loaded save: bytes, summaries and every derived view. */
export function useSaveFile() {
  const fileName = ref('')
  const bytes = ref<Uint8Array | null>(null)
  const summaries = ref<TeamSummary[]>([])
  const status = ref<SaveStatus>('sin-archivo')

  const loaded = computed(() => summaries.value.length > 0)
  const statusMessage = computed(() => STATUS_MESSAGE[status.value])
  const saveId = computed(() => (loaded.value ? saveIdOf(fileName.value, summaries.value) : ''))
  const roster = computed<RosterEntry[]>(() => buildRoster(summaries.value))
  const ownedInternalNames = computed(() => Array.from(new Set(summaries.value.map(s => s.internalName.toUpperCase()))))
  const party = computed(() => summaries.value.filter(s => s.inParty))
  const teamMons = computed<Array<TeamSlotMon | null>>(() =>
    Array.from({ length: 6 }, (_, i) => (party.value[i] ? toSlotMon(party.value[i]!) : null))
  )

  function reset(): void {
    bytes.value = null
    summaries.value = []
    status.value = 'sin-archivo'
  }

  async function readFile(file: File): Promise<void> {
    fileName.value = file.name
    reset()
    status.value = 'analizando'
    try {
      bytes.value = new Uint8Array(await file.arrayBuffer())
      const found = await readSaveFile(file)
      if (!found.length) {
        status.value = 'incompatible'
        return
      }
      const results = await mapPool(found, 8, p => fetchTeamSummary(p))
      summaries.value = results.filter((s): s is TeamSummary => s !== null)
      status.value = summaries.value.length ? 'analizada' : 'incompatible'
    } catch (error) {
      bytes.value = null
      status.value = classifyReadError(error)
    }
  }

  return {
    fileName, bytes, summaries, status, statusMessage,
    loaded, saveId, roster, ownedInternalNames, teamMons,
    readFile, reset
  }
}
