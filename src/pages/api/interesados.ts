import type { APIRoute } from 'astro';
import { validateInterest } from '../../lib/validation';
import { appendRow, SheetsNotConfiguredError } from '../../lib/sheets';

export const prerender = false;

const TAB = 'Kamikaze - interesados';
const MAX_BODY = 4096;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request }) => {
  // Solo aceptamos envíos desde nuestro propio sitio.
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: 'forbidden' }, 403);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: 'too_large' }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  // Campo trampa: las personas no lo ven; los bots suelen llenarlo.
  // Respondemos como si todo hubiera salido bien, sin guardar nada.
  if (typeof body.website === 'string' && body.website !== '') {
    return json({ ok: true }, 200);
  }

  const result = validateInterest(body);
  if (!result.ok) return json({ error: 'invalid', fields: result.errors }, 400);

  const d = result.data;
  try {
    await appendRow(TAB, [
      new Date().toISOString(),
      d.name,
      d.whatsapp,
      d.email,
      d.discipline,
      d.schedule,
      'sí',
      'web/kamikaze',
    ]);
  } catch (err) {
    // No registramos datos personales: solo el tipo de fallo.
    console.error(
      '[interesados] no se pudo guardar:',
      err instanceof Error ? err.message : 'error desconocido',
    );
    if (err instanceof SheetsNotConfiguredError) {
      return json({ error: 'not_configured' }, 503);
    }
    return json({ error: 'storage_failed' }, 502);
  }

  return json({ ok: true }, 200);
};
