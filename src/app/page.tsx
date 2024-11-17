import { HEADER_CONTENT, HOME_CONTENT } from "@/content";
import { ButtonLink, Header, IconLink } from "@components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-1fr min-h-screen">
      <Header {...HEADER_CONTENT} />
      <main className="bg-custom bg-no-repeat bg-center bg-cover pt-20 lg:pt-40 p-10 grid items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-20 lg:gap-5 max-w-[1440px]">
          <div className="flex flex-col items-center md:items-start gap-20">
            <div className="flex items-center md:items-start flex-col gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-[family-name:var(--font-title)] text-black">{HOME_CONTENT.title}</h1>
              <p className="text-base leading-relaxed text-center md:text-left font-[family-name:var(--font-body)] text-gray-900">{HOME_CONTENT.description}</p>
              <ButtonLink {...HOME_CONTENT.button} />
            </div>
            <div className="flex items-center gap-5">
              {HOME_CONTENT.socialMedia.map((item, index) => (
                <IconLink key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex items-start justify-center">
            <Image {...HOME_CONTENT.image} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
