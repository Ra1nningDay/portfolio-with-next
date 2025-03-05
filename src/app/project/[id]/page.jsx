"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Care Bridge",
        images: [
            "/projects/carebridge.png",
            "/projects/about.png",
            "/projects/caregiver.png",
            "/projects/notify.png",
            "/projects/profile.png",
            "/projects/edit-profile.png",
        ],
        ref: ["/projects/ref/img1.png"],
        description:
            "Care Bridge is a platform designed to connect elderly individuals with suitable caregivers. It features a self-health assessment tool and serves as a space for storing health data from village health volunteers (VHV) who conduct health checks for the elderly. This enables easier tracking of health statuses, offering valuable insights into the health of elderly individuals, and provides access to historical health records for improved care.",
        technologies: ["PHP", "Laravel", "JavaScript"],
    },
];

export default function ProjectPage({ params }) {
    const { id } = use(params);

    const project = projects.find((p) => p.id == id);

    if (!project) return <h1 className="text-3xl font-bold">Not Found</h1>;

    return (
        <div className="min-h-screen pt-[80px]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 relative">
                    {/* Left Panel */}
                    <div className="lg:sticky lg:top-[80px] lg:max-h-[calc(100vh-100px)] overflow-y-auto">
                        <div className="space-y-6 lg:space-y-8 p-4 lg:p-6">
                            <h1 className="text-4xl font-serif font-bold border-b-4 border-black pb-2">
                                {project.title}
                            </h1>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-mono font-semibold">
                                    Description
                                </h2>
                                <p className="text-lg font-mono">
                                    {project.description}
                                </p>
                            </div>
                            <div className="spacey--3">
                                <h3 className="text-2xl font-mono font-semibold">
                                    References
                                </h3>
                                <Image />
                            </div>
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="border-0 lg:border-x border-black min-h-screen p-4 lg:p-6">
                        <div className="space-y-4 lg:space-y-6">
                            {project.images?.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    width={800}
                                    height={400}
                                    className="w-full object-cover border-4 border-black"
                                    alt={project.title}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="lg:sticky lg:top-[80px] lg:max-h-[calc(100vh-100px)] overflow-y-auto">
                        <div className="space-y-4 p-4 lg:p-6">
                            <h1 className="text-2xl font-serif font-semibold border-b-4 border-black pb-2">
                                Technologies
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border border-black rounded-md text-sm font-medium bg-black text-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
