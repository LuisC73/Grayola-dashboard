import { supabase } from '@/lib/supabase';

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
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
