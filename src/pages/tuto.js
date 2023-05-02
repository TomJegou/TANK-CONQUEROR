import Layout from "@/components/Layout"
import PopUpTuto from "@/components/PopUpTuto"
import { useState } from "react"

export default function Tuto(){
    const [nbrClick, setNbrClick] = useState(0)

    const handleDataFromPopUpTuto = (data) => {
        if(data == "prev") {
            setNbrClick(a => a - 1)
        } else if (data == "next") {
            setNbrClick(a => a + 1)
        } else {
            console.log(data)
        }
    }

    return (
        <Layout>
            <div className="bg-black h-[100vh] flex justify-center flex-row flex-wrap">
                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={0} funcSendDataToParent={handleDataFromPopUpTuto}>
                    <h1 className="absolute top-4 flex flex-row flex-wrap text-6xl h-[5vh] w-full justify-center items-center">Welcome to the tutorial !</h1>
                    <h2 className="absolute top-20 flex flex-row flex-wrap text-4xl h-[5vh] w-full justify-center items-center">Objective: </h2>
                    <p className="absolute top-96 flex flex-row flex-wrap text-7xl h-[12vh] w-[80vw]">The objective of the game is to destroy all the enemy tanks before your own tanks are destroyed.</p>
                </PopUpTuto>

                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={1} funcSendDataToParent={handleDataFromPopUpTuto}>
                    <h2 className="absolute top-20 flex flex-row flex-wrap text-4xl h-[5vh] w-full justify-center items-center">Game Setup: </h2>
                    <p className="absolute top-48 flex flex-row flex-wrap text-7xl h-[12vh] w-[80vw]">
                        Each player has a grid representing their own battlefield where they place their tanks.
                        The size of the grid can vary, but a common size is a 10x10 grid.
                        The number and types of tanks each player has can also vary.
                    </p>
                </PopUpTuto>
            </div>
        </Layout>
    )
}