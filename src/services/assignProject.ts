import { supabase } from '@/lib/supabase';

export const assignProject = async (projectId: string, designerId: string) => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('User not authenticated');

    const { data: userRole, error: roleError } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.session.user.id)
      .single();

    if (roleError) throw new Error(roleError.message);

    if (userRole.role !== 'project_manager') {
      throw new Error('Only managers can assign projects');
    }

    const { error } = await supabase
      .from('projects')
      .update({ assigned_to: designerId })
      .eq('id', projectId);

    if (error) throw new Error(error.message);

    return { success: true };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
