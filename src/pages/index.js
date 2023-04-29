import Layout from "@/components/Layout"
import Menu from "@/components/Menu"

export default function Home() {
  return (
    <Layout className="h-[100vh] flex justify-center">
      <Menu title={"Welcome to Tank Conqueror"} 
      listChoices={[
        {text: "Solo", href: "/mapMenu"},
        {text: "Multiplayer", href: "/"},
        {text: "Tutorial", href: "/"},
      ]} />
    </Layout>
  )
}
