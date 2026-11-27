<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  status?: 'ok' | 'thinking' | 'standby'
  label?: string
}>(), {
  status: 'ok',
})

// Section 10 Bitxo 6-Gill RGB Status LEDs
const config = computed(() => {
  if (props.status === 'thinking') {
    return { color: '#00F0FF', code: 'FETCHING_DATA', defaultLabel: 'Bitxo analizando (!)' }
  }
  if (props.status === 'standby') {
    return { color: '#FF2A6D', code: 'STANDBY_INPUT', defaultLabel: 'Esperando tu comando' }
  }
  return { color: '#05FF00', code: '200 OK · COMPILADO', defaultLabel: 'ReBoot exitoso' }
})
</script>

<template>
  <div class="cm-bitxo" :style="{ '--gill-color': config.color }">
    <!-- Geometric 6-gill cyber-circuit emblem representing Bitxo LEDs -->
    <svg class="cm-bitxo-svg" viewBox="0 0 64 40" width="44" height="28" aria-hidden="true">
      <!-- Left 3 circuit gills -->
      <path d="M16 12 H6 L3 9 M15 20 H4 M16 28 H6 L3 31" stroke="var(--gill-color)" stroke-width="2.5" stroke-linecap="square" fill="none" />
      <!-- Right 3 circuit gills -->
      <path d="M48 12 H58 L61 9 M49 20 H60 M48 28 H58 L61 31" stroke="var(--gill-color)" stroke-width="2.5" stroke-linecap="square" fill="none" />
      <!-- Head silhouette -->
      <rect x="17" y="7" width="30" height="26" rx="7" fill="#0F172A" stroke="#FF2A6D" stroke-width="2.2" />
      <!-- Dark VR Goggles -->
      <rect x="20" y="12" width="24" height="9" rx="2.5" fill="#020617" stroke="var(--gill-color)" stroke-width="1.6" />
      <circle cx="27" cy="16.5" r="1.6" fill="var(--gill-color)" />
      <circle cx="37" cy="16.5" r="1.6" fill="var(--gill-color)" />
      <!-- Friendly terminal smile -->
      <path d="M27 26 H37" stroke="#F8FAFC" stroke-width="2" stroke-linecap="square" />
    </svg>
    <div class="cm-bitxo-copy">
      <span class="cm-bitxo-code">{{ config.code }}</span>
      <span class="cm-bitxo-msg">
        <slot>{{ label || config.defaultLabel }}</slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.cm-bitxo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 0.8rem;
  background: rgba(2, 6, 23, 0.78);
  border: 1px solid rgba(248, 250, 252, 0.14);
  border-left: 3px solid var(--gill-color);
  border-radius: 0.65rem;
  min-width: 0;
}

.cm-bitxo-svg {
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px var(--gill-color));
}

.cm-bitxo-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cm-bitxo-code {
  font-family: var(--cm-font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--gill-color);
  text-transform: uppercase;
}

.cm-bitxo-msg {
  font-family: var(--cm-font-secundaria);
  font-size: 0.8rem;
  color: var(--cm-blanco-consola);
  line-height: 1.25;
}
</style>
