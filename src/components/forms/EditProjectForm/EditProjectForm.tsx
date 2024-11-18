'use client';

import { Alert, Button, Input, Select } from '@components';
import { EditProjectFormProps } from '@types';

export function EditProjectForm({
  onSubmit,
  changeTitle,
  changeDescription,
  changeDesigner,
  options,
  errorMsg,
}: EditProjectFormProps) {
  const designers = options.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <Input
            id="titleProject"
            type="text"
            label="Titulo"
            parentMethod={changeTitle}
            isRequired
          />
          <Input
            id="descriptionProject"
            type="text"
            label="Descripción"
            parentMethod={changeDescription}
            isRequired
          />
          {designers && (
            <Select
              id="selectDesigner"
              label="Asignar diseñador"
              options={designers}
              initialOption={designers[0]?.id}
              parentMethod={changeDesigner}
              isRequired
            />
          )}
          <Button
            label="Editar proyecto"
            style="Primary"
            isSubmit
          />
        </form>
      </div>
      {errorMsg && (
        <Alert
          type="Error"
          title="Ha ocurrido un error"
          description={errorMsg}
        />
      )}
    </div>
  );
}
