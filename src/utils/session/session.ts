'use server';

import { cookies } from 'next/headers';
import { CookieProps } from '@/types';

const cookie: CookieProps = {
  name: 'supabase-auth-token',
  options: { httpOnly: true, secure: true, sameSite: 'strict', path: '/' },
  duration: 24 * 60 * 60 * 1000,
};

export async function createSession(token: string) {
  try {
    const cookieStore = await cookies();
    const expires = new Date(Date.now() + cookie.duration);
    cookieStore.set(cookie.name, token, { ...cookie.options, expires });
    return { error: null };
  } catch (err: unknown) {
    return {
      error: err instanceof Error ? err.message : 'Error desconocido al guardar el token de acceso',
    };
  }
}

export async function deleteSession() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(cookie.name);
    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: null,
      error: err instanceof Error ? err.message : 'Error desconocido al cerrar sesión',
    };
  }
}
