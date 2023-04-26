import Layout from "@/components/Layout"
import Grid from "@/components/Grid"

export default function SoloGame() {
    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full">SOLO GAME</h1>
            <Grid />
            <Grid />
        </Layout>
    )
}