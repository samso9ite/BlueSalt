import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSideBar from "@/Modules/Dashboard/components/AppSideBar"
import AppTopBar from "@/Modules/Dashboard/components/AppTopBar"
import React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return(
        <SidebarProvider>
      
        <AppSideBar  />
        <main className="w-full lg:pl-10 p-4 content">
        <div className="background-effect"></div>

           <SidebarTrigger className="md:hidden" />
           <AppTopBar />
            {children}
            
        </main>
        <div className="background-effect2"></div>

    </SidebarProvider>
    )
}
