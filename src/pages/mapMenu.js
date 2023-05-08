import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"
import BackgroundMapCity from "../../public/bgMapMenu/BackgroundMapCity.jpg"
import BackgroundMapDesert from "../../public/bgMapMenu/BackgroundMapDesert.jpg"
import BackgroundMapMountain from "../../public/bgMapMenu/BackgroundMapMountain.jpg"
import { useState } from "react"
import DynamicBgMenuOnHover from "@/components/BgMenuMap"

export default function MapMenu () {
    const [buttonOnHover, setbuttonOnHover] = useState("Desert")

    const handleDataFromButton = (data) => {
        setbuttonOnHover(data)
    }

    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <DynamicBgMenuOnHover bg={BackgroundMapMountain} trigger={"Mountain"} currentButtonOnHover={buttonOnHover} />
                <DynamicBgMenuOnHover bg={BackgroundMapDesert} trigger={"Desert"} currentButtonOnHover={buttonOnHover} />
                <DynamicBgMenuOnHover bg={BackgroundMapCity} trigger={"City"} currentButtonOnHover={buttonOnHover} />
                <Back href={"/"}/>
                <Menu 
                    title={"Choose your environnement"} 
                    listChoices={[
                            {text: "Mountain", href: "/iaMenu"},
                            {text: "Desert", href: "/iaMenu"},
                            {text: "City", href: "/iaMenu"},
                        ]} 
                    keyWord={"Bg"}
                    sendDataToPage={handleDataFromButton}
                    textColor={"white"} />
            </div>
        </Layout>
    )
}