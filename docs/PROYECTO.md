# Proyecto Max / Kamikaze: documento rector

**Para qué sirve este archivo:** es la fuente de verdad del proyecto. Reúne el negocio, los requisitos, las
reglas que no se negocian, la arquitectura y las decisiones tomadas, para no perder el rumbo ni desviarnos
de los parámetros iniciales.

**Cómo usarlo**
- Léelo entero antes de cambiar diseño, contenido, formularios o arquitectura.
- Si lo que te piden contradice este documento, **detente y pregunta**; no elijas una versión en silencio.
- Si una decisión cambia, actualiza este archivo **en el mismo commit** y anótala en la sección 11.
- Orden de autoridad si hay conflicto: 1) decisión explícita del cliente o de Nicolas, 2) este documento,
  3) la propuesta aprobada y el brief, 4) los mockups, 5) el código.

Documentos relacionados: `README.md` (cómo arrancar), `docs/PENDIENTES.md` (qué falta),
`CLAUDE.md` (resumen de reglas para el asistente).

Última revisión: 2026-11-04.

**Documentos fuente (fuera del repositorio, en el equipo de Nicolas):**
- `~/Documents/CnD Connections/Docs/Max/Brief_Web_MAX_KAMIKAZE_Contenido_y_Entrevista.docx`: brief de contenido y guía de entrevista.
- `~/Documents/CnD Connections/Docs/Max/Propuesta - Web integral MAX_KAMIKAZE_v4.pdf`: propuesta aprobada (también existe una versión en `.pages`).
- `~/Downloads/Mockups - Max:Kamikaze.zip`: mockups de referencia de estilo (los recortes usados están en `src/assets/reference/`).
- `~/Documents/CnD Connections/Docs/Max/Cotizacion - Web MAX_KAMIKAZE.pdf`: cotización comercial. **Los montos no se copian al repositorio** (ver sección 14).

---

## 1. El negocio

**Quién:** Nicolas Valencia Vergara (CnD Connections) desarrolla la web para Max. La propuesta
("Web integral MAX_KAMIKAZE v4", 15 de octubre de 2026) fue **aprobada por Max**: una plataforma, dos experiencias.
**Quien paga el proyecto es Max** (como persona y dueño de Kamikaze). El precio aún **no está acordado**: la propuesta v4 no trae valores y la cotización se envía aparte.

### Max
- Entrenador personal de **Muay Thai** y propietario de la academia Kamikaze. Instagram: `@maxtrainermuaythai`.
- Servicio principal: entrenamientos personalizados de Muay Thai, **en Armenia, Quindío, Colombia**.
- Lugar: en las instalaciones de Kamikaze **o a domicilio** (ver discrepancia D1).
- Sesiones de 45 minutos a 1 hora; el horario lo acuerdan Max y el alumno.
- Existe una evaluación inicial; el entrenamiento se adapta a los objetivos de cada persona.
- El alumno puede necesitar equipo; Max puede prestárselo al inicio.
- Max vende vendas, guantes, ropa, espinilleras, coderas y otros artículos.
- Hay planes por número de sesiones (modalidades, precios y condiciones **sin definir**).
- **Conversión deseada:** que el visitante solicite una sesión de prueba o reserve una sesión.

### Kamikaze
- Academia de deportes de combate, propiedad de Max. Instagram: `@kamikazecolombia` (Kamikaze Colombia).
- Armenia, Quindío. **Sin sede física definitiva y sin fecha de apertura.** Nunca presentarla como abierta.
- Cinco disciplinas: **Muay Thai, boxeo, BJJ, lucha y MMA**.
- No se requiere experiencia previa. El uniforme no es obligatorio al inicio (ropa deportiva propia).
- Se contemplan clases de prueba e inscripción por la web o presencialmente.
- La capacidad dependerá del espacio físico. Horarios, ubicación y precios: **sin definir**.
- **Objetivos:** conseguir alumnos y captar interesados **antes** de la apertura.

---

## 2. Objetivos y alcance

**Objetivos de la plataforma (por prioridad)**
1. Conseguir clientes para los entrenamientos personalizados de Max.
2. Captar alumnos para Kamikaze.
3. Recopilar interesados en la futura apertura de Kamikaze.
4. Facilitar consultas por WhatsApp y otros canales.
5. Que se entienda de inmediato la diferencia entre ambas propuestas.
6. Aumentar el reconocimiento de ambas marcas.
7. Mostrar servicios, disciplinas, horarios y ubicación **cuando estén confirmados**.
8. Dejar una base técnica que permita añadir reservas, pagos y suscripciones.

