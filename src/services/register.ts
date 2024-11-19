import { supabase } from '@utils';

export const registerUser = async (email: string, password: string) => {
  try {
    const redirectUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://grayola-dashboard.vercel.app'
        : 'http://localhost:3000';

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${redirectUrl}/register/create`,
      },
    });

    if (signUpError) throw new Error(signUpError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
