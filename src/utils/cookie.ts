'use server';

import { cookies } from 'next/headers';

export const saveTokenToCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set('supabase-auth-token', token, { secure: true, sameSite: 'strict' });
};

export const deleteTokenToCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('supabase-auth-token');
};
