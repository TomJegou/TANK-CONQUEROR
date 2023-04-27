import Grid from "@/components/Grid"
import { GenerateTank } from "@/utils/generateTanks"

export default function GameSet({ sendResponseToSoloGame }) {
    return (
        <div className="absolute flex flex-row flex-wrap justify-around items-center w-full h-[90vh] bottom-0 bg-black">

        <div className="flex flex-col justify-around h-[80vh]">
            <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">You</h1>
            <Grid side="player" sendResponseToGameSet={sendResponseToSoloGame} />
        </div>

        <div className="flex flex-col justify-around h-[80vh]">
            <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">The opponent</h1>
            <Grid side="enemy" sendResponseToGameSet={sendResponseToSoloGame} />
        </div>

    </div>
    )
}