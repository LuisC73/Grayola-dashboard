'use client';

import { InputProps } from '@types';

export function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={props.id}
        className="font-[family-name:var(--font-body)] text-sm text-gray-900"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        required={props.isRequired}
        defaultValue={props.initialValue ?? ''}
        onChange={(e) => props.parentMethod && props.parentMethod(e)}
        className="w-full text-gray-900 font-[family-name:var(--font-body)] text-sm border border-gray-300 p-2 rounded-md"
      />
    </div>
  );
}
