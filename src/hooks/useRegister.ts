import { supabase } from '@/lib/supabase';

export function useRegister() {
  const register = async (email: string, password: string, role: string) => {
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw new Error(signUpError.message);

      if (signUpData.user) {
        const { error: insertError } = await supabase
          .from('users')
          .insert([{ id: signUpData.user.id, email, role }]);

        if (insertError) throw new Error(insertError.message);

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

  return { register };
}
