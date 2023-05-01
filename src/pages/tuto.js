import Layout from "@/components/Layout"
import PopUpTuto from "@/components/PopUpTuto"
import { useState } from "react"

export default function Tuto(){
    const [nbrClick, setNbrClick] = useState(0)
    const handleClick = () => {
        setNbrClick(a => a + 1)
    }

    return (
        <Layout>
            <div className="bg-black h-[150vh] w-[100vw] flex justify-center flex-row flex-wrap">
                <h1 className="text-white flex flex-row flex-wrap justify-center items-center w-[100vw] h-[10vh] text-6xl">Tutorial</h1>
                <PopUpTuto>
                    <h1>Test</h1>
                </PopUpTuto>
            </div>
        </Layout>
    )
}