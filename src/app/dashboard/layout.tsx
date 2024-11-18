import { SideBar } from "@/components/layout/SideBar/SideBar"
import { DASHBOARD_MENU } from "@/content"
import { UserProvider } from "@/context/UserContext"

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] md:grid-rows-1 min-h-screen">
        <SideBar {...DASHBOARD_MENU} />
        {children}
      </div>
    </UserProvider>
  )
}