import { createLeadHandler } from '../../lib/leads';
import { validateInterest } from '../../lib/validation';

export const prerender = false;

// Columnas: fecha, nombre, WhatsApp, correo, disciplina, horario, consentimiento, origen
export const POST = createLeadHandler({
  tab: 'Kamikaze - interesados',
  source: 'web/kamikaze',
  log: 'interesados',
  validate: validateInterest,
  toRow: (d) => [d.name, d.whatsapp, d.email, d.discipline, d.schedule],
});
