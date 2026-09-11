<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: number
  totalPages: number
  pageSize: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const rangeLabel = computed(() => {
  if (props.total === 0) return 'Sin resultados'
  const from = (props.page - 1) * props.pageSize + 1
  const to = Math.min(props.page * props.pageSize, props.total)
  return `${from}–${to} de ${props.total}`
})

const pages = computed<Array<number | '…'>>(() => {
  const last = props.totalPages
  if (last <= 7) return Array.from({ length: last }, (_, i) => i + 1)
  const around = [props.page - 1, props.page, props.page + 1].filter(p => p > 1 && p < last)
  const out: Array<number | '…'> = [1]
  if (around[0] && around[0] > 2) out.push('…')
  out.push(...around)
  if (around[around.length - 1] && around[around.length - 1] < last - 1) out.push('…')
  out.push(last)
  return out
})

function go(p: number): void {
  if (p >= 1 && p <= props.totalPages && p !== props.page) emit('update:page', p)
}
</script>

<template>
  <div class="cfg-pager">
    <span class="cfg-pager-range">{{ rangeLabel }}</span>

    <div v-if="totalPages > 1" class="cfg-pager-nav">
      <button type="button" :disabled="page <= 1" aria-label="Página anterior" @click="go(page - 1)">‹</button>
      <button
        v-for="(p, i) in pages" :key="i" type="button"
        class="cfg-pager-num" :class="{ 'is-active': p === page, 'is-gap': p === '…' }"
        :disabled="p === '…'"
        @click="typeof p === 'number' && go(p)"
      >{{ p }}</button>
      <button type="button" :disabled="page >= totalPages" aria-label="Página siguiente" @click="go(page + 1)">›</button>
    </div>
  </div>
</template>

<style scoped>
.cfg-pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 4px;
  font-size: 8px;
  color: var(--pk-muted-2);
}
.cfg-pager-range { font-variant-numeric: tabular-nums; }
.cfg-pager-nav { display: inline-flex; gap: 5px; margin-left: auto; }
.cfg-pager-nav button {
  font: inherit;
  font-size: 8px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  padding: 0;
  color: var(--pk-muted);
  background: #211D3B;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-variant-numeric: tabular-nums;
}
.cfg-pager-nav button:hover:not(:disabled) { color: var(--pk-text); }
.cfg-pager-nav button:disabled { opacity: .35; cursor: default; }
.cfg-pager-num.is-active {
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
}
.cfg-pager-num.is-gap { background: transparent; cursor: default; }
</style>
