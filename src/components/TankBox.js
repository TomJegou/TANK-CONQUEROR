import { motion } from "framer-motion"

export default function TankBox ({ text, color }) {
    return (
        <motion.div className="flex flex-row flex-wrap justify-center items-center w-[5vh] h-[5vh] border-[1.5px] border-black cursor-pointer"
            animate = {{backgroundColor: ["#FFFFFF00", color], opacity: [0, 100]}}
            transition={{duration: 0.75}}
            whileHover={{backgroundColor: "#FFFFFF"}}>
                <h1 className="flex flex-row flex-wrap justify-center items-center font-bold text-4xl text-white">
                    {text}
                </h1>
        </motion.div>
    )
}