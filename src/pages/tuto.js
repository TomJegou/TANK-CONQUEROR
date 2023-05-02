import Layout from "@/components/Layout"
import PopUpTuto from "@/components/PopUpTuto"
import { useState } from "react"
import Exit from "@/components/Exit"

export default function Tuto(){
    const [nbrClick, setNbrClick] = useState(0)
    const nbrTotalPopUp = 3

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
                <Exit />
                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={0} funcSendDataToParent={handleDataFromPopUpTuto} nbrTotalPopUp={nbrTotalPopUp}>
                    <h1 className="absolute top-4 flex flex-row flex-wrap text-7xl h-[7vh] w-full justify-center items-center">Welcome to the tutorial !</h1>
                    <div className="flex flex-row flex-wrap justify-center items-center h-[70vh] w-[85vw]">
                        <h2 className="flex flex-row flex-wrap text-6xl h-[8vh] w-full justify-center items-center">Objective of the game: </h2>
                        <p className="relative top-[-10rem] flex flex-row flex-wrap text-4xl h-[12vh] w-[80vw]">The objective of the game is to destroy all the enemy tanks before your own tanks are destroyed.</p>
                    </div>
                </PopUpTuto>

                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={1} funcSendDataToParent={handleDataFromPopUpTuto} nbrTotalPopUp={nbrTotalPopUp}>
                    <div className="flex flex-row flex-wrap justify-center items-center h-[70vh] w-[85vw]">
                        <h2 className="flex flex-row flex-wrap text-6xl h-[8vh] w-full justify-center items-center">Game Setup: </h2>
                        <p className="relative top-[-10rem] flex flex-row flex-wrap text-4xl h-[12vh] w-[80vw]">
                            Each player has a grid representing their own battlefield.<br/>
                            The tanks on the are placed randomly.<br/>
                            The size of the grid is a 10x10 grid.<br/>
                        </p>
                    </div>
                </PopUpTuto>

                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={2} funcSendDataToParent={handleDataFromPopUpTuto} nbrTotalPopUp={nbrTotalPopUp}>
                    <div className="flex flex-row flex-wrap justify-center items-center h-[70vh] w-[85vw]">
                        <h2 className="flex flex-row flex-wrap text-6xl h-[8vh] w-full justify-center items-center">Team composition: </h2>
                        <p className="relative top-[-10rem] flex flex-row flex-wrap justify-center text-4xl h-[12vh] w-[80vw]">
                            1 Tank convoy<br/>
                            2 Big tanks<br/>
                            3 Medium tanks<br/>
                            3 Small tanks<br/>
                        </p>
                    </div>
                </PopUpTuto>
            </div>
        </Layout>
    )
}