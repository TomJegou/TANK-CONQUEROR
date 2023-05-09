import Image from "next/image"

export default function BgGame ({ src }) {
    return (
        <Image src={src} alt="Bg" className="absolute flex top-0 left-0 bottom-0 w-full h-full z-[-1]" />
    )
}