// Cuenta los datos que faltan y los textos sin aprobar. Uso: npm run check:content
// Termina con error mientras quede algo, para usarlo como último paso antes de publicar.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/content/', import.meta.url));
let missing = 0;
let unapproved = 0;

// Fotos tomadas de los mockups: son solo de referencia y deben reemplazarse por fotos reales.
const refDir = fileURLToPath(new URL('../src/assets/reference/', import.meta.url));
let refPhotos = 0;
try {
  refPhotos = readdirSync(refDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).length;
} catch {}

for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const text = readFileSync(join(dir, file), 'utf8');
  const m = (text.match(/\btbd\(/g) ?? []).length;
  const u = (text.match(/status: 'provisional'/g) ?? []).length;
  if (file !== 'site.ts') console.log(`${file.padEnd(14)} falta revisar: ${m}   sin aprobar: ${u}`);
  missing += m;
  unapproved += u;
}

console.log(`fotos de referencia por reemplazar: ${refPhotos}`);
console.log(
  `\nTotal: ${missing} datos que faltan, ${unapproved} bloques de texto sin aprobar, ${refPhotos} fotos de referencia.`,
);
if (missing + unapproved + refPhotos > 0) {
  console.log('El sitio NO está listo para publicarse.');
  process.exit(1);
}
console.log('Contenido completo.');
