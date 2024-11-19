'use client';

import { AlertModal, ButtonLink, Loading } from '@/components';
import { CreateProjectForm } from '@/components/forms/CreateProjectForm/CreateProjectForm';
import { createProject } from '@/services/createProject';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function ProjectsPage() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const router = useRouter();

  const handleCreateProject = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError('');

    const { success, error } = await createProject(title, description);

    if (success) {
      setSuccess(success);
      setIsModalActive(true);
    }

    if (error) {
      setError(error);
      setIsModalActive(true);
    }

    setLoading(false);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    router.push('/dashboard/projects');
  };

  if (loading) {
    return (
      <div className="w-full h-full grid items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr]">
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
        <div className="order-2 md:order-1 w-full h-full p-5 lg:p-10 min-h-[320px] md:min-h-full max-h-[500px] bg-tertiary bg-planet bg-no-repeat bg-bottom bg-[length:65%_auto] rounded-md overflow-hidden">
          <h2 className="font-[family-name:var(--font-title)] text-2xl">
            Administra tus proyectos de forma rápida y eficiente.
          </h2>
        </div>
        <div className="order-1 md:order-2">
          <CreateProjectForm
            onSubmit={handleCreateProject}
            changeTitle={handleChangeTitle}
            changeDescription={handleChangeDescription}
            errorMsg={error}
          />
        </div>
      </div>
      {error && isModalActive && (
        <AlertModal
          type="Error"
          title="Ha ocurrido un error"
          description={error}
          onClose={handleCloseModal}
        />
      )}
      {success && isModalActive && (
        <AlertModal
          type="Success"
          title="Proyecto creado"
          description="El proyecto se ha creado con éxito."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
