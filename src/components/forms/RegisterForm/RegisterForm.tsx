'use client';

import { AlertModal, Button, Input } from '@components';
import { RegisterFormProps } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function RegisterForm({ onRegister, onEmail, onPassword, errorMsg }: RegisterFormProps) {
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
          onSubmit={onRegister}
        >
          <Input
            id="emailRegister"
            type="email"
            label="Dirección de correo electrónico"
            parentMethod={onEmail}
            isRequired
          />
          <Input
            id="passwordRegister"
            type="password"
            label="Contraseña"
            parentMethod={onPassword}
            isRequired
          />
          <Button
            label="Crear cuenta"
            style="Primary"
            isSubmit
          />
        </form>
        <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
          ¿Ya tienes una cuenta?,{' '}
          <Link
            href="/login"
            title="Ingresar a formulario de inicio de sesión"
            className="font-bold hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
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
