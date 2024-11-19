import { supabase } from '@/lib/supabase';
import { createSession } from '@/utils/session';

export const createUser = async (name: string, role: string) => {
  try {
    const session = await supabase.auth.getSession();

    if (!session.data?.session?.user) throw new Error('Usuario no autenticado');

    const { user } = session.data.session;

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

    await createSession(session.data.session.access_token);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
