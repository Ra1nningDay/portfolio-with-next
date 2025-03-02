"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ใช้ icon จาก lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-300 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* 🔥 Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold flex items-center gap-2"
                    >
                        🚀 RainningDay
                    </Link>

                    {/* 🏗️ Menu (Desktop) */}
                    <div className="hidden md:flex gap-6 items-center">
                        <Link
                            href="/bio"
                            className="text-lg hover:text-gray-600"
                        >
                            Bio
                        </Link>
                        <Link
                            href="/project"
                            className="text-lg hover:text-gray-600"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="border px-4 py-2 rounded-full hover:bg-gray-200 transition"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* 📱 Hamburger Button (Mobile) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* 📱 Menu (Mobile) */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-gray-300">
                        <Link
                            href="/bio"
                            className="text-lg hover:text-gray-600"
                        >
                            Bio
                        </Link>
                        <Link
                            href="/project"
                            className="text-lg hover:text-gray-600"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="border px-4 py-2 rounded-full hover:bg-gray-200 transition"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
