export default function Box ({ className, text }) {
    let length = 5
    return (
        <div className={`bg-red-600 flex h-[${length}vh] w-[${length}vh] border ` + className}>{text}</div>
    )
}