**Fase 1 (la actual): captación y presencia digital.**
Incluye: inicio con selector, página de Max, página de Kamikaze, diseño adaptable, WhatsApp y formularios,
SEO técnico básico y analítica. No incluye: redacción de textos, fotografía profesional, logo o manual de marca,
SEO continuo, publicidad, redes, **reservas y pagos en línea**, dominio y hosting (a nombre del cliente).

**Fase 2 (posterior, NO incluida):** reservas, pagos, cobros y suscripciones. Requiere presupuesto aparte
(ver sección 12). El plazo "una o dos semanas" es una **previsión de planificación**, no un compromiso.

---

## 3. Reglas inviolables

**No inventar** (ni en la interfaz, ni en metadatos, ni en datos estructurados): precios, horarios, dirección,
fecha de apertura, certificaciones, logros, testimonios, cantidad de alumnos, resultados garantizados, cupos,
condiciones de preventa, descuentos, políticas de cancelación, características de instalaciones inexistentes.

**Nunca:**
- Presentar la sede de Kamikaze como abierta, ni anunciar una fecha de apertura, ni mostrar horarios inexistentes.
- Simular una base de datos persistente, un pago o un éxito que no ocurrió.
- Dejar botones o enlaces sin función. Si una acción no puede ejecutarse (p. ej. WhatsApp sin número), **no se muestra**.
- Añadir botones de pago que no funcionen, ni guardar datos de tarjetas, ni marcar un pago como exitoso sin confirmación del proveedor.
- Exponer secretos en el código del cliente ni subirlos al repositorio (`.env` está ignorado).
- Usar imágenes falsas presentándolas como fotos reales de Max, sus alumnos o las instalaciones.
- Cambiar de stack sin una razón concreta, ni eliminar configuración existente sin necesidad.
- Dar por terminada una tarea solo porque "se ve bien": hay que ejecutar las comprobaciones.
- Afirmar que algo está verificado, optimizado o conforme a una norma sin haberlo comprobado.

**Datos personales (Colombia, Ley 1581 de 2012):** pedir solo lo necesario, con finalidad informada y
consentimiento explícito; validar siempre en el servidor; no registrar datos personales en logs.

---

## 4. Arquitectura del sitio

Un solo proyecto, un solo dominio (por ahora, subdominio de Vercel), cuatro rutas:

| Ruta | Función | Estado |
|---|---|---|
| `/` | Portada y selector entre Max y Kamikaze | Hecha (textos provisionales) |
| `/max` | Conversión a sesión de prueba | Hecha (estructura final; datos faltantes marcados) |
| `/kamikaze` | Captación de interesados y presentación de la academia | Hecha (ídem) |
| `/privacidad` | Política de privacidad | **Borrador provisional**, `noindex` |
| `/api/interesados`, `/api/sesion-prueba` | Endpoints de los formularios (servidor) | Hechos; **guardado real sin probar** |

Secciones de `/max`: portada (un solo botón), franja de datos, filosofía y retrato, galería, método y perfiles
(franja hueso), sesión suelta o paquetes con "Dónde entrenas", testimonios, solicitud de sesión, preguntas, cierre.
No hay sección de "servicios": Max vende un solo servicio y lo que varía es cómo cobra (sesión suelta o paquete). **Sin sección de equipo deportivo**
(se quitó el 2026-11-04; si vuelve, será con un ecommerce, no como lista de precios).
Secciones de `/kamikaze`: portada, franja de datos, la academia, disciplinas, cómo empezar, entrenadores,
horarios (pestañas por día), planes, sede, testimonios, registro, preguntas, cierre.

**Estructura de carpetas (`src/`)**
- `content/` textos y datos (`home.ts`, `max.ts`, `kamikaze.ts`, `site.ts`). **Todo el contenido vive aquí.**
- `components/` piezas reutilizables; `components/forms/LeadForm.tsx` es la isla React del formulario.
- `lib/` validación compartida (`validation.ts`), fábrica de endpoints (`leads.ts`), cliente de Google Sheets (`sheets.ts`).
- `layouts/Base.astro` SEO, Open Graph, marca `data-snap` y clase `js`.
- `styles/global.css` tokens de diseño y piezas compartidas.
- `assets/brand/` logo provisional de Kamikaze; `assets/reference/` fotos de referencia de los mockups.
- `scripts/check-content.mjs` cuenta lo pendiente antes de publicar.

