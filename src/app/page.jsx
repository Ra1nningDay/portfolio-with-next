"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Dynamic imports for non-critical components
const Quote = dynamic(() => import("../components/Quote"));
const Skills = dynamic(() => import("../components/Skills"));
const ProjectGrid = dynamic(() => import("../components/ProjectGrid"));

// Keep critical components with regular imports
import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import AboutMe from "../components/AboutMe";

export default function Home() {
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
        <>
            <div className="border-b-1 pt-20 pb-12 md:pb-40 relative">
                <Available />
                {/* Hero Section */}
                <div className="container mx-auto md:px-4 md:pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <HeroLeft img="/hero.jpg" />
                        <div className="flex justify-center flex-col">
                            <HeroRight />
                        </div>
                    </div>
                </div>

                {/* Background animations */}
                <motion.div
                    className="absolute w-[500px] h-[500px] bg-radial-[at_25%_25%] to-75% rounded-full rounded-bl-4xl from-[#dddddd] top-0 right-20 opacity-40"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 0.4,
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        scale: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />
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
            </div>

            <Suspense fallback={<div className="h-40" />}>
                <Quote />
            </Suspense>

            {/* Introduction Section */}
            <Suspense fallback={<div className="h-screen" />}>
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
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
                <ProjectGrid />
            </Suspense>
        </>
    );
}
