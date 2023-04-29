import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/endGame"
import { useState } from "react"
import { getRandomInt } from "@/utils/tools"

export default function SoloGame() {
    GenerateTank()
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    const [numBoxTobeTouchedByPlayer, setNumBoxTobeTouchedByPlayer] = useState(getNumBoxToBeTouched(AllTanksEnemy)-1)
    const [numBoxTobeTouchedByEnemy, setNumBoxTobeTouchedByEnemy] = useState(getNumBoxToBeTouched(AllTanksPlayer)-1)
    const [boxPlayedByIA, setBoxPlayedByIA] = useState([])
    const [boxPlayedByPlayer, setBoxPlayedByPlayer] = useState([])
    const [whosTurn, setWhosTurn] = useState(Math.random() > .5 ? "player" : "IA")
    
    const handleDataFromEnemyGrid = (boxClicked) => {
        let responseEngine = engine(AllTanksEnemy, boxClicked)
        if (responseEngine != "missed") {
            setNumBoxTobeTouchedByPlayer(a => a - 1)
            if (numBoxTobeTouchedByPlayer <= 0) {
                setAcclamation("Congratulation !")
                setWinnerName("player")
                setIsGameOver(true)
            }
        }
        setWhosTurn("IA")
    }

    return (
        <Layout className="flex flex-row flex-wrap justify-center bg-black">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl text-white">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromEnemyGrid} />
            <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver} />
        </Layout>
    )
}