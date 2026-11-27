<script setup lang="ts">
withDefaults(defineProps<{
  height?: number
  opacity?: number
}>(), {
  height: 10,
  opacity: 0.9,
})
</script>

<template>
  <!-- Pattern C: Textil Digital (Pixel Weave) — Zapotec/Mesoamerican 8-bit step-fret divider.
       Pink & Green are ALWAYS separated by Obsidiana (#0F172A) pixels to avoid forbidden Moire clash. -->
  <div
    class="cm-pixel-weave"
    :style="{ height: `${height}px`, opacity }"
    aria-hidden="true"
  />
</template>

<style scoped>
.cm-pixel-weave {
  width: 100%;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='10' viewBox='0 0 48 10' shape-rendering='crispEdges'%3E%3Crect width='48' height='10' fill='%230F172A'/%3E%3Crect x='0' y='8' width='6' height='2' fill='%2300F0FF'/%3E%3Crect x='4' y='4' width='2' height='4' fill='%2300F0FF'/%3E%3Crect x='4' y='2' width='8' height='2' fill='%2300F0FF'/%3E%3Crect x='10' y='4' width='2' height='2' fill='%2300F0FF'/%3E%3Crect x='12' y='6' width='4' height='2' fill='%2300F0FF'/%3E%3Crect x='18' y='2' width='2' height='6' fill='%23FF2A6D'/%3E%3Crect x='20' y='2' width='8' height='2' fill='%23FF2A6D'/%3E%3Crect x='26' y='4' width='2' height='4' fill='%23FF2A6D'/%3E%3Crect x='22' y='6' width='4' height='2' fill='%23FF2A6D'/%3E%3Crect x='32' y='2' width='6' height='2' fill='%2300F0FF'/%3E%3Crect x='32' y='4' width='2' height='4' fill='%2300F0FF'/%3E%3Crect x='34' y='6' width='6' height='2' fill='%2300F0FF'/%3E%3Crect x='42' y='4' width='4' height='2' fill='%2305FF00'/%3E%3C/svg%3E");
}
</style>
