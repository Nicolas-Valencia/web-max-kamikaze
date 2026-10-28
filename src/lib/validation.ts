/**
 * Validación de los formularios (interesados de Kamikaze y sesión de prueba con Max).
 * Se usa en el navegador (feedback inmediato) y en el servidor (la que cuenta).
 */

export const disciplines = [
  { id: 'muay-thai', label: 'Muay Thai' },
  { id: 'boxeo', label: 'Boxeo' },
  { id: 'bjj', label: 'Brazilian Jiu-Jitsu (BJJ)' },
  { id: 'lucha', label: 'Lucha' },
  { id: 'mma', label: 'MMA' },
  { id: 'sin-definir', label: 'Aún no lo sé' },
] as const;

export const schedules = [
  { id: 'manana', label: 'Mañana' },
  { id: 'tarde', label: 'Tarde' },
  { id: 'noche', label: 'Noche' },
  { id: 'sin-preferencia', label: 'Sin preferencia' },
] as const;

export const places = [
  { id: 'kamikaze', label: 'En Kamikaze' },
  { id: 'domicilio', label: 'A domicilio, en Armenia' },
  { id: 'sin-definir', label: 'Aún no lo sé' },
] as const;

export type FieldErrors = Record<string, string | undefined>;

export type Validated<T> =
  | { ok: true; data: T }
  | { ok: false; errors: Record<string, string> };

export type InterestInput = {
  name: string;
  whatsapp: string;
  email: string;
  discipline: string;
  schedule: string;
};

export type TrialInput = {
  name: string;
  whatsapp: string;
  goal: string;
  place: string;
  schedule: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Celular colombiano: 10 dígitos que empiezan por 3, con o sin +57.
const CO_MOBILE = /^(?:\+?57)?(3\d{9})$/;

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
const oneOf = (list: readonly { id: string }[], value: string) =>
  list.some((item) => item.id === value);

/** Campos que comparten todos los formularios: nombre, WhatsApp y consentimiento. */
function commonFields(input: Record<string, unknown>, errors: Record<string, string>) {
  const name = text(input.name).replace(/\s+/g, ' ');
  if (name.length < 2) errors.name = 'Escribe tu nombre.';
  else if (name.length > 80) errors.name = 'El nombre es demasiado largo.';

  const match = CO_MOBILE.exec(text(input.whatsapp).replace(/[\s().-]/g, ''));
  if (!match) {
    errors.whatsapp =
      'Escribe un celular colombiano de 10 dígitos, por ejemplo 3001234567.';
  }

  if (input.consent !== true) {
    errors.consent = 'Debes autorizar el tratamiento de tus datos para continuar.';
  }

  return { name, whatsapp: match ? `+57${match[1]}` : '' };
}

function validateSchedule(input: Record<string, unknown>, errors: Record<string, string>) {
  const schedule = text(input.schedule);
  if (schedule && !oneOf(schedules, schedule)) {
    errors.schedule = 'Elige una opción de la lista.';
  }
  return schedule;
}

const asRecord = (raw: unknown) => (raw ?? {}) as Record<string, unknown>;

export function validateInterest(raw: unknown): Validated<InterestInput> {
  const input = asRecord(raw);
  const errors: Record<string, string> = {};
  const { name, whatsapp } = commonFields(input, errors);

  const email = text(input.email);
  if (email && (email.length > 120 || !EMAIL.test(email))) {
    errors.email = 'Revisa el correo: parece incompleto.';
  }

  const discipline = text(input.discipline);
  if (!oneOf(disciplines, discipline)) errors.discipline = 'Elige una disciplina.';

  const schedule = validateSchedule(input, errors);

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, whatsapp, email, discipline, schedule } };
}

export function validateTrial(raw: unknown): Validated<TrialInput> {
  const input = asRecord(raw);
  const errors: Record<string, string> = {};
  const { name, whatsapp } = commonFields(input, errors);

  const goal = text(input.goal);
  if (goal.length > 300) errors.goal = 'Escríbelo en 300 caracteres o menos.';

  const place = text(input.place);
  if (!oneOf(places, place)) errors.place = 'Elige dónde prefieres entrenar.';

  const schedule = validateSchedule(input, errors);

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, whatsapp, goal, place, schedule } };
}
