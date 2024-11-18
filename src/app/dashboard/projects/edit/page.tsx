'use client';

import { AlertModal, ButtonLink, EditProjectForm } from '@components';
import { editProject } from '@/services/editProject';
import { getDesigners } from '@/services/getDesigners';
import { DesignerProps } from '@types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProjectById } from '@/services/getProjectById';

export default function EditProjectPage() {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    assigned_to: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [options, setOptions] = useState<DesignerProps[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id');
      setProjectId(id as string);
    }
  }, []);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (projectId) {
        const { data, error } = await getProjectById(projectId);

        if (data) {
          setProjectData({
            title: data.title,
            description: data.description,
            assigned_to: data.assigned_to,
          });
        } else {
          setError(error);
        }
      }
    };

    const fetchDesigners = async () => {
      const { designers, error } = await getDesigners();

      if (designers) setOptions(designers);
      if (error) setError(error);
    };

    fetchProjectData();
    fetchDesigners();
  }, [projectId]);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const { success, error } = await editProject(projectId, {
      title: projectData.title,
      description: projectData.description,
      assigned_to: projectData.assigned_to,
    });

    if (success) {
      setSuccess(success);
      setIsModalActive(true);
    }

    if (error) {
      setIsModalActive(true);
      setError(error);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectData({ ...projectData, title: e.target.value });
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProjectData({ ...projectData, description: e.target.value });
  };

  const handleChangeDesigner = (e: ChangeEvent<HTMLSelectElement>) => {
    setProjectData({ ...projectData, assigned_to: e.target.value });
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    router.push('/dashboard/projects');
  };

  if (!projectId) {
    <p className="font-[family-name:var(--font-body)] text-sm text-gray-900">Cargando datos...</p>;
  }

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300 grid grid-rows-1 grid-cols-[1fr_auto] items-center">
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">
          Editar Proyecto
        </h1>
        <ButtonLink
          label="Volver"
          style="Primary"
          href="/dashboard/projects"
          title="Volver a proyectos"
        />
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="order-2 md:order-1 w-full h-full min-h-[320px] md:min-h-full max-h-[500px] p-5 lg:p-10 bg-tertiary bg-planet bg-no-repeat bg-bottom bg-[length:65%_auto] rounded-md overflow-hidden">
          <h2 className="font-[family-name:var(--font-title)] text-2xl">
            Administra tus proyectos de forma rápida y eficiente.
          </h2>
        </div>
        <div className="order-1 md:order-2">
          <EditProjectForm
            data={projectData}
            onSubmit={handleOnSubmit}
            changeTitle={handleChangeTitle}
            changeDescription={handleChangeDescription}
            changeDesigner={handleChangeDesigner}
            options={options}
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
          title="Proyecto editado"
          description="El proyecto se ha editado con éxito."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
