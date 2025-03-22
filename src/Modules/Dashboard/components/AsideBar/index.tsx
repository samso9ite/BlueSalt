import { FC } from "react";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { asideConstant } from "@/Constant";
import moment from "moment"

const AsideBar:FC = ()  => {
    return(
        <div>
            {asideConstant.map((asideItem) => 
            <Card className="bg-[#FFF8F8] gap-5 shadow-none  border-none">
                <CardContent className="pt-5">
                    <p className="text-[15px] font-extralight mb-1  
                        transition-transform duration-300 hover:translate-x-2">{asideItem.sectionName}</p>
                    {asideItem.items.map((item) => (
                    <div className="flex items-center gap-3 space-y-5 duration-300 font-extralight hover:translate-x-1
                        hover:bg-[#f3ecec] hover:rounded-lg hover:font-normal">
                        <img
                            src={item.img}
                            className={`p-[4px] ${asideItem.sectionName == "Notifications" 
                                ? "rounded-lg bg-[#f3ecec] h-6"
                                :  "rounded-full h-10" }`}
                        />
                        <div className="transition-transform duration-300">
                           {item.title && <p className="transition-all duration-300 ">
                            {item.title}
                            </p>}
                            {item.date ? <p className=" text-[#1C1C1C66] px-2 py-1 ">
                            {moment(item.date, "YYYYMMDD").fromNow()}
                            </p> :  <p className="invisible px-1 ">Placeholder</p>}
                        </div>
                    </div>
                    
                    ))}
                </CardContent>
            </Card>
            ) }
        </div>
    )
}

export default AsideBar