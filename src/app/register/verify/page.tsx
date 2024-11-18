import { VERIFY_CONTENT } from '@/content';

export default function VerifyPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-[family-name:var(--font-title)] text-xl md:text-2xl lg:text-3xl">
        {VERIFY_CONTENT.title}
      </h1>
      <p className="font-[family-name:var(--font-body)] text-base text-gray-900">
        {VERIFY_CONTENT.description}
      </p>
    </div>
  );
}
