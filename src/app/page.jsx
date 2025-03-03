"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

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
                        <HeroLeft img="/hero.jpg" />
                        <div className="flex justify-center flex-col">
                            <HeroRight />
                        </div>
                    </div>
                </div>
            </div>

            <Quote />

            {/* Introduction */}
            <div className="relative mb-30">
                <div className="container mx-auto pt-[1450px] md:pt-[450px] px-4">
                    <div className="flex justify-center mb-12">
                        <h1 className="font-serif uppercase inline-block pb-2 border-b-4 text-3xl md:text-4xl font-bold text-center">
                            Introduction
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_2.5fr] gap-8 md:gap-12">
                        {/* About Me Section */}
                        <AboutMe />

                        {/* Skills Section */}
                        <Skills />
                    </div>
                </div>
                {/* Make motion divs responsive */}
                <motion.div
                    className="absolute w-[300px] md:w-[880px] h-[300px] md:h-[880px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-100 right-[50] md:right-[100] opacity-40"
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
                <motion.div
                    className="absolute w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] bottom-[-50] left-[0] opacity-40"
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
            </div>
        </>
    );
}
