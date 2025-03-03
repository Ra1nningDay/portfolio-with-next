export default function Available() {
    return (
        <div className="mt-10 pb-10 flex justify-end">
            {/* ข้อความที่มี fade in และ slide up */}
            <h1 className="p-2 rounded-l-4xl font-mono border-r-0 text-black border-2 inline-block w-auto text-lg md:text-2xl font-semibold sticky top-0 animate-fade-slide">
                <span className="inline-block me-2 w-3 h-3 bg-green-500 rounded-full animate-pulse-smooth mb-0.5"></span>
                Available
            </h1>

            <style jsx>{`
                /* ปรับแต่งสำหรับจุดสีแดง */
                @keyframes pulse-smooth {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.3);
                        opacity: 0.6;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-pulse-smooth {
                    animation: pulse-smooth 1.5s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
