import type { APIRoute } from 'astro';
import type { Validated } from './validation';
import { appendRow, SheetsNotConfiguredError } from './sheets';

const MAX_BODY = 4096;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

interface LeadConfig<T> {
  /** Nombre de la pestaña de la hoja donde se guarda. */
  tab: string;
  /** Etiqueta de origen que se guarda en la última columna. */
  source: string;
  validate: (raw: unknown) => Validated<T>;
  /** Convierte los datos validados en las columnas de la fila (sin fecha ni origen). */
  toRow: (data: T) => string[];
  log: string;
}

/** Crea el endpoint de un formulario: verifica origen, valida y guarda en Sheets. */
export function createLeadHandler<T>(config: LeadConfig<T>): APIRoute {
  return async ({ request }) => {
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

    const result = config.validate(body);
    if (!result.ok) return json({ error: 'invalid', fields: result.errors }, 400);

    try {
      await appendRow(config.tab, [
        new Date().toISOString(),
        ...config.toRow(result.data),
        'sí',
        config.source,
      ]);
    } catch (err) {
      // No registramos datos personales: solo el tipo de fallo.
      console.error(
        `[${config.log}] no se pudo guardar:`,
        err instanceof Error ? err.message : 'error desconocido',
      );
      if (err instanceof SheetsNotConfiguredError) {
        return json({ error: 'not_configured' }, 503);
      }
      return json({ error: 'storage_failed' }, 502);
    }

    return json({ ok: true }, 200);
  };
}
