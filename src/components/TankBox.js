import { motion } from "framer-motion"

export default function TankBox({ text, color }) {
    return (
        <motion.div className="flex flex-row flex-wrap justify-center items-center w-[5vh] h-[5vh]"
        animate = {{ backgroundColor: ["", color], opacity: [0, 100]}}
        transition={{duration: 0.5}}>
            {text}
        </motion.div>
    )
}