---

## 5. Stack y decisiones técnicas

| Decisión | Detalle | Por qué |
|---|---|---|
| Framework | **Astro 7.4.2** con islas **React 19.3.1** | Sitio de contenido y captación: poco JS, buen rendimiento móvil y SEO |
| Estilos | **Tailwind CSS 4.3.3** + variables propias en `global.css` | Iteración rápida; tokens reutilizables |
| Lenguaje | TypeScript **6.0.3** | La 7 aún no la admite `@astrojs/check` |
| Entorno | **Node 24.22.1 LTS** (`.nvmrc`), npm 12.2.1 | Última LTS; Astro 7 exige Node >= 22.23.4 |
| Hosting | **Vercel** (subdominio por ahora) con el adaptador `@astrojs/vercel` | Despliegue desde GitHub, HTTPS y CDN |
| Persistencia | **Google Sheets**, escrito desde el servidor con cuenta de servicio | Suficiente para el prelanzamiento; ver migración abajo |
| Cliente de Sheets | API REST con `node:crypto`, **sin** la librería `googleapis` | Evita decenas de MB de dependencias |
| Contenido | Archivos en el repo (sin CMS) | Aún no hay datos confirmados; un CMS sería prematuro |
| Idioma | Solo español de Colombia | Mercado local; textos separados para añadir inglés después |
| Analítica | **Vercel Web Analytics** (decidida, **sin instalar**) | Sin cookies, no requiere banner |
| Tipografía | Barlow Condensed, Chivo, Space Mono (autoalojadas con Fontsource) | Del mockup; sin llamadas a Google |

**Migración prevista:** Google Sheets es temporal. Al llegar reservas, panel de administración o suscripciones con cuentas propias, pasar a **Supabase** (Postgres). La primera etapa de pagos (ver sección 12) puede registrar los pagos en la hoja sin migrar.
**Dependencias:** añadir una nueva exige explicar qué aporta; evitar sobrearquitecturar.

---

## 6. Formularios y datos

- Dos formularios con un solo componente (`LeadForm`, variantes `kamikaze` y `max`) y un solo patrón de endpoint (`lib/leads.ts`).
- **Kamikaze (interesados):** nombre, WhatsApp, correo (opcional), disciplina, horario (opcional), consentimiento.
- **Max (sesión de prueba):** nombre, WhatsApp, objetivo (opcional, 300 caracteres), lugar, horario (opcional), consentimiento.
- Estados: inicial, validación, enviando, éxito y error recuperable (con canal alternativo: Instagram en Kamikaze, WhatsApp en Max).
- Servidor: verifica el origen, limita el cuerpo (4 KB), campo trampa anti-bots, **valida de nuevo** (`lib/validation.ts`, con 10 pruebas) y escribe en la hoja. **Si no hay credenciales responde error y la página nunca muestra "guardado".**
- Hoja de cálculo con dos pestañas de nombre exacto, compartida con la cuenta de servicio como editora:
  - `Kamikaze - interesados`: fecha, nombre, WhatsApp, correo, disciplina, horario, consentimiento, origen.
  - `Max - sesión de prueba`: fecha, nombre, WhatsApp, objetivo, lugar, horario, consentimiento, origen.
- Variables de entorno (solo servidor salvo la primera): `PUBLIC_WHATSAPP_MAX`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
  `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`. Plantilla en `.env.example`. **Nunca** se suben valores reales.
- WhatsApp de Max: variable `PUBLIC_WHATSAPP_MAX`. Si está vacía, los botones de WhatsApp no se muestran.
  Kamikaze no tiene número propio confirmado. El correo de contacto está **pendiente** y no se muestra.

---

## 7. Dirección visual ("Fight Editorial", tomada de los mockups)

Los mockups mandan en estilo; los documentos mandan en requisitos. Ambas páginas son oscuras (Max **no** va en gris claro).

