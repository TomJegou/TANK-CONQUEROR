import Layout from "@/components/Layout"
import Link from "next/link"
import Menu from "@/components/Menu"

export default function MapMenu() {
    return (
        <Layout className="h-[100vh] flex justify-center">
            <Menu title={"Choose your environnement"} 
            listChoices={[
                {text: "Mountain", href: "/iaMenu"},
                {text: "Desert", href: "/iaMenu"},
                {text: "City", href: "/iaMenu"},
                ]} />
        </Layout>
    )
}