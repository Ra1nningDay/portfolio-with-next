import SkillCard from "./SkillCard";
import {
    FaPhp,
    FaLaravel,
    FaPython,
    FaReact,
    FaNextJs,
    FaJs,
    FaBootstrap,
    FaDocker,
    FaGithub,
    FaDatabase,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiPostman,
    SiNextdotjs,
    SiJquery,
} from "react-icons/si";

const skillsData = {
    backend: [
        { skill: "PHP", percentage: 85, icon: <FaPhp className="text-2xl" /> },
        {
            skill: "Laravel",
            percentage: 80,
            icon: <FaLaravel className="text-2xl" />,
        },
        {
            skill: "Python",
            percentage: 20,
            icon: <FaPython className="text-2xl" />,
        },
    ],
    frontend: [
        {
            skill: "React",
            percentage: 60,
            icon: <FaReact className="text-2xl" />,
        },
        {
            skill: "Next",
            percentage: 20,
            icon: <SiNextdotjs className="text-2xl" />,
        },
        {
            skill: "JavaScript",
            percentage: 50,
            icon: <FaJs className="text-2xl" />,
        },
        {
            skill: "jQuery",
            percentage: 70,
            icon: <SiJquery className="text-2xl" />,
        },
        {
            skill: "Tailwind",
            percentage: 40,
            icon: <SiTailwindcss className="text-2xl" />,
        },
        {
            skill: "Bootstrap",
            percentage: 90,
            icon: <FaBootstrap className="text-2xl" />,
        },
    ],
    tools: [
        {
            skill: "MySQL",
            percentage: 80,
            icon: <FaDatabase className="text-2xl" />,
        },
        {
            skill: "Git/GitHub",
            percentage: 100,
            icon: <FaGithub className="text-2xl" />,
        },
        {
            skill: "Docker",
            percentage: 30,
            icon: <FaDocker className="text-2xl" />,
        },
        {
            skill: "Postman",
            percentage: 60,
            icon: <SiPostman className="text-2xl" />,
        },
    ],
};

const colorScheme = {
    backend: "bg-black",
    frontend: "bg-black",
    tools: "bg-black",
};

export default function Skills() {
    const renderSkillSection = (title, skills, colorClass) => (
        <div className="mb-8 bg-white border-4 z-10 border-black p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300">
            <h2 className="text-2xl font-mono font-bold uppercase tracking-wider mb-6 pb-2 border-b-4 border-black">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.skill}
                        skill={skill.skill}
                        percentage={skill.percentage}
                        color={colorClass}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col">
            {renderSkillSection(
                "Backend Development",
                skillsData.backend,
                colorScheme.backend
            )}
            {renderSkillSection(
                "Frontend Development",
                skillsData.frontend,
                colorScheme.frontend
            )}
            {renderSkillSection(
                "Database & Tools",
                skillsData.tools,
                colorScheme.tools
            )}
        </div>
    );
}
