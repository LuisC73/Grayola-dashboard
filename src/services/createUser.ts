import { supabase } from '@/lib/supabase';
import { saveTokenToCookie } from '@/utils/cookie';

export const createUser = async (name: string, role: string) => {
  try {
    const session = await supabase.auth.getSession();

    if (!session.data?.session?.user) throw new Error('User not authenticated');

    const { user } = session.data.session;

    const { data: existingUser, error: fetchError } = await supabase
    .from('users')
    .select('id')
    .eq('id', user.id)
    .single();

    if (fetchError && fetchError.code !== 'PGRST116') throw new Error(fetchError.message);
    if (existingUser) throw new Error('User already exists')

    const { error: insertError } = await supabase
      .from('users')
      .insert([
        { id: user.id, email: user.email, role, name },
      ]);

    if (insertError) throw new Error(insertError.message);

    saveTokenToCookie(session.data.session.access_token);

    return { success: true, error: null };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { success: false, error: `An error occurred: ${err.message}` };
    }
    return { success: false, error: 'An unknown error occurred' };
  }
};
