import Image from "next/image"

export default function BgGame ({ src, alt }) {
    return (
        <Image src={src} alt={alt} className="absolute flex top-0 left-0 bottom-0 w-full h-full z-[-1]" />
    )
}