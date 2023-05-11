import Layout from "@/components/Layout"
import GameSet from "@/components/GameSet"
import Exit from "@/components/Exit"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/EndGame"
import { useState, useEffect } from "react"
import IASimple from "@/utils/IA/iaSimple"
import IAHard from "@/utils/IA/iaHard"
import IAMedium from "@/utils/IA/iaMedium"
import { getCookie } from "@/utils/tools"
import bgCity from "@/../public/maps/City.png"
import bgMountain from "@/../public/maps/Mountain.png"
import bgDesert from "@/../public/maps/Desert.png"
import BgGame from "@/components/BgGame"

export default function SoloGame () {
    const debugMode = false
    GenerateTank(debugMode)
    const [ia, setIA] = useState()
    const [srcBg, setSrcBg] = useState()
    const [isGameOver, setIsGameOver] = useState(false)
    const [acclamation, setAcclamation] = useState("")
    const [winnerName, setWinnerName] = useState("")
    const [numBoxTobeTouchedByPlayer, setNumBoxTobeTouchedByPlayer] = useState(getNumBoxToBeTouched(AllTanksEnemy))
    const [numBoxTobeTouchedByEnemy, setNumBoxTobeTouchedByEnemy] = useState(getNumBoxToBeTouched(AllTanksPlayer))
    const [boxPlayedByIA, setBoxPlayedByIA] = useState(null)
    const [respFromEngineForIA, setRespFromEngineForIA] = useState("")
    const [whosTurn, setWhosTurn] = useState("player")

    useEffect (() => {
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

    useEffect (() => {
        if (whosTurn == "IA") {
            let boxPlayed = ia.attack(respFromEngineForIA)
            setBoxPlayedByIA(boxPlayed)
            setRespFromEngineForIA(engine(AllTanksPlayer, boxPlayed))
            setWhosTurn("player")
        }
    }, [whosTurn])

    useEffect (() => {
        if (respFromEngineForIA == "touched" || respFromEngineForIA == "destroyed") {
            setNumBoxTobeTouchedByEnemy(getNumBoxToBeTouched(AllTanksPlayer))
        }
    }, [respFromEngineForIA])

    const handleDataFromEnemyGrid = (boxClicked) => {
        if (whosTurn == "player") {
            let responseEngine = engine(AllTanksEnemy, boxClicked)
            if (responseEngine != "missed") {
                setNumBoxTobeTouchedByPlayer(a => a - 1)
            } 
            setWhosTurn("IA")
        }
    }

    useEffect(() => {
        if (typeof document != "undefined") {
            if (getCookie("iaDifficulty") == "Easy") {
                setIA(new IASimple())
            } else if (getCookie("iaDifficulty") == "Medium") {
                setIA(new IAMedium())
            } else {
                setIA(new IAHard())
            }
            switch (getCookie("Bg")) {
                case "Mountain":
                    setSrcBg(bgMountain)
                    break
                case "City" :
                    setSrcBg(bgCity)
                    break
                case "Desert" :
                    setSrcBg(bgDesert)
                    break
            }
        }
    }, [typeof document])
    
    return (
        <Layout className={"overflow-x-hidden h-[115vh] flex flex-row flex-wrap justify-center items-end"}>
            <div className="flex flex-row flex-wrap w-[100vw] bottom-0 justify-center">
                <BgGame src={srcBg} />
                <Exit />
                <h1 className="font-title flex flex-row flex-wrap justify-center w-[20vw] rounded-xl text-4xl text-white mt-11 bg-green-military">SOLO GAME</h1>
                <GameSet sendResponseToSoloGame={handleDataFromEnemyGrid} debugMode={debugMode} whosTurn={whosTurn} boxPlayedByEnemy={boxPlayedByIA}/>
                <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver} />
            </div>  
        </Layout>
    )
}