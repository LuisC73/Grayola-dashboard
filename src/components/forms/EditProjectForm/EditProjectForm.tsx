'use client';

import { Alert, Button, Input, Select, TextArea } from '@components';
import { EditProjectFormProps } from '@types';

export function EditProjectForm(props: EditProjectFormProps) {
  const designers = props?.options?.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <form
          className="flex flex-col gap-5"
          onSubmit={props.onSubmit}
        >
          <Input
            id="titleProject"
            type="text"
            label="Titulo"
            initialValue={props.data.title}
            parentMethod={props.changeTitle}
            isRequired
          />
          <TextArea
            id="descriptionProject"
            label="Descripción"
            initialValue={props.data.description}
            parentMethod={props.changeDescription}
            isRequired
          />
          {designers?.length > 0 ? (
            <Select
              id="selectDesigner"
              label="Asignar diseñador"
              options={designers}
              initialValue={props.data.assigned_to ?? ''}
              parentMethod={props.changeDesigner}
              isRequired
            />
          ) : (
            <p className="font-[family-name:var(--font-body)] text-sm text-gray-900">
              No hay diseñadores disponibles
            </p>
          )}
          <Button
            label="Editar proyecto"
            style="Primary"
            isSubmit
          />
        </form>
      </div>
      {props.errorMsg && (
        <Alert
          type="Error"
          title="Ha ocurrido un error"
          description={props.errorMsg}
        />
      )}
    </div>
  );
}
