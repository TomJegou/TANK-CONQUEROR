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
        <div ref={scope} className="absolute top-10 h-[88vh] w-[88vw] bg-gray-800 flex flex-row flex-wrap justify-center rounded-3xl text-white backdrop-blur-md shadow-2xl shadow-white bg-slate-500/30">
            {children}
            <div className="absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-2 right-10  flex flex-row flex-wrap justify-center items-center"
            onClick={clickNext}
            style={{opacity: trigerNumberClick == 3 ? 0 : 1}}>
                <p>Next</p>
            </div>
            <div className="absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-2 left-10 flex flex-row flex-wrap justify-center items-center"
            onClick={clickPrev}
            style={{opacity: trigerNumberClick == 0 ? 0 : 1}}>
                <p>Previous</p>
            </div>
        </div>
    )
}