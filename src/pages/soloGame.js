import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/endGame"
import { useState, useEffect } from "react"
import { getRandomInt } from "@/utils/tools"
import { motion, useAnimate } from "framer-motion"

export default function SoloGame() {
    const debugMode = false
    GenerateTank(debugMode)
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    const [numBoxTobeTouchedByPlayer, setNumBoxTobeTouchedByPlayer] = useState(getNumBoxToBeTouched(AllTanksEnemy))
    const [numBoxTobeTouchedByEnemy, setNumBoxTobeTouchedByEnemy] = useState(getNumBoxToBeTouched(AllTanksPlayer))
    const [boxPlayedByIA, setBoxPlayedByIA] = useState([])
    const [boxPlayedByPlayer, setBoxPlayedByPlayer] = useState([])
    const [whosTurn, setWhosTurn] = useState(Math.random() > .5 ? "player" : "IA")
    const [scope, animate] = useAnimate()    

    useEffect(() => {
        if (numBoxTobeTouchedByPlayer <= 0) {
            setAcclamation("Congratulation !")
            setWinnerName("player")
            setIsGameOver(true)
            return
        }
        if (numBoxTobeTouchedByEnemy <= 0) {
            setAcclamation("Too bad...")
            setWinnerName("IA")
            setIsGameOver(true)
            return
        }
    }, [numBoxTobeTouchedByPlayer, numBoxTobeTouchedByEnemy])

    const handleDataFromEnemyGrid = (boxClicked) => {
        let responseEngine = engine(AllTanksEnemy, boxClicked)
        if (responseEngine != "missed") {
            setNumBoxTobeTouchedByPlayer(a => a - 1)
        }
        setWhosTurn("IA")
    }

    return (
        <Layout className="flex flex-row flex-wrap justify-center bg-black">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl text-white">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromEnemyGrid} debugMode={debugMode}/>
            <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver}/>
        </Layout>
    )
}