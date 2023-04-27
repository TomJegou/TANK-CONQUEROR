import { motion } from "framer-motion"

export default function EndGame({ acclamation, winner, isGameOver }){
    return (
        <motion.div 
        className="flex flew-row flex-wrap justify-center items-center bg-slate-500 w-[70vw] h-[70vh]" 
        style={{
            opacity: isGameOver? 100 : 0,
            zIndex: isGameOver? 20 : -1,
            }}>
            <h1 className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">{acclamation}</h1>
            <p className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[25vh]">The winner is: {winner}</p>
        </motion.div>
    )
}