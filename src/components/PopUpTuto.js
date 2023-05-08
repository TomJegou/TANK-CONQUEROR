import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import ButtonTuto from "./ButtonTuto"

export default function PopUpTuto ({ children, nbrClick, trigerNumberClick, funcSendDataToParent, nbrTotalPopUp }) {
    const [firstLoad, setFirstLoad] = useState(true)
    const [scope, animate] = useAnimate()
    const ButtonNext = trigerNumberClick == nbrTotalPopUp - 1 ? () => <></> : ButtonTuto
    const ButtonPrev = trigerNumberClick == 0 ? () => <></> : ButtonTuto
    const duration = .5

    useEffect (()=>{
        if(nbrClick == trigerNumberClick) {
            animate(scope.current, {scale: [0, 1]}, {duration: duration})
        } else {
            animate(scope.current, {scale: 0}, {duration: firstLoad ? 0 : duration})
        }
        setFirstLoad(false)
    }, [nbrClick])

    const clickNext = () => {
        funcSendDataToParent("next")
    }

    const clickPrev = () => {
        funcSendDataToParent("prev")
    }

    return (
        <div ref={scope} className="absolute top-10 h-[88vh] w-[88vw] flex flex-row flex-wrap justify-center items-center rounded-3xl text-white backdrop-blur-xl shadow-[12px_12px_2px_1px] shadow-black/50 bg-green-military/50">
            {children}
            <ButtonNext funcOnClick={clickNext} className={"absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-4 right-10 flex flex-row flex-wrap justify-center items-center"} text={"Next"} />
            <ButtonPrev funcOnClick={clickPrev} className={"absolute h-[5vh] w-[5vw] border-2 rounded-3xl bottom-4 left-10 flex flex-row flex-wrap justify-center items-center"} text={"Previous"} />
        </div>
    )
}