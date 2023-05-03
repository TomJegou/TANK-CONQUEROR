import Link from "next/link";

export default function ButtonSelection({ href, text, keyWord }) {
    const handleClick = () => {
        document.cookie = ``
    }
    return (
        <div>
            <Link className="flex flex-row flex-wrap justify-center items-center h-11" href={href}>{text}</Link>
        </div>
    )
}