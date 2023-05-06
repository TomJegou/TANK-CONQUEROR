import Link from "next/link";
import { setMapWorld, setIADifficulty, setMode } from "@/utils/gameSetup";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

export default function ButtonSelection({ href, text, keyWord }) {
    const [scope, animate] = useAnimate()
    const [isLoad, setIsLoad] = useState(false)

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
        setIsLoad(true)
    }

    const handleHooverStart = () => {
        animate(scope.current, {scale: 1.5})
    }

    const handleHooverEnd = () => {
        animate(scope.current, {scale: 0})
    }

    return (
        <motion.div onClick={handleClick} className="flex flex-col flex-wrap" whileHover={handleHoover} onHoverStart={handleHooverStart} onHoverEnd={handleHooverEnd}>
            <Link className="flex flex-row flex-wrap justify-center items-center h-11" href={href}>{text}</Link>
            <div ref={scope} className="bg-black h-[0.1vh] rounded-sm" style={{opacity: isLoad ? 1 : 0}} />
        </motion.div>
    )
}