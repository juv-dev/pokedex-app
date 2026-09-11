<script setup lang="ts">
export type FlowStepState = 'done' | 'active' | 'current' | 'todo'
export interface FlowStep {
  label: string
  state: FlowStepState
}

defineProps<{
  eyebrow: string
  title: string
  subtitle?: string | null
  fileName?: string | null
  stepsLabel?: string | null
  steps: FlowStep[]
}>()
</script>

<template>
  <aside class="flow-rail" aria-label="Progreso del flujo">
    <p class="flow-rail-eyebrow">{{ eyebrow }}</p>
    <h2 class="flow-rail-title">{{ title }}</h2>
    <p v-if="fileName" class="flow-rail-file">{{ fileName }}</p>
    <p v-else-if="subtitle" class="flow-rail-sub">{{ subtitle }}</p>

    <p v-if="stepsLabel" class="flow-rail-steps-label">{{ stepsLabel }}</p>

    <ol class="flow-rail-steps">
      <li v-for="(step, i) in steps" :key="i" class="flow-step" :class="`is-${step.state}`">
        <span class="flow-step-mark" aria-hidden="true">
          <svg v-if="step.state === 'done'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <template v-else>{{ i + 1 }}</template>
        </span>
        <span class="flow-step-label">{{ step.label }}</span>
      </li>
    </ol>
  </aside>
</template>

<style scoped>
.flow-rail {
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: 17px;
  background: rgba(33, 26, 55, .87);
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
}
@media (max-width: 1080px) {
  .flow-rail { position: static; }
}
.flow-rail :focus-visible { outline: none; box-shadow: var(--focus-ring); }

.flow-rail-eyebrow { margin: 0; font-size: 10px; font-weight: 800; color: var(--pk-mint); }
.flow-rail-title { margin: 0; font-size: 21px; font-weight: 800; line-height: 1.2; color: var(--pk-text); }
.flow-rail-sub { margin: 0; font-size: 12px; font-weight: 500; line-height: 1.5; color: var(--pk-muted); }
.flow-rail-file { margin: 0; font-size: 11px; font-weight: 700; color: var(--pk-text); }
.flow-rail-steps-label {
  margin: 0;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .04em;
  color: var(--pk-muted-2);
}
.flow-rail-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.flow-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 9px;
  background: #211A37;
}
.flow-step.is-active {
  background: #223C3B;
  outline: 1px solid #3E7569;
  outline-offset: -0.5px;
  border-radius: 10px;
}
.flow-step.is-current { background: #35304B; }
.flow-step-mark {
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  font-size: 10px;
  font-weight: 700;
  color: var(--pk-muted);
  background: #2B2B45;
}
.flow-step.is-active .flow-step-mark,
.flow-step.is-done .flow-step-mark {
  color: var(--pk-mint-ink);
  background: var(--pk-mint);
}
.flow-step-mark svg { width: 13px; height: 13px; }
.flow-step-label { font-size: 11px; font-weight: 400; color: var(--pk-text); }
</style>
