'use client';

import { Alert, Button, Input, TextArea } from '@components';
import { CreateProjectFormProps } from '@types';

export function CreateProjectForm(props: CreateProjectFormProps) {
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
            parentMethod={props.changeTitle}
            isRequired
          />
          <TextArea
            id="descriptionProject"
            label="Descripción"
            parentMethod={props.changeDescription}
            isRequired
          />
          <Button
            label="Crear proyecto"
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
