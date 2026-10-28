# Web Max / Kamikaze

Plataforma web para **Max** (entrenamiento personalizado de Muay Thai) y **Kamikaze** (academia de deportes de combate), en Armenia, Quindío, Colombia.

Un solo sitio con tres experiencias:

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Selector entre Max y Kamikaze | Implementada (textos provisionales) |
| `/max` | Entrenamiento personalizado | Pendiente |
| `/kamikaze` | Academia y registro de interesados | Pendiente |

La primera versión se centra en **captación y presencia digital**. Las reservas, los pagos y las suscripciones son una fase posterior.

## Stack

- [Astro](https://astro.build) 7, con islas de React para las partes interactivas
- Tailwind CSS 4, con un tema visual por marca (`data-brand`)
- TypeScript
- Archivo (variable, autoalojada) como única familia tipográfica
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

## Variables de entorno

Copia `.env.example` a `.env`. El archivo `.env` no se sube al repositorio.

| Variable | Descripción |
|---|---|
| `PUBLIC_WHATSAPP_MAX` | WhatsApp de Max, solo dígitos con código de país. Si está vacía, los botones de WhatsApp no se muestran. |

## Estructura

```
src/
  assets/brand/   Logos (el de Kamikaze es provisional)
  components/     Componentes reutilizables
  content/        Textos y datos del sitio, separados de la interfaz
  layouts/        Layout base (SEO, Open Graph, tema por marca)
  pages/          Rutas
  styles/         Tokens de diseño y estilos globales
```

## Reglas de contenido

El contenido vive en `src/content/`. Cada dato lleva un estado:

- `confirmed`: confirmado por Max o por el equipo.
- `provisional`: texto de trabajo, **no aprobado**. Debe reemplazarse antes de publicar.

No se publican precios, horarios, dirección, fecha de apertura, testimonios ni certificaciones sin confirmación de Max. Las secciones sin datos reales se muestran como "próximamente" o se ocultan.

## Pendientes

Detalle completo en [`docs/PENDIENTES.md`](docs/PENDIENTES.md).
