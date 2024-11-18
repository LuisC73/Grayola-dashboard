'use client';

import { AlertModal } from '@/components';
import { CreateProjectForm } from '@/components/forms/CreateProjectForm/CreateProjectForm';
import { useUser } from '@/context/UserContext';
import { createProject } from '@/services/createProject';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function ProjectsPage() {
  const { user } = useUser();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleCreateProject = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const { success, error } = await createProject(title, description);

    if (success) {
      setSuccess(success);
    }
    if (error) setError(error);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300 grid grid-rows-1 grid-cols-[1fr_auto] items-center">
        <div>
          <h1 className="font-[family-name:var(--font-title)] text-black text-base">Crear proyecto</h1>
          <span>{user.role}</span>
        </div>
      </div>
      <div className="p-5 grid grid-rows-[auto_1fr]">
        <CreateProjectForm
          onSubmit={handleCreateProject}
          changeTitle={handleChangeTitle}
          changeDescription={handleChangeDescription}
          errorMsg={error}
        />
      </div>
      {error && (
        <AlertModal
          type="Error"
          title="Error"
          description={error}
          onClose={() => {}}
        />
      )}
      {success && (
        <AlertModal
          type="Error"
          title="Error"
          description={error}
          onClose={() => {}}
        />
      )}
    </div>
  );
};