import { AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { IsOccupied } from "@/utils/tools"
import FieldBox from "./FieldBox"
import TankBox from "./TankBox"
import { useState } from "react"

export default function Box ({ x, y, side, sendResponseToGrid, debugMode }) {
    const grid = side == "enemy" ? AllTanksEnemy : AllTanksPlayer
    const [isOc] = useState(IsOccupied({x: x, y: y}, grid))
    const [color, setColor] = useState(debugMode ? side == "player" ? isOc ? "blue": "" : isOc? "gray" : "" : side == "player" ? isOc ? "blue" : "" :  "")
    const ContentBox = isOc ? TankBox : FieldBox
    const [text, setText] = useState("")
    const otherAttribute = side == "enemy" ? {onClick: handleClick} : {}

    function handleClick(){
        sendResponseToGrid({x: x, y: y})
        if(isOc){
            setColor("red")
        } else {
            setText("X")
        }
    }

    return (
        <div className="flex h-[5vh] w-[5vh] border"
        x={x}
        y={y}
        side={side} {...otherAttribute}>
            <ContentBox color={color} text={text} />
        </div>
    )
}