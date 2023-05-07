import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"
import BackgroundMapCity from "../../public/BackgroundMapCity.JPG"
import BackgroundMapDesert from "../../public/BackgroundMapDesert.JPG"
import BackgroundMapMountain from "../../public/BackgroundMapMountain.JPG"
import { useState } from "react"
import BgMenuMap from "@/components/BgMenuMap"

export default function MapMenu() {
    const [buttonOnHoover, setbuttonOnHoover] = useState("Desert")

    const handleDataFromButton = (data) => {
        setbuttonOnHoover(data)
    }

    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <BgMenuMap bg={BackgroundMapMountain} trigger={"Mountain"} currentButtonOnHoover={buttonOnHoover} />
                <BgMenuMap bg={BackgroundMapDesert} trigger={"Desert"} currentButtonOnHoover={buttonOnHoover} />
                <BgMenuMap bg={BackgroundMapCity} trigger={"City"} currentButtonOnHoover={buttonOnHoover} />
                <Back href={"/"}/>
                <Menu title={"Choose your environnement"} 
                listChoices={[
                    {text: "Mountain", href: "/iaMenu"},
                    {text: "Desert", href: "/iaMenu"},
                    {text: "City", href: "/iaMenu"},
                    ]} 
                keyWord={"mapWorld"}
                sendDataToPage={handleDataFromButton} />
            </div>
        </Layout>
    )
}