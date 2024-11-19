import Image from 'next/image';

export function Loading() {
  return (
    <div
      role="status"
      className="flex flex-col gap-5 items-center justify-center"
    >
      <Image
        src="/images/logo-variant.svg"
        alt="Logo de Grayola"
        width={140}
        height={120}
      />
      <span className="font-[family-name:var(--font-body)] text-black">Cargando...</span>
    </div>
  );
}
