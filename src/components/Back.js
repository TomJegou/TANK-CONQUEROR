import { IoArrowBackCircleSharp } from "react-icons/io5"
import { IconContext } from "react-icons/lib"
import Link from "next/link"

export default function Back({ href }) {
    return (
        <Link href={href} className="absolute flex left-5 top-5">
            <IconContext.Provider value={{ color: "black", size: "2em"}}>
                <IoArrowBackCircleSharp />
            </IconContext.Provider>
        </Link>
    )
}