import { AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { IsOccupied } from "@/utils/tools"
import FieldBox from "./FieldBox"
import TankBox from "./TankBox"
import { useEffect, useState } from "react"

export default function Box ({ x, y, side, sendResponseToGrid, debugMode, whosTurn, boxPlayedByEnemy }) {
    const grid = side == "enemy" ? AllTanksEnemy : AllTanksPlayer
    const [isOc] = useState(IsOccupied({x: x, y: y}, grid))
    const [color, setColor] = useState(debugMode ? side == "player" ? isOc ? "#000CFF": "" : isOc ? "#555655" : "#FFFFFF00" : side == "player" ? isOc ? "#000CFF" : "#FFFFFF00" :  "#FFFFFF00")
    const ContentBox = isOc ? TankBox : FieldBox
    const [text, setText] = useState("")
    const [otherAttribute, setOtherAttribute] = useState({})

    function handleClick(){
        if (whosTurn == "player"){
            if(isOc){
                setColor("#FF0000")
            } else {
                setText("X")
            }
        }
        sendResponseToGrid({x: x, y: y})
    }

    useEffect(()=>{
        if (boxPlayedByEnemy != null && side === "player") {
            if (boxPlayedByEnemy.x == x && boxPlayedByEnemy.y == y) {
                if (isOc) {
                    setColor("#FF0000")
                } else {
                    setText("X")
                }
            }
        }
    }, [boxPlayedByEnemy, side])

    useEffect(()=>{
        if (side == "enemy") {
            if (color == "#FF0000" || text == "X") {
                setOtherAttribute({})
            }else {
                setOtherAttribute({onClick: handleClick})
            }
        }
    }, [side, color, text])

    return (
        <div className="flex h-[5vh] w-[5vh] border"
        x={x}
        y={y}
        side={side} {...otherAttribute}>
            <ContentBox color={color} text={text} />
        </div>
    )
}