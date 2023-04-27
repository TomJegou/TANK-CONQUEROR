import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/endGame"
import { useState } from "react"

export default function SoloGame() {
    GenerateTank()
    const [winner, setWinner] = useState("") 
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    let numBoxTobeTouchedByPlayer = getNumBoxToBeTouched(AllTanksEnemy)
    let numBoxTobeTouchedByEnemy = getNumBoxToBeTouched(AllTanksPlayer)
    const handleDataFromGameSet = (boxClicked) => {
        let responseEngine = engine(AllTanksEnemy, boxClicked)
        if (responseEngine != "missed") {
            numBoxTobeTouchedByPlayer--
            if (numBoxTobeTouchedByPlayer <= 0) {
                setWinner("player")
                setAcclamation(winner == "player" ? "Congratulation !" : "Too bad...")
                setWinnerName(winner == "player" ? "You" : "The Opponent")
                setIsGameOver(true)
            }
        }
    }

    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromGameSet} />
            <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver} />
        </Layout>
    )
}