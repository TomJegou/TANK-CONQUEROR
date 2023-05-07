import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Image from "next/image"
import Background from "../../public/background.jpg"

export default function Home() {
  const handleDataFromButton = (data) => {
  }

  return (
    <Layout>
      <div className="flex justify-center h-[85vh] w-[100vw]">
          <Image src={Background} alt="background" className="w-full h-full z-[-1]" />
          <Menu title={"Welcome to Tank Conqueror"} 
          listChoices={[
            {text: "Solo", href: "/mapMenu"},
            {text: "Multiplayer", href: "/"},
            {text: "Tutorial", href: "/tuto"},
          ]} 
          keyWord={"mode"}
          sendDataToPage={handleDataFromButton}
          textColor={"white"} />
      </div>
      </Layout>
  )
}
