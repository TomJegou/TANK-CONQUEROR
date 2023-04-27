import { AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { IsOccupied } from "@/utils/tools"
import { motion } from "framer-motion"

export default function Box ({ id, x, y, side }) {
    let text = ""
    const debugMode = true
    let color = ""
    let grid = []
    side == "enemy" ? grid = AllTanksEnemy : grid = AllTanksPlayer
    const isOc = IsOccupied({x: x, y: y}, grid)
    function HandleClick() {
        console.log(isOc)
    }

    if (debugMode){
        if(side == "player") {
            isOc ? color = "blue" : color = ""
        } else{
            isOc ? color = "red" : color = ""
        }
    } else {
        if(side == "player") {
            isOc ? color = "blue" : color = ""
        }
    }

    return (
        <motion.div className="flex h-[5vh] w-[5vh] border"
        animate = {{ backgroundColor: ["", color], opacity: [0, 100]}}
        transition={{duration: 1}}
        id={id} 
        x={x} 
        y={y} 
        side={side}
        onClick={HandleClick}
        >{text}</motion.div>
    )
}