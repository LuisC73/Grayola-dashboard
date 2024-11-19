"use server";

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { CookieProps } from '@/types';

const cookie: CookieProps = {
  name: 'supabase-auth-token',
  options: { httpOnly: true, secure: true, sameSite: 'strict', path: '/' },
  duration: 24 * 60 * 60 * 1000
}

export async function createSession(token: string) {
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + cookie.duration);

  cookieStore.set(cookie.name, token, {...cookie.options, expires});
  redirect('/dashboard');
};

export async function verifySession() {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(cookie?.name)?.value;

  if(!cookieValue) redirect('/');
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookie.name);
  redirect('/');
}