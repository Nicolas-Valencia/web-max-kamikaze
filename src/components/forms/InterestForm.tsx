import { useRef, useState, type SyntheticEvent } from 'react';
import {
  disciplines,
  schedules,
  validateInterest,
  type FieldErrors,
} from '../../lib/validation';
import './form.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Props {
  privacyHref: string;
  /** Enlace de WhatsApp de respaldo si el registro falla. Puede ser null. */
  fallbackWhatsapp: string | null;
}

const empty = {
  name: '',
  whatsapp: '',
  email: '',
  discipline: '',
  schedule: '',
  consent: false,
  website: '', // campo trampa anti-bots
};

export default function InterestForm({ privacyHref, fallbackWhatsapp }: Props) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const successRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: keyof typeof empty, value: string | boolean) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const focusFirstInvalid = (found: FieldErrors) => {
    const first = Object.keys(found)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (status === 'submitting') return;

    const result = validateInterest(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus('idle');
      focusFirstInvalid(result.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    try {
      const res = await fetch('/api/interesados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => successRef.current?.focus(), 0);
        return;
      }
      if (res.status === 400) {
        const body = (await res.json().catch(() => null)) as {
          fields?: FieldErrors;
        } | null;
        if (body?.fields) {
          setErrors(body.fields);
          setStatus('idle');
          focusFirstInvalid(body.fields);
          return;
        }
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-done" role="status">
        <h3 ref={successRef} tabIndex={-1}>
          Quedaste registrado.
        </h3>
        <p>
          Guardamos tus datos. Cuando haya novedades de Kamikaze, te escribimos
          por WhatsApp.
        </p>
      </div>
    );
  }

  const field = (name: keyof FieldErrors) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });
  const fieldError = (name: keyof FieldErrors) =>
    errors[name] ? (
      <p className="field-error" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Nombre</label>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          {...field('name')}
        />
        {fieldError('name')}
      </div>

      <div className="field">
        <label htmlFor="f-whatsapp">WhatsApp</label>
        <input
          id="f-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.whatsapp}
          onChange={(e) => set('whatsapp', e.target.value)}
          {...field('whatsapp')}
        />
        {fieldError('whatsapp')}
      </div>

      <div className="field">
        <label htmlFor="f-email">
          Correo <span className="optional">(opcional)</span>
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          {...field('email')}
        />
        {fieldError('email')}
      </div>

      <div className="field">
        <label htmlFor="f-discipline">¿Qué quieres entrenar?</label>
        <select
          id="f-discipline"
          name="discipline"
          value={values.discipline}
          onChange={(e) => set('discipline', e.target.value)}
          {...field('discipline')}
        >
          <option value="" disabled>
            Elige una opción
          </option>
          {disciplines.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
        {fieldError('discipline')}
      </div>

      <div className="field">
        <label htmlFor="f-schedule">
          Horario que prefieres <span className="optional">(opcional)</span>
        </label>
        <select
          id="f-schedule"
          name="schedule"
          value={values.schedule}
          onChange={(e) => set('schedule', e.target.value)}
          {...field('schedule')}
        >
          <option value="">Sin elegir</option>
          {schedules.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        {fieldError('schedule')}
      </div>

      {/* Campo trampa: oculto para personas y para lectores de pantalla. */}
      <div className="trap" aria-hidden="true">
        <label htmlFor="f-website">No llenes este campo</label>
        <input
          id="f-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set('website', e.target.value)}
        />
      </div>

      <div className="field consent">
        <label className="check" htmlFor="f-consent">
          <input
            id="f-consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set('consent', e.target.checked)}
            {...field('consent')}
          />
          <span>
            Autorizo que Kamikaze use mis datos para contactarme sobre la
            apertura de la academia. Más información en la{' '}
            <a href={privacyHref}>política de privacidad</a>.
          </span>
        </label>
        {fieldError('consent')}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <div className="form-error" role="alert">
            <p>
              No pudimos guardar tus datos. Revisa tu conexión e inténtalo de
              nuevo en un momento.
            </p>
            {fallbackWhatsapp && (
              <p>
                Si prefieres, <a href={fallbackWhatsapp}>escríbenos por WhatsApp</a>.
              </p>
            )}
          </div>
        )}
      </div>

      <button className="submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando…' : 'Registrarme como interesado'}
      </button>
    </form>
  );
}
