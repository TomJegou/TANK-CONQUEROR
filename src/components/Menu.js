import Link from "next/link"

export default function Menu({ title, listChoices }) {
    return (
        <>
            <h1 className="absolute flex flex-row flex-wrap justify-center text-4xl top-11">{title}</h1>
            <div className="absolute flex flex-col flex-wrap justify-center items-center h-[15vh] top-52">
                {listChoices.map((link, index) => {
                    return <Link key={index} className="flex flex-row flex-wrap justify-center items-center h-11" href={link.href}>{link.text}</Link>
                })}
            </div>
        </>
    )
}