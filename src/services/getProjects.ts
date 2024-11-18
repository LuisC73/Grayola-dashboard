import { supabase } from '@/lib/supabase';

export const getProjects = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('User not authenticated');

    const userId = session.session.user.id;

    const { data: userRole, error: roleError } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single();

    if (roleError) throw new Error(roleError.message);

    let query = supabase.from('projects').select('*');

    if (userRole.role === 'client') {
      query = query.eq('user_id', userId);
    } else if (userRole.role === 'designer') {
      query = query.eq('assigned_to', userId);
    }

    const { data, error } = await query;

    if (error) throw new Error(error.message);

    return { success: true, projects: data };
  } catch (err: unknown) {
    return {
      success: false,
      projects: null,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
};
