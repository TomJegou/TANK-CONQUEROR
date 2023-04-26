import Layout from "@/components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout className="h-[100vh] flex flex-row flex-wrap justify-center">
      <h1 className="w-full flex flex-row flex-wrap justify-center text-4xl">Welcome to Tank Conqueror</h1>
      <Link className="w-full flex flex-row flex-wrap justify-center" href="/mapMenu">Solo</Link>
    </Layout>
  )
}
