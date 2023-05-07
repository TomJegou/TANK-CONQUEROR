import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"
import BackgroundMapCity from "../../public/BackgroundMapCity.JPG"
import BackgroundMapDesert from "../../public/BackgroundMapDesert.JPG"
import BackgroundMapMountain from "../../public/BackgroundMapMountain.JPG"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useAnimate } from "framer-motion"

export default function MapMenu() {
    const mappingButtonBg = {
        "Mountain": BackgroundMapMountain,
        "Desert": BackgroundMapDesert,
        "City": BackgroundMapCity,
    }

    const [scope, animate] = useAnimate()

    const [bg, setBg] = useState(BackgroundMapMountain)

    const handleDataFromButton = (data) => {
        setBg(mappingButtonBg[data])
    }

    useEffect(()=>{
        animate(scope.current, {opacity: [0, 1]}, {duration: 3})
    }, [bg])

    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
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