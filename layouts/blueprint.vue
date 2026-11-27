<script setup lang="ts">
withDefaults(defineProps<{
  spec?: string
  coords?: string
}>(), {
  spec: 'BLUEPRINT // ARCHITECTURE_SPEC',
  coords: '(X:12, Y:43)',
})
</script>

<template>
  <!-- Section 7 Modo 3 & Section 9 Blueprint: Wireframes, coordinates, <= 10% blueprint grid -->
  <div class="slidev-layout cm-blueprint">
    <div class="cm-bp-grid" aria-hidden="true" />

    <div class="cm-bp-frame">
      <div class="cm-bp-header">
        <span class="cm-bp-spec">{{ spec }}</span>
        <span class="cm-bp-coords">{{ coords }} · SCALE 1:1</span>
      </div>

      <div class="cm-bp-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-blueprint {
  display: flex;
  flex-direction: column;
  padding: 0.95rem 2rem 2.55rem 2rem;
}

/* Blueprint hairline grid at 9% opacity (respects Regla Maestra del 10%) */
.cm-bp-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0, 240, 255, 0.09) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 240, 255, 0.09) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
  z-index: 0;
}

.cm-bp-frame {
  position: relative;
  z-index: 2;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px dashed rgba(0, 240, 255, 0.42);
  border-radius: 4px;
  background: rgba(15, 23, 42, 0.52);
  padding: 0.75rem 1.35rem 0.85rem 1.35rem;
}

.cm-bp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  margin-bottom: 0.65rem;
  border-bottom: 1px solid rgba(0, 240, 255, 0.25);
  font-family: var(--cm-font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.cm-bp-spec {
  color: var(--cm-cyan-electrico);
  font-weight: 800;
}

.cm-bp-coords {
  color: var(--cm-text-secondary);
}

.cm-bp-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.cm-bp-body :deep(h1) {
  font-size: 1.85rem;
  margin-bottom: 0.35rem;
}

.cm-bp-body :deep(p) {
  font-size: 0.94rem;
  margin-bottom: 0.55rem;
}

.cm-bp-body :deep(.mermaid) {
  flex: 1 1 auto;
  min-height: 120px;
  max-height: 215px;
  padding: 0.5rem 0.85rem;
}

.cm-bp-body :deep(.mermaid svg) {
  max-height: 195px;
  max-width: 100%;
  width: auto !important;
  height: auto !important;
}
</style>
