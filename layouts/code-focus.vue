<script setup lang="ts">
withDefaults(defineProps<{
  tab?: string
  file?: string
  status?: 'ok' | 'info' | 'warn' | 'error'
  statusText?: string
}>(), {
  tab: 'live_coding.md',
  file: 'main.ts',
  status: 'ok',
  statusText: '200 OK',
})
</script>

<template>
  <div class="slidev-layout cm-code-focus">
    <header class="cm-window-bar">
      <div class="cm-window-tabs">
        <div class="cm-window-tab">
          <span class="cm-tab-prefix">&gt;_</span>
          <span>{{ tab }}</span>
        </div>
        <div class="cm-window-breadcrumb">IDE // LIVE_CODE</div>
      </div>
      <div class="cm-window-controls" aria-hidden="true">
        <span class="cm-wc-btn">−</span>
        <span class="cm-wc-btn">□</span>
        <span class="cm-wc-btn cm-wc-close">×</span>
      </div>
    </header>

    <div class="cm-cf-grid">
      <div class="cm-cf-narrative">
        <slot />
      </div>

      <div class="cm-cf-editor">
        <IdeWindow :title="file" :status="status" :status-text="statusText" padding="1rem 1.15rem">
          <slot name="code" />
        </IdeWindow>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-code-focus {
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
  border-bottom: 2px solid var(--cm-rosa-ajolote);
  background: rgba(15, 23, 42, 0.75);
}

.cm-tab-prefix {
  color: var(--cm-cyan-electrico);
}

.cm-window-breadcrumb {
  color: var(--cm-text-tertiary);
  font-size: 11px;
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

.cm-cf-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 2rem;
  align-items: center;
  padding: 1.25rem 2.4rem 1rem 2.4rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.cm-cf-narrative :deep(h1) {
  font-size: 2.05rem;
}

.cm-cf-editor {
  min-width: 0;
}
</style>
