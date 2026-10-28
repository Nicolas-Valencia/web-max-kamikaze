import type { Status } from './site';

export const home = {
  meta: {
    title: 'Max y Kamikaze | Muay Thai y deportes de combate en Armenia',
    description:
      'Entrenamiento personalizado de Muay Thai con Max y la academia de deportes de combate Kamikaze, en Armenia, Quindío.',
    status: 'provisional' as Status,
  },
  heading: '¿Qué quieres entrenar?',
  options: [
    {
      id: 'max',
      href: '/max',
      name: 'Max',
      kind: 'Entrenamiento personalizado',
      text: 'Sesiones de Muay Thai uno a uno, adaptadas a tu objetivo.',
      action: 'Ver entrenamientos con Max',
      status: 'provisional' as Status,
    },
    {
      id: 'kamikaze',
      href: '/kamikaze',
      name: 'Kamikaze',
      kind: 'Academia de deportes de combate',
      text: 'Muay Thai, boxeo, BJJ, lucha y MMA. Se está preparando en Armenia.',
      action: 'Ver la academia',
      status: 'provisional' as Status,
    },
  ],
} as const;
