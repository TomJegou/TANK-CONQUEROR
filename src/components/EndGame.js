import { motion } from "framer-motion"

export default function EndGame ({ acclamation, winner, isGameOver }){
    return (
        <motion.div 
        className="fixed left-[15vw] top-[15vh] flex flew-row flex-wrap justify-center items-center bg-slate-500/30 w-[70vw] h-[70vh] backdrop-blur-md shadow-2xl shadow-white"
        animate={{
            scale: [0, isGameOver? 1: 0],
        }}
        transition={{duration : 0.25}}
        style={{zIndex: isGameOver? 2 : -1}}>
            <h1 className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[10vh]">{acclamation}</h1>
            <p className="flex flew-row flex-wrap justify-center items-center text-white text-6xl w-full h-[10vh]">The winner is: {winner}</p>
        </motion.div>
    )
}