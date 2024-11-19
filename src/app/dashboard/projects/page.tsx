'use client';

import { Alert, AlertModal, ButtonLink, Card, Loading } from '@components';
import { ROLES } from '@/content';
import { useUser } from '@/context/UserContext';
import { deleteProject } from '@/services/deleteProject';
import { getProjects } from '@/services/getProjects';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();
  const router = useRouter();

  const userRole: string = ROLES?.[user.role] ?? 'Cliente';

  const fetchProject = async () => {
    setLoading(true);
    const { projects, error } = await getProjects();

    if (projects) setProjects(projects);
    if (error) setError(error);

    setLoading(false);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const handleEditProject = (id: string) => {
    router.push(`/dashboard/projects/edit?id=${id}`);
  };

  const handleDeleteProject = async (id: string) => {
    const { success, error } = await deleteProject(id);

    if (success) {
      setSuccess(success);
      setIsModalActive(true);
    }

    if (error) setError(error);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    fetchProject();
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
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">Proyectos</h1>
        {user.role === 'customer' ? (
          <ButtonLink
            label="Crear proyecto"
            style="Primary"
            href="/dashboard/projects/create"
            title="Crear un nuevo proyecto"
          />
        ) : (
          <span className="font-[family-name:var(--font-body)] text-sm">{userRole}</span>
        )}
      </div>
      <div className="p-5 grid grid-rows-1fr">
        <div className="grid grid-cols-cards gap-5">
          {projects?.map((project, index) => (
            <Card
              key={index}
              userRole={user.role}
              projectId={project.id}
              title={project.title}
              description={project.description}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
        {error && (
          <div>
            <Alert
              type="Error"
              title="Error al cargar los proyectos"
              description={error}
            />
          </div>
        )}
        {success && isModalActive && (
          <AlertModal
            type="Success"
            title="Proyecto Eliminado"
            description={'El proyecto se eliminó con éxito.'}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}
