import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/back"

export default function MapMenu() {
    return (
        <Layout className="h-[100vh] flex justify-center">
            <Back href={"/"}/>
            <Menu title={"Choose your environnement"} 
            listChoices={[
                {text: "Mountain", href: "/iaMenu"},
                {text: "Desert", href: "/iaMenu"},
                {text: "City", href: "/iaMenu"},
                ]} />
        </Layout>
    )
}