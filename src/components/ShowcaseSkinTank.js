import Image from "next/image"
import Link from "next/link"

export default function ShowcaseSkinTank ({ srcTank, href, tankColor }) {
    const handleClick = () => {
        document.cookie = `tankColor=${tankColor}`
    }

    return (
        <div className="flex flex-col flex-wrap justify-around items-center border" onClick={handleClick}>
            <Image src={srcTank} />
            <Link href={href} className="">Select</Link>
        </div>
    )
}