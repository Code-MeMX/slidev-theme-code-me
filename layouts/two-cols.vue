<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const props = withDefaults(defineProps<{
  tab?: string
  badge?: string
  ratio?: '50-50' | '40-60' | '60-40'
  divider?: boolean
}>(), {
  ratio: '50-50',
  divider: true,
})

const { currentPage } = useNav()

const tabLabel = computed(() => props.tab || `split_${String(currentPage.value).padStart(2, '0')}.tsx`)

const gridCols = computed(() => {
  if (props.ratio === '40-60') return '2fr 3fr'
  if (props.ratio === '60-40') return '3fr 2fr'
  return '1fr 1fr'
})
</script>

<template>
  <div class="slidev-layout cm-two-cols">
    <header class="cm-window-bar">
      <div class="cm-window-tabs">
        <div class="cm-window-tab">
          <span class="cm-tab-prefix">&gt;_</span>
          <span>{{ tabLabel }}</span>
        </div>
        <div class="cm-window-breadcrumb">split-view</div>
      </div>
      <div class="cm-window-actions">
        <NeonBadge v-if="badge" variant="outline-cyan" size="sm">{{ badge }}</NeonBadge>
        <div class="cm-window-controls" aria-hidden="true">
          <span class="cm-wc-btn">−</span>
          <span class="cm-wc-btn">□</span>
          <span class="cm-wc-btn cm-wc-close">×</span>
        </div>
      </div>
    </header>

    <div class="cm-two-cols-wrap">
      <div v-if="$slots.header" class="cm-two-cols-header">
        <slot name="header" />
      </div>

      <div class="cm-two-cols-grid" :style="{ gridTemplateColumns: gridCols }">
        <div class="cm-col-left">
          <slot />
        </div>
        <div class="cm-col-right" :class="{ 'cm-col-right--divided': divider }">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-two-cols {
  display: flex;
  flex-direction: column;
  padding-bottom: 34px;
}

.cm-window-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 18px;
  background: rgba(2, 6, 23, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
  font-family: var(--cm-font-mono);
  font-size: 12px;
  flex-shrink: 0;
}

.cm-window-tabs {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
}

.cm-window-tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 100%;
  padding: 0 12px;
  color: var(--cm-blanco-consola);
  font-weight: 700;
  border-bottom: 2px solid var(--cm-cyan-electrico);
  background: rgba(15, 23, 42, 0.75);
}

.cm-tab-prefix {
  color: var(--cm-rosa-ajolote);
}

.cm-window-breadcrumb {
  color: var(--cm-text-tertiary);
  font-size: 11px;
}

.cm-window-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cm-window-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cm-wc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: var(--cm-text-secondary);
  border: 1px solid rgba(248, 250, 252, 0.14);
  border-radius: 3px;
}

.cm-wc-close {
  color: var(--cm-rosa-ajolote);
  border-color: rgba(255, 42, 109, 0.35);
}

.cm-two-cols-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 1.3rem 2.5rem 1rem 2.5rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.cm-two-cols-header {
  margin-bottom: 0.9rem;
}

.cm-two-cols-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  gap: 2rem;
  align-items: start;
}

.cm-col-right--divided {
  padding-left: 2rem;
  border-left: 1px solid rgba(0, 240, 255, 0.2);
}
</style>
