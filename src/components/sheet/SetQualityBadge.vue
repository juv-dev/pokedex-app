<script setup lang="ts">
import { computed } from 'vue'
import { qualityLabel, type QualityTier } from '../../lib/buildScore'

const props = defineProps<{
  score: number
  tier: QualityTier
  improvements?: number
}>()

const label = computed(() => qualityLabel(props.tier))
const rangeHint = computed(() =>
  props.tier === 'optimo' ? '90–100' : props.tier === 'viable' ? '70–89' : '0–69'
)
const subline = computed(() => {
  if (props.improvements == null) return null
  if (props.improvements === 0) return 'Set alineado con el óptimo · sin mejoras pendientes.'
  return `Set utilizable · ${props.improvements} mejora${props.improvements === 1 ? '' : 's'} para alcanzar el óptimo.`
})
</script>

<template>
  <section class="setq" :class="'setq--' + tier" aria-label="Evaluación del set actual">
    <div class="setq-head">
      <span class="setq-eyebrow">Evaluación del set actual</span>
      <span class="setq-badge">
        <span class="setq-dot" aria-hidden="true"></span>
        <span class="setq-tier">{{ label }}</span>
        <span class="setq-score">{{ score }}<span class="setq-max">/100</span></span>
      </span>
    </div>
    <p v-if="subline" class="setq-sub">{{ subline }}</p>
    <span class="setq-range">Calidad del set · {{ rangeHint }}</span>
  </section>
</template>

<style scoped>
.setq {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border-radius: var(--rad-lg, 20px);
  border: 1px solid var(--bd-soft, rgba(255, 255, 255, .1));
  border-top-color: var(--bd-soft-top, rgba(255, 255, 255, .24));
  background: linear-gradient(160deg, rgba(52, 47, 111, .28), rgba(20, 18, 45, .6));
}
.setq-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-3, 12px);
  flex-wrap: wrap;
}
.setq-eyebrow {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(215, 220, 255, .55);
}
.setq-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: var(--rad-pill, 999px);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  border: 1px solid currentColor;
}
.setq-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
.setq-score { font-variant-numeric: tabular-nums; }
.setq-max { opacity: .55; }
.setq-sub { margin: 0; font-size: 12px; color: rgba(210, 216, 255, .62); }
.setq-range { font-size: 10.5px; color: rgba(210, 216, 255, .45); }
.setq--optimo .setq-badge { color: var(--ok, #7dffc4); background: var(--ok-soft, rgba(125, 255, 196, .14)); }
.setq--viable .setq-badge { color: var(--warn, #f4b447); background: rgba(244, 180, 71, .14); }
.setq--ajustes .setq-badge { color: var(--danger, #ff8a7a); background: var(--danger-soft, rgba(255, 138, 122, .14)); }
</style>