- **Color:** negro `#0a0a0a`, hueso `#f2f0eb`, rojo `#d7191f` (confirmado por el equipo aunque el logo de Kamikaze sea blanco y negro). El rojo se reserva para: una frase de las portadas, botones y acciones, y el **bloque de cierre en rojo sólido** (texto hueso; segunda línea del titular en negro). Superficies: `ink #0a0a0a`, `surface #171717`, `card #1e1e1e`; gris secundario `#bdbab3`. **Una franja hueso con texto negro** (`.band-bone`) por página para dar contraste: método y perfiles en `/max`, "Cómo empezar" en `/kamikaze`. Dentro de ella se redefinen los tonos con variables; no usar colores fijos. **No** va en una frase de cada título de sección (se quitó el 2026-11-04 por parecer plantilla).
- **Tipografía:** Barlow Condensed (titulares), Chivo (texto; **no Inter**), Space Mono (etiquetas pequeñas).
- **Escala (escritorio 1440px):** titulares de portada 112px (inicio y Kamikaze) y 128px (Max); títulos de sección 48px; nombres del selector 96px; números de pasos 44px; precios 36px; texto 17-18px; etiquetas mínimo 12-13px. Móvil aproximadamente 12% menor. Se redujo porque estaba 1,4 a 1,8 veces por encima del mockup. **No agrandar sin comparar con el mockup.**
- **Se quitó a propósito (no reintroducir):** acento rojo en cada título de sección, chips sobre la portada de Max, "Modalidad 0N" y "Perfil" repetido como etiqueta, tabla de planes con uno destacado y primera columna con filete rojo (los planes son una lista de filas, `PlanList.astro`), etiquetas rojas sobre cada título y numeración tipo 02.1, flechas en botones y enlaces, `//` en textos, coordenadas, índices entre corchetes, comillas y checks decorativos, frases hechas ("Da el primer paso"), filas de tres tarjetas idénticas (hoy son columnas abiertas con filete), Inter.
- **Tipografía por nivel:** mayúsculas solo en titulares `h1` y `h2` y en los nombres del selector; `h3`/`h4`, valores y preguntas frecuentes van en frase normal. Interletrado de titulares grandes en negativo (`-0.015em` a `-0.02em`). Ningún texto por debajo de 12px.
- **Ritmo de `/max` y `/kamikaze`:** franjas a ancho completo con fondo `surface` (`.band`) alternadas con secciones sobre fondo `ink`; servicios y sedes en filas y columnas abiertas, sin tarjeta.
- **Respuesta al tocar:** `.btn:active` y paneles responden al pulsar; en pantallas sin hover la barra roja de los paneles queda siempre visible.
- **Navegación:** menú de anclas con botón rojo en escritorio; menú desplegable y botón rojo fijo inferior en móvil.
- **Fotos:** hoy son 11 recortes de los mockups en `src/assets/reference/`, con etiqueta amarilla **"Foto de referencia"**. **No son de Max ni de Kamikaze** (en algunas aparece un cartel de otro gimnasio llamado Kamikaze): deben reemplazarse antes de publicar. Los huecos sin foto muestran un marcador "Falta revisar".
- **Logo:** el de Kamikaze es **provisional** (`assets/brand/`). La identidad visual de Max no existe: no inventar logo ni manual de marca.
- **Accesibilidad mínima:** foco visible, contraste de controles >= 3:1, objetivos táctiles de 44-48px, `prefers-reduced-motion` respetado, página usable sin JavaScript.

---

## 8. Comportamiento del inicio

- Portada y selector miden cada una `100svh - 69px` (la altura visible bajo el menú de 69px).
- **Selector:** Max y Kamikaze ocupan **exactamente la mitad** del espacio visible: lado a lado en escritorio, una sobre otra en móvil y tableta. Verificado en seis tamaños de pantalla. No añadir efectos que rompan "mitad y mitad".
- El botón rojo de la portada baja al selector (`#elige`); al entrar, las dos mitades llegan desde los lados.
- El titular aparece línea por línea al cargar (0,42 s por línea, 300 ms de pausa entre líneas, con golpe seco).
- Un script pequeño completa el movimiento entre portada y selector si el visitante se queda quieto entre ambos; debajo del selector el scroll es libre.
- **Descartado:** `scroll-snap` obligatorio de CSS (atrapaba al visitante en el selector); expansión de paneles al pasar el mouse (rompe mitad y mitad); movimiento de la foto de portada (acentúa la pixelación del recorte).
- Al elegir un panel, este se expande hasta la portada de la página destino (View Transitions entre documentos; Chrome y Safari recientes; en el resto, apertura normal). Los nombres `path-max` y `path-kamikaze` deben coincidir en origen y destino.

---

## 9. Contenido y datos pendientes

