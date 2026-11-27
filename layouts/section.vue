<script setup lang="ts">
withDefaults(defineProps<{
  module?: string
  accent?: 'cyan' | 'pink' | 'green'
  showWeave?: boolean
}>(), {
  module: '// NEXT_MODULE',
  accent: 'cyan',
  showWeave: true,
})
</script>

<template>
  <div class="slidev-layout cm-section" :class="`cm-section--${accent}`">
    <SyntaxRain />

    <div class="cm-section-inner">
      <div class="cm-section-eyebrow">{{ module }}</div>
      <div class="cm-section-content">
        <slot />
      </div>
      <div v-if="showWeave" class="cm-section-weave">
        <PixelWeave :height="8" :opacity="0.85" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-section {
  display: flex;
  align-items: center;
  padding: 2.5rem 3.5rem 3.5rem 3.5rem;
}

.cm-section-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 820px;
  padding-left: 1.75rem;
  border-left: 5px solid var(--cm-cyan-electrico);
}

.cm-section--pink .cm-section-inner {
  border-left-color: var(--cm-rosa-ajolote);
}

.cm-section--green .cm-section-inner {
  border-left-color: var(--cm-verde-terminal);
}

.cm-section-eyebrow {
  font-family: var(--cm-font-mono);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cm-cyan-electrico);
  margin-bottom: 0.65rem;
}

.cm-section--pink .cm-section-eyebrow {
  color: var(--cm-rosa-ajolote);
}

.cm-section--green .cm-section-eyebrow {
  color: var(--cm-verde-terminal);
}

.cm-section-content :deep(h1) {
  font-size: 3.1rem;
  font-weight: 900;
  line-height: 1.08;
  margin-bottom: 0.75rem;
}

.cm-section-content :deep(p) {
  font-size: 1.15rem;
  color: var(--cm-text-secondary);
  max-width: 640px;
}

.cm-section-weave {
  margin-top: 1.5rem;
  max-width: 360px;
}
</style>
