import { AlertProps } from "@types";
import { Icon } from "@components";

export function Alert({ type, title, description }: AlertProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-md p-5 border border-red-300 bg-red-100">
      <div className="pt-1">
        <Icon name={type.toLocaleLowerCase()} size={20} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-[family-name:var(--font-body)] font-bold text-base text-gray-900">{title}</h2>
        <p className="font-[family-name:var(--font-body)] text-sm text-gray-900">{description}</p>
      </div>
    </div>
  )
}