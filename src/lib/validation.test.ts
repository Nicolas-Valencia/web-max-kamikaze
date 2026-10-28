import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateInterest, validateTrial } from './validation.ts';

const interest = {
  name: '  Ana   Pérez ',
  whatsapp: '300 123 4567',
  email: '',
  discipline: 'mma',
  schedule: '',
  consent: true,
};

const trial = {
  name: 'Luis Gómez',
  whatsapp: '3101234567',
  goal: '',
  place: 'domicilio',
  schedule: 'tarde',
  consent: true,
};

test('interesados: acepta un registro válido y normaliza los datos', () => {
  const r = validateInterest(interest);
  assert.equal(r.ok, true);
  if (r.ok) {
    assert.equal(r.data.name, 'Ana Pérez');
    assert.equal(r.data.whatsapp, '+573001234567');
  }
});

test('acepta el celular con prefijo +57', () => {
  assert.equal(validateInterest({ ...interest, whatsapp: '+57 300 123 4567' }).ok, true);
});

test('rechaza teléfonos que no son celulares colombianos', () => {
  for (const whatsapp of ['', '123', '2001234567', '30012345678', 'abc']) {
    assert.equal(validateInterest({ ...interest, whatsapp }).ok, false, whatsapp);
    assert.equal(validateTrial({ ...trial, whatsapp }).ok, false, whatsapp);
  }
});

test('el correo es opcional pero se valida si se escribe', () => {
  assert.equal(validateInterest({ ...interest, email: '' }).ok, true);
  assert.equal(validateInterest({ ...interest, email: 'ana@correo.com' }).ok, true);
  assert.equal(validateInterest({ ...interest, email: 'ana@correo' }).ok, false);
});

test('exige consentimiento explícito en ambos formularios', () => {
  for (const consent of [false, 'true', undefined, 1]) {
    const a = validateInterest({ ...interest, consent });
    const b = validateTrial({ ...trial, consent });
    assert.equal(a.ok, false);
    assert.equal(b.ok, false);
    if (!a.ok) assert.ok(a.errors.consent);
    if (!b.ok) assert.ok(b.errors.consent);
  }
});

test('rechaza disciplinas y horarios fuera de la lista', () => {
  assert.equal(validateInterest({ ...interest, discipline: 'yoga' }).ok, false);
  assert.equal(validateInterest({ ...interest, schedule: 'madrugada' }).ok, false);
});

test('sesión de prueba: acepta un registro válido', () => {
  const r = validateTrial(trial);
  assert.equal(r.ok, true);
  if (r.ok) assert.equal(r.data.whatsapp, '+573101234567');
});

test('sesión de prueba: el objetivo es opcional y tiene tope de 300 caracteres', () => {
  assert.equal(validateTrial({ ...trial, goal: 'Bajar de peso' }).ok, true);
  assert.equal(validateTrial({ ...trial, goal: 'a'.repeat(301) }).ok, false);
  assert.equal(validateTrial({ ...trial, goal: 'a'.repeat(300) }).ok, true);
});

test('sesión de prueba: el lugar es obligatorio y debe ser válido', () => {
  assert.equal(validateTrial({ ...trial, place: '' }).ok, false);
  assert.equal(validateTrial({ ...trial, place: 'la luna' }).ok, false);
});

test('no falla con entradas que no son objetos', () => {
  for (const raw of [null, undefined, 'x', 42, []]) {
    assert.equal(validateInterest(raw).ok, false);
    assert.equal(validateTrial(raw).ok, false);
  }
});
