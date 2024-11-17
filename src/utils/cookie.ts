export const saveTokenToCookie = (token: string) => {
  document.cookie = `supabase-auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; SameSite=Strict`;
};