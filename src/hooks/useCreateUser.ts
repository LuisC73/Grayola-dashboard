import { supabase } from '@/lib/supabase';
import { saveTokenToCookie } from '@/utils/cookie';

export function useCreateUser() {
  const create = async (name: string, role: string) => {
    try {
      const session = await supabase.auth.getSession();
      if (!session.data?.session) throw new Error('User not authenticated');

      const { error: insertError } = await supabase
        .from('users')
        .insert([
          { id: session.data.session.user.id, email: session.data.session.user.email, role },
        ]);

      if (insertError) throw new Error(insertError.message);

      saveTokenToCookie(session.data.session.access_token);

      return { success: true, error: null };
    } catch (err: unknown) {
      if (err instanceof Error) {
        return { success: false, error: err.message };
      } else {
        return { success: false, error: 'An unknown error occurred' };
      }
    }
  };

  return { create };
}