- Todo el texto está en `src/content/`. Cada bloque lleva `status: 'confirmed' | 'provisional'` (provisional = redacción de trabajo **sin aprobar** por Max).
- Un dato que falta se escribe con `tbd('qué falta')`; la página lo muestra resaltado en amarillo como **"Falta revisar: ..."**. **Nunca** se pone un número, horario, precio o fecha de ejemplo en su lugar.
- `npm run check:content` cuenta datos que faltan, textos sin aprobar y fotos de referencia, y **falla mientras quede alguno**. Debe terminar sin errores antes de publicar. Hoy: 96 datos, 16 textos sin aprobar y 11 fotos de referencia.
- Los mockups contienen datos inventados (Santiago de Chile, precios, nombres de entrenadores, cupos, testimonios, "Edición 2025"). **Solo son referencia de estilo y estructura**; nada de eso se publica.
- Testimonios: solo con autorización; hasta entonces, estructura con "Falta revisar".

---

## 10. Estado actual (2026-10-29; el diseño se ajustó el 2026-11-04, ver sección 11)

**Hecho:** las cuatro páginas con su diseño y estructura; inicio interactivo; formularios con validación en navegador y servidor; endpoints; documentación; 10 pruebas automáticas; el repositorio tiene el remoto de GitHub configurado y parte del código ya subido.

**Verificado:** `astro check` sin errores, pruebas y build; los formularios en Chrome real (validación, foco, conservación de datos, error recuperable); selector a mitad exacta en 6 tamaños; sin desbordes horizontales a 320 y 390px.

**No verificado:** escritura real en Google Sheets (no hay credenciales); gestos táctiles reales y Safari de iPhone; la transición de View Transitions al navegar; uso solo con teclado y lectores de pantalla; rendimiento (Lighthouse); SEO completo.

**Bloqueos / pendientes técnicos**
- Cuenta de servicio de Google y hoja con las dos pestañas.
- Desplegar en Vercel: todavía no hay ningún despliegue. El repositorio de GitHub existe y ya tiene parte del trabajo; los commits más recientes pueden estar sin subir (comprobar con `git status -sb`).
- Instalar Vercel Web Analytics.
- Sitemap, `robots.txt`, URL canónica e imagen Open Graph (cuando exista el dominio).
- Límite de envíos por IP en los formularios (hoy: campo trampa y verificación de origen).
- Texto legal de privacidad y consentimiento revisado por Max o un abogado.

El detalle por responsable está en `docs/PENDIENTES.md`.

---

## 11. Registro de decisiones y cambios de rumbo

