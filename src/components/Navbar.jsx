import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="">
            <div className="container mx-auto">
                <div className="flex justify-between py-4 items-center px-4 ">
                    <div>
                        <ul className="flex items-end gap-5">
                            <Link href="/">
                                <h1 className="text-2xl font-bold">
                                    RainningDay
                                </h1>
                            </Link>
                            <Link href="/bio">
                                <span className="font-semibold text-lg">
                                    Bio
                                </span>
                            </Link>
                            <Link href="/projects">
                                <span className="font-semibold text-lg">
                                    Projects
                                </span>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <Link href="/contact">
                            <span className="border-1 p-3 rounded-3xl hover:bg-gray-300">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
