'use client';

import { supabase } from '@/lib/supabase';
import { SideBarsProps } from "@/types";
import { Icon, Button } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export function SideBar({ logo, items, button }: SideBarsProps) {
  const router = useRouter()
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

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

  const handleActiveMenu = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <aside className="relative w-full h-fit md:h-full bg-custom bg-no-repeat border-r border-gray-300">
      <div className='hidden w-full h-full p-5 md:grid grid-rows-[auto_1fr_auto] bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
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
      </div>
      <div className='flex md:hidden items-center justify-between p-5 border-b border-gray-300'>
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        <button className='cursor-pointer' onClick={handleActiveMenu}>
          <Icon name='menu' size={32} />
        </button>
      </div>
      <div className={`w-4/5 h-screen absolute right-0 top-0 p-5 grid-rows-[auto_1fr] bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-l border-gray-300 ${isMenuActive ? 'grid' : 'hidden'}`}>
        <button className='cursor-pointer justify-self-end' onClick={handleActiveMenu}>
          <Icon name='close' size={32} />
        </button>
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
      </div>
    </aside>
  )
}