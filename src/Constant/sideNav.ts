import {Element3, 
    Timer, 
    SearchStatus,
    MobileProgramming,
    Task,
    Link,
    User,
    SecurityUser,
    Setting2,
    Security
} from  "iconsax-react";

type Props = {
    name: string;
    path: string;
    icon?: any;
    dropdown: boolean;
    children?: {
      name: string;
      path: string;
    }[]; 
  };
  
  export const SIDENAVS: Props[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: Element3,
      dropdown: false,
    },
    {
        name: "Requests",
        path: "/requests",
        icon: Timer,
        dropdown: false,
    },
    {
        name: "KYC",
        path: "kyc",
        icon: SearchStatus,
        dropdown: false,
    },
    {
        name: "Reports",
        path: "reports",
        icon: MobileProgramming,
        dropdown: false,
    },
    {
        name: "Task",
        path: "task",
        icon: Task,
        dropdown: false,
    },
    {
        name: "Audit Trail",
        path: "audit",
        icon: Link,
        dropdown: false,
    },
    {
        name: "Customers",
        path: "customers",
        icon: User,
        dropdown: false,
    },
    {
        name: "Users",
        path: "users",
        icon: SecurityUser,
        dropdown: false,
    },
    {
        name: "Settings",
        path: "settings",
        icon: Setting2,
        dropdown: false,
    },
    {
        name: "Administration",
        path: "administration",
        icon: Security,
        dropdown: false,
    },
]