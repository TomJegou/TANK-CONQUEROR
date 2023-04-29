import Layout from "@/components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout className="h-[100vh] flex justify-center">
      <h1 className="absolute flex flex-row flex-wrap justify-center text-4xl top-11">Welcome to Tank Conqueror</h1>
      <div className="absolute flex flex-col flex-wrap justify-center items-center h-[15vh] top-52">
        <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/mapMenu">Solo</Link>
        <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/">MultiPlayer</Link>
        <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/">Tutorial</Link>
      </div>
    </Layout>
  )
}
