import { supabase } from '@/lib/supabase';

export const editProject = async (
  projectId: string,
  updates: { title: string; description: string; assigned_to: string | null }
) => {
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
    if (project.user_id !== userId) {
      throw new Error('Unauthorized: You can only edit your own projects');
    }

    const { error: updateError } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', projectId);

    if (updateError) throw new Error(updateError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
