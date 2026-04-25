# Plan post-17 mayo 2026 — treebu-tribe-stage

**Estado:** ACTIVE — bloqueado hasta 18 mayo 2026
**Bloqueante actual:** evento TREEBU 002 el 17 de mayo 2026

## Por qué este plan está bloqueado

Tribe-stage es zona roja hasta el evento. Tocar este repo durante el sprint
de migración o pre-evento podría romper:
- Landing pública (treebumusic.com)
- Emails de QRs ya emitidos (asset host SPOF)
- JSON-LD que Google indexa

Cualquier cambio se difiere a una ventana segura post-evento (19-31 mayo 2026).

## Tareas para resolver post-17 mayo

### Tarea 1 — Sincronizar local con remoto

**Estado actual:** local en `4ec62b3`, remoto en `596cba4` (1 commit adelante)

**Acción:**
```bash
cd C:/Users/alber/projects-albertbarrerog/treebu-tribe-stage/
git fetch origin
git log HEAD..origin/main --oneline   # ver qué viene
git pull --ff-only origin main         # fast-forward sin merge commit
```

**Verificación:**
- `git status` debe decir up to date con origin/main
- `npm run dev` debe levantar el sitio sin errores
- Verificar visualmente que la landing no perdió nada

### Tarea 2 — Resolver SPOF de asset host de emails

Ver `inventory/asset-host-emails.md` para detalles.

**Acción:**
1. En `treebu-tickets/backend`: modificar `emailService.js` para usar el archivo
   `header_email_b64.txt` que ya existe en lugar de URL `raw.githubusercontent.com`
2. Embeber `Ivory_Flyer_Ticketera.jpg` como base64 también
3. Probar con email real (Gmail + Outlook desktop + iPhone Mail) que las imágenes
   se ven correctamente
4. Cuando esté validado: las imágenes en `public/images/` ya no son críticas para
   emails (se mantienen para la landing pero ya no son SPOF)

**Verificación:**
- Email de prueba muestra header correctamente
- Email de prueba muestra flyer correctamente
- En tickets, eliminar las URLs hardcoded de raw.githubusercontent.com
- Marcar SPOF como resuelto en banderas

### Tarea 3 — Renombre del servicio EasyPanel

**Estado actual:** servicio se llama `treebu-web/web` (genérico)

**Acción:**
1. En EasyPanel, renombrar servicio `web` → `treebu-tribe`
2. Verificar que el dominio `treebumusic.com` sigue apuntando correctamente
3. Verificar que no rompió nada en Traefik

**Verificación:**
- treebumusic.com sigue vivo
- Logs del nuevo servicio no muestran errores

### Tarea 4 — Decisión sobre visibilidad del repo

**Estado actual:** público sin descripción ni topics

**Opciones:**
- **A:** mantener público + añadir descripción + añadir topics (`treebu`, `electronic-music`, `landing`)
- **B:** cambiar a privado (solo posible si la Tarea 2 resolvió el SPOF)

**Recomendación:** Opción A si el repo es solo landing limpia. Opción B si en
algún momento se añade lógica sensible.

### Tarea 5 — Renombre del repo (opcional)

**Estado actual:** `treebu-tribe-stage` (legado de Lovable)

**Acción:**
1. En GitHub: renombrar `treebu-tribe-stage` → `treebu-tribe`
2. Actualizar remote local: `git remote set-url origin https://github.com/albertbarrerog/treebu-tribe.git`
3. **Antes de hacer esto:** verificar que NO hay nada apuntando al nombre viejo
   (especialmente `raw.githubusercontent.com/albertbarrerog/treebu-tribe-stage/...`
   debe haber sido reemplazado por base64 en Tarea 2)

**Verificación:**
- EasyPanel sigue deployando bien (la URL del repo cambió)
- treebumusic.com sigue vivo
- Emails de tickets siguen funcionando

### Tarea 6 — Decidir bun vs npm

Ver `decidir-package-manager.md`.

### Tarea 7 — Mejorar JSON-LD schema.org

Ver `conventions/metadata-brand.md` sección "Plan de mejora (post-evento)".

**Acción:**
1. Modificar `index.html` JSON-LD: `@type` → `MusicEvent`
2. Añadir `performer` array con IVORY · 2MT · ABSTRUSE · IMAO · LETTO
3. Añadir `offers` con precios y disponibilidad
4. Limpiar `location.name` (ej. "Avocado Restaurante") y mover dirección a `location.address`

**Verificación:**
- Google Rich Results Test pasa para MusicEvent
- Performer aparece correctamente
- Offers visible

### Tarea 8 — Unificar ubicación del evento

Resolver bandera #6 (5 capas inconsistentes).

**Fuente de verdad:** contrato Ivory firmado.

**Acción:**
1. Decidir cuál es el texto canónico (probablemente: "Avocado Restaurante, Km 1.5 Vía Termales, Santa Rosa de Cabal, Risaralda, Colombia")
2. Actualizar `EventSection.tsx` en tribe-stage
3. Actualizar JSON-LD en index.html
4. Actualizar `treebu-collective/.claude/inventory/eventos/treebu-002-activo.md`
5. Actualizar `treebu-tickets/CLAUDE.md`
6. Verificar que las 5 capas dicen lo mismo

### Tarea 9 — Reescribir README.md

Resolver bandera #7.

**Opciones:**
- Opción A: README mínimo con título, descripción 1 párrafo, link al CLAUDE.md para devs
- Opción B: README completo con setup, deploy, contributing
- Opción C: README como redirect "ver `CLAUDE.md` para contexto del proyecto"

**Recomendación:** Opción A.

## Orden recomendado

1. Tarea 1 (sincronizar) — primero, base estable
2. Tarea 2 (SPOF) — antes de cualquier renombre
3. Tarea 3 (servicio EasyPanel) — independiente, hacer cuando haya ventana
4. Tarea 4 (visibilidad repo) — después de Tarea 2
5. Tarea 5 (renombre repo) — solo después de Tarea 2 + Tarea 4
6. Tarea 6 (package manager) — independiente

## Riesgos por tarea

| Tarea | Riesgo si sale mal |
|---|---|
| 1 — sync | Conflicto de merge (probabilidad baja, fast-forward sin merge) |
| 2 — SPOF | Si tickets queda apuntando a URLs viejas mientras tribe-stage cambia, emails se rompen. Hacer en orden estricto. |
| 3 — renombre EasyPanel | Si Traefik no actualiza, treebumusic.com cae temporalmente |
| 4 — visibilidad | Bajo (solo metadata) |
| 5 — renombre repo | Si Tarea 2 no se hizo, emails se rompen instantáneamente |
| 6 — package manager | Bajo (solo si hay incompatibilidades) |

## Criterio de cierre del plan

Plan se mueve a `plans/DONE/` cuando:
- 5 de 6 tareas están completadas
- (Tarea 5 es opcional; las 5 críticas son 1, 2, 3, 4, 6)
- SPOF resuelto y verificado con email de prueba
- Repo en estado limpio y consistente con `treebu-collective`
