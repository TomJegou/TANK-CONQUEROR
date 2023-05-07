import Image from "next/image"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function BgMenuMap({ bg, currentButtonOnHoover, trigger }) {
    const [scope, animate] = useAnimate()

    useEffect(()=>{
        if (currentButtonOnHoover == trigger) {
            animate(scope.current, {opacity: [0, 1]}, {duration: 2})
        } else {
            animate(scope.current, {opacity: 0}, {duration: 2})
        }
    }, [currentButtonOnHoover])

    return (
        <div ref={scope} className="absolute top-0 right-0 left-0 w-full h-full z-[-1]">
            <Image src={bg} alt="bg" className="w-full h-full z-[-1]" />
        </div>
    )
}