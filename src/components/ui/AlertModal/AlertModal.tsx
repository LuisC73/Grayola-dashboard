import { AlertModalProps } from '@types';
import { Icon } from '@components';

export function AlertModal({ type, title, description, onClose }: AlertModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div
        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 md:w-fit md:min-w-[400px] flex flex-col gap-5 rounded-md p-5 border  ${
          type === 'Error' && 'border-red-300 bg-red-100'
        } ${type === 'Success' && 'border-green-300 bg-green-100'} ${
          type === 'Warning' && 'border-yelllow-300 bg-yelllow-100'
        }`}
      >
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <div className="pt-1">
            <Icon
              name={type.toLocaleLowerCase()}
              size={20}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-body)] font-bold text-base text-gray-900">
              {title}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-gray-900">
              {description}
            </p>
          </div>
        </div>
        <button
          className={`font-[family-name:var(--font-body)] font-medium text-sm text-black ${
            type === 'Error' && 'bg-red-500 hover:bg-red-600'
          } ${type === 'Success' && 'bg-green-500 hover:bg-green-600'} ${
            type === 'Warning' && 'bg-yellow-500 hover:bg-yellow-600'
          } w-fit py-2 px-4 rounded-md self-end cursor-pointer transition ease-out delay-150`}
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
