'use client';

import { AlertModal, Button, Input, Select } from '@components';
import { ROLES_OPTIONS } from '@/content';
import { CreateUserFormProps } from '@types';
import { useEffect, useState } from 'react';

export function CreateUserForm({ onCreate, onName, onRole, errorMsg }: CreateUserFormProps) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  useEffect(() => {
    if (errorMsg) {
      setIsModalActive(true);
    }
  }, [errorMsg]);

  const handleCloseModal = () => {
    setIsModalActive(false);
  };
  
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <form
          className="flex flex-col gap-5"
          onSubmit={onCreate}
        >
          <Input
            id="nameRegister"
            type="text"
            label="Nombre"
            parentMethod={onName}
            isRequired
          />
          <Select
            id="selectRol"
            label="Seleccionar Rol"
            initialValue={'default'}
            options={ROLES_OPTIONS}
            parentMethod={onRole}
            isRequired
          />
          <Button
            label="Crear cuenta"
            style="Primary"
            isSubmit
          />
        </form>
      </div>
      {errorMsg && isModalActive && (
        <AlertModal
          type="Error"
          title="Ha ocurrido un error"
          description={errorMsg}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
