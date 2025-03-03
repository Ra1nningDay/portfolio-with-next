"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
            <div
                className={`flex max-w-screen top-0 border-1 z-11 font-mono lg:flex-start justify-between flex-no-wrap sticky w-full py-5 items-center px-4 bg-[#f2f2f2]
            `}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between gap-6">
                        <div className="lg:flex hidden gap-6 items-end">
                            <Link href="/" className="">
                                <h1 className="text-3xl font-bold ">
                                    🚀Ra1nningDay
                                </h1>
                            </Link>
                            <Link
                                href="/bio"
                                className="hover:border-b-2 transition"
                            >
                                <span className="text-lg">Bio</span>
                            </Link>
                            <Link
                                href="/project"
                                className="hover:border-b-2 transition"
                            >
                                <span className="text-lg">Projects</span>
                            </Link>
                        </div>

                        {/* เมนูที่สามารถ toggle ได้ */}
                        <div className="lg:flex hidden items-end">
                            <Link href="/contact" className="ms-auto">
                                <span className="border-2 font-semibold p-3 rounded-3xl hover:bg-black hover:border-2 hover:border-black hover:text-[#fefeff] hover:shadow-sm">
                                    Contact
                                </span>
                            </Link>
                        </div>

                        {/* ปุ่ม toggle สำหรับมือถือ */}
                        <Link href="/" className="me-5 lg:hidden">
                            <h1 className="text-2xl font-bold">
                                🚀RainningDay
                            </h1>
                        </Link>
                        <button
                            className="lg:hidden p-2 text-black"
                            onClick={() => setToggle(!isToggle)}
                        >
                            {isToggle ? "Close" : "Menu"}
                        </button>
                    </div>

                    {/* เมนูที่จะแสดงเมื่อคลิก toggle */}
                    <div
                        className={`lg:hidden ${
                            isToggle ? "block" : "hidden"
                        } mt-4`}
                    >
                        <Link
                            href="/bio"
                            className="block py-2 px-4 hover:bg-gray-200"
                        >
                            <span className="text-lg">Bio</span>
                        </Link>
                        <Link
                            href="/project"
                            className="block py-2 px-4 hover:bg-gray-200"
                        >
                            <span className="text-lg">Projects</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-2 px-4 hover:bg-gray-200"
                        >
                            <span className="text-lg">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
