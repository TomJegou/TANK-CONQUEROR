import Layout from "@/components/Layout"
import ShowcaseSkinTank from "@/components/ShowcaseSkinTank"
import skinTankGreen from "@/../public/skinTanks/tankGreen.png"
import skinTankBlue from "@/../public/skinTanks/tankBlue.png"
import skinTankBrown from "@/../public/skinTanks/tankBrown.png"
import { motion } from "framer-motion"
import Image from "next/image"
import bgBois from "@/../public/skinTankMenu/bg.jpg"

export default function SkinTankMenu () {
    return (
        <Layout>
            <div className="flex flex-col flex-wrap items-center h-[100vh] w-[100vw]">
                <Image src={bgBois} alt="bg" className="w-full h-full" />
                <motion.h1
                    animate={{scale: [0, 1]}}
                    transition={{duration: 1}}
                    className="absolute font-title bg-white shadow-black shadow-2xl top-[6vh] flex flex-row flex-wrap justify-center items-center text-7xl w-[80vw] h-[15vh] border-solid border-[0.5rem] rounded-xl"
                    style={{color: "black", borderColor: "black"}}>
                        Choose The Color of Your Tank
                </motion.h1>
                <div className="absolute mt-[30vh] flex flex-row flex-wrap justify-around items-center w-[90vw]">
                    <ShowcaseSkinTank srcTank={skinTankBlue} href={"/soloGame"} tankColor={"Blue"} />
                    <ShowcaseSkinTank srcTank={skinTankGreen} href={"/soloGame"} tankColor={"Green"} />
                    <ShowcaseSkinTank srcTank={skinTankBrown} href={"/soloGame"} tankColor={"Brown"} />
                </div>
            </div>
        </Layout>
    )
}