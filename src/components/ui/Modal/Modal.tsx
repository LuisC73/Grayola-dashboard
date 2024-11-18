"use client";

import { ModalProps } from "@types";
import { Icon } from "@components";

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-rows-[auto_1fr] gap-5 bg-white p-5 rounded-md">
        <button onClick={onClose} className="justify-self-end">
          <Icon name="close" size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}