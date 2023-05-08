import Head from "next/head"

export default function HeadComponent ({ title, description, keywords }) {
    return (
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        </Head>
    )
}