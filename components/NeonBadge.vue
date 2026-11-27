<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'pink' | 'cyan' | 'green' | 'outline-cyan' | 'outline-pink'
  size?: 'sm' | 'md'
}>(), {
  variant: 'cyan',
  size: 'md',
})
</script>

<template>
  <span class="cm-badge" :class="[`cm-badge--${variant}`, `cm-badge--${size}`]">
    <slot />
  </span>
</template>

<style scoped>
/* Enforces Regla de la Sangre Negra (Section 2.4): solid neon badges ALWAYS use #0F172A text @ 800 */
.cm-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--cm-font-mono);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 4px;
  line-height: 1.1;
  white-space: nowrap;
}

.cm-badge--sm {
  font-size: 0.7rem;
  padding: 0.22rem 0.55rem;
}

.cm-badge--md {
  font-size: 0.78rem;
  padding: 0.32rem 0.75rem;
}

.cm-badge--pink {
  background: var(--cm-rosa-ajolote);
  color: var(--cm-obsidiana);
}

.cm-badge--cyan {
  background: var(--cm-cyan-electrico);
  color: var(--cm-obsidiana);
}

.cm-badge--green {
  background: var(--cm-verde-terminal);
  color: var(--cm-obsidiana);
}

.cm-badge--outline-cyan {
  background: rgba(0, 240, 255, 0.08);
  color: var(--cm-cyan-electrico);
  border: 1px solid var(--cm-cyan-electrico);
}

.cm-badge--outline-pink {
  background: rgba(255, 42, 109, 0.1);
  color: var(--cm-rosa-ajolote);
  border: 1px solid var(--cm-rosa-ajolote);
}
</style>
