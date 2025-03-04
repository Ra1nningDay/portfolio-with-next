"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border-2 border-black rounded-md hover:bg-black dark:text-black hover:text-white transition-colors duration-300"
        >
            {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all " />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
