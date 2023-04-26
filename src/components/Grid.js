import Box from "./Box"

export default function Grid({ className }) {
    let length = 60
    return (
        <div className={ `flex flex-row flex-wrap w-[${length}vh] h-[${length}vh] ` + className}>
        </div>
    )
}