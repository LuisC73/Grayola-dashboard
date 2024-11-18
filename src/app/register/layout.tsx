import { LOGIN_CONTENT, REGISTER_CONTENT } from '@/content';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 min-h-screen justify-items-center overflow-hidden">
      <main className="px-5 md:px-10 py-5 grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-items-center gap-10 max-w-[1400px]">
        <div className="order-2 lg:order-1 w-full h-full min-h-[470px] max-h-[600px] p-5 lg:p-10 bg-tertiary bg-decorate bg-no-repeat bg-right-bottom bg-[length:85%_auto] md:bg-[length:45%_auto] lg:bg-[length:65%_auto] rounded-md overflow-hidden">
          <div className="flex flex-col gap-5 w-4/5">
            <h2 className="font-[family-name:var(--font-title)] text-2xl">
              {REGISTER_CONTENT.subtitle}
            </h2>
            <Link
              href={REGISTER_CONTENT.button.href}
              title={LOGIN_CONTENT.button.title}
              className="text-sm w-fit font-[family-name:var(--font-body)] hover:underline"
            >
              {REGISTER_CONTENT.button.label}
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-5 lg:w-4/5">
          <Image
            src={REGISTER_CONTENT.logo.src}
            alt={REGISTER_CONTENT.logo.alt}
            width={REGISTER_CONTENT.logo.width}
            height={REGISTER_CONTENT.logo.height}
          />
          {children}
        </div>
      </main>
    </div>
  );
}
