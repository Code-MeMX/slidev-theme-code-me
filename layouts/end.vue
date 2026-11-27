<script setup lang="ts">
withDefaults(defineProps<{
  status?: string
  tagline?: string
  showWeave?: boolean
}>(), {
  status: '>_ EXIT 0 · COMPILATION SUCCESS',
  tagline: 'REGENERA TU FUTURO.',
  showWeave: true,
})
</script>

<template>
  <div class="slidev-layout cm-end">
    <SyntaxRain />
    <div class="cm-end-glow" aria-hidden="true" />

    <div class="cm-end-center">
      <CodeMeLogo variant="master" :width="168" compact />
      <NeonBadge variant="green" size="md">{{ status }}</NeonBadge>
      <div class="cm-end-slot">
        <slot>
          <h1>{{ tagline }}</h1>
        </slot>
      </div>
    </div>

    <div v-if="showWeave" class="cm-end-weave">
      <PixelWeave :height="8" :opacity="0.9" />
    </div>
  </div>
</template>

<style scoped>
.cm-end {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2rem 3rem 1.25rem 3rem;
}

.cm-end-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(255, 42, 109, 0.08) 45%, transparent 72%);
  pointer-events: none;
  z-index: 0;
}

.cm-end-center {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  max-width: 780px;
}

.cm-end-slot :deep(h1) {
  font-size: 2.85rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.cm-end-slot :deep(p) {
  font-size: 1.05rem;
  color: var(--cm-text-secondary);
  margin-bottom: 0.75rem;
}

.cm-end-weave {
  position: relative;
  z-index: 2;
  width: 100%;
}
</style>
