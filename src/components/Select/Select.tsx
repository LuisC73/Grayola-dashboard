import { SelectProps } from "@types";

export function Select({ id, label, options, parentMethod }: SelectProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='font-[family-name:var(--font-body)] text-sm text-gray-900'>{label}</label>
      <select id={id} onSelect={parentMethod} className='text-gray-900 font-[family-name:var(--font-body)] text-sm bg-gray-100 border border-gray-300 p-2 rounded-2xl'>
        {options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}