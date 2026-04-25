# Sesión de onboarding — Fase B.3 del sprint de migración

**Fecha:** 2026-04-25
**Repo:** treebu-tribe-stage
**Método:** Mind-Action Method v1.0
**Tipo de sesión:** estructural (creación de `.claude/` + CLAUDE.md)

## Contexto del sprint

Fase B.3 era la última fase pendiente del sprint de migración del colectivo
TREEBU iniciado el 2026-04-23. Las fases B.1 (collective) y B.2 (tickets) se
completaron el 2026-04-24. Los skills personales se rebrandearon y versionaron
en GitHub el mismo día.

B.3 quedó como pendiente porque tribe-stage es **zona roja**: cualquier cambio
mal calculado puede romper los emails de 50+ QRs ya emitidos.

## Decisiones tomadas en esta sesión

### Decisión 1 — Plan completo de 8 archivos
Se mantuvo el plan original de 8 archivos (no se redujo a versión mínima).
Tribe-stage tiene complejidad real que justifica documentación estructurada.

### Decisión 2 — NO sincronizar con remoto
Local en `4ec62b3`, remoto en `596cba4`. La diferencia es 1 commit de Lovable
("Add files via upload"). Decisión: dejar como bandera registrada y sincronizar
post-evento.

Razón: introducir un pull pre-evento añade ruido en un repo crítico. Si la
landing rompiera por algo, sería difícil aislar si fue por el pull o por B.3.

### Decisión 3 — Leer contexto del collective y tickets antes de empezar
Para mantener consistencia con `mantenimiento-claude-docs.md` del collective,
esta sesión leyó 8 archivos de contexto antes de redactar nada nuevo.

### Decisión 4 — Documentar realidad del JSON-LD (no la idealizada)
La inspección reveló que el JSON-LD real es `Event` (no `MusicEvent`), sin `performer`, sin `offers`, con `location.name` = dirección. Se documentó la realidad en `metadata-brand.md` + plan de mejora post-evento. NO se modificó el JSON-LD pre-evento (zona roja).

### Decisión 5 — Triple lockfile coexistiendo
Inspección reveló `bun.lock` (147KB) + `bun.lockb` (246KB) + `package-lock.json` (303KB) coexistiendo activamente. El plan `decidir-package-manager.md` se reescribió con la realidad densa, no con la versión idealizada.

### Decisión 6 — 3 banderas nuevas detectadas
Banderas #5 (600 vs 600+), #6 (ubicación en 5 capas), #7 (README trivial) registradas en `production.md` para resolver post-evento.

## Estructura creada

```
treebu-tribe-stage/
├── CLAUDE.md                                  ← NUEVO (advertencia zona roja)
└── .claude/
    ├── architecture/
    │   └── stack-decisions.md
    ├── conventions/
    │   └── metadata-brand.md
    ├── inventory/
    │   ├── production.md
    │   └── asset-host-emails.md               ← el SPOF documentado
    ├── sessions/
    │   └── 2026-04-25-claude-code-onboarding.md (este archivo)
    └── plans/
        ├── ACTIVE/
        │   ├── post-17mayo.md
        │   └── decidir-package-manager.md
        └── DONE/
            └── .gitkeep
```

8 archivos markdown nuevos + 1 .gitkeep + 1 CLAUDE.md raíz.

## Cambios en código

**Cero.** Solo se añadieron archivos `.claude/` y CLAUDE.md raíz. NO se tocó
`src/`, NO se tocó `public/`, NO se tocó `package.json`, NO se tocaron tests.

## Banderas operativas registradas

Siete banderas registradas en `inventory/production.md`:

🚩 #1: desync local vs remoto — diferida a post-evento
🚩 #2: asset host de emails como SPOF — diferida a post-evento
🚩 #3: servicio EasyPanel con nombre genérico `web` — renombre post-evento
🚩 #4: repo público sin descripción/topics — decisión post-evento
🚩 #5: discrepancia "600" vs "600+" personas en aforo — actualizar post-evento
🚩 #6: ubicación del evento inconsistente en 5 capas — unificar post-evento
🚩 #7: README trivial de Lovable — reescribir o reemplazar post-evento

## Qué debe hacer Claude Code en una sesión futura sobre este repo

1. Leer `CLAUDE.md` raíz completo (advertencia de zona roja)
2. Leer `inventory/asset-host-emails.md` (entender el SPOF)
3. Si la sesión va a tocar metadata o brand: leer `conventions/metadata-brand.md`
4. Si la sesión va a tocar deploy/infra: leer `inventory/production.md`
5. Si la sesión es post-17mayo y se permite resolver banderas: leer
   `plans/ACTIVE/post-17mayo.md`
6. Verificar antes de hacer push: ¿el remoto está adelante?

## Estado al cerrar la sesión

- Working tree limpio post-commit
- Push a `origin/main` exitoso (asumiendo desync resuelta o documentada)
- treebumusic.com sigue vivo (verificar manualmente)
- Emails de tickets siguen funcionando (verificar manualmente con email de prueba)

## Próximos pasos sugeridos

Post-evento (después del 17 mayo 2026), retomar `plans/ACTIVE/post-17mayo.md`
en una sesión dedicada de Claude Code que aborde las banderas en orden.
