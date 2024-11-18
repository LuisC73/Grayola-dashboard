"use client";

import { getUserName } from "@/services/getUser";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const { name, error } = await getUserName();

      if(error) setError(error);
      if(name) setName(name);
    }

    fetchUserName();
  }, []);

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="p-5 border-b border-gray-300">
        <h1 className="font-[family-name:var(--font-title)] text-black text-base">Dashboard</h1>
        <span></span>
      </div>
      <div className="p-5 grid grid-rows-[auto_1fr]">
        <div>
          <div className="flex flex-col gap-5">
            <h2 className="font-[family-name:var(--font-title)] text-black text-base">Bienvenido {name}</h2>
            <p className="font-[family-name:var(--font-body)] text-gray-900 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi ea magni placeat molestiae impedit consectetur molestias dicta repellat sit velit at, porro qui debitis soluta voluptatem vitae esse delectus.</p>
          </div>
        </div>
        <div>
          {error}
        </div>
      </div>
    </div>
  )
}