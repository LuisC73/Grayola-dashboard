import { LOGIN_CONTENT } from "@/content";
import { Button, Input } from "@components";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 min-h-screen justify-items-center">
      <main className="px-10 py-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-items-center gap-10 max-w-[1400px]">
        <div className="flex flex-col gap-5 lg:w-4/5">
          <Image src={LOGIN_CONTENT.logo.src} alt={LOGIN_CONTENT.logo.alt} width={LOGIN_CONTENT.logo.width} height={LOGIN_CONTENT.logo.height} />
          <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h1 className="font-[family-name:var(--font-title)] text-xl md:text-2xl lg:text-3xl">{LOGIN_CONTENT.title}</h1>
            <p className="font-[family-name:var(--font-body)] text-base text-gray-900">{LOGIN_CONTENT.description}</p>
          </div>
          <form className="flex flex-col gap-5">
            <Input id="emailLogin" type="email" label="Email" />
            <Input id="passwordLogin" type="password" label="Contraseña" />
            <Button label="Ingresar" style="Primary" />
            <p className="font-[family-name:var(--font-body)] text-sm text-gray-900 text-center">
              No tienes una cuenta, <Link href='/register' title="Ingresar a formulario de registro" className="font-bold hover:underline">registrarse</Link>
            </p>
          </form>
        </div>
        <div className="w-full h-full min-h-[470px] max-h-[570px] p-10 bg-tertiary bg-decorate bg-no-repeat bg-right-bottom  bg-[length:85%_auto] md:bg-[length:45%_auto] lg:bg-[length:65%_auto] rounded-2xl overflow-hidden">
          <div className="flex flex-col gap-5 w-4/5">
            <h2 className="font-[family-name:var(--font-title)] text-2xl">{LOGIN_CONTENT.subtitle}</h2>
            <Link href={LOGIN_CONTENT.button.href} title={LOGIN_CONTENT.button.title} className="text-sm w-fit font-[family-name:var(--font-body)] hover:underline">
              {LOGIN_CONTENT.button.label}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
