import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      darkMode: true,
      background: '#020617',
      primaryColor: '#0F172A',
      primaryTextColor: '#F8FAFC',
      primaryBorderColor: '#00F0FF',
      secondaryColor: '#0F172A',
      secondaryTextColor: '#F8FAFC',
      secondaryBorderColor: '#FF2A6D',
      tertiaryColor: '#020617',
      tertiaryTextColor: '#E2E8F0',
      tertiaryBorderColor: '#05FF00',
      lineColor: '#00F0FF',
      textColor: '#E2E8F0',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '14px',
      edgeLabelBackground: '#0F172A',
    },
  }
})
