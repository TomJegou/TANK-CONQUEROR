import { AllTanksEnemy, AllTanksPlayer, IsOccupied } from "@/utils/generateTanks"

export default function Box ({ text, id, x, y, side }) {
    const debugMode = true
    let color = ""
    let grid = []
    side == "enemy" ? grid = AllTanksEnemy : grid = AllTanksPlayer
    const isOc = IsOccupied({x: x, y: y}, grid)
    return (
        <div className="flex h-[5vh] w-[5vh] border" style={{backgroundColor: debugMode ? side == "player" ? isOc ? color = "blue" : color = "" : isOc ? color = "red" : color = "" : side == "player" ? isOc? color = "blue": color = "" : color = ""}} id={id} x={x} y={y} side={side}>{text}</div>
    )
}