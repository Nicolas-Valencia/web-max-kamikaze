import { tbd, type Status } from './site';

/**
 * Contenido de /kamikaze con la estructura final de la página.
 * - Los textos confirmados vienen del brief de Max.
 * - Todo lo que falta está escrito con `tbd(...)` y se ve resaltado como "Falta revisar".
 * - `status: 'provisional'` marca redacción de trabajo que Max debe aprobar.
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

  about: {
    title: 'La academia',
    text: tbd('presentación de Kamikaze: filosofía, propuesta de valor y qué la diferencia'),
  },

  audience: {
    title: 'Para quién es',
    items: [
      { label: 'Si estás empezando', value: 'No necesitas experiencia previa.' },
      { label: 'Si ya entrenas', value: tbd('niveles y grupos') },
      { label: 'Edades', value: tbd('edades mínimas y si se aceptan menores') },
    ],
  },

  start: {
    title: 'Cómo empezar',
    items: [
      {
        title: 'No necesitas experiencia',
        text: 'La academia recibe personas de distintos niveles y objetivos.',
      },
      {
        title: 'No necesitas uniforme',
        text: 'Al comienzo puedes venir con tu ropa deportiva.',
      },
      {
        title: 'Haz una clase de prueba',
        text: tbd('cómo funcionan las clases de prueba y la inscripción'),
      },
    ],
  },

  coaches: {
    title: 'Entrenadores',
    items: [
      {
        name: tbd('nombre del entrenador'),
        role: tbd('disciplina que enseña'),
        bio: tbd('experiencia que se puede publicar'),
        photo: 'Foto del entrenador.',
      },
      {
        name: tbd('nombre del entrenador'),
        role: tbd('disciplina que enseña'),
        bio: tbd('experiencia que se puede publicar'),
        photo: 'Foto del entrenador.',
      },
    ],
  },

  schedule: {
    title: 'Horarios',
    head: ['Día', 'Hora', 'Disciplina', 'Nivel'],
    rows: [
      [tbd('día'), tbd('hora'), tbd('disciplina'), tbd('nivel')],
      [tbd('día'), tbd('hora'), tbd('disciplina'), tbd('nivel')],
      [tbd('día'), tbd('hora'), tbd('disciplina'), tbd('nivel')],
    ],
  },

  venue: {
    title: 'La sede',
    items: [
      { label: 'Ciudad', value: 'Armenia, Quindío' },
      { label: 'Dirección', value: tbd('dirección de la sede') },
      { label: 'Cómo llegar', value: tbd('indicaciones y referencias') },
      { label: 'Capacidad', value: tbd('cupos máximos por clase') },
    ],
    photos: [
      'Entrada de la sede.',
      'Zona de entrenamiento.',
      'Ring o tatami.',
    ],
  },

  opening: {
    title: 'Próxima apertura',
    text: 'Kamikaze se prepara para abrir en Armenia. Regístrate y te escribimos cuando haya novedades.',
    date: { label: 'Fecha de apertura', value: tbd('fecha de apertura') },
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
      { q: '¿Necesito experiencia previa?', a: 'No. Puedes empezar desde cero.' },
      {
        q: '¿Tengo que comprar un uniforme?',
        a: 'No al comienzo. Puedes asistir con tu propia ropa deportiva.',
      },
      {
        q: '¿Dónde queda la academia?',
        a: `Estará en Armenia, Quindío. ${tbd('dirección de la sede')}`,
      },
      { q: '¿Cuándo abre?', a: tbd('fecha de apertura') },
      { q: '¿Cuánto cuesta?', a: tbd('precios de matrícula y mensualidad') },
      { q: '¿Qué horarios habrá?', a: tbd('días y horas de las clases') },
      { q: '¿Habrá clase de prueba?', a: tbd('cómo funciona la clase de prueba') },
    ],
  },
} as const;
