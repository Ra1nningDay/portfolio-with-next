import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Ra1nningDay Portfolio",
    description: "welcome to my website!!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" href="/hero.jpg" as="image" />
                {/* Add preconnect for any external resources */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
            >
                <Navbar />

                <main className="flex-grow-1 relative">{children}</main>
            </body>
        </html>
    );
}
