'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegister } from '@/hooks/useRegister';
import { RegisterForm } from '@/components/forms/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { register } = useRegister();
  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const { success, error: signUpError } = await register(email, password);

    if (success) {
      router.push('/register/verify');
    }

    if (signUpError) {
      setError(signUpError);
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <RegisterForm
        onRegister={handleRegister}
        onEmail={handleEmail}
        onPassword={handlePassword}
        errorMsg={error}
      />
    </div>
  );
}
