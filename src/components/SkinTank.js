import Image from "next/image";

export default function SkinTank ({ touched, side, srcTank }) {
    return (
        <Image
            src={srcTank}
            alt="tank"
            className="flex w-[5vh] h[5vh]"
            style={{
                opacity: side == "enemy" ? touched ? 1 : 0 : 1,
                color: side == "enemy" ? touched ? "#FF0000" : "#FFFFFF00" : "#FF0000",
            }}
        />
        )
    }