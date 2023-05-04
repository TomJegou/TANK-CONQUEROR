import ButtonSelection from "./ButtonSelection"

export default function Menu({ title, listChoices, keyWord }) {
    return (
        <>
            <h1 className="absolute flex flex-row flex-wrap justify-center text-4xl top-11">{title}</h1>
            <div className="absolute flex flex-col flex-wrap justify-center items-center h-[15vh] top-52">
                {listChoices.map((link, index) => {
                    return <ButtonSelection key={index} href={link.href} text={link.text} keyWord={keyWord}/>
                })}
            </div>
        </>
    )
}