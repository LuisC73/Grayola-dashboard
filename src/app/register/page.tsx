import { LOGIN_CONTENT, REGISTER_CONTENT } from "@/content";
import { Button, Input, Select } from "@components";
import Image from "next/image";
import Link from "next/link";

const roles: string[] = ['Cliente', 'Project Manager', 'Diseñador'];

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 min-h-screen justify-items-center">
      <main className="px-10 py-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-items-center gap-10 max-w-[1400px]">
        <div className="order-2 lg:order-1 w-full h-full min-h-[470px] max-h-[570px] p-10 bg-tertiary bg-decorate bg-no-repeat bg-right-bottom bg-[length:85%_auto] md:bg-[length:45%_auto] lg:bg-[length:65%_auto] rounded-2xl overflow-hidden">
          <div className="flex flex-col gap-5 w-4/5">
            <h2 className="font-[family-name:var(--font-title)] text-2xl">{REGISTER_CONTENT.subtitle}</h2>
            <Link href={REGISTER_CONTENT.button.href} title={LOGIN_CONTENT.button.title} className="text-sm w-fit font-[family-name:var(--font-body)] hover:underline">
              {REGISTER_CONTENT.button.label}
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-5 lg:w-4/5">
          <Image src={REGISTER_CONTENT.logo.src} alt={REGISTER_CONTENT.logo.alt} width={REGISTER_CONTENT.logo.width} height={REGISTER_CONTENT.logo.height} />
          <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h1 className="font-[family-name:var(--font-title)] text-xl md:text-2xl lg:text-3xl">{REGISTER_CONTENT.title}</h1>
            <p className="font-[family-name:var(--font-body)] text-base text-gray-900">{REGISTER_CONTENT.description}</p>
          </div>
          <form className="flex flex-col gap-5">
            <Input id="emailRegister" type="email" label="Email" />
            <div className="flex flex-wrap md:flex-nowrap gap-5">
              <Input id="passwordRegister" type="password" label="Contraseña" />
              <Input id="confirmPasswordRegister" type="password" label="Confirmar contraseña" />
            </div>
            <Select id="selectRol" label="Seleccionar Rol" options={roles} />
            <Button label="Crear cuenta" style="Primary" />
            <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
              Ya tienes una cuenta, <Link href='/login' title="Ingresar a formulario de inicio de sesión" className="font-bold hover:underline">Iniciar sesión</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
