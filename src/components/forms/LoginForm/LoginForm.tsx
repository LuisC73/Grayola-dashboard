import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { LoginFormProps } from '@types';
import Link from 'next/link';

export function LoginForm({ onLogin, onEmail, onPassword, errorMsg }: LoginFormProps) {
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
          />
          <Input
            id="passwordLogin"
            type="password"
            label="Contraseña"
            parentMethod={onPassword}
          />
          <Button
            label="Ingresar"
            style="Primary"
            isSubmit
          />
        </form>
        <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
          No tienes una cuenta,{' '}
          <Link
            href="/register"
            title="Ingresar a formulario de registro"
            className="font-bold hover:underline"
          >
            registrarse
          </Link>
        </p>
      </div>
      <div>{errorMsg && <p>{errorMsg}</p>}</div>
    </div>
  );
}
