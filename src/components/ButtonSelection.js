import Link from "next/link";
import { setMapWorld, setIADifficulty, setMode } from "@/utils/gameSetup";

export default function ButtonSelection({ href, text, keyWord }) {
    const handleClick = () => {
        switch (keyWord){
            case "mapWorld":
                setMapWorld(text)
                break
            case "mode":
                setMode(text)
                break
            case "iaDifficulty":
                setIADifficulty(text)
                break
        }
    }
    return (
        <div onClick={handleClick}>
            <Link className="flex flex-row flex-wrap justify-center items-center h-11" href={href}>{text}</Link>
        </div>
    )
}