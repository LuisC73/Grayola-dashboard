import { supabase } from '@/lib/supabase';

export function useLogin() {
  const login = async (email: string, password: string) => {
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
          document.cookie = `supabase-auth-token=${
            sessionData.session.access_token
          }; path=/; max-age=${60 * 60 * 24 * 7}; secure; SameSite=Strict`;
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

  return { login };
}
