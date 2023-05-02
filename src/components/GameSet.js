import Grid from "@/components/Grid"
import DisplayPlayerTurn from "./DisplayPlayerTurn"

export default function GameSet({ sendResponseToSoloGame, debugMode, whosTurn }) {
    return (
        <div className="flex flex-row flex-wrap justify-around items-center w-[100vw] bottom-0">

            <div className="flex flex-col justify-around h-[80vh]">
                <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">You</h1>
                <Grid side="player" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} />
            </div>

            <DisplayPlayerTurn whosTurn={whosTurn} />

            <div className="flex flex-col justify-around h-[80vh]">
                <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">The opponent</h1>
                <Grid side="enemy" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} />
            </div>

        </div>
    )
}