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
    { href: '/max', label: 'Max' },
    { href: '/kamikaze', label: 'Kamikaze' },
  ],
  cta: { href: '#elige', label: 'Elegir cómo entrenar' },

  hero: {
    lines: ['Entrena.', 'Lucha.', 'Evoluciona.'],
    accentLine: 1,
    text: 'Muay Thai personalizado con Max y la academia Kamikaze, en Armenia, Quindío. Elige cómo entrenar.',
    action: 'Elegir cómo entrenar',
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
        tag: '1\u00a0a\u00a01 personalizado',
        kind: 'Entrenamiento personalizado',
        name: 'Max',
        text: 'Sesiones de Muay Thai uno a uno, adaptadas a tu objetivo.',
        action: 'Conocer entrenamiento',
        meta: 'Armenia, Quindío',
        status: 'provisional' as Status,
      },
      {
        id: 'kamikaze',
        href: '/kamikaze',
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
    { label: 'Kamikaze', value: 'Sin experiencia previa' },
    { label: 'Max', value: 'Parte de una evaluación inicial' },
    { label: 'Con Max', value: 'Sesiones de 45\u00a0min a 1\u00a0hora' },
  ],
} as const;
