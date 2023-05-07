import Image from "next/image"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function BgMenuMap({ bg, currentButtonOnHoover, trigger }) {
    const [scope, animate] = useAnimate()

    useEffect(()=>{
        if (currentButtonOnHoover == trigger) {
            animate(scope.current, {opacity: [0, 1]})
        } else {
            animate(scope.current, {opacity: 1})
        }
    }, [currentButtonOnHoover])

    return (
        <div ref={scope} className="w-full h-full">
            <Image src={bg} alt="bg" className="w-full h-full z-[-1]" />
        </div>
    )
}