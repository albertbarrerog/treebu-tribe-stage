# Metadata y brand — treebu-tribe-stage

## Convención de metadata HTML

Todo proyecto del colectivo TREEBU debe tener metadata completa en `index.html`:

### OpenGraph (obligatorio)
- `og:title`
- `og:description`
- `og:image` (apuntando al flyer del evento en `/images/`)
- `og:url`
- `og:type`

### Twitter Card (obligatorio)
- `twitter:card` con valor `summary_large_image`

### Favicon (obligatorio)
- `/favicon.png` en `public/` root
- `apple-touch-icon` en `public/`

### JSON-LD schema.org (estado actual)

Realidad documentada en `index.html` (líneas 18-35):

```json
{
  "@type": "Event",
  "name": "TREEBU 002",
  "startDate": "2026-05-17T20:00:00-05:00",
  "endDate": "2026-05-18T05:00:00-05:00",
  "location": {
    "@type": "Place",
    "name": "Km 1.5 Vía Termales",
    "address": "Santa Rosa de Cabal, Risaralda, Colombia"
  },
  "organizer": { "@type": "Organization", "name": "TREEBU" }
}
```

**Limitaciones del schema actual:**
- Tipo `Event` genérico, no `MusicEvent` (mejor para eventos musicales)
- Sin `performer` (line-up no aparece en schema)
- Sin `offers` (precios no aparecen)
- `location.name` contiene la dirección en lugar del nombre del lugar

**Plan de mejora (post-evento):**
1. Cambiar `@type` a `MusicEvent`
2. Añadir `performer` array con IVORY · 2MT · ABSTRUSE · IMAO · LETTO
3. Añadir `offers` con precios y disponibilidad
4. Limpiar `location.name` a "Avocado Restaurante" o "Asturias Mall"
5. Mover dirección actual a `location.address`

**IMPORTANTE — pre-evento:** NO modificar el JSON-LD actual (zona roja). Google ya lo indexó. Cambios pre-evento podrían generar inconsistencia entre lo indexado y lo nuevo. Esperar a post-17mayo.

**IMPORTANTE:** la ubicación en JSON-LD debe coincidir exactamente con:
- El contrato Ivory (firmado): "Km 1.5 Vía Termales, Santa Rosa de Cabal"
- `treebu-collective/.claude/inventory/eventos/treebu-002-activo.md`
- El CLAUDE.md de tickets (línea de ubicación)

Inconsistencia entre estos 3 lugares = ERROR. Verificar antes de cualquier cambio.

## Brand color obligatorio

`#C8F542` (verde TREEBU). Definido en:
- Logo (cuando se renderiza inline)
- CTAs principales
- Acentos visuales

NO usar otros verdes "similares" sin checkpoint humano.

## Tipografía

Definida en Tailwind config y `src/index.css`. Si necesitas añadir una nueva
fuente, evaluar primero:
- ¿La fuente nueva soporta caracteres latinos completos (incluyendo tildes)?
- Onder no soporta caracteres especiales (tildes, ñ, é) — NO usar para títulos
  con esos caracteres
- Defaults seguros: Inter, Circe

## Line-up del evento

Confirmado en `src/components/EventSection.tsx`:
**IVORY · 2MT · ABSTRUSE · IMAO · LETTO**

Si se cambia el line-up:
1. Actualizar `EventSection.tsx`
2. Actualizar JSON-LD en `index.html`
3. Actualizar `treebu-collective/.claude/inventory/eventos/treebu-002-activo.md`
4. Notificar via WhatsApp/email a compradores con el cambio (si ya hay venta)

## CTAs vigentes

- "Etapa preventa" (vigente al cierre de sprint 2026-04-24)
- Cuando cambie a otra etapa (Early Bird → General → Last Tickets), actualizar
  copy en `EventSection.tsx`

## Voz del colectivo

- Tribal TREEBU + español colombiano neutro (NO argentino, NO mexicano)
- Tono: cercano, no corporativo, alineado con About TREEBU del brand guide

## Reglas para metadata

1. NO cambiar `og:image` sin reflejarlo en `treebu-collective`
2. NO cambiar la fecha del evento sin verificar contrato y JSON-LD
3. NO cambiar la ubicación sin checkpoint humano (3 fuentes deben coincidir)
4. SI cambias el line-up, actualizar 4 lugares (lista arriba)
