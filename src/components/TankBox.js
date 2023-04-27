import { motion } from "framer-motion"

export default function TankBox({ text, color }) {
    return (
        <motion.div className=""
        animate = {{ backgroundColor: ["", color], opacity: [0, 100]}}
        transition={{duration: 1}}>
            {text}
        </motion.div>
    )
}