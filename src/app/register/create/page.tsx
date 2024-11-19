'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateUserForm } from '@components';
import { createUser } from '@/services/createUser';
import { CREATE_CONTENT } from '@/content';
import { validateUser } from '@/utils/validateUser';

export default function CreatePage() {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('default');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateUser = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const { success: successValidate, error: errorValidate } = validateUser(name, role);

    if (errorValidate) {
      setError(errorValidate || 'Validación fallida');
      return;
    }

    if (successValidate) {
      const { success, error: createError } = await createUser(name, role);

      if (success) {
        router.push('/dashboard');
      }

      if (createError) {
        setError(createError);
      }
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

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
