import { ROLES_OPTIONS } from '@/content';
import { CardUserProps } from '@/types';

export function CardUser({ title, name, role }: CardUserProps) {
  const firstLetterName = name?.split('')?.[0] ?? 'U';

  const userRoleIndex = ROLES_OPTIONS?.findIndex((item) => item?.id === role) ?? 0;
  const userRole =
    ROLES_OPTIONS && ROLES_OPTIONS[userRoleIndex] ? ROLES_OPTIONS[userRoleIndex].label : 'Cliente';

  return (
    <div className="flex flex-col gap-5 border border-gray-300 p-4 rounded-md bg-secondary bg-decorate bg-no-repeat bg-right-bottom bg-[length:35%_auto]">
      <h3 className="font-[family-name:var(--font-body)] font-bold">{title}</h3>
      <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-tertiary border border-gray-300">
        <span className="font-[family-name:var(--font-body)] text-gray-900 text-3xl">
          {firstLetterName}
        </span>
      </div>
      <div className='flex flex-col gap-0.5'>
        <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">
          <b>Nombre:</b> {name}
        </p>
        <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">
          <b>Rol:</b> {userRole}
        </p>
      </div>
    </div>
  );
}
