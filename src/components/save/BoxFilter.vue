<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectRoot, SelectTrigger, SelectValue, SelectIcon,
  SelectPortal, SelectContent, SelectViewport, SelectItem, SelectItemText, SelectItemIndicator
} from 'reka-ui'

const props = defineProps<{
  boxes: Array<{ value: number; label: string }>
  model: number | 'all'
}>()

const emit = defineEmits<{ (e: 'update:model', value: number | 'all'): void }>()

const selected = computed<string>({
  get: () => (props.model === 'all' ? 'all' : String(props.model)),
  set: (v) => emit('update:model', v === 'all' ? 'all' : Number(v))
})

const currentLabel = computed(() =>
  props.model === 'all'
    ? 'Todas las cajas'
    : props.boxes.find(b => b.value === props.model)?.label ?? 'Caja'
)
</script>

<template>
  <div class="mp-boxfilter">
    <button
      type="button" class="mp-boxfilter-all"
      :class="{ 'is-active': model === 'all' }" :aria-pressed="model === 'all'"
      @click="emit('update:model', 'all')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <line x1="4" y1="7" x2="20" y2="7" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="17" x2="14" y2="17" />
      </svg>
      Todos
    </button>

    <SelectRoot v-model="selected">
      <SelectTrigger class="mp-boxfilter-box" :class="{ 'is-active': model !== 'all' }" aria-label="Filtrar por caja">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M3 8v8l9 4 9-4V8" />
        </svg>
        <SelectValue class="mp-boxfilter-value" placeholder="Todas las cajas">{{ currentLabel }}</SelectValue>
        <SelectIcon class="mp-boxfilter-chev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent class="mp-select-content" position="popper" :side-offset="6">
          <SelectViewport class="mp-select-viewport">
            <SelectItem value="all" class="mp-select-item">
              <SelectItemIndicator class="mp-select-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4L19 7" /></svg>
              </SelectItemIndicator>
              <SelectItemText>Todas las cajas</SelectItemText>
            </SelectItem>
            <SelectItem v-for="b in boxes" :key="b.value" :value="String(b.value)" class="mp-select-item">
              <SelectItemIndicator class="mp-select-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4L19 7" /></svg>
              </SelectItemIndicator>
              <SelectItemText>{{ b.label }}</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
