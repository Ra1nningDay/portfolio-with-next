"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import Quote from "../components/Quote";
import Skills from "../components/Skills";

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

            {/* This */}
            <div className="relative mb-30">
                <div className="container mx-auto pt-[450px]">
                    <div className="flex justify-center mb-12">
                        <h1 className="font-serif uppercase inline-block pb-2 border-b-4 text-4xl font-bold">
                            Introduce
                        </h1>
                    </div>
                    <div className="grid grid-cols-[2fr_2.5fr] gap-12">
                        {/* About Me Section */}
                        <div className="flex z-10 flex-col items-center h-fit p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300">
                            <h1 className="text-3xl font-bold mb-6 font-mono uppercase tracking-wider border-b-4 border-black pb-2">
                                About Me
                            </h1>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 border-4 border-black rounded-full transform rotate-6"></div>
                                <img
                                    src="/plamthis.png"
                                    alt="Profile Picture"
                                    className="w-[350px] h-[350px] rounded-full object-cover border-4 border-black relative z-10 grayscale-25 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="relative max-w-2xl">
                                <div className="absolute -inset-2 bg-black/5 skew-y-1"></div>
                                <p className="relative font-mono text-lg leading-relaxed p-4 text-center">
                                    Hi, I am{" "}
                                    <strong className="font-black text-xl">
                                        Plam
                                    </strong>{" "}
                                    and I am enthusiastic about{" "}
                                    <span className="underline decoration-wavy decoration-black/40">
                                        data and backend development
                                    </span>
                                    . I have experience working with{" "}
                                    <span className="font-semibold">
                                        PHP, Laravel, and React
                                    </span>
                                    .
                                    <br />
                                    <br />I wasn't interested in programming
                                    before, but working with IT support sparked
                                    my curiosity. Now, I am eager to apply my
                                    skills and contribute meaningfully.
                                </p>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <Skills />
                    </div>
                </div>
                <motion.div
                    className="absolute w-[880px] h-[880px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-100 right-[100] opacity-40"
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
                    className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] bottom-[-50] left-[0] opacity-40"
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
