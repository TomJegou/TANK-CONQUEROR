import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { getCookie } from "@/utils/tools"
import tankGreen from "@/../public/skinTanks/tankGreen.png"
import tankBlue from "@/../public/skinTanks/tankBlue.png"
import tankBrown from "@/../public/skinTanks/tankBrown.png"
import SkinTank from "./skinTank"

export default function TankBox ({ text, color, side, touched }) {
    const [colorDiv, setColorDiv] = useState(color)
    const [srcTank, setSrcTank] = useState(tankGreen)
    useEffect(()=>{
        if(typeof document != "undefined") {
            switch (getCookie("tankColor")) {
                case "Blue":
                    setSrcTank(tankBlue)
                    setColorDiv("#FFFFFF00")
                    break
                case "Green":
                    setSrcTank(tankGreen)
                    setColorDiv("#FFFFFF00")
                    break;
                case "Brown":
                    setSrcTank(tankBrown)
                    setColorDiv("#FFFFFF00")
                    break
            }
        }
    }, [typeof document])

    return (
        <motion.div 
            className="flex flex-row flex-wrap justify-center items-center w-[5vh] h-[5vh] border-[1.5px] border-black cursor-pointer"
            animate = {{backgroundColor: ["#FFFFFF00", colorDiv], opacity: [0, 100]}}
            transition={{duration: 0.75}}
            whileHover={{backgroundColor: "#FFFFFF"}}>
                <SkinTank srcTank={srcTank} side={side} touched={touched} />
                <h1 className="flex flex-row flex-wrap justify-center items-center font-bold text-4xl text-white">{text}</h1>
        </motion.div>
    )
}