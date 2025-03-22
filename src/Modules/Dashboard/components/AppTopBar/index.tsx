import sun from "@/assets/images/sun.svg"
import clockwise from "@/assets/images/counterClockWise.svg"
import bell from "@/assets/images/bell.svg"
import sidebar from "@/assets/images/sidebar.svg"
import { useLocation } from "react-router-dom"

const AppTopBar = () => {
  const {pathname} = useLocation()
    const pageName = pathname.split("/")[1] || "Home"
    return(
        <>
            <div className="flex justify-between">
               <div>
                    <div className="app-top-bar__logo">
                      <h1 className="text-[25px] capitalize"> {pageName} </h1>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src={sun} width={22} />
                    <img src={clockwise} width={22}/> 
                    <img src={bell} width={22}/>
                    <img src={sidebar} width={22}/>
                </div>
            </div>
            <hr className="mt-5 mb-5"/>
        </>
    )
}

export default AppTopBar