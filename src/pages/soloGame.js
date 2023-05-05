import Layout from "@/components/Layout"
import GameSet from "@/components/GameSet"
import Exit from "@/components/Exit"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/EndGame"
import { useState, useEffect } from "react"
import { IADifficulty, MapWorld } from "@/utils/gameSetup"
import { IA } from "@/utils/ia"

export default function SoloGame() {
    const ia = new IA(IADifficulty)
    const debugMode = false
    GenerateTank(debugMode)
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    const [numBoxTobeTouchedByPlayer, setNumBoxTobeTouchedByPlayer] = useState(getNumBoxToBeTouched(AllTanksEnemy))
    const [numBoxTobeTouchedByEnemy, setNumBoxTobeTouchedByEnemy] = useState(getNumBoxToBeTouched(AllTanksPlayer))
    const [boxPlayedByIA, setBoxPlayedByIA] = useState(null)
    const [respFromEngineForIA, setRespFromEngineForIA] = useState("")
    const [whosTurn, setWhosTurn] = useState("player")

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

    useEffect(()=>{
        if (whosTurn == "IA") {
            let tmp = ia.attack(respFromEngineForIA)
            let boxPlayed = {x: tmp[0], y: tmp[1]}
            setBoxPlayedByIA(boxPlayed)
            let responseEngine = engine(AllTanksPlayer, boxPlayed)
            setRespFromEngineForIA(responseEngine)
            setWhosTurn("player")
            setNumBoxTobeTouchedByEnemy(getNumBoxToBeTouched(AllTanksPlayer))
        }
    }, [whosTurn])

    const handleDataFromEnemyGrid = (boxClicked) => {
        if (whosTurn == "player") {
            let responseEngine = engine(AllTanksEnemy, boxClicked)
            if (responseEngine != "missed") {
                setNumBoxTobeTouchedByPlayer(a => a - 1)
            }
            setWhosTurn("IA")
        }
    }

    return (
        <Layout className={"overflow-x-hidden bg-black h-[115vh] flex flex-row flex-wrap justify-center items-end"}>
            <Exit />
            <div className="flex flex-row flex-wrap w-[100vw] bottom-0 justify-center">
                <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl text-white mt-11">SOLO GAME</h1>
                <GameSet sendResponseToSoloGame={handleDataFromEnemyGrid} debugMode={debugMode} whosTurn={whosTurn} boxPlayedByEnemy={boxPlayedByIA}/>
                <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver} />
            </div>  
        </Layout>
    )
}