| Fecha | Decisión |
|---|---|
| 2026-10-15 | Propuesta aprobada: plataforma integral (alternativa B). |
| 2026-10-27 | Brief de contenido y guía de entrevista con Max. |
| 2026-10-28 | Stack: Astro + React, Tailwind, Vercel, Google Sheets (un libro, dos pestañas), solo español, contenido en archivos, Vercel Analytics. |
| 2026-10-28 | Entorno: Node 24.22.1 LTS y npm 12.2.1 (no Node 26, que no es LTS). TypeScript 6 por compatibilidad con `@astrojs/check`. |
| 2026-10-28 | Los datos que faltan se muestran como "Falta revisar" en el campo, con la estructura final (cambia la idea inicial de "ocultar o decir próximamente"). |
| 2026-10-28 | **Cambio de rumbo:** se revisaron los mockups a escala real. Max pasa de gris claro a negro y rojo; se añaden portada con foto, rojo en titulares, franja de datos, menú de anclas, planes, galería, cierre y pie completos. |
| 2026-10-28 | Fotos de los mockups usadas como referencia, siempre etiquetadas. Se descartó una foto con el cartel "Kamikaze" de otro gimnasio. |
| 2026-10-28 | Pulido anti-genérico: se quitan etiquetas numeradas, flechas, `//`, adornos y frases hechas; Chivo sustituye a Inter. |
| 2026-10-28 | Selector de inicio a pantalla completa, mitad y mitad. |
| 2026-10-28 | Escala tipográfica reducida a la del mockup (ver sección 7). |
| 2026-10-28 | Inicio interactivo. `scroll-snap` obligatorio probado y **descartado** por atrapar al visitante. |
| 2026-10-29 | Entrada del titular más agresiva (0,42 s por línea, pausa de 300 ms). |
| 2026-11-02 | Se preparó la cotización en PDF (fuera del repo). Paga Max; precio sin acordar. |
| 2026-11-02 | **Fase 2 se cotiza por etapas independientes:** A pagos de sesiones y paquetes (Max); B mensualidad de Kamikaze; C reservas y cupos; D panel de administración. Idea: usar enlace de pago alojado por la pasarela y registrar pagos en la hoja, para abaratar. **Supuesto sin verificar:** que la pasarela elegida ofrezca enlace alojado y cobros recurrentes. |
| 2026-11-02 | Las etapas B, C y D dependen de que Kamikaze tenga sede, horarios y precios; se recomienda empezar solo por la A. |
| 2026-11-04 | **Revisión de "se ve genérica" aplicada:** acento rojo solo en portadas y cierre; fuera chips, "Modalidad 0N" y "Perfil"; servicios y sedes sin tarjeta; planes como lista sin plan destacado; franjas alternas; h3 en frase normal; textos mínimos de 12px; respuesta táctil. Inicio: portada sin eyebrow ni coordenadas, un solo nombre para la acción ("Elegir cómo entrenar") y sin afirmar "En Kamikaze" como lugar. Se arregló el enlace "Saltar al contenido" (usaba una variable inexistente). **No se hizo:** acortar la portada del inicio (rompería "dos pantallas" y el script de encaje). |
| 2026-11-04 | **Segunda pasada de diseño (a pedido de Nicolas):** se quitó la sección "Equipo" de `/max` (queda para un futuro ecommerce); los **testimonios se quedan visibles** a propósito, para que Max vea cómo se verá la sección; servicios y planes en una sola sección; perfiles dentro de método; horarios de Kamikaze en lista (revertido, ver la fila siguiente); gris secundario más claro y superficies más distinguibles; franja hueso con texto negro; cierre en rojo sólido; el golpe del titular se reutiliza en las portadas de `/max` y `/kamikaze` (clase global `slam`). Menos rojo decorativo. |
| 2026-11-04 | **Horarios de Kamikaze:** Nicolas prefiere las **tarjetas por bloque** (título rojo, clases con filete rojo, pestaña activa roja) a la lista. Se restauraron; no volver a la lista sin preguntar. |
| 2026-11-04 | **Confirmado por Nicolas:** Max cobra la sesión suelta y paquetes de **3, 6 y 12 sesiones** (cuatro filas en `/max`; los precios siguen en "Falta revisar"). En Kamikaze la portada **conserva** "Explorar disciplinas" junto al botón principal. |
| 2026-11-04 | **Tercera pasada (a pedido de Nicolas):** portada de `/max` con un solo botón; se quitó "Elige cómo entrenar" (eran 3 servicios inventados; solo hay uno); "Planes" pasó a "Sesión suelta o paquetes" (sin plan destacado; sin afirmar que el paquete sea más barato); galería movida justo tras "Sobre Max" (confianza antes de pedir datos); método con números grandes y perfiles en composición asimétrica (título a la izquierda, filas a la derecha). Menú de `/max`: Sobre Max, Galería, Método, Precios, Preguntas. |
| 2026-11-04 | **Revisión con Web Interface Guidelines aplicada:** `color-scheme: dark` y `theme-color` igual al fondo; `scroll-padding-bottom` por el botón fijo; `text-wrap: balance` en titulares; `touch-action: manipulation`; barra roja del panel con `transform` en vez de `width`; cifras tabulares en precios y horas; `hover` en preguntas frecuentes; espacios duros entre número y unidad; `spellCheck` apagado en el formulario. **Pendiente de esa revisión:** precarga de tipografías, pestaña de día en la URL y etiquetas específicas en los botones "Consultar". |
| 2026-11-04 | Documentos de rumbo actualizados (`PROYECTO.md`, `CLAUDE.md`, `PENDIENTES.md`): documentos fuente, Fase 2 por etapas y normas de trato. |

---

## 12. Fase 2: qué hay que definir antes de implementar pagos

No se empieza hasta tener respuesta a todo esto (sección 6 del prompt inicial y brief):
qué se cobra (sesiones, paquetes, matrícula, mensualidad); precios y planes; pago único o recurrente;
cómo funcionan las reservas y se confirma la disponibilidad; qué pasa si un pago falla; cancelaciones,
reprogramaciones y devoluciones; qué notificaciones se envían; quién administra las transacciones;
y, para Kamikaze, si se recibirán pagos antes de abrir y qué compra exactamente la persona.

