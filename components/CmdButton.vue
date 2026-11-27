<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'pink' | 'cyan' | 'green'
  href?: string
}>(), {
  variant: 'pink',
})
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="cm-cmd-btn"
    :class="`cm-cmd-btn--${variant}`"
  >
    <span class="cm-cmd-bracket">[</span>
    <span><slot /></span>
    <span class="cm-cmd-bracket">]</span>
  </component>
</template>

<style scoped>
.cm-cmd-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.1rem;
  font-family: var(--cm-font-mono);
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cm-obsidiana) !important;
  text-decoration: none !important;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cm-cmd-btn:hover {
  transform: translateY(-2px) scale(1.02);
}

.cm-cmd-bracket {
  opacity: 0.72;
}

.cm-cmd-btn--pink {
  background-color: var(--cm-rosa-ajolote);
  box-shadow: 0 0 18px rgba(255, 42, 109, 0.35);
}

.cm-cmd-btn--pink:hover {
  background-color: var(--cm-rosa-light);
  box-shadow: 0 0 24px rgba(255, 42, 109, 0.65);
}

.cm-cmd-btn--cyan {
  background-color: var(--cm-cyan-electrico);
  box-shadow: 0 0 18px rgba(0, 240, 255, 0.35);
}

.cm-cmd-btn--cyan:hover {
  background-color: var(--cm-cyan-electrico);
  box-shadow: 0 0 24px rgba(0, 240, 255, 0.65);
}

.cm-cmd-btn--green {
  background-color: var(--cm-verde-terminal);
  box-shadow: 0 0 18px rgba(5, 255, 0, 0.32);
}

.cm-cmd-btn--green:hover {
  background-color: var(--cm-verde-terminal);
  box-shadow: 0 0 24px rgba(5, 255, 0, 0.6);
}
</style>
