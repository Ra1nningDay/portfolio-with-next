export default function () {
    return (
        <div className="flex z-10 flex-col items-center h-fit p-4 md:p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 font-mono uppercase tracking-wider border-b-4 border-black pb-2">
                About Me
            </h1>

            <div className="relative mb-6">
                <div className="absolute inset-0 border-4 border-black rounded-full transform rotate-6"></div>
                <img
                    src="/plamthis.png"
                    alt="Profile Picture"
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full object-cover object-left border-4 border-black relative z-10 grayscale-25 hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <div className="relative max-w-2xl my-4">
                <div className="absolute -inset-2 bg-black/5 skew-y-1"></div>
                <p className="relative font-mono text-base md:text-lg leading-relaxed p-4 text-center">
                    Hi, I am{" "}
                    <strong className="font-black text-xl">Plam</strong> and I
                    am enthusiastic about{" "}
                    <span className="underline decoration-wavy decoration-black/40">
                        data and backend development
                    </span>
                    . I have experience working with{" "}
                    <span className="font-semibold">
                        PHP, Laravel, and React
                    </span>
                    .
                    <br />
                    <br />I wasn't interested in programming before, but working
                    with IT support sparked my curiosity. Now, I am eager to
                    apply my skills and contribute meaningfully.
                </p>
            </div>
            <div className="relative w-full my-4">
                <div className="absolute -inset-2 bg-black/5 skew-y-1"></div>
                <div className="relative p-4">
                    <h2 className="font-mono text-xl font-bold mb-4 text-center border-b-2 border-black pb-2">
                        Languages
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center border-2 border-black p-4">
                            <h3 className="font-mono font-bold mb-2">Thai</h3>
                            <span className="font-mono text-sm bg-black text-white px-3 py-1">
                                Native Speaker
                            </span>
                        </div>
                        <div className="flex flex-col items-center border-2 border-black p-4">
                            <h3 className="font-mono font-bold mb-2">
                                English
                            </h3>
                            <span className="font-mono text-sm bg-black text-white px-3 py-1">
                                B1 Intermediate
                            </span>
                            <span className="font-mono text-xs mt-2 text-center">
                                Daily Conversation
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
