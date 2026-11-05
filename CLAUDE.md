# Max / Kamikaze: instrucciones para el asistente

**Antes de cambiar nada, lee `docs/PROYECTO.md`.** Es la fuente de verdad (negocio, requisitos, reglas,
arquitectura y decisiones). Si lo que te piden la contradice, detente y pregunta.

## Reglas que no se negocian
- No inventar precios, horarios, dirección, fecha de apertura, testimonios, certificaciones ni cupos.
  Lo que falta se escribe con `tbd('qué falta')` y se ve como "Falta revisar".
- Kamikaze no tiene sede ni fecha: nunca presentarla como abierta.
- Sin botones ni enlaces que no funcionen. Sin pagos ni guardados simulados.
- Pagos y reservas son Fase 2: no implementar sin definir procesos.
- Los formularios no muestran "guardado" si el servidor no confirmó. Validar siempre en el servidor.
- Nada de secretos en el repositorio ni en el código del cliente (`.env` ignorado).
- Los mockups son referencia de estilo, no de datos. Las fotos de `src/assets/reference/` son de referencia y se reemplazan.

## Diseño (no reintroducir lo descartado)
Negro, hueso y rojo; Barlow Condensed + Chivo + Space Mono; escala tipográfica del mockup.
Sin etiquetas numeradas sobre los títulos, flechas en botones, `//`, adornos ni frases hechas.
Rojo solo en portadas, acciones y el bloque de cierre (no una frase roja en cada título). Una franja hueso con texto negro por página. Planes como lista, sin plan destacado. Mayúsculas solo en `h1`/`h2`.
El selector del inicio mide exactamente mitad y mitad.

## Trato y límites
Español. El usuario es **Nicolas** (sin tilde). Opinión honesta y preguntas cuando la decisión es suya.
No hacer `git push` ni acciones externas sin que lo pida. Los precios de la cotización (PDF fuera del repo)
nunca se copian aquí. Documentos fuente, discrepancias y Fase 2 por etapas: ver `docs/PROYECTO.md`.

## Comandos
`npm run dev` · `npm run check` · `npm test` · `npm run build` · `npm run check:content`
Node 24.22.1 (`nvm use`). Ver también `AGENTS.md` y `README.md`.

## Al terminar una tarea
Verifica de verdad (no afirmes lo que no ejecutaste) y actualiza `docs/PROYECTO.md` y `docs/PENDIENTES.md`.
