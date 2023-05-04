import Box from "./Box"

export default function Grid({ side, sendResponseToGameSet, debugMode, whosTurn }) {
    const t = [] 
    function generateGrid() {
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                t.push({x: x, y: y})
            }
        }
    }
    generateGrid()
    return (
        <div className={"flex flex-row flex-wrap w-[50vh] h-[50vh]"} side={side}>
            {t.map(box => {
                return <Box x={box.x} y={box.y} side={side} key={`${side}:${box.x};${box.y}`} sendResponseToGrid={sendResponseToGameSet} debugMode={debugMode} />
            })}
        </div>
    )
}