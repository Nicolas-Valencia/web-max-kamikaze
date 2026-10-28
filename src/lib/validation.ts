/**
 * Validación del formulario de interesados de Kamikaze.
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

export type InterestInput = {
  name: string;
  whatsapp: string;
  email: string;
  discipline: string;
  schedule: string;
  consent: true;
};

export type FieldErrors = Partial<Record<keyof InterestInput, string>>;

export type ValidationResult =
  | { ok: true; data: InterestInput }
  | { ok: false; errors: FieldErrors };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Celular colombiano: 10 dígitos que empiezan por 3, con o sin +57.
const CO_MOBILE = /^(?:\+?57)?(3\d{9})$/;

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export function validateInterest(raw: unknown): ValidationResult {
  const input = (raw ?? {}) as Record<string, unknown>;
  const errors: FieldErrors = {};

  const name = text(input.name).replace(/\s+/g, ' ');
  if (name.length < 2) errors.name = 'Escribe tu nombre.';
  else if (name.length > 80) errors.name = 'El nombre es demasiado largo.';

  const phone = text(input.whatsapp).replace(/[\s().-]/g, '');
  const match = CO_MOBILE.exec(phone);
  if (!match) {
    errors.whatsapp =
      'Escribe un celular colombiano de 10 dígitos, por ejemplo 3001234567.';
  }
  const whatsapp = match ? `+57${match[1]}` : '';

  const email = text(input.email);
  if (email && (email.length > 120 || !EMAIL.test(email))) {
    errors.email = 'Revisa el correo: parece incompleto.';
  }

  const discipline = text(input.discipline);
  if (!disciplines.some((d) => d.id === discipline)) {
    errors.discipline = 'Elige una disciplina.';
  }

  const schedule = text(input.schedule);
  if (schedule && !schedules.some((s) => s.id === schedule)) {
    errors.schedule = 'Elige una opción de la lista.';
  }

  if (input.consent !== true) {
    errors.consent = 'Debes autorizar el tratamiento de tus datos para continuar.';
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: { name, whatsapp, email, discipline, schedule, consent: true },
  };
}
