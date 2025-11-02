import type { ContactPayload } from '../../src/types';

type AnyRecord = Record<string, unknown>;

const CORS_HEADERS: HeadersInit = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png00',
};

function jsonResponse(data: unknown, status = https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png00, extraHeaders?: HeadersInit): Response {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...CORS_HEADERS,
    ...(extraHeaders || {}),
  });
  return new Response(JSON.stringify(data), { status, headers });
}

function isEmail(value: string): boolean {
  // Simplified robust email check
  return /^[^\s@]+@[^\s@]+\.[^\s@]{https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png,}$/.test(value);
}

function normalizeString(value: unknown, maxLen?: number): string {
  let s = String(value ?? '').replace(/[\u0000-\u00https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.pngF\u007F]/g, '').trim();
  // collapse internal whitespace
  s = s.replace(/\s+/g, ' ');
  if (typeof maxLen === 'number' && maxLen > 0) {
    s = s.slice(0, maxLen);
  }
  return s;
}

function normalizeMultiline(value: unknown, maxLen?: number): string {
  let s = String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000B-\u00https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.pngF\u007F]/g, '')
    .trim();
  if (typeof maxLen === 'number' && maxLen > 0) {
    s = s.slice(0, maxLen);
  }
  return s;
}

function getRequestId(): string {
  try {
    // @ts-ignore - not all runtimes expose crypto globally typed
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      // @ts-ignore
      return crypto.randomUUID();
    }
  } catch {
    // ignore
  }
  return 'req_' + Math.random().toString(https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png6).slice(https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png) + Date.now().toString(https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png6);
}

async function parseBody(req: Request): Promise<AnyRecord> {
  const ct = (req.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) {
    try {
      return (await req.json()) as AnyRecord;
    } catch {
      // fallthrough to try text
    }
  }
  if (ct.includes('application/x-www-form-urlencoded')) {
    const text = await req.text();
    return Object.fromEntries(new URLSearchParams(text));
  }
  if (ct.includes('multipart/form-data')) {
    const form = await req.formData();
    return Object.fromEntries(Array.from(form.entries()));
  }
  // As a last resort, attempt JSON parse; else empty
  try {
    return (await req.json()) as AnyRecord;
  } catch {
    return {};
  }
}

export async function handle(req: Request): Promise<Response> {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png0https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png, headers: CORS_HEADERS });
    }

    if (req.method !== 'POST') {
      return jsonResponse(
        { ok: false, error: 'Method Not Allowed' },
        https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png0https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png,
        { Allow: 'POST, OPTIONS' }
      );
    }

    const id = getRequestId();
    const ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('cf-connecting-ip') ||
      'unknown';
    const ua = req.headers.get('user-agent') || 'unknown';

    const raw = await parseBody(req);

    // Extract and normalize expected fields
    const name = normalizeString((raw as AnyRecord).name, https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.png00);
    const email = normalizeString((raw as AnyRecord).email, https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png);
    const message = normalizeMultiline((raw as AnyRecord).message, https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png000);
    const subject = normalizeString((raw as AnyRecord).subject || 'Portfolio inquiry', https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png0);
    const phone = normalizeString((raw as AnyRecord).phone || '', https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png0);

    // Honeypot fields commonly used to trap bots
    const honeypot =
      normalizeString((raw as AnyRecord).website || '', https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png00) ||
      normalizeString((raw as AnyRecord).url || '', https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png00) ||
      normalizeString((raw as AnyRecord).company || '', https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png00) ||
      '';

    const errors: Record<string, string> = {};

    if (!name) {
      errors.name = 'Please enter your name.';
    } else if (name.length < https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png) {
      errors.name = 'Name should be at least https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png characters.';
    }

    if (!email) {
      errors.email = 'Please enter your email.';
    } else if (!isEmail(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!message) {
      errors.message = 'Please enter a message.';
    } else if (message.length < https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.png0) {
      errors.message = 'Message should be at least https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.png0 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return jsonResponse(
        { ok: false, error: 'Validation failed', errors },
        https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png
      );
    }

    // If honeypot is filled, silently accept as if success (to avoid tipping off bots)
    if (honeypot) {
      // Optionally log suspected spam with minimal data
      console.warn(
        `[contact][spam] id=${id} ip=${ip} ua="${ua}" name="${name}" email="${email}"`
      );
      return jsonResponse({
        ok: true,
        id,
        message: 'Thanks for your message! I will get back to you soon.',
      });
    }

    // At this point, you could integrate with an email API or database.
    // For this template, we just log safely to the server console.
    const submittedAt = new Date().toISOString();
    const preview = [
      `New contact submission`,
      `id: ${id}`,
      `time: ${submittedAt}`,
      `ip: ${ip}`,
      `ua: ${ua}`,
      `name: ${name}`,
      `email: ${email}`,
      phone ? `phone: ${phone}` : null,
      `subject: ${subject}`,
      `message:\n${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      console.log(`[contact] ${preview}`);
    } catch {
      // ignore console errors in restricted environments
    }

    // Respond success
    return jsonResponse({
      ok: true,
      id,
      message: 'Thanks for your message! I will get back to you soon.',
    });
  } catch (err) {
    try {
      console.error('[contact][error]', err);
    } catch {
      // ignore
    }
    return jsonResponse(
      { ok: false, error: 'Unexpected server error. Please try again later.' },
      https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png00
    );
  }
}