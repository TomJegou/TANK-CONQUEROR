import { motion } from "framer-motion"

export default function EndGame({ acclamation, winner, isGameOver }){
    return (
        <motion.div 
        className="flex flew-row flex-wrap justify-center items-center bg-slate-500 w-[70vw] h-[70vh]"
        animate={{
            scale: [0, isGameOver? 1: 0],
        }}
        transition={{duration : 0.5}}
        style={{zIndex: isGameOver? 100 : -1}}>
            <h1 className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">{acclamation}</h1>
            <p className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">The winner is: {winner}</p>
        </motion.div>
    )
}