export default function Box ({ className, text, id, x, y, side }) {
    return (
        <div className={"flex h-[5vh] w-[5vh] border " + className} id={id} x={x} y={y} side={side}>{text}</div>
    )
}