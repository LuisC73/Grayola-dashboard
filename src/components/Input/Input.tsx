import { InputProps } from '@types';

export function Input({ id, type, label, parentMethod }: InputProps) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label htmlFor={id} className='font-[family-name:var(--font-body)] text-sm text-gray-900'>{label}</label>
      <input
        type={type}
        onInput={parentMethod}
        id={id}
        className='w-full text-gray-900 font-[family-name:var(--font-body)] text-sm border border-gray-300 p-2 rounded-2xl'
      />
    </div>
  );
}
