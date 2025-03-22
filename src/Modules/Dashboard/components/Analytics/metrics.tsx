import { metrics } from "@/Constant"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import AnimatedNumbers from "react-animated-numbers"

const Metrics = () => {
    return(
        <div className="flex gap-4">
        {metrics.map((item, index) => (
            <Card className={`col-lg-3 ${index%2 ? "bg-[#E5ECF6]" : "bg-[#E3F5FF]"} shadow-none border-none` }>
            <CardContent className="p-5 px-8">
                <p className="text-[14px] font-light transition-transform duration-300 hover:translate-x-2">{item.title}</p>
                <div
                    className="flex mx-auto mt-3 gap-5 p-0 justify-center transition-all duration-300 hover:scale-105"
                    >
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                        })}
                        animateToNumber={ item.count }
                        fontStyle={{
                        fontSize: 30,
                        color: "black",
                        }}
                    />
                    <span className="flex items-center gap-1 text-[13px] font-thin">
                        <p>{item.performance}</p>
                        <img src={item.img} width={15} className="transition-opacity duration-300 hover:opacity-80" />
                    </span>
                    </div>
            </CardContent>
            
        </Card>
        )) }
    </div>
    )
}

export default Metrics