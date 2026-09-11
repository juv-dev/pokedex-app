<script setup lang="ts">
import { megaOptionsFor } from '../../lib/recommendedSet'
import type { InstanceRow } from '../../lib/configureRows'
import type { DraftSaveState } from '../../composables/usePokemonDrafts'

const props = defineProps<{
  rows: InstanceRow[]
  activeKey: string | null
  favorites: ReadonlySet<string>
  draftState: (instanceKey: string) => DraftSaveState | 'none'
  ready?: (instanceKey: string) => boolean
  megaSprite?: (instanceKey: string) => string | undefined
  megaForm?: (instanceKey: string) => string | undefined
}>()

function alreadyReady(instanceKey: string): boolean {
  return props.draftState(instanceKey) === 'none' && !!props.ready?.(instanceKey)
}

const emit = defineEmits<{
  (e: 'select', instanceKey: string): void
  (e: 'toggle-favorite', internalName: string): void
}>()

function megaCount(internalName: string): number {
  return megaOptionsFor(internalName).length
}
</script>

<template>
  <div class="cfg-gallery">
    <button
      v-for="row in rows" :key="row.instanceKey" type="button"
      class="cfg-card"
      :class="{
        'is-active': row.instanceKey === activeKey,
        'has-mega': megaCount(row.internalName) > 0,
        'is-optimal': alreadyReady(row.instanceKey),
        'is-applied': draftState(row.instanceKey) !== 'none'
      }"
      @click="emit('select', row.instanceKey)"
    >
      <span
        class="cfg-card-fav" :class="{ 'is-on': favorites.has(row.internalName.toUpperCase()) }"
        :aria-label="favorites.has(row.internalName.toUpperCase()) ? 'Quitar de favoritos' : 'Añadir a favoritos'"
        role="button" tabindex="0"
        @click.stop="emit('toggle-favorite', row.internalName)"
        @keydown.enter.stop.prevent="emit('toggle-favorite', row.internalName)"
      >
        <svg viewBox="0 0 24 24" :fill="favorites.has(row.internalName.toUpperCase()) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 21s-7-4.5-9.5-8.5A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6.5C19 16.5 12 21 12 21z" />
        </svg>
      </span>

      <span class="cfg-card-thumb"><img :src="props.megaSprite?.(row.instanceKey) || row.sprite" :alt="row.speciesName" loading="lazy"></span>
      <span class="cfg-card-id">{{ row.num != null ? '#' + String(row.num).padStart(3, '0') : 'Añil' }}</span>
      <span class="cfg-card-name">{{ megaForm?.(row.instanceKey) || row.speciesName }}</span>
      <span class="cfg-card-note">
        <template v-if="draftState(row.instanceKey) !== 'none'">Set aplicado</template>
        <template v-else-if="alreadyReady(row.instanceKey)">Ya trae la mejor configuración</template>
        <template v-else>{{ megaCount(row.internalName) > 0
          ? megaCount(row.internalName) + (megaCount(row.internalName) === 1 ? ' mega disponible · opcional' : ' megas disponibles · opcional')
          : 'Set automático · forma actual' }}</template>
      </span>

      <span
        v-if="draftState(row.instanceKey) === 'saving' || draftState(row.instanceKey) === 'error'"
        class="cfg-card-dot" :class="'is-' + draftState(row.instanceKey)"
        :title="draftState(row.instanceKey) === 'saving' ? 'Guardando' : 'Error al guardar'"
      ></span>
      <span
        v-else-if="draftState(row.instanceKey) === 'saved' || alreadyReady(row.instanceKey)"
        class="cfg-card-check" title="Ya tiene su mejor configuración" aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7" /></svg>
      </span>
    </button>
  </div>
</template>

<style scoped>
.cfg-gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}
@media (max-width: 1100px) { .cfg-gallery { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 720px) { .cfg-gallery { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 460px) { .cfg-gallery { grid-template-columns: repeat(2, 1fr); } }
.cfg-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px;
  border-radius: 12px;
  background: var(--pk-card);
  outline: 1px solid var(--pk-line);
  outline-offset: -0.5px;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-align: left;
  transition: outline-color .14s ease, background .14s ease;
}
.cfg-card:hover { outline-color: #4a466a; }
.cfg-card.has-mega { outline-color: #713849; }
.cfg-card.is-optimal,
.cfg-card.is-applied { outline-color: #3E7569; }
.cfg-card.is-active { outline: 1px solid var(--pk-mint); background: rgba(101, 243, 181, .05); }
.cfg-card-check {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 14px;
  height: 14px;
  display: grid;
  place-items: center;
  color: var(--pk-mint);
}
.cfg-card-check svg { width: 12px; height: 12px; }
.cfg-card-fav {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  color: rgba(215, 220, 255, .28);
  border-radius: 6px;
}
.cfg-card-fav:hover { color: var(--pk-pink); }
.cfg-card-fav.is-on { color: var(--pk-pink); }
.cfg-card-fav svg { width: 14px; height: 14px; }
.cfg-card-thumb { width: 56px; height: 56px; display: grid; place-items: center; }
.cfg-card-thumb img { width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; }
.cfg-card-id { font-size: 8.5px; font-weight: 500; color: var(--pk-muted); }
.cfg-card-name { font-size: 12px; font-weight: 400; color: var(--pk-text); line-height: 1.2; }
.cfg-card-note { font-size: 8px; font-weight: 500; color: var(--pk-muted); line-height: 1.2; }
.cfg-card.has-mega .cfg-card-note { color: #FF9BAE; }
.cfg-card.is-optimal .cfg-card-note,
.cfg-card.is-optimal.has-mega .cfg-card-note,
.cfg-card.is-applied .cfg-card-note,
.cfg-card.is-applied.has-mega .cfg-card-note { color: var(--pk-mint); }
.cfg-card-dot {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pk-mint);
}
.cfg-card-dot.is-saving { background: var(--warn, #f4b447); }
.cfg-card-dot.is-error { background: var(--pk-danger); }
</style>
