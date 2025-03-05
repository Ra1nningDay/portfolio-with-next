"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Care Bridge",
        description: "test",
        technologies: ["PHP", "Laravel", "JavaScript"],
    },
];

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.id == params.id);

    if (!project) return <h1 className="text-3xl font-bold">Not Found</h1>;

    return (
        <div className="min-h-screen pt-[80px]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 relative">
                    {/* Left Panel */}
                    <ScrollArea.Root className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] p-4 lg:p-6 overflow-auto">
                        <div className="space-y-6 lg:space-y-8">
                            <h1 className="text-4xl font-bold border-b-4 border-black pb-2">
                                {project.title}
                            </h1>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">
                                    Description
                                </h2>
                                <p className="text-lg">{project.description}</p>
                            </div>
                        </div>
                    </ScrollArea.Root>

                    {/* Center Content */}
                    <div className="border-0 lg:border-x border-black min-h-screen p-4 lg:p-6">
                        <div className="space-y-4 lg:space-y-6">
                            <Image
                                src="/project-main.jpg"
                                width={800}
                                height={400}
                                className="w-full object-cover border-4 border-black"
                                alt={project.title}
                            />
                            <Image
                                src="/project-detail-1.jpg"
                                width={800}
                                height={300}
                                className="w-full object-cover border-4 border-black"
                                alt="Detail 1"
                            />
                        </div>
                    </div>

                    {/* Right Panel */}
                    <ScrollArea.Root className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] p-4 lg:p-6 overflow-auto">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b-4 border-black pb-2">
                                Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border border-black rounded-md text-sm font-medium bg-black text-white hover:bg-white hover:text-black cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollArea.Root>
                </div>
            </div>
        </div>
    );
}
