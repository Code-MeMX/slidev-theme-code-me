<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = withDefaults(defineProps<{
  background?: string
  tag?: string
  author?: string
  date?: string
  event?: string
  showWeave?: boolean
}>(), {
  tag: '>_ DECK // v2.0',
  showWeave: true,
})

const { $slidev } = useSlideContext()
const resolvedAuthor = computed(() => props.author || $slidev.configs.author || '')
</script>

<template>
  <div class="slidev-layout cm-cover">
    <!-- Optional Photo Background with Mandatory #0F172A 70% Overlay (Section 4) -->
    <div
      v-if="background"
      class="cm-cover-bg"
      :style="{ backgroundImage: `url(${background})` }"
    />
    <div v-if="background" class="cm-cover-overlay" />

    <!-- Subtle Ambient Radial Glows (never overpowering text contrast) -->
    <div class="cm-cover-glow-cyan" aria-hidden="true" />
    <div class="cm-cover-glow-pink" aria-hidden="true" />

    <!-- Pattern B: Lluvia de Sintaxis (<= 10% opacity) -->
    <SyntaxRain />

    <!-- Top Brand & HUD Row -->
    <header class="cm-cover-header">
      <CodeMeLogo variant="master" :width="148" compact />
      <div class="cm-cover-hud">
        <span class="cm-hud-coord">(X:00, Y:00)</span>
        <NeonBadge variant="outline-cyan" size="sm">{{ tag }}</NeonBadge>
      </div>
    </header>

    <!-- Hero Content -->
    <main class="cm-cover-main">
      <div class="cm-cover-accent-line" />
      <div class="cm-cover-slot">
        <slot />
      </div>
    </main>

    <!-- Bottom Metadata & Pixel Weave -->
    <footer class="cm-cover-meta">
      <div class="cm-cover-meta-row">
        <span v-if="resolvedAuthor" class="cm-meta-item">
          <span class="cm-meta-key">USER:</span> {{ resolvedAuthor }}
        </span>
        <span v-if="event" class="cm-meta-item">
          <span class="cm-meta-key">HOST:</span> {{ event }}
        </span>
        <span v-if="date" class="cm-meta-item">
          <span class="cm-meta-key">BUILD:</span> {{ date }}
        </span>
      </div>
      <PixelWeave v-if="showWeave" :height="8" :opacity="0.85" />
    </footer>
  </div>
</template>

<style scoped>
.cm-cover {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem 3rem 1.4rem 3rem;
}

.cm-cover-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.cm-cover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.78);
  z-index: 0;
}

.cm-cover-glow-cyan {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.14) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.cm-cover-glow-pink {
  position: absolute;
  bottom: -140px;
  left: -80px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(255, 42, 109, 0.14) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.cm-cover-header,
.cm-cover-main,
.cm-cover-meta {
  position: relative;
  z-index: 2;
}

.cm-cover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cm-cover-hud {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cm-hud-coord {
  font-family: var(--cm-font-mono);
  font-size: 0.72rem;
  color: var(--cm-text-tertiary);
  letter-spacing: 0.08em;
}

.cm-cover-main {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  max-width: 86%;
}

.cm-cover-accent-line {
  width: 68px;
  height: 4px;
  background: linear-gradient(90deg, var(--cm-rosa-ajolote), var(--cm-cyan-electrico));
  border-radius: 2px;
}

.cm-cover-slot :deep(h1) {
  font-size: 3.15rem;
  font-weight: 900;
  line-height: 1.06;
  margin-bottom: 0.7rem;
  color: var(--cm-blanco-consola);
}

.cm-cover-slot :deep(h2) {
  font-size: 1.35rem;
  color: var(--cm-cyan-electrico);
  margin-bottom: 0.65rem;
}

.cm-cover-slot :deep(p) {
  font-size: 1.12rem;
  color: var(--cm-text-secondary);
  max-width: 680px;
  margin-bottom: 0.5rem;
}

.cm-cover-meta {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.cm-cover-meta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--cm-font-mono);
  font-size: 0.78rem;
  color: var(--cm-text-secondary);
  letter-spacing: 0.05em;
}

.cm-meta-key {
  color: var(--cm-rosa-ajolote);
  font-weight: 700;
}
</style>
