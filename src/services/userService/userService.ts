import { createSession, supabase } from '@utils';

export const registerUser = async (email: string, password: string) => {
  try {
    const { data: existingUsers, error: fetchError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') throw new Error(fetchError.message);

    if (existingUsers) {
      return { success: false, error: 'El correo ya está registrado' };
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) throw new Error(signUpError.message);

    if (signUpData.user) {
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

export const createUser = async (name: string, role: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const { user } = session.session;

    const { error: insertError } = await supabase
      .from('users')
      .insert([{ id: user.id, email: user.email, role, name }]);

    if (insertError) throw new Error(insertError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

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

export const getUser = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const userId = session.session.user.id;

    const { data, error: fetchError } = await supabase
      .from('users')
      .select('id, name, role')
      .eq('id', userId)
      .limit(1);

    if (fetchError) throw new Error(fetchError.message);

    return { id: data[0].id, name: data[0]?.name || null, role: data[0]?.role || null, error: null };
  } catch (err: unknown) {
    return {
      id: null,
      name: null,
      role: null,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

export const getDesigners = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const { data, error } = await supabase
      .from('users')
      .select('id, name, email')
      .eq('role', 'designer');

    if (error) throw new Error(error.message);

    return { designers: data, error: null };
  } catch (err: unknown) {
    return {
      designers: null,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
