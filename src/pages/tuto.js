import Layout from "@/components/Layout"
import PopUpTuto from "@/components/PopUpTuto"
import { useState } from "react"
import Exit from "@/components/Exit"
import Image from "next/image"
import bgTuto from "../../public/bgTuto/bgTuto.jpg"
import Capture1 from "../../public/screenshotsTutorial/Capture1.png"
import Capture2 from "../../public/screenshotsTutorial/Capture2.png"
import Capture3 from "../../public/screenshotsTutorial/Capture3.png"
import Capture4 from "../../public/screenshotsTutorial/Capture4.png"

export default function Tuto () {
    const [nbrClick, setNbrClick] = useState(0)
    const nbrTotalPopUp = 5

    const handleDataFromPopUpTuto = (data) => {
        if (data == "prev") {
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
                <Image src={bgTuto} alt="bg" className="w-full h-full" />
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
                        <p className="flex flex-row flex-wrap text-4xl h-[15vhvh] w-[30vw]">
                            1 Tank convoy (5 squares)<br/>
                            2 Big tanks (4 squares)<br/>
                            3 Medium tanks (2 squares)<br/>
                            3 Small tanks (1 squares)<br/>
                        </p>
                        <Image src={Capture1} className="flex w-[50vh] h-[50vh] rounded-[12px]" alt="Capture1.png" />
                    </div>
                </PopUpTuto>

                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={3} funcSendDataToParent={handleDataFromPopUpTuto} nbrTotalPopUp={nbrTotalPopUp}>
                    <div className="flex flex-row flex-wrap justify-center items-center h-[70vh] w-[85vw]">
                        <h2 className="flex flex-row flex-wrap text-6xl h-[8vh] w-full justify-center items-center">Gameplay: </h2>
                        <p className="top-[-10rem] flex flex-row flex-wrap justify-center items-center text-4xl h-[12vh] w-[80vw]">
                            If it's your turn, you must click on one of the squares of the opponent's grid
                        </p>
                        <Image src={Capture2} className="flex w-[50vh] h-[50vh] rounded-[12px]" alt="Capture2.png" />
                    </div>
                </PopUpTuto>

                <PopUpTuto nbrClick={nbrClick} trigerNumberClick={4} funcSendDataToParent={handleDataFromPopUpTuto} nbrTotalPopUp={nbrTotalPopUp}>
                    <div className="flex flex-row flex-wrap justify-center items-center h-[70vh] w-[85vw]">
                        <h2 className="flex flex-row flex-wrap text-6xl h-[8vh] w-full justify-center items-center">Gameplay: </h2>
                        <p className="top-[-10rem] flex flex-row flex-wrap justify-start items-center text-4xl h-[12vh] w-[50vw]">
                            If you miss your shot the box a hit marker will appears :
                        </p>
                        <Image src={Capture3} className="flex w-[10vh] h-[10vh] rounded-[12px]" alt="Capture3.png" />
                        <p className="top-[-10rem] flex flex-row flex-wrap justify-start items-center text-4xl h-[12vh] w-[50vw]">
                            If you hit a tank the box will become red :
                        </p>
                        <Image src={Capture4} className="flex w-[10vh] h-[10vh] rounded-[12px]" alt="Capture4.png" />
                        <p className="top-[-10rem] flex flex-row flex-wrap justify-start items-center text-4xl h-[12vh] w-[50vw]">
                            If you hit or sink a tank you can play again
                        </p>
                    </div>
                </PopUpTuto>

            </div>
        </Layout>
    )
}