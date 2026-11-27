<script setup lang="ts">
defineProps<{
  author?: string
  role?: string
  tag?: string
}>()
</script>

<template>
  <!-- Zero Serif, Zero Italic: Section 3 Anti-Patterns #2 & #3 -->
  <div class="slidev-layout cm-quote-layout">
    <div class="cm-quote-card">
      <div class="cm-quote-top">
        <span class="cm-quote-glyph">/*</span>
        <NeonBadge v-if="tag" variant="outline-pink" size="sm">{{ tag }}</NeonBadge>
      </div>

      <div class="cm-quote-body">
        <slot />
      </div>

      <div v-if="author || role" class="cm-quote-footer">
        <span class="cm-quote-prompt">&gt;_</span>
        <span v-if="author" class="cm-quote-author">{{ author }}</span>
        <span v-if="role" class="cm-quote-role">// {{ role }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cm-quote-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 4rem 3.75rem 4rem;
}

.cm-quote-card {
  width: 100%;
  max-width: 780px;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-left: 5px solid var(--cm-cyan-electrico);
  border-radius: 0 1.25rem 1.25rem 0;
  padding: 2.25rem 2.5rem;
  box-shadow: 0 24px 48px rgba(2, 6, 23, 0.5);
}

.cm-quote-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cm-quote-glyph {
  font-family: var(--cm-font-mono);
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  color: var(--cm-rosa-ajolote);
}

.cm-quote-body :deep(p),
.cm-quote-body :deep(h1),
.cm-quote-body :deep(h2) {
  font-family: var(--cm-font-secundaria);
  font-size: 1.65rem;
  font-weight: 600;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0;
  line-height: 1.48;
  color: var(--cm-blanco-consola);
  margin: 0 0 1.4rem 0;
}

.cm-quote-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--cm-font-mono);
  font-size: 0.85rem;
}

.cm-quote-prompt {
  color: var(--cm-cyan-electrico);
  font-weight: 800;
}

.cm-quote-author {
  color: var(--cm-blanco-consola);
  font-weight: 700;
}

.cm-quote-role {
  color: var(--cm-text-secondary);
}
</style>
