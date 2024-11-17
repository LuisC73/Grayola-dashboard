"use client";

import { Button, Modal } from "@/components";
import { useState } from "react";

export default function ProjectsPage() {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsModalActive(false);
  };

  const handleModalOpen = () => {
    setIsModalActive(true);
  }

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300 grid grid-rows-1 grid-cols-[1fr_200px] items-center">
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">Proyectos</h1>
        <Button label="Crear proyecto" style="Primary" parentMethod={handleModalOpen} />
      </div>
      <div className="p-5 grid grid-rows-[auto_1fr]">
        <div>
          <div className="flex flex-col gap-5">
            <h2 className="font-[family-name:var(--font-title)] text-black text-base">Bienvenido</h2>
            <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi ea magni placeat molestiae impedit consectetur molestias dicta repellat sit velit at, porro qui debitis soluta voluptatem vitae esse delectus.</p>
          </div>
        </div>
        <div></div>
      </div>
      {isModalActive && (
        <Modal onClose={handleModalClose}>
          Prueba
        </Modal>
      )}
    </div>
  )
}