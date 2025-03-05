"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

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
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div
                className={`flex max-w-screen top-0 border-4 border-foreground bg-background z-11 
                font-mono lg:flex-start justify-between flex-no-wrap sticky w-full py-5 
                items-center px-4 transition-colors duration-300`}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between gap-6">
                        <div className="lg:flex hidden gap-6 items-end">
                            <Link href="/" className="">
                                <h1 className="text-3xl font-bold text-foreground">
                                    🚀Ra1nningDay
                                </h1>
                            </Link>
                            <Link
                                href="/bio"
                                className="hover:border-b-2 hover:border-foreground transition"
                            >
                                <span className="text-lg text-foreground">
                                    Bio
                                </span>
                            </Link>
                            <Link
                                href="/project"
                                className="hover:border-b-2 hover:border-foreground transition"
                            >
                                <span className="text-lg text-foreground">
                                    Projects
                                </span>
                            </Link>
                        </div>

                        {/* Toggle Menu */}
                        <div className="lg:flex justify-center hidden items-center">
                            <ModeToggle />
                            <Link href="/contact" className="ms-2">
                                <span
                                    className="text-foreground border-2 border-foreground 
                                font-semibold p-3 rounded-3xl hover:bg-foreground 
                                hover:text-background transition-colors duration-300"
                                >
                                    Contact
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <Link href="/" className="me-5 lg:hidden">
                            <h1 className="text-2xl font-bold text-foreground">
                                🚀RainningDay
                            </h1>
                        </Link>
                        <button
                            className="lg:hidden p-2 text-foreground"
                            onClick={() => setToggle(!isToggle)}
                        >
                            {isToggle ? "Close" : "Menu"}
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div
                        className={`lg:hidden ${
                            isToggle ? "block" : "hidden"
                        } mt-4`}
                    >
                        <Link
                            href="/bio"
                            className="block py-2 px-4 text-foreground hover:bg-foreground/10"
                        >
                            <span className="text-lg">Bio</span>
                        </Link>
                        <Link
                            href="/project"
                            className="block py-2 px-4 text-foreground hover:bg-foreground/10"
                        >
                            <span className="text-lg">Projects</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-2 px-4 text-foreground hover:bg-foreground/10"
                        >
                            <span className="text-lg">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
