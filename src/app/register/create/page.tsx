'use client';

import { useCreateUser } from '@/hooks/useCreateUser';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateUserForm } from '@/components/forms/CreateUserForm/CreateUserForm';

export default function CreatePage() {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { create } = useCreateUser();
  const router = useRouter();

  const handleCreateUser = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const { success, error: createError } = await create(name, role);

    if (success) {
      router.push('/dashboard');
    }

    if (createError) {
      setError(createError);
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRole = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <CreateUserForm
        onCreate={handleCreateUser}
        onName={handleName}
        onRole={handleRole}
        errorMsg={error}
      />
    </div>
  );
}
