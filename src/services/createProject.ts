import { supabase } from '@/lib/supabase';

export const createProject = async (title: string, description: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const userId = session.session.user.id;

    const { error } = await supabase.from('projects').insert([
      {
        title,
        description,
        user_id: userId,
      },
    ]);

    if (error) throw new Error(error.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
