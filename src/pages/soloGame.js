import Layout from "@/components/Layout"
import GameSet from "@/components/gameSet"


export default function SoloGame() {
    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full">SOLO GAME</h1>
            <GameSet />
        </Layout>
    )
}