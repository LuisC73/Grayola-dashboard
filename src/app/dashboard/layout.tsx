import { SideBar } from "@components"
import { DASHBOARD_MENU } from "@/content"
import { UserProvider } from "@/context/UserContext"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grayola - Dashboard",
  description: "Dashboard de proyectos",
};

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] md:grid-rows-1 min-h-screen overflow-hidden">
        <SideBar {...DASHBOARD_MENU} />
        <div className="w-full min-h-screen h-full pt-[73px] md:pt-0 md:col-start-2">
          {children}
        </div>
      </div>
    </UserProvider>
  )
}