"use client";

import { ModalProps } from "@types";
import { Icon } from "@components";

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 rounded-2xl">
        <div>
          <button onClick={onClose}>
            <Icon name="close" size={32} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}