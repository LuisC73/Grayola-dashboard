import { supabase, createSession } from '@utils';

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
