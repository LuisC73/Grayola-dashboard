'use client';

import { TextAreaProps } from '@types';

export function TextArea(props: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={props.id}
        className="font-[family-name:var(--font-body)] text-sm text-gray-900"
      >
        {props.label}
      </label>
      <textarea
        name={props.id}
        defaultValue={props.initialValue ?? ''}
        onChange={(e) => props.parentMethod && props.parentMethod(e)}
        id={props.id}
        required={props.isRequired}
        className="w-full min-h-[180px] text-gray-900 font-[family-name:var(--font-body)] text-sm border border-gray-300 p-2 rounded-md resize-y"
      />
    </div>
  );
}
