# Pendientes

Actualizar este archivo en cada entrega. Los datos concretos que faltan están marcados en la web como "Falta revisar"; `npm run check:content` los cuenta.

## Contenido por aprobar con Max
- Todos los textos de `src/content/home.ts` y `src/content/kamikaze.ts` marcados `provisional`.
- Qué datos del formulario conservar y por cuánto tiempo, y quién responde a los interesados.
- Biografía, trayectoria y certificaciones de Max. **Hoy la sección "Sobre Max" se muestra completa con "Falta revisar"**: antes decía que estaba oculta con `about.enabled`, pero esa bandera no existe en el código. Decidir si se oculta hasta tener el contenido.
- Productos deportivos: la sección se quitó de `/max` el 2026-11-04. Retomar solo si se monta un ecommerce (Fase 2 o posterior).
- **Discrepancia (sigue viva en `/max`: franja "Lugar", servicio, FAQ):** el brief dice que Max entrena "en las instalaciones de Kamikaze o a domicilio", pero Kamikaze aún no tiene sede. Confirmar qué opciones existen hoy.
- Modalidades, planes, precios y condiciones de reserva.
- Zonas de cobertura de los entrenamientos a domicilio.
- Filosofía, entrenadores, horarios y sede de Kamikaze.
- Mensaje de prelanzamiento de Kamikaze (sin fecha de apertura).
- Texto de la política de privacidad y del consentimiento (Ley 1581 de 2012).

## Diseño: referencias de los mockups
- Las fotos de `src/assets/reference/` (11) son recortes de los mockups, de baja resolución y de otro gimnasio. Reemplazarlas por fotos reales de Max y de Kamikaze.
- El rojo (`#D7191F`) se tomó del mockup; el logo de Kamikaze es solo blanco y negro. Confirmado por el equipo como color de marca.
- Los textos, cifras y nombres del mockup (Santiago de Chile, precios, entrenadores, cupos, testimonios) no se usaron.

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
- Se cotiza por etapas (A pagos de sesiones y paquetes, B mensualidad de Kamikaze, C reservas, D panel). Detalle en `docs/PROYECTO.md`, sección 12. Se recomienda empezar solo por la A.
- Verificar qué pasarela de Colombia ofrece enlace de pago alojado y cobros recurrentes, con comisiones.
- Preguntas abiertas con Max: si los paquetes de sesiones vencen; si el comprador necesita factura o basta el correo de confirmación.
- Precio de la cotización: pendiente de acordar con Max (el PDF vive fuera del repo).
