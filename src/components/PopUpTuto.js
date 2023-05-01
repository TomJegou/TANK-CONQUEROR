import { useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function PopUpTuto({ children, nbrClick,trigerNumberClick, funcSendDataToParent }) {
    const [scope, animate] = useAnimate()
    const duration = .25

    useEffect(()=>{
        if(nbrClick == trigerNumberClick) {
            animate(scope.current, {scale: [0, 1]}, {duration: duration})
        } else {
            animate(scope.current, {scale: 0}, {duration: duration})
        }
    },[nbrClick])

    const clickNext = () => {
        funcSendDataToParent("next")
    }

    const clickPrev = () => {
        funcSendDataToParent("prev")
    }

    return (
        <div ref={scope} className="h-[88vh] w-[88vw] bg-gray-800 flex flex-row flex-wrap justify-center text-white">
            {children}
        </div>
    )
}