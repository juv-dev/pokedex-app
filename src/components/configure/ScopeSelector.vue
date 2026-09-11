<script setup lang="ts">
import { computed } from 'vue'

export type Scope = 'all' | 'team' | 'box'

const props = defineProps<{
  scope: Scope
  box: number | 'all'
  boxes: Array<{ index: number; label: string }>
  counts?: { all: number; team: number; box: number }
  pending?: { count: number; active: boolean }
  evo?: { count: number; active: boolean }
}>()

const emit = defineEmits<{
  (e: 'update:scope', value: Scope): void
  (e: 'update:box', value: number | 'all'): void
  (e: 'toggle-pending'): void
  (e: 'toggle-evo'): void
}>()

const showPending = computed(() => !!props.pending && props.pending.count > 0)
const showEvo = computed(() => !!props.evo && props.evo.count > 0)

const options: Array<{ value: Scope; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'team', label: 'Equipo actual' },
  { value: 'box', label: 'Cajas' }
]

function countFor(value: Scope): number | null {
  return props.counts ? props.counts[value] : null
}

const boxValue = computed({
  get: () => props.box,
  set: (v) => emit('update:box', v === 'all' ? 'all' : Number(v))
})
</script>

<template>
  <div class="cfg-scope-wrap">
    <div class="cfg-scope" role="tablist" aria-label="Alcance del listado">
      <button
        v-for="o in options" :key="o.value" type="button" role="tab"
        class="cfg-scope-tab" :class="{ 'is-active': scope === o.value }"
        :aria-selected="scope === o.value"
        @click="emit('update:scope', o.value)"
      >
        <span class="cfg-scope-ico" aria-hidden="true">
          <svg v-if="o.value === 'all'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <svg v-else-if="o.value === 'team'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="5" rx="1" /><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M10 13h4" />
          </svg>
        </span>
        <span class="cfg-scope-name">{{ o.label }}</span>
        <span v-if="countFor(o.value) !== null" class="cfg-scope-count">{{ countFor(o.value) }}</span>
      </button>

      <button
        v-if="showPending" type="button" role="tab"
        class="cfg-scope-tab cfg-scope-tab--pending" :class="{ 'is-active': pending!.active }"
        :aria-selected="pending!.active"
        @click="emit('toggle-pending')"
      >
        <span class="cfg-scope-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
          </svg>
        </span>
        <span class="cfg-scope-name">Pendientes</span>
        <span class="cfg-scope-count">{{ pending!.count }}</span>
      </button>

      <button
        v-if="showEvo" type="button" role="tab"
        class="cfg-scope-tab" :class="{ 'is-active': evo!.active }"
        :aria-selected="evo!.active"
        @click="emit('toggle-evo')"
      >
        <span class="cfg-scope-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21V9M12 9l-4 4M12 9l4 4M12 5c2 0 5-1 5-3 0 0-3 0-5 2-2-2-5-2-5-2 0 2 3 3 5 3z" />
          </svg>
        </span>
        <span class="cfg-scope-name">Sin evolucionar</span>
        <span class="cfg-scope-count">{{ evo!.count }}</span>
      </button>
    </div>

    <label v-if="scope === 'box'" class="cfg-scope-box">
      <span class="cfg-scope-box-label">Caja</span>
      <select v-model="boxValue" aria-label="Filtrar por caja">
        <option value="all">Todas las cajas</option>
        <option v-for="b in boxes" :key="b.index" :value="b.index">{{ b.label }}</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.cfg-scope-wrap { display: flex; flex-direction: column; gap: 8px; }
.cfg-scope {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 5px;
  min-height: 44px;
  padding: 5px;
  border-radius: 11px;
  background: #121027;
  outline: 1px solid #302D4B;
  outline-offset: -0.5px;
}
.cfg-scope-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font: inherit;
  font-size: 10px;
  font-weight: 700;
  color: var(--pk-muted);
  background: #1B1835;
  border: none;
  outline: 1px solid #1B1835;
  outline-offset: -0.5px;
  border-radius: 8px;
  cursor: pointer;
  transition: background .14s ease, color .14s ease, outline-color .14s ease;
}
.cfg-scope-tab.is-active {
  color: var(--pk-text);
  background: #294239;
  outline-color: #4F9A7F;
}
.cfg-scope-tab--pending.is-active {
  background: #3a3320;
  outline-color: #7D6540;
}
.cfg-scope-tab--pending.is-active .cfg-scope-ico { color: var(--warn, #f4b447); }
.cfg-scope-tab--pending.is-active .cfg-scope-count { background: #45391F; color: var(--warn, #f4b447); }
.cfg-scope-ico { display: inline-flex; }
.cfg-scope-ico svg { width: 14px; height: 14px; }
.cfg-scope-tab.is-active .cfg-scope-ico { color: var(--pk-mint); }
.cfg-scope-count {
  font-size: 8px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 6px;
  background: #26233F;
  color: var(--pk-muted-2);
}
.cfg-scope-tab.is-active .cfg-scope-count { background: #173A35; color: var(--pk-mint); }
.cfg-scope-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: var(--pk-muted);
}
.cfg-scope-box select {
  font: inherit;
  font-size: 10px;
  color: var(--pk-text);
  background: #211D3B;
  border: none;
  outline: 1px solid #302D4B;
  outline-offset: -0.5px;
  border-radius: 9px;
  padding: 8px 12px;
}
</style>
