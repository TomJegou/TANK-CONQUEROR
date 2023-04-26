import Box from "./Box"

export default function Grid({ className }) {
    let length = 60
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
        <div className={ `flex flex-row flex-wrap w-[${length}vh] h-[${length}vh] bg-red-600 ` + className}>
            
        </div>
    )
}