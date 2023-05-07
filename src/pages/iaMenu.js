import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Back from "@/components/Back"

export default function IaMenu(){
    const handleDataFromButton = (data) => {
    }

    return(
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <Back href={"/mapMenu"}/>
                <Menu title={"Choose the IA difficulty"} listChoices={[
                    {text: "Easy", href: "/soloGame"},
                    {text: "Medium", href: "/soloGame"},
                    {text: "Hard", href: "/soloGame"},
                ]} 
                keyWord={"iaDifficulty"}
                sendDataToPage={handleDataFromButton}
                textColor={"black"} />
            </div>
        </Layout>
    )
}