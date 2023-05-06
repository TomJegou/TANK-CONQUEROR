import Link from "next/link";
import { setMapWorld, setIADifficulty, setMode } from "@/utils/gameSetup";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ButtonSelection({ href, text, keyWord }) {
    const [isHoover, setIsHoover] = useState(false)

    const handleClick = () => {
        switch (keyWord){
            case "mapWorld":
                setMapWorld(text)
                break
            case "mode":
                setMode(text)
                break
            case "iaDifficulty":
                setIADifficulty(text)
                break
        }
    }

    const handleHoover = () => {
        setIsHoover(true)
    }

    return (
        <motion.div onClick={handleClick} className="flex flex-col flex-wrap" whileHover={handleHoover}>
            <Link className="flex flex-row flex-wrap justify-center items-center h-11" href={href}>{text}</Link>
            <motion.div 
            className="bg-black h-1 rounded-sm"
            animate={{scaleX: isHoover ? [2, 1] : null}}/>
        </motion.div>
    )
}