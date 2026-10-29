import { tbd, type Status } from './site';

/** Un bloque horario con la estructura final; todos los datos faltan hasta que Max los confirme. */
const scheduleBlock = (name: string) => ({
  name,
  range: tbd('horario del bloque'),
  items: [
    {
      time: tbd('hora'),
      title: tbd('nombre de la clase'),
      text: tbd('descripción de la clase'),
      coach: tbd('entrenador'),
    },
    {
      time: tbd('hora'),
      title: tbd('nombre de la clase'),
      text: tbd('descripción de la clase'),
      coach: tbd('entrenador'),
    },
  ],
  note: tbd('aforo y requisitos del bloque'),
});

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
  meta: tbd('disciplina y tiempo entrenando'),
});

/**
 * Contenido de /kamikaze con la estructura final de la página (tomada del mockup).
 * - Los textos confirmados vienen del brief de Max.
 * - Lo que falta está escrito con `tbd(...)` y se ve resaltado como "Falta revisar".
 * - `status: 'provisional'` marca redacción de trabajo que Max debe aprobar.
 */
export const kamikaze = {
  meta: {
    title: 'Kamikaze | Academia de deportes de combate en Armenia, Quindío',
    description:
      'Muay Thai, boxeo, BJJ, lucha y MMA en Armenia, Quindío. Regístrate para recibir novedades de la academia Kamikaze.',
    status: 'provisional' as Status,
  },

  nav: [
    { href: '#academia', label: 'Academia' },
    { href: '#disciplinas', label: 'Disciplinas' },
    { href: '#horarios', label: 'Horarios' },
    { href: '#planes', label: 'Planes' },
    { href: '#sede', label: 'Sede' },
    { href: '#preguntas', label: 'Preguntas' },
  ],
  cta: { href: '#interesado', label: 'Quiero que me avisen' },

  hero: {
    tag: 'Deportes de combate en Armenia, Quindío',
    lines: ['Kamikaze'],
    accent: 'de combate',
    text: 'Muay Thai, boxeo, BJJ, lucha y MMA, para quien empieza y para quien ya entrena. Déjanos tu contacto y te escribimos primero.',
    primary: 'Quiero que me avisen',
    secondary: 'Explorar disciplinas',
    status: 'provisional' as Status,
  },

  /** Franja de datos confirmados bajo la portada. */
  strip: [
    { label: 'Ciudad', value: 'Armenia, Quindío' },
    { label: 'Disciplinas', value: 'Cinco' },
    { label: 'Nivel de admisión', value: 'Abierto, sin experiencia' },
    { label: 'Uniforme', value: 'No obligatorio' },
  ],

  about: {
    title: 'Entrena',
    accent: 'con Kamikaze',
    text: tbd('presentación de Kamikaze: filosofía, propuesta de valor y qué la diferencia'),
    cards: [
      {
        label: 'Principiantes',
        title: 'Empieza desde cero',
        text: 'No necesitas experiencia previa para comenzar.',
      },
      {
        label: 'Con experiencia',
        title: tbd('niveles'),
        text: tbd('grupos y niveles disponibles'),
      },
      {
        label: 'Edades',
        title: tbd('edades'),
        text: tbd('edad mínima y si se aceptan menores'),
      },
    ],
  },

  disciplines: {
    title: 'Entra',
    accent: 'al combate',
    sub: 'Cinco disciplinas',
    action: 'Consultar horario',
    items: [
      { id: 'muay-thai', name: 'Muay Thai', desc: tbd('descripción de la disciplina'), meta: tbd('duración y niveles') },
      { id: 'boxeo', name: 'Boxeo', desc: tbd('descripción de la disciplina'), meta: tbd('duración y niveles') },
      { id: 'bjj', name: 'BJJ', desc: tbd('descripción de la disciplina'), meta: tbd('duración y niveles') },
      { id: 'lucha', name: 'Lucha', desc: tbd('descripción de la disciplina'), meta: tbd('duración y niveles') },
      { id: 'mma', name: 'MMA', desc: tbd('descripción de la disciplina'), meta: tbd('duración y niveles') },
    ],
  },

  start: {
    title: 'Cómo',
    accent: 'empezar',
    items: [
      {
        label: 'Sin experiencia',
        title: 'No la necesitas',
        text: 'La academia recibe personas de distintos niveles y objetivos.',
      },
      {
        label: 'Sin uniforme',
        title: 'Ven como estás',
        text: 'Al comienzo puedes venir con tu ropa deportiva.',
      },
      {
        label: 'Clase de prueba',
        title: 'Haz una clase',
        text: tbd('cómo funcionan las clases de prueba y la inscripción'),
      },
    ],
  },

  coaches: {
    title: 'Quién',
    accent: 'te entrena',
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
    title: 'Encuentra',
    accent: 'tu momento',
    sub: 'Programación de clases',
    note: tbd('norma de puntualidad y llegada'),
    days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    blocks: [scheduleBlock('Bloque mañana'), scheduleBlock('Bloque tarde'), scheduleBlock('Bloque noche')],
  },

  plans: {
    title: 'Elige',
    accent: 'tu plan',
    sub: tbd('mensaje breve sobre las condiciones'),
    note: tbd('condiciones de pago, congelamiento y cancelación'),
    action: 'Registrarme como interesado',
    items: [plan(), plan(), plan()],
    featured: 1,
  },

  venue: {
    title: 'La',
    accent: 'sede',
    sub: 'Armenia, Quindío',
    note: tbd('descripción de las instalaciones'),
    items: [
      { label: 'Ciudad', value: 'Armenia, Quindío' },
      { label: 'Dirección', value: tbd('dirección de la sede') },
      { label: 'Cómo llegar', value: tbd('indicaciones y referencias') },
      { label: 'Capacidad', value: tbd('cupos máximos por clase') },
    ],
  },

  testimonials: {
    title: 'Lo que dicen',
    accent: 'los alumnos',
    items: [testimonial(), testimonial(), testimonial()],
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
    title: 'Preguntas',
    accent: 'frecuentes',
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

  final: {
    title: 'Regístrate',
    accent: 'y te avisamos.',
    text: 'Déjanos tu contacto y te escribimos cuando haya novedades de la academia.',
    primary: 'Quiero que me avisen',
    secondary: 'Escribir por Instagram',
    status: 'provisional' as Status,
  },
} as const;
