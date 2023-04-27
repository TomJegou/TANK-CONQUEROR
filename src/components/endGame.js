import { motion } from "framer-motion"

export default function EndGame({ acclamation, winner, isGameOver }){
    return (
        <motion.div className="flex flew-row flex-wrap justify-center items-center bg-slate-500 w-[70vw] h-[70vh]">
            <h1 className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">{acclamation}</h1>
            <p className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">{winner}</p>
        </motion.div>
    )
}