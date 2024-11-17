import { SideBar } from "@/components/SideBar/SideBar"
import { DASHBOARD_MENU } from "@/content"

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[280px_1fr] md:grid-rows-1 min-h-screen">
      <SideBar {...DASHBOARD_MENU} />
      {children}
    </div>
  )
}