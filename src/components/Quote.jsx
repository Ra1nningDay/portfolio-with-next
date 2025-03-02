export default function Quote() {
    const likes = [
        {
            topic: "Reading",
            img: "/open-book.png",
            description:
                "Reading things like novels, manga, manhwa, and books has been a part of my life for as long as I can remember. It has taken up about 60% of my time, aside from focusing on my future. Writing novels and entering science contests were some of the most fun times.",
        },
        {
            topic: "Working Out",
            img: "/dumbbell.png",
            description:
                "Some people say working out is tiring; you need time and energy for it. But for me, it has become a breath of fresh air in my routine. It's not only about health but also about the mind and attitude.",
        },
        {
            topic: "Coding",
            img: "/keyboard.png",
            description:
                "I used to think coing is hard But in the end, it was the bad environment that taught me it doesn't matter where I am; it's all about what I really need to do and want to succeed at. Coding isn't just about creating something; it's an experience.",
        },
    ];

    return (
        <div className="absolute w-full mt-[-80px] pb-15">
            <div className="max-w-[1480px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {likes.map((like, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 p-8 shadow-lg"
                        >
                            <div className="flex flex-col">
                                <img
                                    src={like.img}
                                    alt="User Photo"
                                    className="w-[100px] h-[100px] mb-8 rounded-full"
                                />
                                <h1 className="font-bold font-sans text-4xl mb-4">
                                    {like.topic}
                                </h1>
                                <p className="font-sans">
                                    "{like.description}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
