/**
 * Datos generales del sitio. Cada dato lleva su estado:
 * - 'confirmed': confirmado por Max o por el equipo.
 * - 'provisional': texto de trabajo, NO aprobado para producción.
 */
export type Status = 'confirmed' | 'provisional';

const whatsappMax = import.meta.env.PUBLIC_WHATSAPP_MAX as string | undefined;

export const site = {
  name: 'Max / Kamikaze',
  locale: 'es_CO',
  city: 'Armenia, Quindío, Colombia',
  // El correo de contacto sigue pendiente: no se muestra hasta que exista.
  email: null as string | null,
  socials: {
    max: {
      handle: '@maxtrainermuaythai',
      url: 'https://www.instagram.com/maxtrainermuaythai/',
    },
    kamikaze: {
      handle: '@kamikazecolombia',
      url: 'https://www.instagram.com/kamikazecolombia/',
    },
  },
  whatsapp: {
    max: whatsappMax
      ? `https://wa.me/${whatsappMax.replace(/\D/g, '')}`
      : null,
    // Kamikaze aún no tiene número propio confirmado.
    kamikaze: null as string | null,
  },
} as const;
