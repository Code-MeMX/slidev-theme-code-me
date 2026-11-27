<script setup lang="ts">
import { computed } from 'vue'
import masterDarkUrl from '../assets/logos/master-dark.svg?url'
import tokenUrl from '../assets/logos/the-token.svg?url'
import inkModeUrl from '../assets/logos/ink-mode.svg?url'

const props = withDefaults(defineProps<{
  variant?: 'master' | 'token' | 'ink'
  width?: number
  compact?: boolean
}>(), {
  variant: 'master',
  compact: false,
})

const src = computed(() => {
  if (props.variant === 'token') return tokenUrl
  if (props.variant === 'ink') return inkModeUrl
  return masterDarkUrl
})

// Enforce Section 4 Minimum Scalability: >= 100px full logo, >= 32px isotipo
const safeWidth = computed(() => {
  const minW = props.variant === 'token' ? 32 : 100
  const fallback = props.variant === 'token' ? 48 : 168
  return Math.max(minW, props.width ?? fallback)
})

// Clear Space: 1X all around (0.5X vertical allowed when compact UI)
// In master SVG (450x300), X = 38.7 -> ~8.6% of width
const clearSpaceStyle = computed(() => {
  const xUnit = Math.round(safeWidth.value * 0.086)
  const padY = props.compact ? Math.max(4, Math.round(xUnit * 0.5)) : Math.max(8, xUnit)
  const padX = Math.max(8, xUnit)
  return {
    padding: `${padY}px ${padX}px`,
  }
})
</script>

<template>
  <span class="cm-logo-clearspace" :style="clearSpaceStyle">
    <img
      :src="src"
      :alt="variant === 'token' ? 'CODE ME Isotipo' : 'CODE ME Logo'"
      :style="{ width: `${safeWidth}px` }"
      class="cm-logo-img"
      draggable="false"
    >
  </span>
</template>

<style scoped>
.cm-logo-clearspace {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Section 4 Strict Rule: Never distort proportions, never apply Drop Shadow behind logo */
.cm-logo-img {
  display: block;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  filter: none !important;
  box-shadow: none !important;
}
</style>
