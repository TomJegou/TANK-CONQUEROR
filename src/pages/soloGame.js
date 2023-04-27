import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"
import EndGame from "@/components/endGame"


export default function SoloGame() {
    let winner = ""
    let isGameOver = false
    GenerateTank()
    let numBoxTobeTouchedByPlayer = getNumBoxToBeTouched(AllTanksEnemy)
    let numBoxTobeTouchedByEnemy = getNumBoxToBeTouched(AllTanksPlayer)
    const handleDataFromGameSet = (boxClicked) => {
        let responseEngine = engine(AllTanksEnemy, boxClicked)
        if (responseEngine != "missed") {
            numBoxTobeTouchedByPlayer--
            if (numBoxTobeTouchedByPlayer <= 0) {
                isGameOver = true
            }
        }
    }

    let acclamation
    let winnerName
    if (isGameOver) {
        acclamation = winner == "player" ? "Congratulation !" : "Too bad..."
        winnerName = winner == "player" ? "You" : "The Opponent"
    }

    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromGameSet} />
            <EndGame acclamation={acclamation} winner={winnerName} isGameOver={isGameOver}/>
        </Layout>
    )
}