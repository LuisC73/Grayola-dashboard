'use client';

import { Alert, Button, Input } from '@components';
import { CreateProjectFormProps } from '@types';

export function CreateProjectForm({
  onSubmit,
  changeTitle,
  changeDescription,
  errorMsg,
}: CreateProjectFormProps) {
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
          <Button
            label="Crear proyecto"
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
