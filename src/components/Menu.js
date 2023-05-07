import ButtonSelection from "./ButtonSelection"
import { motion } from "framer-motion"

export default function Menu({ title, listChoices, keyWord, sendDataToPage }) {
    return (
        <>
            <motion.div className="absolute flex-row flex-wrap justify-center items-center top-11 border-black rounded-xl border-solid h-[20vh] w-[50vw] border-[0.5rem]" animate={{scale: [0, 1]}} transition={{duration: 1}}>
                <motion.h1 className="absolute top-[6vh] flex flex-row flex-wrap justify-center text-7xl w-full h-[5vh]">{title}</motion.h1>
            </motion.div>
            <div className="absolute flex flex-col flex-wrap justify-between items-center h-[25vh] top-[30vh]">
                {listChoices.map((link, index) => {
                    return <ButtonSelection key={index} href={link.href} text={link.text} keyWord={keyWord} sendDataToMenu={sendDataToPage} />
                })}
            </div>
        </>
    )
}