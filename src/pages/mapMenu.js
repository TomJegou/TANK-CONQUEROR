import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"
import BackgroundMapCity from "../../public/BackgroundMapCity.JPG"
import BackgroundMapDesert from "../../public/BackgroundMapDesert.JPG"
import BackgroundMapMountain from "../../public/BackgroundMapMountain.JPG"
import { useState } from "react"
import Image from "next/image"

export default function MapMenu() {
    const mappingButtonBg = {
        "Mountain": BackgroundMapMountain,
        "Desert": BackgroundMapDesert,
        "City": BackgroundMapCity,
    }

    const [bg, setBg] = useState(BackgroundMapMountain)

    const handleDataFromButton = (data) => {
        setBg(mappingButtonBg[data])
    }

    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <Image src={bg} alt="bg" className="w-full h-full z-[-1]" />
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