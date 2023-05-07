import Link from "next/link";
import { setMapWorld, setIADifficulty, setMode } from "@/utils/gameSetup";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

export default function ButtonSelection({ href, text, keyWord, sendDataToMenu }) {
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
        sendDataToMenu(text)
    }

    const handleHooverStart = () => {
        animate(scope.current, {scale: 1}, {type: "spring", damping: 10})
    }

    const handleHooverEnd = () => {
        animate(scope.current, {scale: 0}, {type: "spring", damping: 10})
    }

    return (
        <motion.div onClick={handleClick} className="flex flex-col flex-wrap" whileHover={handleHoover} onHoverStart={handleHooverStart} onHoverEnd={handleHooverEnd}>
            <Link className="flex flex-row flex-wrap justify-center items-center h-11" href={href}>{text}</Link>
            <motion.div ref={scope} className="bg-black h-[0.2vh] rounded-sm" animate={{scale: isLoad ? 1 : 0}} transition={{duration: .5, type: "spring", damping: 10}} />
        </motion.div>
    )
}