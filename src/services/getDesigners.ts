import { supabase } from '@/lib/supabase';

export const getDesigners = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('users')
      .select('id, name, email')
      .eq('role', 'designer');

    if (error) throw new Error(error.message);

    return { success: true, designers: data };
  } catch (err: unknown) {
    return {
      success: false,
      designers: null,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};