import Layout from "@/components/Layout"
import Link from "next/link"

export default function MapMenu() {
    return (
        <Layout>
            <h1 className="w-full flex flex-row flex-wrap justify-center text-4xl">Choose your Map</h1>
            <Link className="w-full flex flex-row flex-wrap justify-center" href="/iaMenu">Montain</Link>
            <Link className="w-full flex flex-row flex-wrap justify-center" href="/iaMenu">Desert</Link>
        </Layout>
    )
}