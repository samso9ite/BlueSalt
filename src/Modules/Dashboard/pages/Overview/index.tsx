
import {trafficConstant } from "@/Constant"
import UserAnalytics from "../../components/Analytics/users"
import { Dot } from "lucide-react"
import GeneratedReports from "../../components/Analytics/generatedReports"
import TrafficAnalytics from "../../components/Analytics/traffic"
import MarketingReports from "../../components/Analytics/marketing"
import Metrics from "../../components/Analytics/metrics"
import AsideBar from "../../components/AsideBar"


const Overview = () => {
    return(
        <>
        <div className="col-lg-12 gap-3 flex mt-3">
            <div className="col-lg-8">
           <Metrics />
            <div className="flex mt-5 gap-5">
                <div className="bg-[#F7F9FB] rounded-lg p-3 w-[40rem]">
                    <div className="flex gap-5">
                        <h3 className="font-medium">Total Users</h3>
                        <p className="text-[#1C1C1C66] font-normal">Total Projects</p>
                        <p className="text-[#1C1C1C66] font-normal">Operating Systems</p>
                        <span className="text-[14px] font-extralight flex items-center"> 
                                <Dot size={30} className="text-[black] hover:text-[#A8C5DA]"/>This year
                        </span>
                        <span className="text-[14px] font-extralight flex items-center">
                            <Dot size={30} className="text-[#A8C5DA] hover:text-[black]"/> Last year
                        </span>
                    </div>
                    <UserAnalytics />
                </div>
                <div className="col-lg-2 bg-[#F7F9FB] rounded-lg p-3 w-full">
                     <h3 className="font-medium">Traffic by Website</h3>
                     <div className="space-y-3 mt-5">
                     {
                        trafficConstant.map((item) => (
                            <div className="justify-between flex items-center">
                                <p className="font-extralight text-[14px]">{item.name}</p>
                                <img src={item.img} />
                            </div>
                        ))
                     }
                     </div>
                </div>
            </div>
            <div className="flex mt-3 gap-4">
                <div className="bg-[#F7F9FB] rounded-lg p-3">
                    <h3 className="font-medium">Reports Generated</h3>
                    <GeneratedReports />
                </div>
                <div className="bg-[#F7F9FB] rounded-lg w-full p-3">
                    <h3 className="font-medium">Traffic Analytics</h3>
                    <TrafficAnalytics />
                </div>
            </div>
            <div className="bg-[#F7F9FB] rounded-lg p-3 mt-4">
                <h3 className="font-medium">Marketing & SEO</h3>
                <MarketingReports />
            </div>
            </div>
            
        <div className="flex col-lg-4 gap-2 ">
           <AsideBar />
        </div>
        </div>
        </>
    )
}

export default Overview