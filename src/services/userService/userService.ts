import { createSession, supabase } from '@utils';

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

export const createUser = async (name: string, role: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const { user } = session.session;

    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('id')
      .eq('id', user.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') throw new Error(fetchError.message);
    if (existingUser) throw new Error('El usuario ya existe');

    const { error: insertError } = await supabase
      .from('users')
      .insert([{ id: user.id, email: user.email, role, name }]);

    if (insertError) throw new Error(insertError.message);

    const token = session.session.access_token;
    const { error: errorToken } = await createSession(token);

    if (errorToken) throw new Error(errorToken);

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
      .select('name, role')
      .eq('id', userId)
      .limit(1);

    if (fetchError) throw new Error(fetchError.message);

    return { name: data[0]?.name || null, role: data[0]?.role || null, error: null };
  } catch (err: unknown) {
    return {
      name: null,
      role: null,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

export const getUserProjectsCount = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const userId = session.session.user.id;

    const { count, error: fetchError } = await supabase
      .from('projects')
      .select('id', { count: 'exact' })
      .eq('user_id', userId);

    if (fetchError) throw new Error(fetchError.message);

    return { count, error: null };
  } catch (err: unknown) {
    return {
      count: 0,
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
