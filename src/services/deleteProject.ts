import { supabase } from '@/lib/supabase';

export const deleteProject = async (projectId: string) => {
  try {
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
