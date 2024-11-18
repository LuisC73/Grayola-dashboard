import { supabase } from '@/lib/supabase';

export const deleteProject = async (projectId: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('User not authenticated');

    const userId = session.session.user.id;

    const { data: project, error: fetchError } = await supabase
      .from('projects')
      .select('user_id')
      .eq('id', projectId)
      .single();

    if (fetchError) throw new Error('Error fetching project data');
    if (project.user_id !== userId)
      throw new Error('Unauthorized: You can only delete your own projects');

    const { error: deleteError } = await supabase.from('projects').delete().eq('id', projectId);
    if (deleteError) throw new Error(deleteError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
