<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { useWheelNavigation } from './setup/wheel'

const { currentPage, total, currentSlideRoute } = useNav()
useWheelNavigation()

const fm = computed(() => (currentSlideRoute.value?.meta?.slide as any)?.frontmatter ?? {})
const layout = computed(() => fm.value.layout || 'default')

const showGrid = computed(() => !fm.value.hideGrid)
const showScanlines = computed(() => !fm.value.hideScanlines)
const showStatusBar = computed(() => {
  if (fm.value.hideStatusBar === true) return false
  if (fm.value.hideStatusBar === false) return true
  return !['cover', 'end'].includes(layout.value)
})

const progressPercent = computed(() => {
  if (!total.value || total.value <= 0) return 0
  return Math.min(100, Math.max(0, (currentPage.value / total.value) * 100))
})

const paddedCurrent = computed(() => String(currentPage.value).padStart(2, '0'))
const paddedTotal = computed(() => String(total.value).padStart(2, '0'))
const modeTag = computed(() => fm.value.mode || 'MODE: AXOLOTL')
</script>

<template>
  <!-- Layer 0: Base Ambient Textures (The Grid <= 10%, Digital Noise 3.5%, CRT Scanlines 4%) -->
  <div class="cm-ambient-layer" aria-hidden="true">
    <div v-if="showGrid" class="cm-bg-grid" />
    <div class="cm-bg-noise" />
    <div v-if="showScanlines" class="cm-bg-scanlines" />
  </div>

  <!-- Layer 30: Persistent IDE Status Bar & Verde Terminal Progress Bar -->
  <footer class="cm-global-footer">
    <div v-if="showStatusBar" class="cm-status-bar">
      <div class="cm-status-left">
        <span class="cm-status-brand">&gt;_ CODE_ME</span>
        <span class="cm-status-sep">|</span>
        <span class="cm-status-mode">{{ modeTag }}</span>
      </div>
      <div class="cm-status-right">
        <span class="cm-status-meta">UTF-8</span>
        <span class="cm-status-meta">LN {{ paddedCurrent }}</span>
        <span class="cm-status-counter">
          <span class="cm-counter-current">{{ paddedCurrent }}</span>
          <span class="cm-counter-slash">/</span>
          <span>{{ paddedTotal }}</span>
        </span>
      </div>
    </div>

    <div class="cm-progress-track" role="progressbar" :aria-valuenow="currentPage" :aria-valuemax="total">
      <div class="cm-progress-fill" :style="{ width: `${progressPercent}%` }" />
    </div>
  </footer>
</template>

<style scoped>
.cm-ambient-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Pattern A: Retícula Maestra (The Grid) — 1px hairline at 6% opacity (<= 10% rule) */
.cm-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0, 240, 255, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 240, 255, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Digital Noise: Inline SVG data-URI grain at 3.5% opacity (zero external KB) */
.cm-bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
}

/* Monitor Fantasma (CRT Scanlines) at 4% opacity */
.cm-bg-scanlines {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background: repeating-linear-gradient(
    to bottom,
    rgba(248, 250, 252, 0.45) 0px,
    rgba(248, 250, 252, 0.45) 1px,
    transparent 1px,
    transparent 4px
  );
}

.cm-global-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  pointer-events: none;
}

.cm-status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  padding: 0 18px;
  background: rgba(2, 6, 23, 0.88);
  border-top: 1px solid rgba(248, 250, 252, 0.1);
  font-family: var(--cm-font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--cm-text-secondary);
}

.cm-status-left,
.cm-status-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cm-status-brand {
  color: var(--cm-cyan-electrico);
  font-weight: 700;
}

.cm-status-sep {
  color: var(--cm-text-tertiary);
}

.cm-status-mode {
  color: var(--cm-text-secondary);
}

.cm-status-meta {
  color: var(--cm-text-tertiary);
}

.cm-status-counter {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px 7px;
  border-radius: 3px;
  background: rgba(0, 240, 255, 0.08);
  border: 1px solid rgba(0, 240, 255, 0.25);
  color: var(--cm-text-secondary);
  font-weight: 700;
}

.cm-counter-current {
  color: var(--cm-cyan-electrico);
}

.cm-counter-slash {
  color: var(--cm-text-tertiary);
}

/* Mandatory Verde Terminal (#05FF00) Fixed Bottom Progress Bar */
.cm-progress-track {
  width: 100%;
  height: 3px;
  background: rgba(5, 255, 0, 0.14);
}

.cm-progress-fill {
  height: 100%;
  background: var(--cm-verde-terminal);
  box-shadow: 0 0 8px rgba(5, 255, 0, 0.7), 0 0 16px rgba(5, 255, 0, 0.35);
  transition: width 260ms cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
