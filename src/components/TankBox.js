import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { getCookie } from "@/utils/tools"
import tankGreen from "@/../public/skinTanks/tankGreen.png"
import tankBlue from "@/../public/skinTanks/tankBlue.png"
import tankBrown from "@/../public/skinTanks/tankBrown.png"
import Image from "next/image"

export default function TankBox ({ color, side, isTouched }) {
    const [op] = useState(side == "enemy" ? 0 : 1)
    const [srcTank, setSrcTank] = useState()
    useEffect(()=>{
        if (typeof document != "undefined") {
            switch (getCookie("tankColor")) {
                case "Blue":
                    setSrcTank(tankBlue)
                    break
                case "Green":
                    setSrcTank(tankGreen)
                    break;
                case "Brown":
                    setSrcTank(tankBrown)
                    break
            }
        }
    }, [typeof document])

    return (
        <motion.div 
            className="flex flex-row flex-wrap justify-center items-center w-[5vh] h-[5vh] border-[1.5px] border-black cursor-pointer"
            animate = {{backgroundColor: ["#FFFFFF00", color], opacity: [0, 100]}}
            transition={{duration: 0.75}}
            whileHover={{backgroundColor: "#FFFFFF"}}>
                {side == "enemy" ? <></> : <Image src={srcTank} alt="" /> }
                <h1 className="flex flex-row flex-wrap justify-center items-center font-bold text-4xl text-white"></h1>
        </motion.div>
    )
}