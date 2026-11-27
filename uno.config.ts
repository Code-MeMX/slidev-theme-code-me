import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      cm: {
        obsidiana: '#0F172A',
        deep: '#020617',
        rosa: '#FF2A6D',
        'rosa-dark': '#E61958',
        'rosa-darker': '#CC154E',
        'rosa-light': '#FF4D84',
        cyan: '#00F0FF',
        verde: '#05FF00',
        blanco: '#F8FAFC',
        body: '#E2E8F0',
        muted: '#94A3B8',
        meta: '#64748B',
        warning: '#FFB800',
        danger: '#FF4D4D',
      },
    },
    fontFamily: {
      display: "'Saira', sans-serif",
      sans: "'Montserrat', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace",
    },
  },
  shortcuts: {
    'bg-main': 'bg-[#0F172A]',
    'bg-deep': 'bg-[#020617]',
    'text-main': 'text-[#E2E8F0]',
    'text-console': 'text-[#F8FAFC]',
    'text-muted': 'text-[#94A3B8]',
    'text-meta': 'text-[#64748B]',
    'cm-glass': 'bg-[rgba(15,23,42,0.8)] backdrop-blur-md border border-white/10 rounded-[1.25rem]',
    'cm-card': 'bg-[rgba(15,23,42,0.82)] backdrop-blur-md border border-white/12 rounded-[1rem] transition-all duration-300',
    'cm-btn-pink': 'inline-flex items-center gap-2 px-4 py-2 bg-[#FF2A6D] text-[#0F172A] font-mono font-800 uppercase tracking-[0.08em] text-sm rounded-[4px]',
    'cm-btn-cyan': 'inline-flex items-center gap-2 px-4 py-2 bg-[#00F0FF] text-[#0F172A] font-mono font-800 uppercase tracking-[0.08em] text-sm rounded-[4px]',
    'cm-btn-green': 'inline-flex items-center gap-2 px-4 py-2 bg-[#05FF00] text-[#0F172A] font-mono font-800 uppercase tracking-[0.08em] text-sm rounded-[4px]',
    'cm-glow-cyan': '[filter:drop-shadow(0_0_5px_#00F0FF)_drop-shadow(0_0_15px_rgba(0,240,255,0.45))]',
    'cm-glow-pink': '[filter:drop-shadow(0_0_5px_#FF2A6D)_drop-shadow(0_0_15px_rgba(255,42,109,0.45))]',
    'cm-glow-green': '[filter:drop-shadow(0_0_5px_#05FF00)_drop-shadow(0_0_12px_rgba(5,255,0,0.4))]',
  },
})
