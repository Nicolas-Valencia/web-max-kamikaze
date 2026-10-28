# Pendientes

Actualizar este archivo en cada entrega.

## Contenido por aprobar con Max
- Todos los textos de `src/content/home.ts` y `src/content/kamikaze.ts` marcados `provisional`.
- Qué datos del formulario conservar y por cuánto tiempo, y quién responde a los interesados.
- Biografía, trayectoria y certificaciones de Max (la sección "Sobre Max" está oculta con `about.enabled: false` en `src/content/max.ts`).
- Si los productos deportivos se promocionan en la web (sección oculta con `products.enabled: false`).
- **Discrepancia:** el brief dice que Max entrena "en las instalaciones de Kamikaze o a domicilio", pero Kamikaze aún no tiene sede. Confirmar qué opciones existen hoy.
- Modalidades, planes, precios y condiciones de reserva.
- Zonas de cobertura de los entrenamientos a domicilio.
- Filosofía, entrenadores, horarios y sede de Kamikaze.
- Mensaje de prelanzamiento de Kamikaze (sin fecha de apertura).
- Texto de la política de privacidad y del consentimiento (Ley 1581 de 2012).

## Recursos por recibir
- Logo definitivo de Kamikaze y logo de Max. El logo actual de Kamikaze es provisional.
- Fotografías y videos reales, con permiso de uso. Hoy hay un marcador "Foto pendiente" en `/max`.
- Correo de contacto.
- Número de WhatsApp de Kamikaze, si será distinto al de Max.

## Decisiones técnicas abiertas
- Cuenta de servicio de Google y hoja de cálculo para los formularios (el código está listo; falta crear las credenciales y probar una escritura real).
- Límite de envíos por IP en el formulario (hoy solo hay campo trampa y verificación de origen).
- Dominio definitivo (por ahora, subdominio de Vercel). Al tenerlo: configurar `site`, sitemap, `robots.txt` y URL canónica.
- Imagen de Open Graph.

## Fase 2 (no incluida en la primera versión)
- Reservas, pagos y suscripciones: requieren definir procesos, pasarela para Colombia y presupuesto aparte.
