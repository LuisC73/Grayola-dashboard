import { supabase } from '@/lib/supabase';

export function useRegister() {
  const register = async (email: string, password: string) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/register/create`,
        },
      });

      if (signUpError) throw new Error(signUpError.message);

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
