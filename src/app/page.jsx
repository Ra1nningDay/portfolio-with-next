"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import Quote from "../components/Quote";

export default function Home() {
    return (
        <>
            <div className="border-b-1 pb-12 md:pb-40 relative">
                <motion.div
                    className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-0 right-20 opacity-40"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                ></motion.div>

                <motion.div
                    className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-100 left-[-200] opacity-40"
                    animate={{
                        y: [0, 30, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                ></motion.div>
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
