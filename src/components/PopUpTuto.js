import { useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function PopUpTuto({ children, numberClick,trigerNumberClick }) {
    const [scope, animate] = useAnimate()

    useEffect(()=>{
        if(numberClick == trigerNumberClick) {
            animate(scope.current, {scale: [0, 1]}, {duration: 0.5})
        } else {
            animate(scope.current, {scale: 0}, {duration: 0.5})
        }
    },[numberClick])

    return (
        <div ref={scope} className="h-[80vh] w-[80vw] bg-gray-800">
            {children}
        </div>
    )
}