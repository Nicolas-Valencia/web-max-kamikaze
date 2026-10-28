import { tbd, type Status } from './site';

/**
 * Contenido de /max con la estructura final de la página.
 * - Los textos confirmados vienen del brief de Max.
 * - Todo lo que falta está escrito con `tbd(...)` y se ve resaltado como "Falta revisar".
 * - `status: 'provisional'` marca redacción de trabajo que Max debe aprobar.
 */
export const max = {
  meta: {
    title: 'Max | Entrenamiento personalizado de Muay Thai en Armenia',
    description:
      'Entrenamiento personalizado de Muay Thai con Max en Armenia, Quindío. Solicita una sesión de prueba.',
    status: 'provisional' as Status,
  },

  hero: {
    // Espacios no separables ( ) para que "a" no quede sola al final de una línea.
    title: 'Muay Thai a tu medida, uno a uno.',
    text: 'Entrenamiento personalizado con Max en Armenia, Quindío. Empiezas con una evaluación y el entrenamiento se adapta a tus objetivos.',
    primary: 'Solicitar sesión de prueba',
    whatsapp: 'Consultar disponibilidad por WhatsApp',
    whatsappMessage:
      'Hola Max, quiero consultar disponibilidad para una sesión de entrenamiento.',
    photo: 'Max entrenando.',
    status: 'provisional' as Status,
  },

  /** Ficha con los datos confirmados de cada sesión. */
  sheet: [
    { label: 'Duración', value: 'Entre 45 minutos y 1 hora' },
    { label: 'Lugar', value: 'En Kamikaze o a domicilio, en Armenia' },
    { label: 'Horario', value: 'Se acuerda directamente con Max' },
    { label: 'Primera vez', value: 'Comienza con una evaluación inicial' },
    { label: 'Equipo', value: 'Max puede prestártelo al inicio' },
  ],

  about: {
    title: 'Sobre Max',
    text: tbd('biografía de Max: trayectoria, experiencia y filosofía de entrenamiento'),
    photo: 'Retrato de Max.',
    items: [
      { label: 'Trayectoria', value: tbd('años y recorrido entrenando y enseñando') },
      { label: 'Certificaciones', value: tbd('títulos y certificaciones') },
      { label: 'Logros', value: tbd('logros deportivos que quiera destacar') },
    ],
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
  },

  goals: {
    title: 'Qué puedes trabajar',
    items: [
      { title: tbd('objetivo de entrenamiento'), text: tbd('qué se trabaja y cómo') },
      { title: tbd('objetivo de entrenamiento'), text: tbd('qué se trabaja y cómo') },
      { title: tbd('objetivo de entrenamiento'), text: tbd('qué se trabaja y cómo') },
    ],
  },

  places: {
    title: 'Dónde entrenas',
    items: [
      {
        title: 'En Kamikaze',
        rows: [
          { label: 'Dirección', value: tbd('dirección de la sede') },
          { label: 'Disponibilidad', value: tbd('días y horas en la sede') },
        ],
      },
      {
        title: 'A domicilio, en Armenia',
        rows: [
          { label: 'Zonas de cobertura', value: tbd('barrios o zonas que atiende') },
          { label: 'Costo de desplazamiento', value: tbd('si existe y cuánto cuesta') },
          { label: 'Espacio necesario', value: tbd('requisitos del lugar') },
        ],
      },
    ],
  },

  plans: {
    title: 'Planes por número de sesiones',
    action: 'Consultar este plan',
    whatsappMessage: 'Hola Max, quiero información sobre los planes de entrenamiento.',
    items: [
      {
        name: tbd('nombre del plan'),
        rows: [
          { label: 'Sesiones', value: tbd('número de sesiones') },
          { label: 'Vigencia', value: tbd('cuánto dura el plan') },
          { label: 'Precio', value: tbd('precio') },
        ],
      },
      {
        name: tbd('nombre del plan'),
        rows: [
          { label: 'Sesiones', value: tbd('número de sesiones') },
          { label: 'Vigencia', value: tbd('cuánto dura el plan') },
          { label: 'Precio', value: tbd('precio') },
        ],
      },
      {
        name: tbd('nombre del plan'),
        rows: [
          { label: 'Sesiones', value: tbd('número de sesiones') },
          { label: 'Vigencia', value: tbd('cuánto dura el plan') },
          { label: 'Precio', value: tbd('precio') },
        ],
      },
    ],
  },

  products: {
    title: 'Equipo deportivo',
    text: 'Max también vende equipo para entrenar. Consulta qué hay disponible.',
    items: ['Vendas', 'Guantes', 'Ropa', 'Espinilleras', 'Coderas'],
    price: tbd('precio'),
    action: 'Consultar disponibilidad por WhatsApp',
    whatsappMessage: 'Hola Max, quiero consultar qué equipo deportivo tienes disponible.',
    status: 'provisional' as Status,
  },

  gallery: {
    title: 'Entrenando con Max',
    photos: [
      'Sesión de entrenamiento.',
      'Trabajo en manoplas.',
      'Preparación física.',
      'Evaluación inicial.',
      'Entrenamiento a domicilio.',
      'Equipo de entrenamiento.',
    ],
  },

  form: {
    title: 'Solicita tu sesión de prueba',
    text: 'Déjanos tus datos y Max te escribe por WhatsApp para acordar el horario.',
    status: 'provisional' as Status,
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Cuánto dura una sesión?', a: 'Generalmente entre 45 minutos y 1 hora.' },
      {
        q: '¿Cómo se acuerda el horario?',
        a: 'Directamente con Max, según lo que te sirva a ti.',
      },
      {
        q: '¿Dónde se entrena?',
        a: 'En las instalaciones de Kamikaze o a domicilio, en Armenia.',
      },
      {
        q: '¿Necesito equipo?',
        a: 'Puedes necesitarlo, pero Max puede prestártelo al inicio.',
      },
      { q: '¿Cuánto cuesta?', a: tbd('precios de sesiones y planes') },
      { q: '¿Cómo reservo?', a: tbd('cómo se reserva, se confirma y se cancela una sesión') },
      { q: '¿Puedo pagar por sesión?', a: tbd('modalidades y métodos de pago') },
    ],
  },
} as const;
