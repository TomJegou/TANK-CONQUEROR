import ButtonSelection from "./ButtonSelection"
import { motion } from "framer-motion"

export default function Menu({ title, listChoices, keyWord, sendDataToPage, textColor }) {
    return (
        <>
            <motion.h1
                animate={{scale: [0, 1]}}
                transition={{duration: 1}}
                className="absolute top-[6vh] flex flex-row flex-wrap justify-center items-center text-7xl w-[80vw] h-[15vh] border-solid border-[0.5rem] rounded-xl"
                style={{color: textColor, borderColor: textColor}}>
                    {title}
            </motion.h1>
            <div className="absolute flex flex-col flex-wrap justify-between items-center h-[25vh] top-[30vh]">
                {listChoices.map((link, index) => {
                    return <ButtonSelection key={index} href={link.href} text={link.text} keyWord={keyWord} sendDataToMenu={sendDataToPage} textColor={textColor} />
                })}
            </div>
        </>
    )
}