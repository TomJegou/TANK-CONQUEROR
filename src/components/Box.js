import { AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { IsOccupied } from "@/utils/tools"
import FieldBox from "./FieldBox"
import TankBox from "./TankBox"

export default function Box ({ id, x, y, side, text }) {
    const debugMode = true
    const grid = side == "enemy" ? AllTanksEnemy : AllTanksPlayer
    const isOc = IsOccupied({x: x, y: y}, grid)
    const color = debugMode ? side == "player" ? isOc ? "blue": "" : isOc? "red" : "" : side == "player" ? isOc ? "blue" : "" :  ""
    const ContentBox = isOc ? TankBox : FieldBox

    return (
        <div className="flex h-[5vh] w-[5vh] border"
        id={id}
        x={x}
        y={y}
        side={side}>
            <ContentBox color={color} text={text}/>
        </div>
    )
}