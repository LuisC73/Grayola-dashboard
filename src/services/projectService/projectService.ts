import { getProjectsData } from '@types';
import { supabase } from '@utils';

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

export const editProject = async (
  projectId: string,
  updates: { title: string; description: string; assigned_to: string | null }
) => {
  try {
    const { error: updateError } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', projectId);

    if (updateError) throw new Error(updateError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const { error: deleteError } = await supabase.from('projects').delete().eq('id', projectId);
    if (deleteError) throw new Error(deleteError.message);

    return { success: true, error: null };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

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

    const { data, error }: getProjectsData = await query;

    if (error) throw new Error(error.message);

    return { projects: data, error: null };
  } catch (err: unknown) {
    return {
      projects: null,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};

export const getProjectById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('id, title, description, assigned_to')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);

    return { data, error: null };
  } catch (error: unknown) {
    return { data: null, error: error instanceof Error ? error.message : 'Error desconocido' };
  }
};

export const getProjectsCount = async (userId: string, role: string) => {
  try {
    let query = supabase.from('projects').select('id', { count: 'exact' });

    if (role === 'customer') {
      query = query.eq('user_id', userId);
    } else if (role === 'designer') {
      query = query.eq('assigned_to', userId);
    }

    const { count, error: fetchError } = await query;

    if (fetchError) throw new Error(fetchError.message);

    return { count, error: null };
  } catch (err: unknown) {
    return {
      count: 0,
      error: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
};
