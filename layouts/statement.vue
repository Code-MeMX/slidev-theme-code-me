<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  accent?: 'cyan' | 'pink' | 'green'
}>(), {
  accent: 'pink',
})
</script>

<template>
  <div class="slidev-layout cm-statement" :class="`cm-statement--${accent}`">
    <div class="cm-stmt-glow" aria-hidden="true" />
    <div class="cm-stmt-inner">
      <div v-if="eyebrow" class="cm-stmt-eyebrow">{{ eyebrow }}</div>
      <div class="cm-stmt-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-statement {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem 4rem 3.75rem 4rem;
}

.cm-stmt-glow {
  position: absolute;
  width: 560px;
  height: 260px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255, 42, 109, 0.14) 0%, transparent 72%);
  pointer-events: none;
  z-index: 0;
}

.cm-statement--cyan .cm-stmt-glow {
  background: radial-gradient(circle, rgba(0, 240, 255, 0.14) 0%, transparent 72%);
}

.cm-statement--green .cm-stmt-glow {
  background: radial-gradient(circle, rgba(5, 255, 0, 0.12) 0%, transparent 72%);
}

.cm-stmt-inner {
  position: relative;
  z-index: 2;
  max-width: 820px;
}

.cm-stmt-eyebrow {
  display: inline-block;
  font-family: var(--cm-font-mono);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cm-cyan-electrico);
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid rgba(0, 240, 255, 0.35);
  border-radius: 4px;
  background: rgba(0, 240, 255, 0.08);
}

.cm-stmt-content :deep(h1) {
  font-size: 3.35rem;
  font-weight: 900;
  line-height: 1.08;
  margin-bottom: 1rem;
}

.cm-stmt-content :deep(p) {
  font-size: 1.2rem;
  color: var(--cm-text-secondary);
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
</style>