**Etapas acordadas para cotizar (independientes, cada una la decide Max):**
- **A. Pagos de sesiones y paquetes (Max):** sesión suelta o paquete con la pasarela; incluye la sesión de definición de procesos, registro de cada pago en la hoja y correo de confirmación. Pregunta abierta: si los paquetes vencen (añade trabajo).
- **B. Mensualidad de Kamikaze:** cobro recurrente administrado desde el panel de la pasarela. No hay cuentas de usuario para alumnos.
- **C. Reservas y cupos:** calendario, cupos, confirmación y cancelación.
- **D. Panel de administración:** acceso seguro para ver alumnos, pagos y reservas.
- Hoy Max cobra por **sesión o paquete de sesiones personalizadas** y por **mensualidad en Kamikaze**. B, C y D no tienen sentido mientras Kamikaze no tenga sede, horarios y precios.
- Por verificar antes de cerrar precio: qué pasarelas de Colombia (Wompi, ePayco, Mercado Pago, PayU) ofrecen enlace de pago alojado y cobros recurrentes, y sus comisiones (las paga el cliente). Si la factura electrónica es necesaria, es tema de Max y su contador.

Reglas: evaluar una pasarela adecuada para Colombia con sus requisitos reales; usar la integración oficial;
verificar las notificaciones de transacción en el servidor; **no** guardar tarjetas; no simular transacciones.

---

## 13. Discrepancias abiertas (decidir con Max o Nicolas; no elegir en silencio)

- **D1. Lugar de entrenamiento de Max.** El brief dice "en Kamikaze o a domicilio", pero Kamikaze no tiene sede. Hoy la web ofrece ambas. Confirmar qué existe realmente.
- **D2. Disciplinas.** La propuesta describe Kamikaze como "academia de MMA con clases grupales"; el brief y el prompt listan cinco disciplinas. La web usa las **cinco**.
- **D3. Plazo de pagos.** El prompt dice "una o dos semanas" como previsión; la propuesta dice que la Fase 2 requiere definir procesos y presupuesto aparte.
- **D4. Dominio y hosting.** La propuesta los pone a nombre del cliente; por ahora se usa el subdominio de Vercel.
- **D5. Contacto.** Falta el correo de contacto y confirmar si Kamikaze tendrá WhatsApp propio.
- **D6. Responsable de los datos** para la política de privacidad.
- **D7. Productos deportivos.** El brief dice "si se confirma que deben promocionarse". Se retiró la sección de `/max` (2026-11-04); queda para un futuro ecommerce.

---

## 14. Cómo trabajar en este proyecto

1. Antes de cambiar algo, relee las secciones 3 (reglas) y 7 (visual) y busca el equivalente en el código existente.
2. Verifica de verdad: `npm run check`, `npm test`, `npm run build`, y mira el resultado en navegador (escritorio y móvil). No afirmes lo que no ejecutaste.
3. Si necesitas un dato del negocio que no existe, continúa con lo que sí se puede hacer y márcalo con `tbd(...)`; no lo inventes.
4. Commits pequeños y con mensaje claro en español. No subir `.env`, credenciales ni `node_modules`.
5. Cualquier decisión que afecte arquitectura, costos o sea difícil de revertir se explica **antes** de comprometerla.
6. Al terminar, actualiza este archivo, `docs/PENDIENTES.md` y, si cambió, el `README.md`.
7. **Trato con Nicolas:** responde en español; escribe su nombre **"Nicolas" sin tilde**; da tu opinión honesta y razonada, no la que le gustaría oír; haz preguntas cuando una decisión es suya; no hagas `git push` ni acciones externas sin que lo pida (el remoto de GitHub ya existe y puede estar por delante o por detrás: revisa `git status -sb`).
8. **Dinero:** los precios de la cotización viven solo en el PDF, fuera del repositorio (que se sube a GitHub). Nunca los copies a código, contenido ni documentos del repo. Los precios de planes de Max o Kamikaze en la web son otro asunto: son de Max y se escriben solo cuando él los confirme.
9. **Entorno:** el shell puede arrancar con un Node antiguo; ejecuta `source ~/.nvm/nvm.sh && nvm use 24.22.1` antes de `npm`. Las pruebas en navegador real se hicieron con Chrome sin interfaz (de `~/.cache/puppeteer`) y scripts CDP temporales; no están en el repo.
