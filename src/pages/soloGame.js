import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"
import { GenerateTank, AllTanksEnemy, AllTanksPlayer } from "@/utils/generateTanks"
import { engine, getNumBoxToBeTouched } from "@/utils/engine"


export default function SoloGame() {
    GenerateTank()
    const handleDataFromGameSet = (boxClicked) => {
        // console.log(AllTanksEnemy)
        console.log(engine(AllTanksEnemy, boxClicked))
        console.log(getNumBoxToBeTouched(AllTanksEnemy))
    }
    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full text-4xl">SOLO GAME</h1>
            <GameSet sendResponseToSoloGame={handleDataFromGameSet} />
        </Layout>
    )
}