import SocialBubble from "./SocialBubble";
import { useState, useEffect } from "react";

export default function HeroRight() {
    const fullText = "Hi I'm Plam.";
    const typingSpeed = 120; // ความเร็วพิมพ์ (ms)
    const eraseSpeed = 80; // ความเร็วลบ (ms)
    const pauseTime = 3000; // เวลาหยุดก่อนลบ (ms)
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
            <h1 className="text-4xl font-mono mb-10 mt-0 md:mt-10 z-10 font-semibold text-center md:text-left text-gray-800">
                {text}
                <span className="animate-blink">|</span>
            </h1>
            <h2 className="text-4xl px-4 md:px-0 lg:text-[65px] md:text-7xl mb-15 font-serif tracking-normal antialiased text-center md:text-left text-gray-600 animate-slide-right">
                Passionate to{" "}
                <span className="font-[roboto] text-black uppercase">
                    create
                </span>{" "}
                <br />
                <span className="font-[roboto] text-black uppercase">
                    efficiency
                </span>{" "}
                both Frontend & Backend
            </h2>
            <div className="flex justify-center md:justify-start">
                <a
                    href="/contact"
                    className="bg-black border-1 font-mono text-white font-semibold px-7 py-4 hover:bg-[#f0f0f0] hover:border-1 hover:border-black hover:text-black"
                >
                    More About Me ＞
                </a>
            </div>

            <SocialBubble />

            <style jsx>{`
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
