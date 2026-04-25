# Asset host de emails — el SPOF documentado

> 🔴 **CRÍTICO:** este archivo describe el Single Point of Failure más serio del
> ecosistema TREEBU al cierre del sprint de migración (2026-04-25).

## Qué es

`treebu-tribe-stage` sirve como asset host (CDN improvisado) para las imágenes
de los emails que envía `treebu-tickets/backend`. Los emails de los QRs ya
emitidos cargan imágenes desde URLs `raw.githubusercontent.com` apuntando a
ESTE repo.

## Archivos críticos en `public/images/`

NO TOCAR estos archivos sin checkpoint humano explícito:

1. `header_email_tickets.jpg` — header del email de confirmación de compra
2. `Ivory_Flyer_Ticketera.jpg` — flyer del evento embebido en email

## Dónde se referencian (en treebu-tickets)

`backend/src/services/emailService.js` (3 referencias):
- Línea ~50: header del email
- Línea ~134: flyer en email
- Línea ~198: header en otro email (probablemente reenvío de QR)

URLs hardcoded:
```
https://raw.githubusercontent.com/albertbarrerog/treebu-tribe-stage/main/public/images/header_email_tickets.jpg
https://raw.githubusercontent.com/albertbarrerog/treebu-tribe-stage/main/public/images/Ivory_Flyer_Ticketera.jpg
```

## Por qué es un SPOF

Si cualquiera de estos 4 escenarios ocurre, **se rompen los emails de los 50+
QRs ya emitidos** (incluyendo cuando los compradores los abren después):

### Escenario 1 — Repo pasa a privado
Las URLs `raw.githubusercontent.com` requieren que el repo sea público. Si pasa
a privado, devuelven 404. **Mitigación:** mantener PÚBLICO hasta que se solucione
el SPOF.

### Escenario 2 — Renombre del repo
Si `treebu-tribe-stage` se renombra a `treebu-tribe`, las URLs apuntan a un
repo que no existe. **Mitigación:** renombre diferido a post-evento + actualizar
emailService.js antes del renombre.

### Escenario 3 — Cambio de nombre de archivo
Si `header_email_tickets.jpg` se renombra a otra cosa, los emails pierden el
header. **Mitigación:** documentado, NO tocar.

### Escenario 4 — Branch main reescrita o force-push
Si `main` cambia y los archivos pierden ruta, las URLs devuelven 404.
**Mitigación:** convención `disciplina-main.md` documentada, sin force-push.

## Solución correcta (post-evento)

Hay un esqueleto de solución preparado pero NO conectado:

`treebu-tickets/backend/src/assets/header_email_b64.txt` (15KB) ya tiene el
header en base64. Plan post-evento:

1. Modificar `emailService.js` para leer base64 del archivo local
2. Embeber base64 en el email como `data:image/jpeg;base64,<contenido>`
3. Eliminar referencias a `raw.githubusercontent.com`
4. Probar emails con cliente de email real (Gmail, Outlook)
5. Una vez probado, desacoplar tribe-stage como asset host

Plan trackeado en `treebu-collective/.claude/plans/ACTIVE/post-migracion-inmediato.md`.

## Estado actual del SPOF

| Aspecto | Estado |
|---|---|
| Repo visibility | Público ✅ (necesario hoy) |
| Archivos `public/images/` | Intactos ✅ |
| Esqueleto de solución (b64) | Existe pero no conectado |
| Plan de mitigación | Documentado |
| Fecha objetivo de solución | Post 17 mayo 2026 |

## Reglas absolutas mientras el SPOF exista

1. **NUNCA hacer privado el repo `treebu-tribe-stage`**
2. **NUNCA renombrar `header_email_tickets.jpg` ni `Ivory_Flyer_Ticketera.jpg`**
3. **NUNCA mover archivos fuera de `public/images/`**
4. **NUNCA force-push a main** que pueda alterar el árbol de archivos
5. **SI alguien pregunta "¿puedo borrar este JPG?"** la respuesta es NO hasta
   confirmar que el SPOF está resuelto

## Si el SPOF se rompe accidentalmente

Síntomas:
- Compradores reportan que ven cuadrados rotos en sus emails
- Los nuevos emails no muestran imágenes

Solución de emergencia:
1. Verificar que el repo sigue público
2. Verificar que los archivos en `public/images/` están intactos
3. Si están perdidos: hacer revert al commit anterior + push (con cuidado por
   la disciplina de no force-push)
4. Notificar a compradores afectados

## Referencias cruzadas

- `treebu-tickets/.claude/architecture/payment-flow-nequi.md` — flujo completo
  donde estos emails se envían
- `treebu-tickets/.claude/conventions/email-smtp.md` — config Nodemailer + Gmail
- `treebu-collective/.claude/plans/ACTIVE/post-migracion-inmediato.md` — plan
  de solución
