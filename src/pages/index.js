import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import Image from "next/image"
import Background from "../../public/background.JPG"

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center h-[85vh] w-[100vw]">
          <Image src={Background} alt="background" className="w-full h-full z-[-1]"/>
          <Menu title={"Welcome to Tank Conqueror"} 
          listChoices={[
            {text: "Solo", href: "/mapMenu"},
            {text: "Multiplayer", href: "/"},
            {text: "Tutorial", href: "/tuto"},
          ]} 
          keyWord={"mode"} />
      </div>
      </Layout>
  )
}
