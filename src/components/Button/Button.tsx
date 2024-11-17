'use client';

import { ButtonProps } from '@types';
import { Icon } from '@components';

export function Button({ icon, label, ariaLabel, parentMethod, style }: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={parentMethod}
      className={`text-sm w-full flex items-center justify-center gap-2 py-3 px-5 font-[family-name:var(--font-body)] rounded-2xl border border-black transition ease-out delay-150 cursor-pointer ${
        style === 'Primary'
          ? 'bg-primary hover:bg-secondary shadow-button'
          : 'bg-transparent border-transparent hover:underline'
      }`}
    >
      {icon && (
        <Icon {...icon} />
      )}
      {label}
    </button>
  );
}
