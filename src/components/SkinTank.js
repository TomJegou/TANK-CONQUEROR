import Image from "next/image";
import { useState, useEffect } from "react";

export default function SkinTank ({ touched, side, srcTank }) {

    return (
        <Image
            src={srcTank}
            alt="tank"
            className="flex w-[5vh] h[5vh]"
            style={{
                opacity: 1,
            }}
        />
        )
    }