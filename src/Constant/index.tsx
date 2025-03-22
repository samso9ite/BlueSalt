import arrowUp from "@/assets/images/arrowUp.svg"
import arrowDown from "@/assets/images/arrowDown.svg"
import bugImg from "@/assets/images/bug.svg"
import newUser from "@/assets/images/newUser.svg"
import subscribed from "@/assets/images/subscribed.svg"
import avatar1 from "@/assets/images/avatar1.svg"
import avatar2 from "@/assets/images/avatar2.svg"
import avatar3 from "@/assets/images/avatar3.svg"
import avatar4 from "@/assets/images/avatar4.svg"
import avatar5 from "@/assets/images/avatar5.svg"
import avatar6 from "@/assets/images/avatar6.svg"
import avatar7 from "@/assets/images/avatar7.svg"
import bar from  "@/assets/images/bar.svg"
import bar2 from  "@/assets/images/bar2.svg"
import bar3 from  "@/assets/images/bar3.svg"

type metricsProps = {
    title:string,
    count:number,
    img:any,
    performance:string,
}

type notif_Activity_Contact_Props = {
    img:any,
    title:string,
    date?:string
}
export const metrics:metricsProps[] = [
    {
        title:"Requests",
        count:7265,
        img: arrowUp,
        performance:"+11.02%",   
    },
    {
        title:"KYC",
        count:3671,
        img: arrowDown,
        performance:"-0.03%",
    },
    {
        title:"Tasks",
        count:156,
        img: arrowUp,
        performance:"+15.03%",  
    },
    {
        title:"Customers",
        count:2318,
        img: arrowUp,
        performance:"+6.08%",
    }
]

export const notifConstant:notif_Activity_Contact_Props[] = [
    {
        img:bugImg,
        title:"You fixed a bug",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:newUser,
        title:"New user registered",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:subscribed,
        title:"Andi Lane subscribed to you.",
        date:"2025-03-20T14:39:07.795Z"
    }
]


export const activityConstant:notif_Activity_Contact_Props[] = [
    {
        img:avatar1,
        title:"Changed this style",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:avatar2,
        title:"Released a version",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:avatar3,
        title:"Submitted a bug",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:avatar4,
        title:"Modified a data in Page X",
        date:"2025-03-20T14:39:07.795Z"
    },
    {
        img:avatar3,
        title:"Deleted a page in Project X",
        date:"2025-03-20T14:39:07.795Z"
    },
]

export const contactConstant:notif_Activity_Contact_Props[] = [
    {
        img:avatar5,
        title:"Natalie Craig",
    },
    {
        img:avatar6,
        title:"Drew Cano",
    },
    {
        img:avatar7,
        title:"Andi Lane",
    },
    {
        img:avatar4,
        title:"Koray Okumus",
    },
]

export const trafficConstant = [
    {
        name:"Google",
        img: bar
    },
    {
        name:"Youtube",
        img: bar2
    },
    {
        name:"Instagram",
        img: bar3
    },
    {
        name:"Pinterest",
        img: bar
    },
  
    {
        name:"Instagram",
        img: bar3
    },
]