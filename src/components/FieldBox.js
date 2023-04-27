export default function FieldBox({ text }) {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-[5vh] h-[5vh]">
            <h1 className="flex flex-row flex-wrap justify-center items-center font-bold text-4xl text-white">
                {text}
            </h1>
        </div>
    )
}