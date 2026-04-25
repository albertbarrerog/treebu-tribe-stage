# treebu-tribe-stage

> ⚠️ **ZONA ROJA HASTA POST-17 MAYO 2026**
>
> Este repo es la landing pública de TREEBU (`treebumusic.com`) **Y** sirve como
> asset host para los emails de tickets ya emitidos.
>
> **Tocar `public/images/` rompe los emails de los 50+ QRs vivos** del evento
> TREEBU 002. Cualquier renombre, eliminación o re-organización de archivos
> en `public/images/` debe esperar hasta después del 17 de mayo de 2026.
>
> Antes de cualquier acción que modifique código o assets, leer:
> - `.claude/inventory/asset-host-emails.md` (el SPOF documentado)
> - `.claude/plans/ACTIVE/post-17mayo.md` (qué se libera tras el evento)

## Qué es este repo

Sitio público del colectivo TREEBU. Sirve `treebumusic.com` desde EasyPanel.

Stack: React 18 + Vite 5 + TypeScript + Tailwind 3 + shadcn/ui + GSAP + Lenis
+ TanStack Query + zod + Playwright + vitest. Es el único repo del ecosistema
con testing configurado.

Bootstrap original: Lovable. El repo se llama `treebu-tribe-stage` por herencia
de ese bootstrap. **Funcionalmente es producción** (no hay un `treebu-tribe-prod`).
Plan de renombre a `treebu-tribe` documentado en `.claude/plans/ACTIVE/post-17mayo.md`.

## Acoplamientos críticos

1. **Sirve `treebumusic.com`** — es la landing pública del colectivo
2. **Asset host de emails de tickets** — `tickets-backend/emailService.js` carga
   imágenes desde `raw.githubusercontent.com/albertbarrerog/treebu-tribe-stage/main/public/images/*`
3. **JSON-LD schema.org** en `index.html` con datos del evento (Event schema, no MusicEvent — ver `conventions/metadata-brand.md` para detalles)

## Trabajo inminente

Antes de empezar cualquier sesión en este repo, leer en orden:

1. Este `CLAUDE.md` completo
2. `.claude/inventory/asset-host-emails.md` — entender el SPOF
3. `.claude/plans/ACTIVE/post-17mayo.md` — qué cambia después del evento
4. Si la sesión va a tocar metadata, brand, o copy: `.claude/conventions/metadata-brand.md`

## Estado de sincronización con remoto

Local (`4ec62b3`) está **un commit detrás** del remoto. El remoto tiene 1 commit
adicional (`596cba4` — "Add files via upload" via Lovable, 2026-04-10).

**Decisión del sprint de migración:** NO sincronizar este sprint. Pull diferido
a post-evento. Documentado en `.claude/plans/ACTIVE/post-17mayo.md`.

Si ves un push fallar por desync, **PARAR**. No hacer pull ni force-push sin
aprobación humana explícita.

## Reglas de no-rotura específicas

1. **NUNCA tocar `public/images/`** sin checkpoint humano explícito
2. **NUNCA cambiar nombres de archivos** en `public/`
3. **NUNCA hacer `git pull`** sin haber leído el plan `post-17mayo.md` y tener
   aprobación humana
4. **NUNCA hacer force-push** (mismo principio que en treebu-tickets, mitigación
   plan GitHub Free)
5. **NUNCA cambiar la fecha o ubicación del evento** en JSON-LD sin verificar
   que coincide con el contrato Ivory y con `.claude/inventory/eventos/treebu-002-activo.md`
   del repo `treebu-collective`

## Stack y comandos

```
npm install            # instala deps (todavía no se ha decidido bun vs npm)
npm run dev            # arranca Vite en local
npm run build          # build de producción
npm run test           # vitest
npm run e2e            # Playwright
```

Decisión sobre package manager (bun vs npm) trackeada en
`.claude/plans/ACTIVE/decidir-package-manager.md`.

## Despliegue

EasyPanel sirve este repo desde el servicio `treebu-web/web` (nombre genérico,
plan de renombre post-evento → `treebu-tribe`).

Deploys son manuales vía "Add files via upload" desde GitHub UI (patrón Lovable).
NO hay GitHub Actions, NO hay webhook automático.

## Convención de actualización del .claude/

Aplica `mantenimiento-claude-docs.md` documentado en `treebu-collective`.
Resumen:
- Leer antes de actuar
- Actualizar al cerrar sesiones significativas
- Correctivos atómicos cuando algo cambia externamente

## Método aplicado

Mind-Action Method v1.0 (cerebro+ejecutor+humano). Skills relevantes:
`mind-action-method`, `mind-architect`, `stack-catalog` (versionados en
github.com/albertbarrerog/claude-skills).
