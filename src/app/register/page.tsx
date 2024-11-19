'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loading, RegisterForm } from '@components';
import { registerUser } from '@/services/register';
import { REGISTER_CONTENT } from '@/content';
import { validateCredentials } from '@/utils/validateCredentials';

export default function RegisterPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { success: successValidate, error: errorValidate } = validateCredentials(email, password);

    if (errorValidate) {
      setError(errorValidate || 'Validación fallida');
      return;
    }

    if (successValidate) {
      const { success, error: signUpError } = await registerUser(email, password);

      if (success) {
        router.push('/register/create');
      }

      if (signUpError) {
        setError(signUpError);
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
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
        <h1 className="font-[family-name:var(--font-title)] text-xl md:text-2xl lg:text-3xl">
          {REGISTER_CONTENT.title}
        </h1>
        <p className="font-[family-name:var(--font-body)] text-base text-gray-900">
          {REGISTER_CONTENT.description}
        </p>
      </div>
      <RegisterForm
        onRegister={handleRegister}
        onEmail={handleEmail}
        onPassword={handlePassword}
        errorMsg={error}
      />
    </div>
  );
}
