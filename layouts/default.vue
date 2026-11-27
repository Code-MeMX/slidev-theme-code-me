<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps<{
  tab?: string
  badge?: string
  badgeVariant?: 'pink' | 'cyan' | 'green' | 'outline-cyan' | 'outline-pink'
  hideWindowBar?: boolean
}>()

const { currentPage } = useNav()

const tabLabel = computed(() => {
  if (props.tab) return props.tab
  return `slide_${String(currentPage.value).padStart(2, '0')}.md`
})
</script>

<template>
  <div class="slidev-layout cm-ide-layout">
    <!-- Top VS Code / Terminal Window Chrome (Section 9: Presentaciones "Modo IDE") -->
    <header v-if="!hideWindowBar" class="cm-window-bar">
      <div class="cm-window-tabs">
        <div class="cm-window-tab cm-window-tab--active">
          <span class="cm-tab-prefix">&gt;_</span>
          <span>{{ tabLabel }}</span>
        </div>
        <div class="cm-window-breadcrumb">code_me / deck</div>
      </div>

      <div class="cm-window-actions">
        <NeonBadge v-if="badge" :variant="badgeVariant || 'outline-cyan'" size="sm">
          {{ badge }}
        </NeonBadge>
        <div class="cm-window-controls" aria-hidden="true">
          <span class="cm-wc-btn">−</span>
          <span class="cm-wc-btn">□</span>
          <span class="cm-wc-btn cm-wc-close">×</span>
        </div>
      </div>
    </header>

    <main class="cm-ide-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.cm-ide-layout {
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

.cm-ide-content {
  flex: 1;
  min-height: 0;
  padding: 1.35rem 2.5rem 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
