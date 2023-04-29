import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"

export default function MapMenu() {
    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <Back href={"/"}/>
                <Menu title={"Choose your environnement"} 
                listChoices={[
                    {text: "Mountain", href: "/iaMenu"},
                    {text: "Desert", href: "/iaMenu"},
                    {text: "City", href: "/iaMenu"},
                    ]} />
            </div>
        </Layout>
    )
}