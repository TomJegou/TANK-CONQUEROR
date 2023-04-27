import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"


export default function SoloGame() {
    GenerateTank()
    let count = 0
    const handleDataFromGameSet = (boxClicked) => {
        if(boxClicked.isOc) {
            count++
            console.log(count)
        }
    }
    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromGameSet} />
        </Layout>
    )
}