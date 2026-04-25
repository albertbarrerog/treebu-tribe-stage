# Stack y decisiones técnicas — treebu-tribe-stage

## Snapshot del stack actual

### Core
- **Framework:** React 18.x
- **Build tool:** Vite 5
- **Lenguaje:** TypeScript (.tsx en componentes)
- **Estilos:** Tailwind CSS 3 + shadcn/ui

### Animaciones e interacción
- **GSAP** — animaciones complejas (timelines, scroll-triggered, parallax)
- **Lenis** — smooth scrolling

### Estado y data
- **TanStack Query** — fetching y cache de datos
- **zod** — validación de schemas

### Testing (único repo del ecosistema con testing)
- **vitest** — unit tests
- **Playwright** — e2e tests

## Diferencias con treebu-tickets

| Aspecto | tribe-stage | tickets |
|---|---|---|
| React | 18 | 19 |
| Vite | 5 | 8 |
| Tailwind | 3 | 4 |
| TypeScript | sí | mixto (JSX + TSX) |
| Testing | sí (Playwright + vitest) | no |
| shadcn | sí | no |
| GSAP | sí | sí (consistente) |
| Bootstrap | Lovable | manual |

Tribe-stage está **una generación atrás** que tickets en versiones (React/Vite/
Tailwind), pero **adelante en testing y typing**.

## Decisiones tomadas

### Decisión 1 — Mantener stack actual hasta post-evento
**Razón:** versiones funcionan, no hay bugs reportados, el riesgo de upgrade
pre-evento es alto. Plan de upgrade trackeado en `plans/ACTIVE/post-17mayo.md`.

### Decisión 2 — TypeScript para componentes nuevos
**Razón:** el repo ya tiene TypeScript configurado y los componentes existentes
lo usan. Nuevos componentes deben mantener .tsx, no .jsx.

### Decisión 3 — shadcn/ui como sistema de componentes
**Razón:** ya está integrado, copy-paste en lugar de dependencia. Nuevos
componentes UI usan shadcn cuando aplica.

### Decisión 4 — GSAP como animación principal
**Razón:** ya usado consistentemente, mejor que mezclar con Framer Motion u
otras librerías.

### Decisión 5 — Package manager pendiente de definir
**Razón:** repo tiene `package-lock.json` (npm) pero hay archivos sueltos que
sugieren intentos previos con bun. Decisión trackeada en
`plans/ACTIVE/decidir-package-manager.md`.

## Cuándo desviarse del stack

- **Si el caso requiere SSR/SSG crítico** → considerar migrar a Next.js (decisión
  grande, post-evento)
- **Si el rendimiento del sitio degrada** → revisar antes de cambiar stack
- **Si Tailwind 3 → 4 trae beneficios concretos** → migrar en sprint dedicado
  post-evento

## Catálogo de componentes en src/

El repo tiene un catálogo de componentes rico:

**Propios (13):** AboutSection, CommunitySection, ContactSection, DJsSection, EventSection, FloatingCTA, Footer, GallerySection, Header, HeroSection, MusicAmigosBreak, NavLink, ValuesMarquee.

**shadcn/ui (49):** en `src/components/ui/`. Catálogo completo de primitives (Button, Dialog, Form, Toast, etc.) listos para usar.

**Adicionales no enumerados antes:**
- `react-hook-form` 7.61.1 (forms)
- `react-router-dom` 6.30.1 (vs 7.x en tickets — diferencia entre repos)
- `lovable-tagger` (devDep, artefacto Lovable, evaluable post-evento)
- `@vitejs/plugin-react-swc` 3.11.0 (usa SWC, no Babel)

Riqueza del UI catalog significa que para añadir secciones nuevas hay que verificar primero si ya existe un componente reusable.

## Compatibilidad con stack-catalog

Este stack se desvía del default del catálogo:
- Default catalog: React + Vite + Tailwind + shadcn → **coincide**
- Default catalog: TypeScript opcional → tribe-stage usa TS → **OK**
- Default catalog: testing no es default → tribe-stage tiene testing → **mejora**

Es un caso donde el repo ESTÁ alineado con los defaults del catálogo, con la
adición de testing que no es default pero es bienvenido.
