import { HeaderProps } from "@types";
import { ButtonLink } from "@components";
import Image from "next/image";

export function Header({ logo, buttons }: HeaderProps) {
  return (
    <header className="w-screen h-fit px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-5 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-900">
      <Image src={logo.src}  alt={logo.alt} width={logo.width} height={logo.height} />
      {buttons && buttons?.length >= 0 && (
        <div className="w-full flex gap-5 flex-wrap items-center justify-center md:justify-end">
          {buttons.map((button, index) => (
            <ButtonLink key={index} {...button} />
          ))}
        </div>
      )}
    </header>
  )
}