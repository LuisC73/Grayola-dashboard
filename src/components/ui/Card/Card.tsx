import { CardProps } from '@/types';
import { Button } from '../Button/Button';

export function Card(props: CardProps) {
  return (
    <div className="w-full h-full border border-gray-300 rounded-md p-5 flex flex-col justify-between gap-5 max-h-[280px]">
      <div className="flex flex-col gap-2 overflow-hidden">
        <h3 className="font-[family-name:var(--font-body)] font-bold mb-2">Proyecto</h3>
        <h4 className="font-[family-name:var(--font-body)] font-bold text-sm">Titulo:</h4>
        <p className="font-[family-name:var(--font-body)] text-sm md:line-clamp-2">{props.title}</p>
        <h5 className="font-[family-name:var(--font-body)] font-bold text-sm">Descripción:</h5>
        <p className="font-[family-name:var(--font-body)] text-sm overflow-hidden md:line-clamp-2">
          {props.description}
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
