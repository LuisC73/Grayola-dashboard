'use client';

import { SelectProps } from '@types';

export function Select({
  id,
  label,
  initialValue,
  options,
  isRequired,
  parentMethod,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-body)] text-sm text-gray-900"
      >
        {label}
      </label>
      <select
        id={id}
        onChange={(e) => parentMethod && parentMethod(e)}
        defaultValue={initialValue}
        required={isRequired}
        className="text-gray-900 font-[family-name:var(--font-body)] text-sm bg-gray-100 border border-gray-300 p-2 rounded-md"
      >
        {options?.map((option, index) => (
          <option
            key={index}
            value={option.id}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
