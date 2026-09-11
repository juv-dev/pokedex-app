import { reactive, ref } from 'vue'
import { createDraftBackend, draftKey, type DraftBackend, type PokemonDraft } from '../lib/draftStore'

export type DraftSaveState = 'idle' | 'saving' | 'saved' | 'error'

/** Reactive per-instance drafts for the active save, with a per-instance save state. */
export function usePokemonDrafts(backend: DraftBackend = createDraftBackend()) {
  const drafts = reactive(new Map<string, PokemonDraft>())
  const saveState = reactive(new Map<string, DraftSaveState>())
  const activeSaveId = ref('')

  /**
   * Los borradores son de la sesión: al abrir una partida se parte de cero y se descarta
   * cualquier borrador viejo que hubiera quedado persistido para ese `saveId`.
   */
  async function loadSave(saveId: string): Promise<void> {
    activeSaveId.value = saveId
    drafts.clear()
    saveState.clear()
    try {
      await backend.clearSave(saveId)
    } catch {
      /* sin persistencia previa que limpiar */
    }
  }

  async function saveDraft(draft: PokemonDraft): Promise<void> {
    const next: PokemonDraft = { ...draft, updatedAt: Date.now() }
    drafts.set(next.instanceKey, next)
    saveState.set(next.instanceKey, 'saving')
    try {
      await backend.put(draftKey(next.saveId, next.instanceKey), next)
      saveState.set(next.instanceKey, 'saved')
    } catch {
      saveState.set(next.instanceKey, 'error')
    }
  }

  async function removeDraft(instanceKey: string): Promise<void> {
    const existing = drafts.get(instanceKey)
    drafts.delete(instanceKey)
    saveState.delete(instanceKey)
    if (!existing) return
    try {
      await backend.remove(draftKey(existing.saveId, instanceKey))
    } catch {
      /* la copia local ya se quitó; el backend se reconcilia en la próxima carga */
    }
  }

  async function clearAll(): Promise<void> {
    const saveId = activeSaveId.value
    drafts.clear()
    saveState.clear()
    if (!saveId) return
    try {
      await backend.clearSave(saveId)
    } catch {
      /* la copia local ya se limpió; el backend se reconcilia en la próxima carga */
    }
  }

  function getDraft(instanceKey: string): PokemonDraft | undefined {
    return drafts.get(instanceKey)
  }

  function stateOf(instanceKey: string): DraftSaveState {
    return saveState.get(instanceKey) ?? 'idle'
  }

  return { drafts, saveState, activeSaveId, loadSave, saveDraft, removeDraft, clearAll, getDraft, stateOf }
}
