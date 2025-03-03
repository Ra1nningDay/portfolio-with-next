import Image from "next/image";

export default function HeroLeft({ img }) {
    return (
        <div className="relative w-full h-[400px] md:h-[550px] border-4 border-black p-2 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300">
            <div className="relative w-full h-full overflow-hidden border-2 border-black">
                <Image
                    src={img}
                    alt="Hero Image"
                    fill
                    priority
                    className="object-cover grayscale-25 hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                />
            </div>
        </div>
    );
}
