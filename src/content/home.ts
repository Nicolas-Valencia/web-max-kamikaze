import type { Status } from './site';

/** Contenido del inicio. Los textos son redacción de trabajo hasta que Max los apruebe. */
export const home = {
  meta: {
    title: 'Max y Kamikaze | Muay Thai y deportes de combate en Armenia',
    description:
      'Entrenamiento personalizado de Muay Thai con Max y la academia de deportes de combate Kamikaze, en Armenia, Quindío.',
    status: 'provisional' as Status,
  },

  nav: [
    { href: '#elige', label: 'Elige tu camino' },
    { href: '/max', label: 'Max' },
    { href: '/kamikaze', label: 'Kamikaze' },
  ],
  cta: { href: '#elige', label: 'Elegir camino' },

  hero: {
    kicker: 'Max / Kamikaze // Dos caminos. Una mentalidad.',
    lines: ['Entrena.', 'Lucha.', 'Evoluciona.'],
    accentLine: 1,
    text: 'Entrenamiento personalizado de Muay Thai con Max y la academia de deportes de combate Kamikaze, en Armenia, Quindío. Elige cómo quieres entrenar.',
    action: 'Descubre tu forma de entrenar',
    coord: 'Armenia, Quindío, Colombia // 4.53° N / 75.68° O',
    status: 'provisional' as Status,
  },

  select: {
    id: 'elige',
    title: '¿Qué quieres',
    accent: 'entrenar?',
    options: [
      {
        id: 'max',
        href: '/max',
        index: '01 // Max',
        tag: '1 a 1 personalizado',
        kind: 'Entrenamiento personalizado',
        name: 'Max',
        text: 'Sesiones de Muay Thai uno a uno, adaptadas a tu objetivo. En Kamikaze o a domicilio.',
        action: 'Conocer entrenamiento',
        meta: 'Armenia, Quindío',
        status: 'provisional' as Status,
      },
      {
        id: 'kamikaze',
        href: '/kamikaze',
        index: '02 // Kamikaze',
        tag: 'Clases grupales',
        kind: 'Academia de combate',
        name: 'Kamikaze',
        text: 'Muay Thai, boxeo, BJJ, lucha y MMA. Para quien empieza y para quien ya entrena.',
        action: 'Conocer academia',
        meta: 'Próxima apertura',
        status: 'provisional' as Status,
      },
    ],
  },

  values: [
    {
      label: 'Sin experiencia',
      title: 'Empieza desde cero',
      text: 'Kamikaze recibe personas de todos los niveles. No necesitas experiencia previa.',
    },
    {
      label: 'A tu medida',
      title: 'Entrenamiento adaptado',
      text: 'Max parte de una evaluación inicial y ajusta cada sesión a tu objetivo.',
    },
    {
      label: 'En Armenia',
      title: 'Donde te quede mejor',
      text: 'Con Max puedes entrenar en Kamikaze o a domicilio, en Armenia.',
    },
  ],
} as const;
