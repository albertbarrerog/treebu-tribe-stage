# Decidir package manager — bun vs npm

**Estado:** ACTIVE — decisión pendiente
**Prioridad:** baja (no bloquea nada)

## Contexto

`treebu-tribe-stage` tiene `package-lock.json` (npm) pero hay archivos sueltos
o pistas que sugieren intentos previos de usar bun. Como el repo viene de
Lovable, no hay claridad sobre el package manager intencional.

## Estado actual (REALIDAD detectada en inspección 2026-04-25)

El repo tiene **3 lockfiles coexistiendo activamente**:

| Archivo | Tamaño | Manager |
|---|---|---|
| `bun.lock` | 147,941 bytes | bun (formato JSON nuevo) |
| `bun.lockb` | 246,885 bytes | bun (formato binario legacy) |
| `package-lock.json` | 303,513 bytes | npm |

Esto es más conflictivo que "intentos previos sueltos". Hay **dos formatos de bun** + **npm activo**. No hay forma de saber cuál es el que se usa en producción sin verificar EasyPanel.

## Por qué no es urgente

- EasyPanel deployea correctamente el sitio (probablemente usa npm porque es lo más estándar)
- No bloquea ningún deploy ni feature
- No afecta a los emails ni al SPOF

## Opciones

### Opción A — Quedarse en npm + limpiar lockfiles de bun
**Pros:**
- Consistente con tickets (que usa npm)
- Más maduro, menos sorpresas
- Lovable y EasyPanel funcionan con npm sin issues
- Deshace el ruido de Lovable

**Contras:**
- Más lento que bun en install y dev

**Acción:**
1. Verificar primero qué manager usa EasyPanel (`buildCommand` en config)
2. Si es npm: eliminar `bun.lock` + `bun.lockb`, mantener `package-lock.json`
3. Documentar npm como manager oficial en `architecture/stack-decisions.md`

### Opción B — Migrar a bun + limpiar lockfile de npm
**Pros:**
- 5-10x más rápido en install
- Mejor performance en dev mode con Vite
- Más moderno

**Contras:**
- Requiere instalar bun en el VPS de EasyPanel (verificar soporte)
- Posibles incompatibilidades con dependencias edge case
- Inconsistencia con tickets

**Acción:**
1. Verificar que EasyPanel soporta bun como buildpack
2. Eliminar `package-lock.json` y `bun.lockb` (legacy)
3. Mantener solo `bun.lock`
4. Configurar EasyPanel para usar `bun install` y `bun run build`

### Opción C — Probar bun en una rama dedicada
**Pros:**
- Riesgo controlado
- Permite medir diferencias reales

**Contras:**
- Más trabajo

## Recomendación preliminar

**Opción A (npm)** hasta tener una razón fuerte para migrar. La consistencia
con el resto del ecosistema vale más que la velocidad de bun en este momento.

Reevaluar si:
- Aparece un proyecto nuevo donde bun sea claramente mejor
- npm install se vuelve insoportablemente lento
- Hay una migración mayor del stack que justifique cambiarlo todo de una

## Acción inmediata

1. Verificar si existe `bun.lockb` o similar en el repo
2. Si existe: eliminar (resolver inconsistencia hacia npm)
3. Documentar npm como manager oficial en `architecture/stack-decisions.md`
4. Mover este plan a DONE cuando se confirme la decisión

## Verificación

- `npm install` funciona sin errores
- `npm run build` funciona sin errores
- EasyPanel deployea correctamente
- No hay archivos sueltos de bun
