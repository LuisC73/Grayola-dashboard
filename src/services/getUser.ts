import { supabase } from '@utils';

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
