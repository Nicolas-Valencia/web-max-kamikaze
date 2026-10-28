import { useRef, useState, type SyntheticEvent } from 'react';
import {
  disciplines,
  places,
  schedules,
  validateInterest,
  validateTrial,
  type FieldErrors,
  type Validated,
} from '../../lib/validation';
import './form.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Values = Record<string, string | boolean>;
type Option = { id: string; label: string };

type FieldConfig = {
  name: string;
  label: string;
  optional?: boolean;
  kind: 'text' | 'tel' | 'email' | 'textarea' | 'select';
  autoComplete?: string;
  options?: readonly Option[];
  placeholder?: string;
  hint?: string;
};

interface Variant {
  endpoint: string;
  fields: FieldConfig[];
  validate: (raw: unknown) => Validated<unknown>;
  consent: string;
  submit: string;
  success: { title: string; text: string };
}

const variants = {
  kamikaze: {
    endpoint: '/api/interesados',
    validate: validateInterest,
    fields: [
      { name: 'name', label: 'Nombre', kind: 'text', autoComplete: 'name' },
      { name: 'whatsapp', label: 'WhatsApp', kind: 'tel', autoComplete: 'tel' },
      {
        name: 'email',
        label: 'Correo',
        optional: true,
        kind: 'email',
        autoComplete: 'email',
      },
      {
        name: 'discipline',
        label: '¿Qué quieres entrenar?',
        kind: 'select',
        options: disciplines,
        placeholder: 'Elige una opción',
      },
      {
        name: 'schedule',
        label: 'Horario que prefieres',
        optional: true,
        kind: 'select',
        options: schedules,
        placeholder: 'Sin elegir',
      },
    ],
    consent:
      'Autorizo que Kamikaze use mis datos para contactarme sobre la apertura de la academia.',
    submit: 'Registrarme como interesado',
    success: {
      title: 'Quedaste registrado.',
      text: 'Guardamos tus datos. Cuando haya novedades de Kamikaze, te escribimos por WhatsApp.',
    },
  },
  max: {
    endpoint: '/api/sesion-prueba',
    validate: validateTrial,
    fields: [
      { name: 'name', label: 'Nombre', kind: 'text', autoComplete: 'name' },
      { name: 'whatsapp', label: 'WhatsApp', kind: 'tel', autoComplete: 'tel' },
      {
        name: 'goal',
        label: '¿Qué quieres lograr entrenando?',
        optional: true,
        kind: 'textarea',
        hint: 'Máximo 300 caracteres.',
      },
      {
        name: 'place',
        label: '¿Dónde prefieres entrenar?',
        kind: 'select',
        options: places,
        placeholder: 'Elige una opción',
      },
      {
        name: 'schedule',
        label: 'Horario que prefieres',
        optional: true,
        kind: 'select',
        options: schedules,
        placeholder: 'Sin elegir',
      },
    ],
    consent:
      'Autorizo que Max use mis datos para contactarme sobre mi solicitud de sesión de prueba.',
    submit: 'Solicitar sesión de prueba',
    success: {
      title: 'Recibimos tu solicitud.',
      text: 'Guardamos tus datos. Max te escribirá por WhatsApp para acordar el horario.',
    },
  },
} satisfies Record<string, Variant>;

interface Props {
  variant: keyof typeof variants;
  privacyHref: string;
  /** Enlace de WhatsApp de respaldo si el registro falla. Puede ser null. */
  fallbackWhatsapp: string | null;
}

export default function LeadForm({ variant, privacyHref, fallbackWhatsapp }: Props) {
  const config: Variant = variants[variant];
  const [values, setValues] = useState<Values>(() => ({
    ...Object.fromEntries(config.fields.map((f) => [f.name, ''])),
    consent: false,
    website: '', // campo trampa anti-bots
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const successRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (name: string, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const focusFirstInvalid = (found: FieldErrors) => {
    const first = Object.keys(found).find((k) => found[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (status === 'submitting') return;

    const result = config.validate(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus('idle');
      focusFirstInvalid(result.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    try {
      const res = await fetch(config.endpoint, {
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
          {config.success.title}
        </h3>
        <p>{config.success.text}</p>
      </div>
    );
  }

  const a11y = (name: string, hint?: string) => {
    const ids = [errors[name] && `${name}-error`, hint && `${name}-hint`]
      .filter(Boolean)
      .join(' ');
    return {
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': ids || undefined,
    };
  };

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      {config.fields.map((f) => {
        const id = `f-${variant}-${f.name}`;
        const value = String(values[f.name] ?? '');
        return (
          <div className="field" key={f.name}>
            <label htmlFor={id}>
              {f.label}
              {f.optional && <span className="optional"> (opcional)</span>}
            </label>
            {f.kind === 'select' ? (
              <select
                id={id}
                name={f.name}
                value={value}
                onChange={(e) => set(f.name, e.target.value)}
                {...a11y(f.name)}
              >
                {f.optional ? (
                  <option value="">{f.placeholder}</option>
                ) : (
                  <option value="" disabled>
                    {f.placeholder}
                  </option>
                )}
                {f.options?.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : f.kind === 'textarea' ? (
              <textarea
                id={id}
                name={f.name}
                rows={3}
                maxLength={300}
                value={value}
                onChange={(e) => set(f.name, e.target.value)}
                {...a11y(f.name, f.hint)}
              />
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.kind}
                inputMode={f.kind === 'tel' ? 'tel' : undefined}
                autoComplete={f.autoComplete}
                value={value}
                onChange={(e) => set(f.name, e.target.value)}
                {...a11y(f.name)}
              />
            )}
            {f.hint && (
              <p className="field-hint" id={`${f.name}-hint`}>
                {f.hint}
              </p>
            )}
            {errors[f.name] && (
              <p className="field-error" id={`${f.name}-error`}>
                {errors[f.name]}
              </p>
            )}
          </div>
        );
      })}

      {/* Campo trampa: oculto para personas y para lectores de pantalla. */}
      <div className="trap" aria-hidden="true">
        <label htmlFor={`f-${variant}-website`}>No llenes este campo</label>
        <input
          id={`f-${variant}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={String(values.website)}
          onChange={(e) => set('website', e.target.value)}
        />
      </div>

      <div className="field consent">
        <label className="check" htmlFor={`f-${variant}-consent`}>
          <input
            id={`f-${variant}-consent`}
            name="consent"
            type="checkbox"
            checked={values.consent === true}
            onChange={(e) => set('consent', e.target.checked)}
            {...a11y('consent')}
          />
          <span>
            {config.consent} Más información en la{' '}
            <a href={privacyHref}>política de privacidad</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="field-error" id="consent-error">
            {errors.consent}
          </p>
        )}
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
        {status === 'submitting' ? 'Enviando…' : config.submit}
      </button>
    </form>
  );
}
