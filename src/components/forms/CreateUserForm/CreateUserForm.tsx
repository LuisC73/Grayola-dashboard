import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Select } from '@/components/ui/Select/Select';
import { ROLES_OPTIONS } from '@/content';
import { CreateUserFormProps } from '@/types';

export function CreateUserForm({
  onCreate,
  onName,
  onRole,
  errorMsg,
}: CreateUserFormProps) {
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
          />
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
      </div>
      <div>{errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}</div>
    </div>
  );
}
