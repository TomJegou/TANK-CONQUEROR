import Layout from "@/components/Layout"
import Menu from "@/components/Menu"

export default function IaMenu(){
    return(
        <Layout className="h-[100vh] flex justify-center">
            <Menu title={"Choose the IA difficulty"} listChoices={[
                {text: "Easy", href: "/soloGame"},
                {text: "Medium", href: "/soloGame"},
                {text: "Hard", href: "/soloGame"},
            ]} />
        </Layout>
    )
}