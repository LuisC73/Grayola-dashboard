import { ButtonLinkProps } from '@types';
import Link from 'next/link';

export function ButtonLink({ label, href, title, style }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      title={title}
      className={`text-sm w-fit py-3 px-5 font-[family-name:var(--font-body)] rounded-2xl border border-black transition ease-out delay-150 ${
        style === 'Primary'
          ? 'bg-primary hover:bg-secondary shadow-button'
          : 'bg-transparent border-transparent hover:underline'
      }`}
    >
      {label}
    </Link>
  );
}
