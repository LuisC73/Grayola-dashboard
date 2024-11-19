'use client';

import { AlertModal, Button, Input, InputPassword } from '@components';
import { LoginFormProps } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function LoginForm({ onLogin, onEmail, onPassword, errorMsg }: LoginFormProps) {
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
          onSubmit={onLogin}
        >
          <Input
            id="emailLogin"
            type="email"
            label="Dirección de correo electrónico"
            parentMethod={onEmail}
            isRequired
          />
          <InputPassword
            id="passwordLogin"
            label="Contraseña"
            parentMethod={onPassword}
            isRequired
          />
          <Button
            label="Ingresar"
            style="Primary"
            isSubmit
          />
        </form>
        <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
          ¿No tienes una cuenta?,{' '}
          <Link
            href="/register"
            title="Ingresar a formulario de registro"
            className="font-bold hover:underline"
          >
            Registrarse
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
