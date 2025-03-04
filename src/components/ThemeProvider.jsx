"use client";

import * as React from "react";
import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
    useEffect(() => {
        console.log(document.documentElement.classList);
    }, []);
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
