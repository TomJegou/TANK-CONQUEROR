import Layout from "@/components/Layout"
import Link from "next/link"

export default function IaMenu(){
    return(
        <Layout className="h-[100vh] flex justify-center">
            <h1 className="absolute flex flex-row flex-wrap justify-center text-4xl top-11">Choose your Difficulty</h1>
            <div className="absolute flex flex-col flex-wrap justify-center items-center h-[15vh] top-52">
                <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/soloGame">Easy</Link>
                <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/soloGame">Medium</Link>
                <Link className="flex flex-row flex-wrap justify-center items-center h-11" href="/soloGame">Hard</Link>
            </div>
        </Layout>
    )
}