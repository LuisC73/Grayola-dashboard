"use server";

import { cookies } from 'next/headers';

export const saveTokenToCookie =  async (token: string) => {
  const cookieStore = await cookies()
  cookieStore.set('supabase-auth-token', token);
  // document.cookie = `supabase-auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; SameSite=Strict`;
};