import { supabase } from '@/lib/supabase';

export const createProject = async (title: string, description: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('User not authenticated');

    const userId = session.session.user.id;

    const { error } = await supabase.from('projects').insert([
      {
        title,
        description,
        user_id: userId,
      },
    ]);

    if (error) throw new Error(error.message);

    return { success: true };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
