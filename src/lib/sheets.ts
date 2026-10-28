import { createSign } from 'node:crypto';
import {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_SHEET_ID,
} from 'astro:env/server';

const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

export class SheetsNotConfiguredError extends Error {}

let cached: { token: string; expiresAt: number } | null = null;

const b64url = (value: string | Buffer) =>
  Buffer.from(value).toString('base64url');

export function isSheetsConfigured() {
  return Boolean(
    GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_PRIVATE_KEY && GOOGLE_SHEET_ID,
  );
}

async function getAccessToken(): Promise<string> {
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new SheetsNotConfiguredError();
  }
  const now = Math.floor(Date.now() / 1000);
  if (cached && cached.expiresAt - 60 > now) return cached.token;

  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({
      iss: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  // La llave suele guardarse en una sola línea con "\n" literales.
  const key = GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
  const signature = b64url(signer.sign(key));

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`Token de Google rechazado (${res.status})`);

  const json = (await res.json()) as { access_token: string; expires_in: number };
  cached = { token: json.access_token, expiresAt: now + json.expires_in };
  return json.access_token;
}

/** Agrega una fila al final de la pestaña indicada. Lanza error si Google no confirma. */
export async function appendRow(tab: string, row: string[]) {
  if (!GOOGLE_SHEET_ID) throw new SheetsNotConfiguredError();
  const token = await getAccessToken();
  const range = encodeURIComponent(`'${tab}'!A:Z`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}` +
    `/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) throw new Error(`Google Sheets respondió ${res.status}`);
}
