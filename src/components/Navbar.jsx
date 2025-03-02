import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-1">
            <div className="container mx-auto">
                <div className="flex justify-between py-4 items-center px-4 ">
                    <div className="flex items-end gap-6">
                        <Link href="/">
                            <h1 className="text-2xl font-bold">
                                🚀RainningDay
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
                    <div className="flex items-end">
                        <Link href="/contact">
                            <span className="border-1 font-semibold p-3 rounded-3xl hover:bg-black hover:text-[#fefeff] hover:shadow-sm">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
