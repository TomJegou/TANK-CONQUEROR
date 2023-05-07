import ButtonSelection from "./ButtonSelection"
import { motion } from "framer-motion"

export default function Menu({ title, listChoices, keyWord }) {
    return (
        <>
            <motion.div className="absolute flex-row flex-wrap justify-center items-center top-11 border-black rounded-xl border-solid h-[10vh] w-[30vw] border-[0.5rem]" animate={{scale: [0, 1]}} transition={{duration: 1}}>
                <motion.h1 className="absolute top-[2.5vh] flex flex-row flex-wrap justify-center text-4xl w-full h-[5vh]">{title}</motion.h1>
            </motion.div>
            <div className="absolute flex flex-col flex-wrap justify-center items-center h-[15vh] top-52">
                {listChoices.map((link, index) => {
                    return <ButtonSelection key={index} href={link.href} text={link.text} keyWord={keyWord}/>
                })}
            </div>
        </>
    )
}