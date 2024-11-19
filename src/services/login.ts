import { supabase, createSession } from '@utils';

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
        const { error: errorToken } = await createSession(token);

        if (errorToken) throw new Error(errorToken);
      }
    }

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
