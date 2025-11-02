import type { RequestInit } from 'vite/types/customEvent';

export type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
  id?: string;
  errors?: Record<string, string>;
};

type ApiResult<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

const JSON_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

async function safeParse<T = unknown>(res: Response): Promise<T | undefined> {
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) return undefined;
  try {
    return (await res.json()) as T;
  } catch {
    return undefined;
  }
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  const res = await fetch(path, {
    credentials: 'same-origin',
    ...init,
  });

  const data = await safeParse<T>(res);
  if (!res.ok) {
    const error =
      (data as any)?.error ||
      (data as any)?.message ||
      `${res.status} ${res.statusText || 'Request failed'}`;
    return { ok: false, status: res.status, data, error };
  }

  return { ok: true, status: res.status, data };
}

export async function submitContact(
  payload: ContactRequest,
  opts?: { signal?: AbortSignal }
): Promise<ContactResponse> {
  const result = await apiFetch<ContactResponse>('/api/contact', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(payload),
    signal: opts?.signal,
  });

  if (result.ok) {
    const data = result.data || ({ success: true } as ContactResponse);
    return {
      success: data.success ?? true,
      message: data.message || 'Message sent successfully.',
      id: data.id,
      errors: data.errors,
    };
  }

  // Failed response
  const data = result.data;
  return {
    success: false,
    message:
      (data as any)?.message ||
      result.error ||
      'Failed to send your message. Please try again.',
    errors: (data as any)?.errors,
  };
}

// Optional helpers for other parts of the app if needed
export async function getJSON<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  return apiFetch<T>(path, {
    method: 'GET',
    headers: JSON_HEADERS,
    ...init,
  });
}

export async function postJSON<T>(path: string, body: unknown, init?: RequestInit): Promise<ApiResult<T>> {
  return apiFetch<T>(path, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
    ...init,
  });
}