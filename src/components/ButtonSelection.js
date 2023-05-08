import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

export default function ButtonSelection ({ href, text, keyWord, sendDataToMenu, textColor }) {
    const [scope, animate] = useAnimate()
    const [isLoad, setIsLoad] = useState(false)

    const handleClick = () => {
        document.cookie = `${keyWord}=${text}`
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
        <motion.div onClick={handleClick} className="flex flex-col flex-wrap bg-green-military -skew-x-12 rounded-xl shadow-[12px_12px_2px_1px] shadow-black p-4" whileHover={handleHoover} onHoverStart={handleHooverStart} onHoverEnd={handleHooverEnd}>
            <Link 
                className="flex flex-row flex-wrap justify-center items-center h-11 text-4xl"
                href={href}
                style={{color: textColor}}>{text}</Link>
            <motion.div 
                ref={scope}
                className="h-[0.2vh] rounded-sm"
                animate={{scale: isLoad ? 1 : 0}}
                transition={{duration: .5, type: "spring", damping: 10}} 
                style={{backgroundColor: textColor}}/>
        </motion.div>
    )
}
