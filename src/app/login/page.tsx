'use client';

import { LOGIN_CONTENT } from '@/content';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loading, LoginForm } from '@components';
import { loginUser } from '@/services/login';
import { validateCredentials } from '@/utils/validateCredentials';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { success: successValidate, error: errorValidate } = validateCredentials(email, password);

    if (errorValidate) {
      setError(errorValidate || 'Validación fallida');
      return;
    }

    if (successValidate) {
      const { success, error: signInError } = await loginUser(email, password);

      if (success) {
        router.push('/dashboard');
      }

      if (signInError) {
        setError(signInError);
      }
    }

    setLoading(false);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (loading) {
    return (
      <div className="w-screen h-screen grid items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 min-h-screen justify-items-center">
      <main className="px-5 md:px-10 py-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-items-center gap-10 max-w-[1400px]">
        <div className="flex flex-col gap-5 lg:w-4/5">
          <Image
            src={LOGIN_CONTENT.logo.src}
            alt={LOGIN_CONTENT.logo.alt}
            width={LOGIN_CONTENT.logo.width}
            height={LOGIN_CONTENT.logo.height}
          />
          <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h1 className="font-[family-name:var(--font-title)] text-xl md:text-2xl lg:text-3xl">
              {LOGIN_CONTENT.title}
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-gray-900">
              {LOGIN_CONTENT.description}
            </p>
          </div>
          <LoginForm
            onLogin={handleLogin}
            onEmail={handleEmail}
            onPassword={handlePassword}
            errorMsg={error}
          />
        </div>
        <div className="w-full h-full min-h-[470px] max-h-[600px] p-5 lg:p-10 bg-tertiary bg-decorate bg-no-repeat bg-right-bottom  bg-[length:85%_auto] md:bg-[length:45%_auto] lg:bg-[length:65%_auto] rounded-md overflow-hidden">
          <div className="flex flex-col gap-5 w-4/5">
            <h2 className="font-[family-name:var(--font-title)] text-2xl">
              {LOGIN_CONTENT.subtitle}
            </h2>
            <Link
              href={LOGIN_CONTENT.button.href}
              title={LOGIN_CONTENT.button.title}
              className="text-sm w-fit font-[family-name:var(--font-body)] hover:underline"
            >
              {LOGIN_CONTENT.button.label}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
