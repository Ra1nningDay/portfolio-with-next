"use client";

import { motion } from "framer-motion";

export default function Quote() {
    const likes = [
        {
            topic: "Reading",
            img: "/open-book.png",
            description:
                "Reading things like novels, manga, manhwa, and books has been a part of my life for as long as I can remember. It has taken up about 60% of my time, aside from focusing on my future. Writing novels and entering science contests were some of the most fun times.",
        },
        {
            topic: "Working Out",
            img: "/dumbbell.png",
            description:
                "Some people say working out is tiring; you need time and energy for it. But for me, it has become a breath of fresh air in my routine. It's not only about health but also about the mind and attitude.",
        },
        {
            topic: "Coding",
            img: "/keyboard.png",
            description:
                "I used to think coding is hard But in the end, it was the bad environment that taught me it doesn't matter where I am; it's all about what I really need to do and want to succeed at. Coding isn't just about creating something; it's an experience.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
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
        <div className="absolute w-full mt-[-10px] md:mt-[-50px] pb-15">
            <div className="max-w-[1280px] lg:max-w-[1480px] mx-auto px-4 md:px-0">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {likes.map((like, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col items-center">
                                <motion.img
                                    src={like.img}
                                    alt={like.topic}
                                    className="w-[100px] h-[100px] mb-8"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.2 },
                                    }}
                                />
                                <motion.h1
                                    className="font-bold font-mono text-4xl mb-4 text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {like.topic}
                                </motion.h1>
                                <p className="font-mono text-center">
                                    "{like.description}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
