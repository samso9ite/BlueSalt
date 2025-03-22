import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { SIDENAVS } from "@/Constant/sideNav";
import logo from "@/assets/images/logo.svg"
import profileImg from "@/assets/images/profileImg.svg"

const AppSideBar = () => {
    return(
        <Sidebar className="w-60">
        <SidebarContent className="bg-white ">
          <SidebarGroup>
            <SidebarGroupLabel><img src={logo} /></SidebarGroupLabel>
            <SidebarGroupContent className="px-5 py-10">
              <SidebarMenu>
                {SIDENAVS.map((item) => (
                  <SidebarMenuItem key={item.name} className="py-2">
                    <SidebarMenuButton asChild>
                      <a href={item.path}>
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem className="py-20">
                    <span className="flex gap-3">
                        <img src={profileImg} /> Bye Wind
                    </span>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
}

export default AppSideBar;