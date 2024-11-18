import { supabase } from '@/lib/supabase';
import { saveTokenToCookie } from '@/utils/cookie';

export const loginUser = async (email: string, password: string) => {
  try {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) throw new Error(signInError.message);

    if (signInData.user) {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) throw new Error(sessionError.message);

      if (sessionData?.session) {
        const token = sessionData.session.access_token;
        saveTokenToCookie(token);
      }
    }

    return { success: true, error: null };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { success: false, error: err.message };
    } else {
      return { success: false, error: 'An unknown error occurred' };
    }
  }
};
