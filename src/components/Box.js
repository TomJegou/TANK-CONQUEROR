export default function Box ({ className }) {
    let length = 5
    return (
        <div className={`flex h-[${length}vh] w-[${length}vh] border`} />
    )
}