# `@code-memx/slidev-theme-code-me`

Tema oficial de presentaciones para **[Slidev](https://sli.dev)** diseñado para **CODE ME**, construido siguiendo la fuente única de verdad en [`DESIGN.md`](https://raw.githubusercontent.com/Code-MeMX/Brand/refs/heads/main/DESIGN.md).

- **Dark Mode nativo** (`#0F172A` Obsidiana Digital, cero `#000000` plano, cero `#FFFFFF` puro anti-halo).
- **Modo IDE**: marcos tipo VS Code / terminal Linux (`- □ ×`), barra de estado y barra de progreso fija inferior en **Verde Terminal (`#05FF00`)**.
- **Tipografía oficial**: `Saira` (`UPPERCASE` para H1–H5), `Montserrat` (`line-height >= 1.6`) y `JetBrains Mono` (ligaduras contextuales). Cero Serif y cero itálicas para énfasis (`em` mapeado a **Rosa Ajolote SemiBold**).
- **Shiki y Mermaid integrados**: tema custom `code-me-dark` y tema Mermaid alineado a paleta neón.
- **Patrones y texturas**: Retícula Maestra (`<= 10%` opacidad), Lluvia de Sintaxis, Textil Digital (`PixelWeave`), Digital Noise inline SVG y scanlines CRT sutiles.
- **Phosphor Icons** (`@iconify-json/ph`) precargados para Iconografía Modo B (*Neon Syntax*).

## Uso rápido

### Desarrollo local del tema

```bash
pnpm install
pnpm dev
```

### Usar en otra presentación Slidev (GitHub Packages)

Configura el registro en el `.npmrc` del proyecto consumidor e instala con `pnpm`:

```ini
@code-memx:registry=https://npm.pkg.github.com
```

```bash
pnpm add @code-memx/slidev-theme-code-me
```

Agrega el tema al frontmatter de tu `slides.md`:

```yaml
---
theme: "@code-memx/slidev-theme-code-me" # o ruta local, ej: ./path/to/Theme Code Me
layout: cover
tag: ">_ DECK // v2.0"
author: "Tu Nombre"
event: "Taller CODE ME"
date: "2026"
---
```

### Publicación automática (GitHub Actions)

Cada `push` a `main` o `master` ejecuta `.github/workflows/publish.yml`:
1. Instala dependencias con `pnpm` y valida con `pnpm build`.
2. Sincroniza el scope `@<owner>` con el propietario del repositorio y evita colisiones de versión incrementando el *patch* si la versión actual ya fue publicada.
3. Publica el paquete en `https://npm.pkg.github.com` usando `GITHUB_TOKEN` (`packages: write`).

## Layouts incluidos

| Layout | Uso | Props principales |
| :--- | :--- | :--- |
| `cover` | Portada Hero con logo oficial `Master_Dark.svg`, `SyntaxRain` y `PixelWeave` | `background`, `tag`, `author`, `event`, `date`, `showWeave` |
| `default` | Diapositiva estándar en **Modo IDE** con barra de pestañas y controles `- □ ×` | `tab`, `badge`, `badgeVariant`, `hideWindowBar` |
| `section` | Separador de módulo / capítulo con acento neón y `PixelWeave` | `module`, `accent` (`cyan`\|`pink`\|`green`), `showWeave` |
| `two-cols` | Split de 2 columnas (`::default::`, `::right::`, opcional `::header::`) | `tab`, `badge`, `ratio` (`50-50`\|`40-60`\|`60-40`), `divider` |
| `code-focus` | Narrativa a la izquierda + `IdeWindow` a la derecha (`::code::`) | `tab`, `file`, `status`, `statusText` |
| `blueprint` | Modo Blueprint para diagramas Mermaid, flujos `If/Else` y arquitectura | `spec`, `coords` |
| `image-right` | Texto a la izquierda + imagen con esquinas HUD neón a la derecha | `image`, `alt`, `caption`, `tab`, `overlay` |
| `statement` | Manifiesto / cifra de alto impacto centrado | `eyebrow`, `accent` |
| `quote` | Cita editorial sin Serif ni itálicas con tarjeta Glassmorphism | `author`, `role`, `tag` |
| `end` | Cierre / Q&A con logo oficial, badge `EXIT 0` y CTA | `status`, `tagline`, `showWeave` |

### Frontmatter global opcional por slide

- `mode`: etiqueta en barra inferior (default: `MODE: AXOLOTL`).
- `hideGrid: true`: oculta la Retícula Maestra.
- `hideScanlines: true`: oculta scanlines CRT.
- `hideStatusBar: true | false`: controla visibilidad de barra de estado IDE.
- `wheelInvert: true`: invierte dirección de scroll/trackpad si se usa mouse sin desplazamiento natural.

## Componentes globales

- `<CodeMeLogo variant="master|token|ink" :width="168" compact />` — respeta zona segura `1X`, ancho mínimo (`>= 100px` logo / `>= 32px` isotipo) y prohíbe sombras paralelas.
- `<IdeWindow title="app.ts" status="ok|info|warn|error" status-text="200 OK">` — ventana tipo VS Code / terminal.
- `<NeonBadge variant="pink|cyan|green|outline-cyan|outline-pink" size="sm|md">` — aplica **Regla de la Sangre Negra** (`#0F172A` peso `800` sobre neón sólido).
- `<CmdButton variant="pink|cyan|green" href="...">/COMMAND</CmdButton>` — botón CTA estilo comando `[ /COMMAND ]`.
- `<CalloutBox type="info|success|warning|danger" title="...">` — tarjeta Glassmorphism con borde semántico izquierdo `4px`.
- `<MetricCard value="15:1" label="Contraste" hint="..." accent="cyan|pink|green" />` — tarjeta HUD de métricas.
- `<BitxoStatus status="ok|thinking|standby">Mensaje</BitxoStatus>` — indicador LED de 6 branquias de Bitxo.
- `<PixelWeave :height="10" />` — divisor decorativo 8-bit de grecas mesoamericanas.
- `<SyntaxRain />` — capa decorativa de lluvia de sintaxis (`<= 10%` opacidad).

## Scripts

```bash
pnpm dev            # Levanta preview local con example.md
pnpm build          # Compila SPA estática en dist/
pnpm export         # Exporta PDF (requiere playwright-chromium)
```
