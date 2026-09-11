<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TemplateDiff, DiffField } from '../../lib/types'

const props = defineProps<{ diff: TemplateDiff | null }>()

const open = ref(false)

const FIELD_LABEL: Record<DiffField, string> = {
  nature: 'Naturaleza',
  ability: 'Habilidad',
  item: 'Objeto',
  evs: 'EVs',
  ivs: 'IVs',
  move: 'Movimiento'
}

const rows = computed(() => props.diff?.rows.filter(r => r.status !== 'match') ?? [])
const changeCount = computed(() => rows.value.length)
</script>

<template>
  <section v-if="diff" class="setcmp">
    <button type="button" class="setcmp-toggle" :aria-expanded="open" @click="open = !open">
      <svg class="setcmp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 8l-4 4 4 4M3 12h13M17 16l4-4-4-4M21 12H8" />
      </svg>
      <span>Comparar con set óptimo</span>
      <span class="setcmp-count">{{ changeCount === 0 ? 'sin diferencias' : changeCount + ' cambios' }}</span>
      <svg class="setcmp-chev" :class="{ 'is-open': open }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
    </button>

    <div v-if="open" class="setcmp-body">
      <p v-if="!rows.length" class="setcmp-empty">Este ejemplar ya coincide con el set óptimo.</p>
      <table v-else class="setcmp-table">
        <thead>
          <tr><th>Campo</th><th>Ahora</th><th>Set óptimo</th></tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="i" :class="'is-' + r.status">
            <td>{{ FIELD_LABEL[r.field] }}<template v-if="r.keyLabel"> · {{ r.keyLabel }}</template></td>
            <td>{{ r.savedValue }}</td>
            <td>{{ r.templateValue }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="rows.some(r => r.detail)" class="setcmp-notes">
        <span v-for="(r, i) in rows.filter(x => x.detail)" :key="i">{{ r.detail }} </span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.setcmp {
  border: 1px solid rgba(125, 255, 196, .22);
  border-radius: var(--rad-md, 14px);
  background: rgba(125, 255, 196, .05);
  overflow: hidden;
}
.setcmp-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  font: inherit;
  font-family: var(--font-ui);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ok, #7dffc4);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
}
.setcmp-ico { width: 15px; height: 15px; flex: 0 0 auto; }
.setcmp-count {
  margin-left: auto;
  font-weight: 500;
  font-size: 11px;
  color: rgba(210, 216, 255, .55);
}
.setcmp-chev { width: 15px; height: 15px; transition: transform .18s ease; }
.setcmp-chev.is-open { transform: rotate(180deg); }
.setcmp-body { padding: 0 14px 14px; }
.setcmp-empty { margin: 0; font-size: 12px; color: rgba(210, 216, 255, .55); }
.setcmp-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: 11.5px;
}
.setcmp-table th, .setcmp-table td {
  text-align: left;
  padding: 5px 8px;
  border-bottom: 1px solid var(--bd-soft, rgba(255, 255, 255, .08));
}
.setcmp-table th { font-family: var(--font-ui); font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: rgba(210, 216, 255, .45); }
.setcmp-table td:first-child { color: rgba(210, 216, 255, .7); }
.setcmp-table tr.is-differs td:nth-child(2) { color: var(--danger, #ff8a7a); }
.setcmp-table tr.is-acceptable-variant td:nth-child(2) { color: var(--warn, #f4b447); }
.setcmp-table tr.is-differs td:last-child, .setcmp-table tr.is-acceptable-variant td:last-child { color: var(--ok, #7dffc4); }
.setcmp-notes { margin: 8px 0 0; font-size: 11px; line-height: 1.5; color: rgba(210, 216, 255, .55); }
</style>
