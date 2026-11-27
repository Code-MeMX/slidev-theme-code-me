<script setup lang="ts">
// Pattern B: Lluvia de Sintaxis — <= 10% opacity when behind text (Regla Maestra del 10%)
const tokens = [
  { text: '<>', x: '6%', y: '14%', rot: '-12deg', size: '1.5rem', accent: false },
  { text: '{ }', x: '86%', y: '12%', rot: '8deg', size: '1.75rem', accent: true },
  { text: '!=', x: '78%', y: '76%', rot: '-8deg', size: '1.6rem', accent: false },
  { text: '>_', x: '11%', y: '78%', rot: '6deg', size: '1.9rem', accent: true },
  { text: '/* */', x: '48%', y: '9%', rot: '-4deg', size: '1.1rem', accent: false },
  { text: ';', x: '92%', y: '44%', rot: '14deg', size: '2.1rem', accent: false },
  { text: '=>', x: '3%', y: '46%', rot: '-10deg', size: '1.4rem', accent: false },
  { text: '[ ]', x: '68%', y: '22%', rot: '10deg', size: '1.25rem', accent: false },
  { text: '*', x: '26%', y: '86%', rot: '18deg', size: '1.8rem', accent: true },
]
</script>

<template>
  <div class="cm-syntax-rain" aria-hidden="true">
    <span
      v-for="(t, idx) in tokens"
      :key="idx"
      class="cm-syntax-token"
      :class="{ 'cm-syntax-token--pink': t.accent }"
      :style="{
        left: t.x,
        top: t.y,
        transform: `rotate(${t.rot})`,
        fontSize: t.size,
      }"
    >
      {{ t.text }}
    </span>
  </div>
</template>

<style scoped>
.cm-syntax-rain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.cm-syntax-token {
  position: absolute;
  font-family: var(--cm-font-mono);
  font-weight: 800;
  color: var(--cm-blanco-consola);
  opacity: 0.08;
  user-select: none;
}

.cm-syntax-token--pink {
  color: var(--cm-rosa-ajolote);
  opacity: 0.1;
}
</style>
