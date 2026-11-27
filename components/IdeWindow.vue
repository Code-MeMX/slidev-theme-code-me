<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  status?: 'ok' | 'info' | 'warn' | 'error'
  statusText?: string
  padding?: string
}>(), {
  title: 'terminal — code_me.sh',
  status: 'info',
  padding: '1rem 1.25rem',
})

const statusColors: Record<string, string> = {
  ok: 'var(--cm-verde-terminal)',
  info: 'var(--cm-cyan-electrico)',
  warn: 'var(--cm-warning)',
  error: 'var(--cm-rosa-ajolote)',
}
</script>

<template>
  <div class="cm-ide-win">
    <div class="cm-ide-titlebar">
      <div class="cm-ide-tab">
        <span class="cm-ide-prompt">&gt;_</span>
        <span class="cm-ide-filename">{{ props.title }}</span>
      </div>
      <div class="cm-ide-right">
        <span
          v-if="props.statusText"
          class="cm-ide-status"
          :style="{ color: statusColors[props.status], borderColor: statusColors[props.status] }"
        >
          {{ props.statusText }}
        </span>
        <div class="cm-ide-controls" aria-hidden="true">
          <span class="cm-ctrl">−</span>
          <span class="cm-ctrl">□</span>
          <span class="cm-ctrl cm-ctrl-close">×</span>
        </div>
      </div>
    </div>
    <div class="cm-ide-body" :style="{ padding: props.padding }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cm-ide-win {
  display: flex;
  flex-direction: column;
  background: rgba(2, 6, 23, 0.86);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 240, 255, 0.24);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.55);
}

.cm-ide-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  padding: 0 12px;
  background: rgba(15, 23, 42, 0.92);
  border-bottom: 1px solid rgba(248, 250, 252, 0.12);
  font-family: var(--cm-font-mono);
  font-size: 12px;
}

.cm-ide-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cm-blanco-consola);
  font-weight: 700;
}

.cm-ide-prompt {
  color: var(--cm-rosa-ajolote);
}

.cm-ide-filename {
  color: var(--cm-text-body);
  font-weight: 600;
}

.cm-ide-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cm-ide-status {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1px 7px;
  border-radius: 3px;
  border: 1px solid currentColor;
  background: rgba(15, 23, 42, 0.7);
}

.cm-ide-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cm-ctrl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 12px;
  line-height: 1;
  color: var(--cm-text-secondary);
  border: 1px solid rgba(248, 250, 252, 0.14);
  border-radius: 3px;
}

.cm-ctrl-close {
  color: var(--cm-rosa-ajolote);
  border-color: rgba(255, 42, 109, 0.35);
}

.cm-ide-body {
  flex: 1;
  min-height: 0;
}

.cm-ide-body :deep(pre) {
  margin: 0 !important;
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;
  padding: 0 !important;
}
</style>
