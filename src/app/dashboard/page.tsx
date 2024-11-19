'use client';

import { CardReport, CardUser, Loading } from '@components';
import { useUser } from '@/context/UserContext';
import { getUserProjectsCount } from '@/services/getUser';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [countProjects, setCountProjects] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();

  const fetchUserProjectCount = async () => {
    setLoading(true);
    const { count, error } = await getUserProjectsCount();

    if (count) setCountProjects(count);
    if (error) setError(error);

    setLoading(false);
  };

  useEffect(() => {
    fetchUserProjectCount();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full grid items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300">
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">Dashboard</h1>
      </div>
      <div className="p-5 grid grid-rows-[auto_1fr]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-title)] text-black text-base">
              Bienvenido, {user.name}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">
              Descubre el dashboard más eficiente para gestionar todos tus proyectos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CardUser
              title="Perfil"
              name={user.name}
              role={user.role}
            />
            {user.role === 'customer' && (
              <CardReport
                title="Proyectos creados"
                count={countProjects}
                errorMsg={error}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
