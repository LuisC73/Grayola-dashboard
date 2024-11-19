'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateUserForm, Loading } from '@components';
import { createUser } from '@/services/createUser';
import { CREATE_CONTENT } from '@/content';
import { validateUser } from '@/utils/validateUser';

export default function CreatePage() {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('default');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleCreateUser = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { success: successValidate, error: errorValidate } = validateUser(name, role);

    if (errorValidate) {
      setError(errorValidate || 'Validación fallida');
      return;
    }

    if (successValidate) {
      const { success, error: createError } = await createUser(name, role);

      if (success) {
        setTimeout(() => {
          router.replace('/dashboard');
        }, 100);
      }

      if (createError) {
        setError(createError);
      }
    }

    setLoading(false);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
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
          {CREATE_CONTENT.title}
        </h1>
        <p className="font-[family-name:var(--font-body)] text-base text-gray-900">
          {CREATE_CONTENT.description}
        </p>
      </div>
      <CreateUserForm
        onCreate={handleCreateUser}
        onName={handleName}
        onRole={handleRole}
        errorMsg={error}
      />
    </div>
  );
}
