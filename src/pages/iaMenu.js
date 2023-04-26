import Layout from "@/components/layout"
import Link from "next/link"

export default function IaMenu(){
    return(
        <Layout>
            <h1 className="w-full flex flex-row flex-wrap justify-center text-4xl">Choose your IA</h1>
            <Link className="w-full flex flex-row flex-wrap justify-center" href="/soloGame">Easy</Link>
            <Link className="w-full flex flex-row flex-wrap justify-center" href="/soloGame">Medium</Link>
            <Link className="w-full flex flex-row flex-wrap justify-center" href="/soloGame">Hard</Link>
        </Layout>
    )
}