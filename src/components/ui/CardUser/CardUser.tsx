import { ROLES } from '@/content';
import { CardUserProps } from '@/types';

export function CardUser({ title, name, role }: CardUserProps) {
  const firstLetterName: string = name?.split('')?.[0] ?? 'U';
  const userRole: string = ROLES?.[role] ?? 'Cliente';

  return (
    <div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-md bg-secondary/30 bg-decorate bg-no-repeat bg-right-bottom bg-[length:35%_auto]">
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
