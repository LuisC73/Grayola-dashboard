import { supabase } from '@utils';
import { getProjectsData } from '@types';

export const getProjects = async () => {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error('Usuario no autenticado');

    const userId = session.session.user.id;

    const { data: userRole, error: roleError } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single();

    if (roleError) throw new Error(roleError.message);

    let query = supabase.from('projects').select('*');

    if (userRole.role === 'customer') {
      query = query.eq('user_id', userId);
    } else if (userRole.role === 'designer') {
      query = query.eq('assigned_to', userId);
    }

    const { data, error }: getProjectsData  = await query;

    if (error) throw new Error(error.message);

    return { projects: data, error: null };
  } catch (err: unknown) {
    return {
      projects: null,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
