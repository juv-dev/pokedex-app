import type { RecommendedSet } from './recommendedSet'
import type { InstanceLocation } from './instanceKey'

export interface PokemonDraft {
  saveId: string
  instanceKey: string
  location: InstanceLocation
  speciesId: string
  selectedFormId: string
  favorite: boolean
  recommendedSet: RecommendedSet
  reviewState: 'pending' | 'reviewed'
  updatedAt: number
}

export interface DraftBackend {
  get(key: string): Promise<PokemonDraft | null>
  put(key: string, draft: PokemonDraft): Promise<void>
  list(saveId: string): Promise<PokemonDraft[]>
  remove(key: string): Promise<void>
  clearSave(saveId: string): Promise<void>
}

export function draftKey(saveId: string, instanceKey: string): string {
  return `${saveId}::${instanceKey}`
}

export class MemoryBackend implements DraftBackend {
  private map = new Map<string, PokemonDraft>()

  async get(key: string): Promise<PokemonDraft | null> {
    return this.map.get(key) ?? null
  }
  async put(key: string, draft: PokemonDraft): Promise<void> {
    this.map.set(key, { ...draft })
  }
  async list(saveId: string): Promise<PokemonDraft[]> {
    return [...this.map.values()].filter(draft => draft.saveId === saveId).map(draft => ({ ...draft }))
  }
  async remove(key: string): Promise<void> {
    this.map.delete(key)
  }
  async clearSave(saveId: string): Promise<void> {
    for (const [key, draft] of this.map) {
      if (draft.saveId === saveId) this.map.delete(key)
    }
  }
}

const DB_NAME = 'anil-dex-drafts'
const STORE = 'drafts'
const SAVE_INDEX = 'bySave'

interface DraftRow {
  key: string
  saveId: string
  draft: PokemonDraft
}

function requestAsPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export class IdbBackend implements DraftBackend {
  private dbPromise: Promise<IDBDatabase> | null = null

  private open(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise
    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1)
      request.onupgradeneeded = () => {
        const db = request.result
        if (!db.objectStoreNames.contains(STORE)) {
          const store = db.createObjectStore(STORE, { keyPath: 'key' })
          store.createIndex(SAVE_INDEX, 'saveId', { unique: false })
        }
      }
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
    return this.dbPromise
  }

  private async store(mode: IDBTransactionMode): Promise<IDBObjectStore> {
    const db = await this.open()
    return db.transaction(STORE, mode).objectStore(STORE)
  }

  async get(key: string): Promise<PokemonDraft | null> {
    const row = await requestAsPromise<DraftRow | undefined>((await this.store('readonly')).get(key))
    return row?.draft ?? null
  }

  async put(key: string, draft: PokemonDraft): Promise<void> {
    const row: DraftRow = { key, saveId: draft.saveId, draft }
    await requestAsPromise((await this.store('readwrite')).put(row))
  }

  async list(saveId: string): Promise<PokemonDraft[]> {
    const store = await this.store('readonly')
    const rows = await requestAsPromise<DraftRow[]>(store.index(SAVE_INDEX).getAll(saveId))
    return (rows ?? []).map(row => row.draft)
  }

  async remove(key: string): Promise<void> {
    await requestAsPromise((await this.store('readwrite')).delete(key))
  }

  async clearSave(saveId: string): Promise<void> {
    const db = await this.open()
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      const cursorRequest = tx.objectStore(STORE).index(SAVE_INDEX).openCursor(IDBKeyRange.only(saveId))
      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result
        if (cursor) {
          cursor.delete()
          cursor.continue()
        }
      }
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
      tx.onabort = () => reject(tx.error)
    })
  }
}

export function createDraftBackend(): DraftBackend {
  return typeof indexedDB !== 'undefined' ? new IdbBackend() : new MemoryBackend()
}
