<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  alt?: string
  caption?: string
  tab?: string
  overlay?: boolean
}>(), {
  alt: 'Visual CODE ME',
  tab: 'visual_hud.tsx',
  overlay: false,
})
</script>

<template>
  <div class="slidev-layout cm-img-right">
    <header class="cm-window-bar">
      <div class="cm-window-tabs">
        <div class="cm-window-tab">
          <span class="cm-tab-prefix">&gt;_</span>
          <span>{{ tab }}</span>
        </div>
      </div>
      <div class="cm-window-controls" aria-hidden="true">
        <span class="cm-wc-btn">−</span>
        <span class="cm-wc-btn">□</span>
        <span class="cm-wc-btn cm-wc-close">×</span>
      </div>
    </header>

    <div class="cm-ir-grid">
      <div class="cm-ir-copy">
        <slot />
      </div>

      <figure class="cm-ir-media">
        <div class="cm-hud-frame">
          <span class="cm-corner cm-corner--tl" />
          <span class="cm-corner cm-corner--tr" />
          <span class="cm-corner cm-corner--bl" />
          <span class="cm-corner cm-corner--br" />
          <img :src="image" :alt="alt" class="cm-ir-img">
          <div v-if="overlay" class="cm-ir-overlay" />
        </div>
        <figcaption v-if="caption" class="cm-ir-caption">
          // {{ caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
.cm-img-right {
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
  border-bottom: 2px solid var(--cm-cyan-electrico);
  background: rgba(15, 23, 42, 0.75);
}

.cm-tab-prefix {
  color: var(--cm-rosa-ajolote);
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

.cm-ir-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 2.25rem;
  align-items: center;
  padding: 1.3rem 2.5rem 1rem 2.5rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.cm-ir-media {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cm-hud-frame {
  position: relative;
  padding: 8px;
  background: rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(0, 240, 255, 0.25);
  border-radius: 0.6rem;
  overflow: hidden;
}

.cm-ir-img {
  display: block;
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  border-radius: 0.35rem;
}

.cm-ir-overlay {
  position: absolute;
  inset: 8px;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 0.35rem;
  pointer-events: none;
}

.cm-corner {
  position: absolute;
  width: 14px;
  height: 14px;
  z-index: 2;
  pointer-events: none;
}

.cm-corner--tl {
  top: 0;
  left: 0;
  border-top: 2px solid var(--cm-cyan-electrico);
  border-left: 2px solid var(--cm-cyan-electrico);
}

.cm-corner--tr {
  top: 0;
  right: 0;
  border-top: 2px solid var(--cm-rosa-ajolote);
  border-right: 2px solid var(--cm-rosa-ajolote);
}

.cm-corner--bl {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid var(--cm-rosa-ajolote);
  border-left: 2px solid var(--cm-rosa-ajolote);
}

.cm-corner--br {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid var(--cm-cyan-electrico);
  border-right: 2px solid var(--cm-cyan-electrico);
}

.cm-ir-caption {
  font-family: var(--cm-font-mono);
  font-size: 0.75rem;
  color: var(--cm-text-secondary);
  text-align: right;
}
</style>
