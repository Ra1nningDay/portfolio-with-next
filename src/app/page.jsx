"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Dynamic imports for non-critical components
const Quote = dynamic(() => import("../components/Quote"));

const ProjectGrid = dynamic(() => import("../components/ProjectGrid"));

// Keep critical components with regular imports
import HeroRight from "../components/HeroRight";
import Available from "../components/Available";
import HeroLeft from "../components/HeroLeft";
import Introduce from "../components/Introduce";

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
                <Introduce />
            </Suspense>

            <Suspense fallback={<div className="h-screen" />}>
                <ProjectGrid />
            </Suspense>
        </>
    );
}
