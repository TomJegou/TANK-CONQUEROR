import Grid from "@/components/Grid"
import { GenerateTank } from "@/utils/generateTanks"

export default function GameSet({ sendResponseToSoloGame, debugMode }) {
    return (
        <div className="fixed flex flex-row flex-wrap justify-around items-center w-full h-[90vh] bottom-0 m-0 p-0">

        <div className="flex flex-col justify-around h-[80vh]">
            <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">You</h1>
            <Grid side="player" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} />
        </div>

        <div className="flex flex-col justify-around h-[80vh]">
            <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">The opponent</h1>
            <Grid side="enemy" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} />
        </div>

    </div>
    )
}