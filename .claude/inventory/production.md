# Estado de producción — treebu-tribe-stage

## URL pública

`treebumusic.com` (puerto 80 → 443 con SSL Let's Encrypt vía Traefik en EasyPanel).

## Hosting

VPS Hostinger 31.97.145.22 → EasyPanel proyecto `treebu-web` → servicio `web`
(nombre genérico, plan de renombre post-evento → `treebu-tribe`).

## Pipeline de despliegue

**Manual via "Add files via upload" en GitHub UI** (patrón Lovable). EasyPanel
detecta el push y rebuilda el contenedor.

NO hay:
- GitHub Actions
- Webhooks automáticos
- Deploy keys
- CI tests previos al deploy

## Variables de entorno

**0 variables.** Build estático, todo el contenido viene del bundle.

## Acoplamientos en producción

### Asset host de emails (CRÍTICO)
- `treebu-tickets/backend/emailService.js` carga `raw.githubusercontent.com/albertbarrerog/treebu-tribe-stage/main/public/images/header_email_tickets.jpg`
- También carga `Ivory_Flyer_Ticketera.jpg` desde la misma ruta
- Estos 2 archivos NO se pueden tocar sin romper emails de QRs ya emitidos
- Detalle completo en `inventory/asset-host-emails.md`

### JSON-LD schema.org indexado por Google
- Datos del evento (fecha, ubicación, line-up) leídos por crawlers
- Cambios deben coordinarse con `metadata-brand.md`

## Estado de sincronización Git

| Capa | Hash | Branch |
|---|---|---|
| Local | `4ec62b3` | main |
| Remoto (GitHub) | `596cba4` | main |
| EasyPanel | sirviendo lo que GitHub remoto tiene | — |

**Local está 1 commit detrás del remoto.** El remoto tiene 1 commit adicional
(`Add files via upload` via Lovable, 2026-04-10).

Producción sirve lo del remoto (596cba4), no lo local. Si haces cambios locales
y pusheas sin pull primero, el push falla por desync.

**Plan:** sincronizar post-evento (ver `plans/ACTIVE/post-17mayo.md`).

## Visibilidad del repo

`github.com/albertbarrerog/treebu-tribe-stage` es **PÚBLICO**. Sin descripción
ni topics. Indexable por buscadores.

Plan post-evento: añadir descripción + topics o cambiar a privado (decisión
documentada en `post-17mayo.md`).

## Servicio EasyPanel

Nombre real del servicio: `treebu-web/web` (genérico, problemático).

Plan de renombre: `treebu-web/treebu-tribe` (documentado en `post-17mayo.md`).

## Integración con otros servicios del ecosistema

Tribe-stage NO consume APIs propias. Es 100% estático.
Tickets consume tribe-stage (asset host), no al revés.

## Banderas operativas activas

🚩 **#1:** desync local vs remoto (4ec62b3 vs 596cba4) — diferida a post-evento
🚩 **#2:** asset host de emails como SPOF — diferida a post-evento (embed base64 o CDN)
🚩 **#3:** servicio EasyPanel con nombre genérico `web` — renombre post-evento
🚩 **#4:** repo público sin descripción/topics — decisión post-evento
🚩 **#5:** discrepancia "600 personas" en EventSection.tsx vs "600+ personas (confirmada con venue)" en collective `treebu-002-activo.md` — actualizar post-evento
🚩 **#6:** ubicación del evento inconsistente en 5 capas (contrato, collective, tickets CLAUDE.md, EventSection.tsx, JSON-LD) — unificar post-evento usando contrato Ivory como fuente de verdad
🚩 **#7:** README.md trivial heredado de Lovable (3 líneas con TODO) — reescribir o reemplazar post-evento

## Pre-flight checklist (antes de tocar el repo)

- [ ] Leí este `production.md`
- [ ] Leí `asset-host-emails.md`
- [ ] Tengo claro qué archivos en public/ NO se pueden tocar
- [ ] El cambio que voy a hacer NO afecta emails ya emitidos
- [ ] Si voy a tocar JSON-LD, verifiqué consistencia con tickets y collective
- [ ] Si voy a hacer push, sé que el remoto está 1 commit adelante
