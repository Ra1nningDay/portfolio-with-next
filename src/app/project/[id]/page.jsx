const projects = [
    {
        id: 1,
        title: "Care Bridge",
        description: "test",
        techonologies: ["PHP", "Laravel", "JavaScript"],
    },
];

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.id == params.id);

    if (!project) return <h1>Not Found</h1>;

    return (
        <div className="min-h-screen pt-[80px]">
            <div className="container mx-auto px-4">
                {/* Changed grid to stack on mobile and tablet */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 relative">
                    {/* Left Panel */}
                    <div className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] p-4 lg:p-6 overflow-y-auto">
                        <div className="space-y-6 lg:space-y-8">
                            <div>
                                <h1 className="font-mono text-3xl lg:text-4xl font-bold border-b-4 border-black pb-2">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-mono text-xl lg:text-2xl font-bold">
                                    Description
                                </h2>
                                <p className="font-mono text-sm lg:text-base">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="border-0 lg:border-x border-black min-h-screen p-4 lg:p-6 relative z-10">
                        <div className="space-y-4 lg:space-y-6">
                            <img
                                src="/project-main.jpg"
                                className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover border-4 border-black"
                                alt={project.title}
                            />
                            <div className="space-y-4 lg:space-y-6">
                                <img
                                    src="/project-detail-1.jpg"
                                    className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover border-4 border-black"
                                    alt="Detail 1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] p-4 lg:p-6 overflow-y-auto">
                        <div className="space-y-4">
                            <h2 className="font-mono text-xl lg:text-2xl font-bold border-b-4 border-black pb-2">
                                Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techonologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="font-mono text-xs lg:text-sm bg-black text-white px-3 py-1 hover:bg-white hover:text-black border-2 border-black transition-colors duration-300 cursor-pointer"
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
