<script setup lang="ts">
import { computed } from 'vue'
import { TYPE_ES } from '../lib/constants'
import { typeIconUrl } from '../lib/wikidexAssets'

const props = withDefaults(defineProps<{ type: string; decorative?: boolean }>(), {
  decorative: false
})

const src = computed(() => typeIconUrl(props.type))
const label = computed(() => TYPE_ES[props.type] ?? props.type)
</script>

<template>
  <img
    class="type-icon"
    :src="src"
    :alt="decorative ? '' : label"
    :aria-hidden="decorative ? 'true' : undefined"
  >
</template>
