'use client';

import { AlertModal, ButtonLink } from '@/components';
import { CreateProjectForm } from '@/components/forms/CreateProjectForm/CreateProjectForm';
import { createProject } from '@/services/createProject';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function ProjectsPage() {
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

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300 grid grid-rows-1 grid-cols-[1fr_auto] items-center">
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">Crear proyecto</h1>
        <ButtonLink
          label="Volver"
          style="Primary"
          href="/dashboard/projects"
          title="Volver a proyectos"
        />
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="order-2 md:order-1 w-full h-full p-5 lg:p-10 bg-tertiary bg-planet bg-no-repeat bg-bottom bg-[length:65%_auto] rounded-md overflow-hidden">
          <h2 className='font-[family-name:var(--font-title)] text-2xl'>Administra tus proyectos de forma rápida y eficiente.</h2>
        </div>
        <div className='order-1 md:order-2'>
          <CreateProjectForm
            onSubmit={handleCreateProject}
            changeTitle={handleChangeTitle}
            changeDescription={handleChangeDescription}
            errorMsg={error}
          />
        </div>
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
          type="Success"
          title="Proyecto creado"
          description='Se creo el proyecto con exito'
          onClose={() => {}}
        />
      )}
    </div>
  );
}
