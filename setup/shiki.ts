import { defineShikiSetup } from '@slidev/types'
import type { ThemeRegistration } from 'shiki'

const codeMeDark: ThemeRegistration = {
  name: 'code-me-dark',
  type: 'dark',
  colors: {
    'editor.background': '#020617',
    'editor.foreground': '#F8FAFC',
    'editorLineNumber.foreground': '#64748B',
    'editor.selectionBackground': '#00F0FF33',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#64748B' },
    },
    {
      scope: [
        'keyword',
        'storage.type',
        'storage.modifier',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
      ],
      settings: { foreground: '#FF2A6D', fontStyle: 'bold' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template', 'punctuation.definition.string'],
      settings: { foreground: '#05FF00' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'entity.name.type',
        'entity.name.class',
        'support.type',
        'support.class',
      ],
      settings: { foreground: '#00F0FF' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character', 'variable.other.constant'],
      settings: { foreground: '#FFB800' },
    },
    {
      scope: ['variable', 'variable.parameter', 'variable.other.readwrite'],
      settings: { foreground: '#F8FAFC' },
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: { foreground: '#FF2A6D' },
    },
    {
      scope: ['entity.other.attribute-name', 'variable.other.property', 'support.type.property-name'],
      settings: { foreground: '#00F0FF' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator'],
      settings: { foreground: '#94A3B8' },
    },
  ],
}

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: codeMeDark,
      light: codeMeDark,
    },
  }
})
