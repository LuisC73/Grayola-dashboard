'use client';

import { supabase } from '@/lib/supabase';
import { SideBarsProps } from "@/types";
import { Icon, Button } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export function SideBar({ logo, items, button }: SideBarsProps) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      document.cookie = "supabase-auth-token=; path=/; max-age=0";
      router.push('/dashboard')
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <aside className="w-full h-full bg-custom bg-no-repeat p-5 grid grid-rows-[auto_1fr_auto] border-r border-gray-300">
      <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
      <ul className="flex flex-col gap-4 pt-10">  
        {items?.map((item, index) => (
          <li key={index}>
            <Link href={item.href} title={item.title} className="flex items-center gap-2 p-2 font-[family-name:var(--font-body)] text-sm text-gray-900">
              <Icon {...item.icon} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button {...button} parentMethod={handleLogout} />
    </aside>
  )
}