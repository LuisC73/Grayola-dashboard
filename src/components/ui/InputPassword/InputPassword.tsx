'use client';

import { InputProps } from '@types';
import { Icon } from '@components';
import { useState } from 'react';

export function InputPassword(props: Omit<InputProps, 'type'>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={props.id}
        className="font-[family-name:var(--font-body)] text-sm text-gray-900"
      >
        {props.label}
      </label>
      <div className="relative grid grid-cols-[1fr_auto]">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id={props.id}
          required={props.isRequired}
          defaultValue={props.initialValue ?? ''}
          onChange={(e) => props.parentMethod && props.parentMethod(e)}
          className="w-full text-gray-900 font-[family-name:var(--font-body)] text-sm border border-gray-300 p-2 rounded-md"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer z-0"
          onClick={togglePasswordVisibility}
        >
          <Icon
            name={isPasswordVisible ? 'show' : 'hide'}
            size={21}
            color="#9ca3af"
          />
        </div>
      </div>
    </div>
  );
}
