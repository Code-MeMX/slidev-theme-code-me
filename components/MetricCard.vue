<script setup lang="ts">
withDefaults(defineProps<{
  value: string
  label: string
  hint?: string
  accent?: 'cyan' | 'pink' | 'green'
}>(), {
  accent: 'cyan',
})
</script>

<template>
  <div class="cm-metric" :class="`cm-metric--${accent}`">
    <div class="cm-metric-value">{{ value }}</div>
    <div class="cm-metric-label">{{ label }}</div>
    <div v-if="hint" class="cm-metric-hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.cm-metric {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-top: 3px solid var(--cm-cyan-electrico);
  border-radius: 0.9rem;
  padding: 1.15rem 1.25rem;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.cm-metric:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.45);
}

.cm-metric-value {
  font-family: var(--cm-font-principal);
  font-size: 2.35rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.cm-metric-label {
  font-family: var(--cm-font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cm-blanco-consola);
}

.cm-metric-hint {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: var(--cm-text-secondary);
  line-height: 1.45;
}

.cm-metric--cyan {
  border-top-color: var(--cm-cyan-electrico);
}
.cm-metric--cyan .cm-metric-value {
  color: var(--cm-cyan-electrico);
}

.cm-metric--pink {
  border-top-color: var(--cm-rosa-ajolote);
}
.cm-metric--pink .cm-metric-value {
  color: var(--cm-rosa-ajolote);
}

.cm-metric--green {
  border-top-color: var(--cm-verde-terminal);
}
.cm-metric--green .cm-metric-value {
  color: var(--cm-verde-terminal);
}
</style>
