"use client";

import dynamic from "next/dynamic";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = dynamic(() => import("../components/Skills"));

import AboutMe from "../components/AboutMe";

export default function () {
    const introRef = useRef(null);
    const isInView = useInView(introRef, {
        once: true,
        margin: "0px",
        amount: 0.2,
    });

    const introVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };
    return (
        <div className="relative">
            <motion.div
                ref={introRef}
                className="container mx-auto pt-[1450px] md:pt-[480px] px-4"
                variants={introVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="flex justify-center mb-12"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                        },
                    }}
                >
                    <h1 className="font-mono uppercase inline-block pb-2 border-b-4 text-3xl md:text-4xl font-bold text-center">
                        Introduction
                    </h1>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-[2fr_2.5fr] gap-8 md:gap-12"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            },
                        }}
                    >
                        <AboutMe />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            },
                        }}
                    >
                        <Skills />
                    </motion.div>
                </motion.div>
            </motion.div>
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
    );
}
