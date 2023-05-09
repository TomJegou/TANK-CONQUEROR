import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"
import DynamicBgMenuOnHover from "@/components/BgMenuMap"
import bgIaDifEasy from "@/../public/bgIADifMenu/bgIADifEasy.jpg"
import bgIaDifMedium from "@/../public/bgIADifMenu/bgIADifMedium.jpg"
import bgIaDifHard from "@/../public/bgIADifMenu/bgIADifHard.jpg"
import { useState } from "react"

export default function IaMenu (){
    const [buttonOnHover, setbuttonOnHover] = useState("Easy")
    const handleDataFromButton = (data) => {
        setbuttonOnHover(data)
    }

    return(
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <DynamicBgMenuOnHover bg={bgIaDifEasy} trigger={"Easy"} currentButtonOnHover={buttonOnHover} />
                <DynamicBgMenuOnHover bg={bgIaDifMedium} trigger={"Medium"} currentButtonOnHover={buttonOnHover} />
                <DynamicBgMenuOnHover bg={bgIaDifHard} trigger={"Hard"} currentButtonOnHover={buttonOnHover} />
                <Back href={"/mapMenu"}/>
                <Menu 
                    title={"Choose the IA difficulty"} 
                    listChoices={[
                        {text: "Easy", href: "/skinTankMenu"},
                        {text: "Medium", href: "/skinTankMenu"},
                        {text: "Hard", href: "/skinTankMenu"},
                    ]} 
                    keyWord={"iaDifficulty"}
                    sendDataToPage={handleDataFromButton}
                    textColor={"white"} />
            </div>
        </Layout>
    )
}