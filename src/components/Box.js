import { AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { IsOccupied } from "@/utils/tools"
import FieldBox from "./FieldBox"
import TankBox from "./TankBox"
import { useState } from "react"

export default function Box ({ x, y, side, sendResponseToGrid }) {
    const debugMode = true
    const grid = side == "enemy" ? AllTanksEnemy : AllTanksPlayer
    const isOc = IsOccupied({x: x, y: y}, grid)
    const color = debugMode ? side == "player" ? isOc ? "blue": "" : isOc? "red" : "" : side == "player" ? isOc ? "blue" : "" :  ""
    const ContentBox = isOc ? TankBox : FieldBox

    const [text, setText] = useState("")

    function handleClick(){
        sendResponseToGrid({x: x, y: y, isOc: isOc})
    }

    const otherAttribute = side == "enemy" ? {onClick: handleClick}: {}

    return (
        <div className="flex h-[5vh] w-[5vh] border"
        x={x}
        y={y}
        side={side} {...otherAttribute}>
            <ContentBox color={color} text={text} />
        </div>
    )
}