import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Select } from '@/components/ui/Select/Select';
import { ROLES_OPTIONS } from '@/content';
import { RegisterFormProps } from '@/types';
import Link from 'next/link';

export function RegisterForm({
  onRegister,
  onEmail,
  onPassword,
  onRole,
  errorMsg,
}: RegisterFormProps) {
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
            label="Email"
            parentMethod={onEmail}
          />
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <Input
              id="passwordRegister"
              type="password"
              label="Contraseña"
              parentMethod={onPassword}
            />
            <Input
              id="confirmPasswordRegister"
              type="password"
              label="Confirmar contraseña"
            />
          </div>
          <Select
            id="selectRol"
            label="Seleccionar Rol"
            options={ROLES_OPTIONS}
            parentMethod={onRole}
          />
          <Button
            label="Crear cuenta"
            style="Primary"
            isSubmit
          />
        </form>
        <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
          Ya tienes una cuenta,{' '}
          <Link
            href="/login"
            title="Ingresar a formulario de inicio de sesión"
            className="font-bold hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
      <div>{errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}</div>
    </div>
  );
}
