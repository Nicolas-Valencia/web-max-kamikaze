import type { Status } from './site';

/**
 * Contenido de /max. Los datos 'confirmed' vienen del brief de Max.
 * Todo lo 'provisional' es redacción de trabajo y debe aprobarse antes de publicar.
 * No hay precios, planes, biografía ni certificaciones: aún no existen.
 *
 * Las secciones con `enabled: false` NO se muestran hasta que Max confirme su contenido.
 */
export const max = {
  meta: {
    title: 'Max | Entrenamiento personalizado de Muay Thai en Armenia',
    description:
      'Entrenamiento personalizado de Muay Thai con Max en Armenia, Quindío. Solicita una sesión de prueba.',
    status: 'provisional' as Status,
  },

  hero: {
    // Espacios no separables (\u00A0) para que "a" no quede sola al final de una línea.
    title: 'Muay Thai a\u00A0tu medida, uno a\u00A0uno.',
    text: 'Entrenamiento personalizado con Max en Armenia, Quindío. Empiezas con una evaluación y el entrenamiento se adapta a tus objetivos.',
    primary: 'Solicitar sesión de prueba',
    whatsapp: 'Consultar disponibilidad por WhatsApp',
    whatsappMessage:
      'Hola Max, quiero consultar disponibilidad para una sesión de entrenamiento.',
    status: 'provisional' as Status,
  },

  /** Ficha con los datos confirmados de cada sesión. */
  sheet: {
    items: [
      { label: 'Duración', value: 'Entre 45 minutos y 1 hora' },
      { label: 'Lugar', value: 'En Kamikaze o a domicilio, en Armenia' },
      { label: 'Horario', value: 'Se acuerda directamente con Max' },
      { label: 'Primera vez', value: 'Comienza con una evaluación inicial' },
      { label: 'Equipo', value: 'Max puede prestártelo al inicio' },
    ],
    status: 'confirmed' as Status,
  },

  how: {
    title: 'Cómo funciona',
    steps: [
      {
        title: 'Evaluación inicial',
        text: 'Max conoce tu punto de partida y lo que quieres lograr.',
      },
      {
        title: 'Entrenamiento adaptado',
        text: 'Las sesiones se ajustan a tus objetivos, no a un programa fijo.',
      },
      {
        title: 'Sesiones con horario acordado',
        text: 'Duran entre 45 minutos y 1 hora. Acuerdas el horario con Max.',
      },
    ],
    status: 'provisional' as Status,
  },

  plans: {
    title: 'Planes por número de sesiones',
    intro:
      'Existen planes según la cantidad de sesiones. Todavía estamos definiendo sus condiciones.',
    items: ['Número de sesiones', 'Precios', 'Vigencia'],
    status: 'provisional' as Status,
  },

  /** Productos deportivos: se muestran solo si Max confirma que deben promocionarse. */
  products: {
    enabled: false,
    title: 'Equipo deportivo',
    text: 'Max también vende vendas, guantes, ropa, espinilleras, coderas y otros artículos.',
    status: 'provisional' as Status,
  },

  /** Biografía de Max: pendiente de la entrevista. */
  about: {
    enabled: false,
    title: 'Sobre Max',
    status: 'provisional' as Status,
  },

  form: {
    title: 'Solicita tu sesión de prueba',
    text: 'Déjanos tus datos y Max te escribe por WhatsApp para acordar el horario.',
    status: 'provisional' as Status,
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto dura una sesión?',
        a: 'Generalmente entre 45 minutos y 1 hora.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Cómo se acuerda el horario?',
        a: 'Directamente con Max, según lo que te sirva a ti.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Dónde se entrena?',
        a: 'En las instalaciones de Kamikaze o a domicilio, en Armenia. La sede de Kamikaze todavía no está definida.',
        status: 'provisional' as Status,
      },
      {
        q: '¿Necesito equipo?',
        a: 'Puedes necesitarlo, pero Max puede prestártelo al inicio.',
        status: 'confirmed' as Status,
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Los precios y planes todavía no están definidos.',
        status: 'provisional' as Status,
      },
      {
        q: '¿Cómo reservo?',
        a: 'Solicita una sesión de prueba con el formulario. Max te escribe por WhatsApp para acordar el horario.',
        status: 'provisional' as Status,
      },
    ],
  },
} as const;
