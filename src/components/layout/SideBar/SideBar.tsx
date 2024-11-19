'use client';

import { supabase } from '@/lib/supabase';
import { SideBarsProps } from "@/types";
import { deleteSession } from '@/utils/session';
import { Icon, Button } from "@components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export function SideBar({ logo, items, button }: SideBarsProps) {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      await deleteSession()
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
    <aside className="fixed max-h-screen w-full md:w-[200px] lg:w-[240px] h-fit md:h-full bg-custom bg-no-repeat border-r border-gray-300">
      <div className='hidden w-full h-full p-5 md:grid grid-rows-[auto_1fr_auto] bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <Link href='/' title='Volver al inicio'>
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </Link>
        <ul className="flex flex-col gap-4 pt-10">  
          {items?.map((item, index) => (
            <li key={index}>
              <Link href={item.href} title={item.title} className={`flex items-center gap-2 py-3 px-4 font-[family-name:var(--font-body)] text-sm text-black rounded-md hover:bg-tertiary/50 transition ease-out delay-150 ${pathname === item.href ? 'bg-tertiary/30' : 'bg-transparent'}`}>
                <Icon {...item.icon} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button {...button} parentMethod={handleLogout} />
      </div>
      <div className='flex md:hidden items-center justify-between p-5 border-b border-gray-300 bg-custom bg-no-repeat bg-cover bg-center'>
        <Link href='/' title='Volver al inicio'>
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </Link>
        <button className='cursor-pointer' onClick={handleActiveMenu}>
          <Icon name='menu' size={32} />
        </button>
      </div>
      <div className={`w-4/5 h-screen absolute right-0 top-0 p-5 grid-rows-[auto_1fr] bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-l border-gray-300 transition delay-150 ease-in grid md:hidden ${isMenuActive ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='cursor-pointer justify-self-end' onClick={handleActiveMenu}>
          <Icon name='close' size={32} />
        </button>
        <div className='flex flex-col gap-5'>
          <ul className="flex flex-col gap-4 pt-10">  
            {items?.map((item, index) => (
              <li key={index}>
                <Link href={item.href} title={item.title} className={`flex items-center gap-2 py-3 px-4 font-[family-name:var(--font-body)] text-sm text-black rounded-md hover:bg-tertiary/80 transition ease-in delay-150 ${pathname === item.href ? 'bg-tertiary/50' : 'bg-transparent'}`}>
                  <Icon {...item.icon} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button {...button} parentMethod={handleLogout} />
        </div>
      </div>
    </aside>
  )
}