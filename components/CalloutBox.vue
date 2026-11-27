<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
}>(), {
  type: 'info',
})

const defaultTitles: Record<string, string> = {
  info: '// SYSTEM_NOTE',
  success: '// 200 OK · COMPILADO',
  warning: '// WARNING · REVISAR',
  danger: '// ALERT · BUG DETECTADO',
}
</script>

<template>
  <div class="cm-callout" :class="`cm-callout--${props.type}`">
    <div class="cm-callout-title">
      {{ props.title || defaultTitles[props.type] }}
    </div>
    <div class="cm-callout-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Section 5 Admonitions: Glassmorphism + 4px left semantic border */
.cm-callout {
  background: rgba(15, 23, 42, 0.68);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-left-width: 4px;
  border-radius: 0 0.75rem 0.75rem 0;
  padding: 0.8rem 1.1rem;
  margin: 0.75rem 0;
}

.cm-callout-title {
  font-family: var(--cm-font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.35rem;
}

.cm-callout-body {
  font-size: 0.94rem;
  color: var(--cm-text-body);
  line-height: 1.55;
}

.cm-callout-body :deep(p:last-child) {
  margin-bottom: 0;
}

.cm-callout--info {
  border-left-color: var(--cm-cyan-electrico);
}
.cm-callout--info .cm-callout-title {
  color: var(--cm-cyan-electrico);
}

.cm-callout--success {
  border-left-color: var(--cm-verde-terminal);
}
.cm-callout--success .cm-callout-title {
  color: var(--cm-verde-terminal);
}

.cm-callout--warning {
  border-left-color: var(--cm-warning);
}
.cm-callout--warning .cm-callout-title {
  color: var(--cm-warning);
}

.cm-callout--danger {
  border-left-color: var(--cm-rosa-ajolote);
}
.cm-callout--danger .cm-callout-title {
  color: var(--cm-rosa-ajolote);
}
</style>
