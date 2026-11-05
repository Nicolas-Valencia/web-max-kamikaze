import { tbd, type Status } from './site';

const plan = () => ({
  tag: tbd('tipo de plan'),
  name: tbd('nombre del plan'),
  priceLabel: 'Precio',
  price: tbd('precio'),
  per: tbd('periodo de cobro'),
  features: [tbd('qué incluye'), tbd('qué incluye'), tbd('qué incluye')],
});

const testimonial = () => ({
  quote: tbd('testimonio autorizado de un alumno'),
  name: tbd('nombre del alumno'),
  meta: tbd('nivel y tiempo entrenando'),
});

/**
 * Contenido de /max con la estructura final de la página (tomada del mockup).
 * - Los textos confirmados vienen del brief de Max.
 * - Lo que falta está escrito con `tbd(...)` y se ve resaltado como "Falta revisar".
 * - `status: 'provisional'` marca redacción de trabajo que Max debe aprobar.
 */
export const max = {
  meta: {
    title: 'Max | Entrenamiento personalizado de Muay Thai en Armenia',
    description:
      'Entrenamiento personalizado de Muay Thai con Max en Armenia, Quindío. Solicita una sesión de prueba.',
    status: 'provisional' as Status,
  },

  nav: [
    { href: '#sobre', label: 'Sobre Max' },
    { href: '#galeria', label: 'Galería' },
    { href: '#metodo', label: 'Método' },
    { href: '#planes', label: 'Precios' },
    { href: '#preguntas', label: 'Preguntas' },
  ],
  cta: { href: '#sesion', label: 'Entrenar con Max' },

  hero: {
    lines: ['Tu objetivo.', 'Tu ritmo.', 'Tu Muay Thai.'],
    text: 'Entrenamiento personalizado de Muay Thai con Max, en Armenia, Quindío. Empiezas con una evaluación y el plan se adapta a ti.',
    primary: 'Quiero entrenar con Max',
    whatsappMessage:
      'Hola Max, quiero consultar disponibilidad para una sesión de entrenamiento.',
    status: 'provisional' as Status,
  },

  /** Franja de datos confirmados bajo la portada. */
  strip: [
    { label: 'Formato', value: '1\u00a0a\u00a01 individual' },
    { label: 'Especialidad', value: 'Muay Thai' },
    { label: 'Duración', value: '45\u00a0min a 1\u00a0hora' },
    { label: 'Lugar', value: 'Kamikaze o a domicilio' },
  ],

  about: {
    lines: ['Un entrenador.', 'Un plan.'],
    accent: 'Toda la atención.',
    quote: tbd('filosofía de entrenamiento de Max, con sus palabras'),
    text: tbd('biografía de Max: trayectoria, experiencia y forma de entrenar'),
    photo: {
      label: 'Perfil',
      name: 'Max',
      role: tbd('especialidad'),
    },
    items: [
      { label: 'Trayectoria', value: tbd('años y recorrido entrenando y enseñando') },
      { label: 'Certificaciones', value: tbd('títulos y certificaciones') },
      { label: 'Logros', value: tbd('logros deportivos que quiera destacar') },
    ],
  },

  how: {
    title: 'Cómo',
    accent: 'funciona',
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
        text: 'Duran entre 45\u00a0minutos y 1\u00a0hora. Acuerdas el horario con Max.',
      },
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

  profiles: {
    title: 'No necesitas ser un luchador',
    accent: 'para empezar.',
    text: 'El entrenamiento personalizado se adapta a tu punto de partida, sea cual sea.',
    items: [
      {
        tag: 'Perfil',
        title: 'Tu primera vez',
        text: 'Nunca has entrenado Muay Thai y quieres empezar bien. El plan parte desde cero.',
        goal: tbd('objetivo de este perfil'),
      },
      {
        tag: 'Perfil',
        title: 'Volver a empezar',
        text: 'Ya entrenaste antes y quieres retomar el ritmo con un plan a tu medida.',
        goal: tbd('objetivo de este perfil'),
      },
      {
        tag: 'Perfil',
        title: 'Dar el siguiente paso',
        text: 'Quieres mejorar tu nivel actual con atención individual.',
        goal: tbd('objetivo de este perfil'),
      },
    ],
    status: 'provisional' as Status,
  },

  plans: {
    title: 'Sesión suelta',
    accent: 'o paquete de 3, 6 o 12',
    sub: tbd('mensaje breve sobre las condiciones'),
    note: tbd('vigencia, cancelación y reprogramación de sesiones'),
    action: 'Consultar precio',
    whatsappMessage: 'Hola Max, quiero información sobre precios de sesiones y paquetes.',
    items: [
      { ...plan(), name: 'Sesión suelta', tag: 'Individual' },
      { ...plan(), name: '3 sesiones', tag: 'Paquete' },
      { ...plan(), name: '6 sesiones', tag: 'Paquete' },
      { ...plan(), name: '12 sesiones', tag: 'Paquete' },
    ],
  },

  testimonials: {
    title: 'Lo que dicen',
    accent: 'los alumnos',
    items: [testimonial(), testimonial(), testimonial()],
  },

  gallery: {
    title: 'Entrenando',
    accent: 'con Max',
    captions: [tbd('pie de foto'), tbd('pie de foto'), tbd('pie de foto'), tbd('pie de foto')],
  },

  form: {
    title: 'Solicita tu sesión de prueba',
    text: 'Déjanos tus datos y Max te escribe por WhatsApp para acordar el horario.',
    status: 'provisional' as Status,
  },

  faq: {
    title: 'Preguntas',
    accent: 'frecuentes',
    items: [
      { q: '¿Cuánto dura una sesión?', a: 'Generalmente entre 45\u00a0minutos y 1\u00a0hora.' },
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

  final: {
    title: 'Agenda',
    accent: 'tu primera sesión.',
    text: 'Cuéntanos tu objetivo y Max te escribe por WhatsApp para acordar el horario.',
    primary: 'Quiero entrenar con Max',
    secondary: 'Escribir por WhatsApp',
    status: 'provisional' as Status,
  },
} as const;
