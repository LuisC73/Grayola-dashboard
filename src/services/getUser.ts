import { supabase } from '@/lib/supabase';

export const getUserName = async () => {
  try {
    const session = await supabase.auth.getSession();

    if (!session.data?.session?.user) throw new Error('User not authenticated');

    const { user } = session.data.session;

    const { data, error: fetchError } = await supabase
      .from('users')
      .select('name')
      .eq('id', user.id)
      .limit(1);

    if (fetchError) throw new Error(fetchError.message);

    return { name: data[0]?.name || null, error: null };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { name: null, error: err.message };
    }
    return { name: null, error: 'An unknown error occurred' };
  }
};
