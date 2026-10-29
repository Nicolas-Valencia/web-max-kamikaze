# Web Max / Kamikaze

Plataforma web para **Max** (entrenamiento personalizado de Muay Thai) y **Kamikaze** (academia de deportes de combate), en Armenia, Quindío, Colombia.

Un solo sitio con tres experiencias:

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Selector entre Max y Kamikaze | Implementada (textos provisionales) |
| `/max` | Entrenamiento personalizado y solicitud de sesión de prueba | Implementada (textos provisionales; el guardado requiere configurar Google Sheets) |
| `/kamikaze` | Academia y registro de interesados | Implementada (textos provisionales; el guardado requiere configurar Google Sheets) |
| `/privacidad` | Política de privacidad | Borrador provisional |

La primera versión se centra en **captación y presencia digital**. Las reservas, los pagos y las suscripciones son una fase posterior.

## Stack

- [Astro](https://astro.build) 7, con islas de React para las partes interactivas
- Tailwind CSS 4, con un tema visual por marca (`data-brand`)
- TypeScript
- Barlow Condensed (titulares), Chivo (texto) y Space Mono (etiquetas), autoalojadas
- Despliegue en Vercel
- Registro de formularios en Google Sheets (temporal; se migrará a una base de datos al llegar reservas y pagos)

## Requisitos

- Node.js **24.22.1** (LTS). El archivo `.nvmrc` fija la versión: con [nvm](https://github.com/nvm-sh/nvm), ejecuta `nvm use`.
- npm 12 o superior.

## Puesta en marcha

```sh
git clone https://github.com/Nicolas-Valencia/web-max-kamikaze.git
cd web-max-kamikaze
nvm use
npm install
cp .env.example .env   # y completa los valores
npm run dev
```

Abre <http://localhost:4321> en el navegador.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run check` | Revisa tipos y archivos `.astro` |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm test` | Pruebas de la validación de los formularios |
| `npm run check:content` | Cuenta datos que faltan, textos sin aprobar y fotos de referencia; falla mientras quede alguno |

## Variables de entorno

Copia `.env.example` a `.env`. El archivo `.env` no se sube al repositorio.

| Variable | Descripción |
|---|---|
| `PUBLIC_WHATSAPP_MAX` | WhatsApp de Max, solo dígitos con código de país. Si está vacía, los botones de WhatsApp no se muestran. |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Correo de la cuenta de servicio de Google (solo servidor). |
| `GOOGLE_PRIVATE_KEY` | Llave privada de esa cuenta, en una línea con `\n` literales (solo servidor). |
| `GOOGLE_SHEET_ID` | ID de la hoja donde se guardan los registros (solo servidor). |

Sin las tres variables de Google, el formulario de Kamikaze responde con un error y **no guarda nada**. La hoja necesita dos pestañas, con estos nombres exactos, y debe compartirse con la cuenta de servicio como editora:

| Pestaña | Formulario | Columnas |
|---|---|---|
| `Kamikaze - interesados` | `/kamikaze` | fecha, nombre, WhatsApp, correo, disciplina, horario, consentimiento, origen |
| `Max - sesión de prueba` | `/max` | fecha, nombre, WhatsApp, objetivo, lugar, horario, consentimiento, origen |

## Estructura

```
src/
  assets/brand/       Logo de Kamikaze (provisional) y su monograma
  assets/reference/   Fotos de referencia tomadas de los mockups (reemplazar antes de publicar)
  components/     Componentes reutilizables (forms/ contiene el formulario, una isla React)
  lib/            Validación compartida (navegador y servidor) y cliente de Google Sheets
  content/        Textos y datos del sitio, separados de la interfaz
  layouts/        Layout base (SEO, Open Graph, tema por marca)
  pages/          Rutas
  styles/         Tokens de diseño y estilos globales
```

## Reglas de contenido

El contenido vive en `src/content/`. Las páginas tienen ya su estructura y diseño finales; lo que falta se rellena así:

- **Dato que falta:** se escribe con `tbd('qué falta')` y la página lo muestra resaltado en amarillo como "Falta revisar: ...". Nunca se pone un precio, horario, dirección o fecha de ejemplo: solo ese marcador.
- **Texto de trabajo:** los bloques con `status: 'provisional'` están redactados pero Max aún no los aprueba.
- **Fotos de referencia:** las fotos en blanco y negro vienen recortadas de los mockups y llevan la etiqueta "Foto de referencia". **No son de Max ni de Kamikaze** (en algunas aparecen marcas de otros gimnasios). Viven en `src/assets/reference/`; para reemplazarlas, sustituye el archivo por la foto real y elimina la etiqueta.
- **Fotos que faltan:** los marcadores punteados llevan el rótulo "Falta revisar" y la descripción de la foto que va en ese lugar.

Para completar un dato, reemplaza la llamada `tbd(...)` por el valor real. Antes de publicar, `npm run check:content` debe terminar sin errores.

## Pendientes

Detalle completo en [`docs/PENDIENTES.md`](docs/PENDIENTES.md).
