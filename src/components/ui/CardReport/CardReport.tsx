import { CardReportProps } from '@/types';
import { ButtonLink } from '@components';

export function CardReport({ title, count, errorMsg }: CardReportProps) {
  return (
    <div className="flex flex-col gap-5 justify-between border border-gray-300 p-5 rounded-md bg-tertiary/30 bg-decorate bg-no-repeat bg-right-bottom bg-[length:35%_auto]">
      <div className='flex flex-col gap-5'>
        <h3 className="font-[family-name:var(--font-body)] font-bold">{title}</h3>
        <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">
          <b>Total proyectos:</b> {count}
        </p>
        {errorMsg && (
          <p className='className="font-[family-name:var(--font-body)] text-red-600 text-sm"'>
            Error: {errorMsg}
          </p>
        )}
      </div>
      <ButtonLink
        href="/dashboard/projects/create"
        title="Crear nuevo proyecto"
        label="Crear proyecto"
        style="Primary"
      />
    </div>
  );
}
