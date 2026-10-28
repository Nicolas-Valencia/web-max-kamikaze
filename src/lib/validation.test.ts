import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateInterest } from './validation.ts';

const valid = {
  name: '  Ana   Pérez ',
  whatsapp: '300 123 4567',
  email: '',
  discipline: 'mma',
  schedule: '',
  consent: true,
};

test('acepta un registro válido y normaliza los datos', () => {
  const r = validateInterest(valid);
  assert.equal(r.ok, true);
  if (r.ok) {
    assert.equal(r.data.name, 'Ana Pérez');
    assert.equal(r.data.whatsapp, '+573001234567');
  }
});

test('acepta el celular con prefijo +57', () => {
  const r = validateInterest({ ...valid, whatsapp: '+57 300 123 4567' });
  assert.equal(r.ok, true);
});

test('rechaza teléfonos que no son celulares colombianos', () => {
  for (const whatsapp of ['', '123', '2001234567', '30012345678', 'abc']) {
    const r = validateInterest({ ...valid, whatsapp });
    assert.equal(r.ok, false, whatsapp);
  }
});

test('el correo es opcional pero se valida si se escribe', () => {
  assert.equal(validateInterest({ ...valid, email: '' }).ok, true);
  assert.equal(validateInterest({ ...valid, email: 'ana@correo.com' }).ok, true);
  const r = validateInterest({ ...valid, email: 'ana@correo' });
  assert.equal(r.ok, false);
});

test('exige consentimiento explícito', () => {
  for (const consent of [false, 'true', undefined, 1]) {
    const r = validateInterest({ ...valid, consent });
    assert.equal(r.ok, false);
    if (!r.ok) assert.ok(r.errors.consent);
  }
});

test('rechaza disciplinas y horarios fuera de la lista', () => {
  assert.equal(validateInterest({ ...valid, discipline: 'yoga' }).ok, false);
  assert.equal(validateInterest({ ...valid, schedule: 'madrugada' }).ok, false);
});

test('no falla con entradas que no son objetos', () => {
  for (const raw of [null, undefined, 'x', 42, []]) {
    assert.equal(validateInterest(raw).ok, false);
  }
});
