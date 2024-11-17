import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard', '/dashboard/projects'];

export async function middleware(req: NextRequest) {
  const cookieStore = req.cookies;
  const token = cookieStore.get('supabase-auth-token');

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
};
