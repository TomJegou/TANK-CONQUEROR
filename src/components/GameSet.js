import Grid from "@/components/Grid"

export default function GameSet({ sendResponseToSoloGame, debugMode, whosTurn, boxPlayedByEnemy }) {
    return (
        <div className="flex flex-row flex-wrap justify-around items-center w-[100vw] bottom-0">

            <div className="flex flex-col justify-around h-[80vh]">
                <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">You</h1>
                <Grid side="player" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} whosTurn={whosTurn} boxPlayedByEnely={boxPlayedByEnemy} />
            </div>

            <div className="flex flex-row flex-wrap items-center gap-3">
                <p className="text-white text-2xl flex flex-row flex-wrap">turn: </p>
                <p className="text-white text-2xl flex flex-row flex-wrap">{whosTurn}</p>
            </div>

            <div className="flex flex-col justify-around h-[80vh]">
                <h1 className="flex flex-row flex-wrap justify-center items-center text-white text-4xl">The opponent</h1>
                <Grid side="enemy" sendResponseToGameSet={sendResponseToSoloGame} debugMode={debugMode} whosTurn={whosTurn} boxPlayedByEnely={boxPlayedByEnemy} />
            </div>

        </div>
    )
}