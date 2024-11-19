import { supabase } from '@/lib/supabase';

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
