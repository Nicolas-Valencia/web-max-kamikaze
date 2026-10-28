import type { Status } from './site';

/**
 * Contenido de /kamikaze. Los datos marcados 'confirmed' vienen del brief de Max.
 * Todo lo 'provisional' es redacción de trabajo y debe aprobarse antes de publicar.
 * No hay precios, horarios, dirección ni fecha de apertura: aún no existen.
 */
export const kamikaze = {
  meta: {
    title: 'Kamikaze | Academia de deportes de combate en Armenia, Quindío',
    description:
      'Muay Thai, boxeo, BJJ, lucha y MMA en Armenia, Quindío. Regístrate para recibir novedades de la academia Kamikaze.',
    status: 'provisional' as Status,
  },

  hero: {
    title: 'Kamikaze se está preparando en Armenia.',
    text: 'Muay Thai, boxeo, BJJ, lucha y MMA, para quien empieza y para quien ya entrena. Déjanos tu contacto y te escribimos primero.',
    action: 'Quiero que me avisen',
    status: 'provisional' as Status,
  },

  disciplines: {
    title: 'Cinco disciplinas',
    items: ['Muay Thai', 'Boxeo', 'BJJ', 'Lucha', 'MMA'],
    status: 'confirmed' as Status,
  },

  start: {
    title: 'Cómo empezar',
    items: [
      {
        title: 'No necesitas experiencia',
        text: 'La academia recibe personas de distintos niveles y objetivos.',
        status: 'confirmed' as Status,
      },
      {
        title: 'No necesitas uniforme',
        text: 'Al comienzo puedes venir con tu ropa deportiva.',
        status: 'confirmed' as Status,
      },
      {
        title: 'Habrá clases de prueba',
        text: 'Todavía estamos definiendo cómo funcionarán. Te contamos en cuanto estén listas.',
        status: 'provisional' as Status,
      },
    ],
  },

  prelaunch: {
    title: 'Lo que todavía no está definido',
    intro:
      'Estamos preparando la academia y preferimos decírtelo claro: aún no hay sede, horarios ni precios publicados.',
    items: ['Sede', 'Horarios', 'Precios', 'Fecha de apertura'],
    outro: 'Quienes se registren abajo recibirán esa información primero.',
    status: 'provisional' as Status,
  },

  form: {
    title: 'Regístrate como interesado',
    text: 'Solo te pedimos lo necesario para escribirte cuando haya novedades.',
    status: 'provisional' as Status,
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Necesito experiencia previa?',
        a: 'No. Puedes empezar desde cero.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Tengo que comprar un uniforme?',
        a: 'No al comienzo. Puedes asistir con tu propia ropa deportiva.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Dónde queda la academia?',
        a: 'Estará en Armenia, Quindío. La sede todavía no está definida.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Cuándo abre?',
        a: 'Todavía no hay fecha. Si te registras, te avisamos cuando la haya.',
        status: 'provisional' as Status,
      },
      {
        q: '¿Cuánto cuesta y qué horarios habrá?',
        a: 'Aún no está definido. Te lo contamos cuando esté confirmado.',
        status: 'provisional' as Status,
      },
      {
        q: '¿Habrá clase de prueba?',
        a: 'Sí, está contemplada. Falta definir cómo funcionará.',
        status: 'provisional' as Status,
      },
    ],
  },
} as const;
