import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/endGame"
import { useState } from "react"

export default function SoloGame() {
    GenerateTank()
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    const [numBoxTobeTouchedByPlayer, setNumBoxTobeTouchedByPlayer] = useState(getNumBoxToBeTouched(AllTanksEnemy))
    const [numBoxTobeTouchedByEnemy, setNumBoxTobeTouchedByEnemy] = useState(getNumBoxToBeTouched(AllTanksPlayer))
    
    const handleDataFromGameSet = (boxClicked) => {
        let responseEngine = engine(AllTanksEnemy, boxClicked)
        if (responseEngine != "missed") {
            numBoxTobeTouchedByPlayer--
            if (numBoxTobeTouchedByPlayer <= 0) {
                setAcclamation("Congratulation !")
                setWinnerName("player")
                setIsGameOver(true)
            }
        }
    }

    return (
        <Layout className="flex flex-row flex-wrap justify-center bg-black">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl text-white">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromGameSet} />
            <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver} />
        </Layout>
    )
}