'use client';

import { InputProps } from '@types';

export function Input({ id, type, label, isRequired, parentMethod }: InputProps) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label htmlFor={id} className='font-[family-name:var(--font-body)] text-sm text-gray-900'>{label}</label>
      <input
        type={type}
        onChange={(e) => parentMethod && parentMethod(e)}
        id={id}
        required={isRequired}
        className='w-full text-gray-900 font-[family-name:var(--font-body)] text-sm border border-gray-300 p-2 rounded-md'
      />
    </div>
  );
}
