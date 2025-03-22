import { FC } from "react";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { activityConstant, contactConstant, notifConstant } from "@/Constant";
import moment from "moment"

const AsideBar:FC = ()  => {
    return(
        <div>
        <Card className="bg-[#FFF8F8] gap-5 shadow-none  border-none">
            <CardContent className="pt-5">
                <p className="text-[15px] font-extralight mb-1  transition-transform duration-300 hover:translate-x-2">Notifications</p>
                {notifConstant.map((item) => (
                   <div className="flex items-center gap-3 space-y-4 duration-300  font-extralight hover:translate-x-1
                    hover:bg-[#f3ecec] hover:rounded-lg hover:font-normal">
                   <img src={item.img} className="h-6 rounded bg-[#f3ecec] p-[4px]" />
                   
                   <div className="transition-transform duration-300">
                     <p className="transition-all duration-300 ">
                       {item.title}
                     </p>
                     <p className=" text-[#1C1C1C66] px-2 py-1 ">
                       {moment(item.date, "YYYYMMDD").fromNow()}
                     </p>
                   </div>
                 </div>
                 
                ))}
                <p className="text-[15px] font-extralight mt-[20px]  transition-transform duration-300 hover:translate-x-2">Activities</p>
                {activityConstant.map((item) => (
                    <div className="flex space-y-4 items-center gap-3 font-extralight duration-300 
                        hover:translate-x-1 hover:bg-[#f3ecec] hover:rounded-lg hover:font-medium">
                        <img src={item.img} className="rounded-full h-8"/>
                        <div>
                            <p className="font-extralight">{item.title}</p>
                            <p className="font-extralight text-[#1C1C1C66]">{moment(item.date, "YYYYMMDD").fromNow()}</p>
                        </div>
                    </div>
                ))}
                 <p className="text-[15px] font-extralight mt-[20px]  transition-transform duration-300 hover:translate-x-2">Contacts</p>
                 <div className="space-y-5">
                 {contactConstant.map((item) => (
                    <div key={item.title} className="flex items-center gap-3 mt-5 
                        font-extralight duration-300  hover:translate-x-1 hover:bg-[#f3ecec] 
                        hover:rounded-lg hover:font-medium">
                        <img src={item.img}  className="rounded-full  h-8" alt={item.title} />
                        <p className="font-extralight">{item.title}</p>
                    </div>
                    ))
                }
            </div>
            </CardContent>
        </Card>
    </div>
    )
}

export default AsideBar