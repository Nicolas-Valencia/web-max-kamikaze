import { createLeadHandler } from '../../lib/leads';
import { validateTrial } from '../../lib/validation';

export const prerender = false;

// Columnas: fecha, nombre, WhatsApp, objetivo, lugar, horario, consentimiento, origen
export const POST = createLeadHandler({
  tab: 'Max - sesión de prueba',
  source: 'web/max',
  log: 'sesion-prueba',
  validate: validateTrial,
  toRow: (d) => [d.name, d.whatsapp, d.goal, d.place, d.schedule],
});
