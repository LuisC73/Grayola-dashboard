import { HEADER_CONTENT, HOME_CONTENT } from "@/content";
import { ButtonLink, Header } from "@components";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] min-h-screen">
      <Header {...HEADER_CONTENT} />
      <main className="bg-custom bg-no-repeat bg-center bg-cover p-10 grid items-center">
        <div className="flex items-center md:items-start flex-col gap-5">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-[family-name:var(--font-title)] text-black">{HOME_CONTENT.title}</h1>
          <p className="text-base text-center md:text-left font-[family-name:var(--font-body)] text-gray-900">{HOME_CONTENT.description}</p>
          <ButtonLink {...HOME_CONTENT.button} />
        </div>
      </main>
    </div>
  );
}
