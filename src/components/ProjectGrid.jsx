"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "CareBridge",
        image: "/projects/carebridge.png",
        description:
            "Carebridge - A platform connecting elderly individuals with caregivers through GPS-based search, providing a space for health volunteers (VHVs) to record elderly health assessments, and featuring a forum for sharing caregiving knowledge and advice.",
        technologies: ["PHP", "Laravel", "MySQL"],
        sysmtem: [
            "Role-based Authentication",
            "Application Caregivers",
            "GPS-based Caregiver Search",
            "Dashboard Management",
            "Forum & Comment System",
            "Health Check Logging",
            "Chat, Notifications",
        ],
    },
    {
        id: 2,
        title: "Modern Architecture",
        image: "/project2.jpg",
        description: "A showcase of modern building designs.",
    },
    {
        id: 3,
        title: "Skyscraper View",
        image: "/project3.jpg",
        description: "A unique perspective of high-rise buildings.",
    },
    {
        id: 4,
        title: "Mountain Landscape",
        image: "/project4.jpg",
        description: "A breathtaking view of the mountains.",
    },
    {
        id: 5,
        title: "Minimalist House",
        image: "/project5.jpg",
        description: "A clean and modern house design.",
    },
    {
        id: 6,
        title: "Cyber Security",
        image: "/project6.jpg",
        description: "A deep dive into the world of cyber security.",
    },
];

export default function ProjectGrid() {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <div className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={gridRef}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Title */}
                    <motion.div
                        className="flex justify-center mb-12"
                        variants={itemVariants}
                    >
                        <h1 className="font-mono uppercase inline-block pb-2 border-b-4 border-black text-3xl md:text-4xl font-bold text-center">
                            Projects
                        </h1>
                    </motion.div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="relative group bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300"
                                variants={itemVariants}
                            >
                                <div className="relative mb-4 border-2 border-black">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="font-mono text-xl font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="font-mono text-sm">
                                        {project.description}
                                    </p>
                                    <ul>
                                        {project.sysmtem?.map(
                                            (system, index) => (
                                                <li key={index}>
                                                    <p className="font-mono text-sm">
                                                        - {system}
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="font-mono text-xs bg-black text-white px-2 py-1"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <Link
                                        href={`/project/${project.id}`}
                                        className="inline-block mt-4 font-mono text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                                    >
                                        View Project →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
