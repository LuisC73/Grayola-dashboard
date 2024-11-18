import { CardProps } from '@/types';
import { Button } from '../Button/Button';

export function Card(props: CardProps) {
  return (
    <div className="w-full h-fit border border-gray-300 rounded-md p-5 flex flex-col gap-5">
      <h3 className="font-[family-name:var(--font-body)] font-bold">Proyecto</h3>
      <div className="flex flex-col gap-2">
        <p className="font-[family-name:var(--font-body)] text-sm">
          <b>Titulo:</b> {props.title}
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm">
          <b>Descripción:</b> {props.description}
        </p>
      </div>
      {props.userRole === 'project_manager' && (
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            label="Editar"
            style="Primary"
            ariaLabel="Editar proyecto"
            parentMethod={() => props.onEdit(props.projectId)}
          />
          <Button
            label="Eliminar"
            style="Secondary"
            ariaLabel="Eliminar proyecto"
            parentMethod={() => props.onDelete(props.projectId)}
          />
        </div>
      )}
    </div>
  );
}
