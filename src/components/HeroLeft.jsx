import { motion } from "framer-motion";

export default function HeroLeft() {
    return (
        <div className="flex flex-col justify-between px-4 md:px-0">
            {/* รูปภาพที่กลืนกับพื้นหลัง */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mt-10 p-2 bg-transparent"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b border-4 border-black 
                                shadow-[4px_4px_0px_black] from-transparent opacity-60"
                ></div>
                <img
                    className="w-full h-[300px] md:h-[550px] object-cover mix-blend-multiply 
                                transition-all duration-500"
                    src="/hero.jpg"
                    alt="Retro Art"
                    width={500}
                    height={500}
                />
            </motion.div>
        </div>
    );
}
