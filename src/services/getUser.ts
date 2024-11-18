import { supabase } from '@/lib/supabase';

export const getUser = async () => {
  try {
    const session = await supabase.auth.getSession();

    if (!session.data?.session?.user) throw new Error('User not authenticated');

    const { user } = session.data.session;

    const { data, error: fetchError } = await supabase
      .from('users')
      .select('name, role')
      .eq('id', user.id)
      .limit(1);

    if (fetchError) throw new Error(fetchError.message);

    return { name: data[0]?.name || null, role: data[0]?.role || null, error: null };
  } catch (err: unknown) {
    return {
      name: null,
      role: null,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};

export const getUserProjectsCount = async () => {
  try {
    const session = await supabase.auth.getSession();

    if (!session.data?.session?.user) throw new Error('User not authenticated');

    const { user } = session.data.session;

    const { count, error: fetchError } = await supabase
      .from('projects')
      .select('id', { count: 'exact' })
      .eq('user_id', user.id);

    if (fetchError) throw new Error(fetchError.message);

    return { count, error: null };
  } catch (err: unknown) {
    return {
      count: 0,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
