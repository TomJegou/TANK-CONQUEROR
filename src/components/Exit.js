import { IoExitOutline } from "react-icons/io5"
import Link from "next/link"
import { IconContext } from "react-icons/lib"

export default function Exit () {
    return (
        <Link href={"/"} className="fixed flex top-5 right-5">
            <IconContext.Provider value={{color: "white", size: "3rem"}}>
                <IoExitOutline />
            </IconContext.Provider>
        </Link>
    )
}