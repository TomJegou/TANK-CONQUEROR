import Layout from "@/components/Layout"
import Grid from "@/components/Grid"

export default function SoloGame() {
    return (
        <Layout className="flex flex-row flex-wrap justify-center">
            <h1 className="flex flex-row flex-wrap justify-center w-full">SOLO GAME</h1>
            <div className="flex flex-row flex-wrap justify-between items-center w-full h-[70vh] bg-black">
                <Grid className="" />
                <Grid className="" />
            </div>
        </Layout>
    )
}