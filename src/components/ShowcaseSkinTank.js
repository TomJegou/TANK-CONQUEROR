import Image from "next/image"
import Link from "next/link"

export default function ShowcaseSkinTank ({ srcTank, href, tankColor }) {
    const handleClick = () => {
        document.cookie = `tankColor=${tankColor}`
    }

    return (
        <div className="flex flex-col flex-wrap justify-around items-center border-[4px] shadow-[12px_12px_2px_1px] border-black rounded-2xl h-[50vh] w-[25vw] bg-white" onClick={handleClick}>
            <Image src={srcTank} className="flex w-[20vw] h-[30vh]" />
            <Link 
                href={href} 
                className="
                    flex
                    flex-row
                    flex-wrap
                    justify-center
                    items-center
                    w-[8vw]
                    h-[4vh]
                    bg-green-military
                    rounded-xl
                    border-[2px]
                    border-black
                    hover:bg-green-950
                    ">
                    Select
            </Link>
        </div>
    )
}