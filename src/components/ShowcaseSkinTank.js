import Image from "next/image"
import Link from "next/link"

export default function ShowcaseSkinTank ({ srcTank, href, tankColor }) {
    const handleClick = () => {
        document.cookie = `tankColor=${tankColor}`
    }

    return (
        <div className="" onClick={handleClick}>
            <Image src={srcTank} />
            <Link href={href}>Select</Link>
        </div>
    )
}