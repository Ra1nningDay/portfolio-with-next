"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import Quote from "../components/Quote";

export default function Home() {
    return (
        <>
            <div className="border-b-1 pb-12 md:pb-40 relative">
                <div className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-0 right-20"></div>
                <div className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-100 left-[-200]"></div>
                <Available />
                <div className="container  mx-auto md:px-4 md:pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <HeroLeft />
                        <div className="flex justify-center flex-col">
                            <HeroRight />
                        </div>
                    </div>
                </div>
            </div>

            <Quote />
        </>
    );
}
