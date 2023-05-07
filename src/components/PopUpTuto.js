import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

export default function PopUpTuto({ children, nbrClick,trigerNumberClick, funcSendDataToParent, nbrTotalPopUp }) {
    const [scope, animate] = useAnimate()
    const [attrtibuteNext, setAttributeNext] = useState({})
    const [attrtibutePrev, setAttributePrev] = useState({})
    const duration = .25

    useEffect(()=>{
        if(nbrClick == trigerNumberClick) {
            animate(scope.current, {scale: [0, 1]}, {duration: duration})
        } else {
            animate(scope.current, {scale: 0}, {duration: nbrClick == 0 ? 0 : duration})
        }
    },[nbrClick])

    useEffect(()=>{
        if (trigerNumberClick == nbrTotalPopUp - 1) {
            setAttributeNext({})
        } else {
            setAttributeNext({onClick: clickNext})
        }
        if (trigerNumberClick == 0) {
            setAttributePrev({})
        } else {
            setAttributePrev({onClick: clickPrev})
        }
    },[trigerNumberClick])

    const clickNext = () => {
        funcSendDataToParent("next")
    }

    const clickPrev = () => {
        funcSendDataToParent("prev")
    }

    return (
        <div ref={scope} className="absolute top-10 h-[88vh] w-[88vw] flex flex-row flex-wrap justify-center items-center rounded-3xl text-white backdrop-blur-md shadow-2xl shadow-white bg-slate-500/30">
            {children}
            <div className="absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-4 right-10  flex flex-row flex-wrap justify-center items-center"
            {...attrtibuteNext}
            style={{opacity: trigerNumberClick == nbrTotalPopUp - 1 ? 0 : 1}}>
                <p className="flex flex-row flex-wrap justify-center items-center">Next</p>
            </div>
            <div className="absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-4 left-10 flex flex-row flex-wrap justify-center items-center"
            {...attrtibutePrev}
            style={{opacity: trigerNumberClick == 0 ? 0 : 1}}>
                <p className="flex flex-row flex-wrap justify-center items-center">Previous</p>
            </div>
        </div>
    )
}