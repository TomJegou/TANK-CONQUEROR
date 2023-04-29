import Link from "next/link"

export default function Footer() {
    return (
        <div className="relative flex flex-col flex-wrap justify-center items-center w-full h-[15vh] bg-white bottom-[0]">
            <h1 className="flex flex-row flex-wrap justify-center items-center">Made by :</h1>
            <Link href={"https://github.com/TomJegou"}>Tomyj</Link>
            <Link href={"https://github.com/L0uxe"}>L0uxe</Link>
        </div>
    )
}