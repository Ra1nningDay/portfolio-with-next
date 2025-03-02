"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const fullText = "Hi I'm Plam";
    const typingSpeed = 120; // ความเร็วพิมพ์ (ms)
    const eraseSpeed = 80; // ความเร็วลบ (ms)
    const pauseTime = 1200; // เวลาหยุดก่อนลบ (ms)
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        const currentSpeed = isDeleting ? eraseSpeed : typingSpeed;

        if (!isDeleting) {
            timeout = setTimeout(() => {
                setText((prev) => fullText.slice(0, prev.length + 1));
                if (text === fullText) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }, currentSpeed);
        } else {
            timeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                if (text === "") {
                    setIsDeleting(false);
                }
            }, currentSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting]);

    return (
        <>
            <div className="mt-4 flex justify-end  md:mt-10">
                {/* ข้อความที่มี fade in และ slide up */}
                <h1 className="p-2  rounded-l-4xl text-black border-2 inline-block w-auto text-lg md:text-2xl font-semibold sticky animate-fade-slide">
                    <span className="inline-block me-2 w-3 h-3 bg-red-500 rounded-full animate-pulse-smooth mb-0.5"></span>
                    Available
                </h1>
            </div>

            <div className="container mx-auto pb-12 px-0 md:px-4 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-between">
                        {/* รูปภาพที่มี zoom in เมื่อโหลด */}
                        <div className="mt-10 p-2 border-4 border-black border-dashed bg-white relative animate-zoom-in">
                            <div className="absolute inset-0 border-4 border-white border-solid shadow-[4px_4px_0px_black]"></div>
                            <img
                                className="w-full h-[300px] md:h-[500px] object-cover grayscale-40"
                                src="/plamthis.png"
                                alt="Retro Art"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center flex-col">
                        <h1 className="text-4xl mb-5 font-semibold text-center md:text-left text-gray-800">
                            {text}
                            <span className="animate-blink">|</span>
                        </h1>
                        <h2 className="text-6xl mb-8 text-center md:text-left text-gray-600 animate-slide-right">
                            Passionate to create Websites both Front-end and
                            Backend
                        </h2>

                        <div className="flex justify-center md:justify-start">
                            <a
                                href="/contact"
                                className="border-2 font-semibold p-3 rounded-3xl hover:bg-gray-200 hover:border-gray-400 transition duration-300 ease-in-out animate-hover-scale"
                            >
                                More About Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                /* | กระพริบเหมือน cursor */
                @keyframes blink {
                    50% {
                        opacity: 0;
                    }
                }
                .animate-blink {
                    display: inline-block;
                    width: 8px;
                    animation: blink 0.8s infinite;
                }

                /* ปรับแต่งสำหรับจุดสีแดง */
                @keyframes pulse-smooth {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.3);
                        opacity: 0.6;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-pulse-smooth {
                    animation: pulse-smooth 1.5s infinite ease-in-out;
                }

                /* Fade in & Slide up สำหรับข้อความ */
                @keyframes fadeSlide {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-slide {
                    animation: fadeSlide 1s ease-out forwards;
                }

                /* Zoom in สำหรับรูปภาพ */
                @keyframes zoomIn {
                    0% {
                        transform: scale(0.95);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-zoom-in {
                    animation: zoomIn 0.8s ease-out forwards;
                }

                /* Slide left สำหรับหัวข้อ */
                @keyframes slideLeft {
                    0% {
                        transform: translateX(-30px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-left {
                    animation: slideLeft 1s ease-out forwards;
                }

                /* Slide right สำหรับข้อความรอง */
                @keyframes slideRight {
                    0% {
                        transform: translateX(30px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-right {
                    animation: slideRight 1s ease-out forwards;
                }

                /* Hover scale สำหรับปุ่ม More About Me */
                @keyframes hoverScale {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .animate-hover-scale:hover {
                    animation: hoverScale 0.5s ease-in-out;
                }
            `}</style>
        </>
    );
}
