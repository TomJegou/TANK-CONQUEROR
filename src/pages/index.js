import Layout from "@/components/Layout"
import Menu from "@/components/Menu"

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center h-[85vh] w-[100vw]">
          <Menu title={"Welcome to Tank Conqueror"} 
          listChoices={[
            {text: "Solo", href: "/mapMenu"},
            {text: "Multiplayer", href: "/"},
            {text: "Tutorial", href: "/"},
          ]} />
      </div>
      </Layout>
  )
}
