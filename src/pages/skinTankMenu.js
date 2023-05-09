import Layout from "@/components/Layout"
import ShowcaseSkinTank from "@/components/ShowcaseSkinTank"
import skinTankGreen from "@/../public/skinTanks/tankGreen.png"
import skinTankBlue from "@/../public/skinTanks/tankBlue.png"
import skinTankBrown from "@/../public/skinTanks/tankBrown.png"

export default function SkinTankMenu () {
    return (
        <Layout>
            <div className="flex justify-center h-[85vh] w-[100vw]">
                <ShowcaseSkinTank srcTank={skinTankBlue} href={"/soloGame"} tankColor={"Blue"} />
                <ShowcaseSkinTank srcTank={skinTankGreen} href={"/soloGame"} tankColor={"Green"} />
                <ShowcaseSkinTank srcTank={skinTankBrown} href={"/soloGame"} tankColor={"Brown"} />
            </div>
        </Layout>
    )
}