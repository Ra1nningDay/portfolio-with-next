export default function SkillCard({ skill, percentage, color, icon }) {
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-black/5 skew-y-1 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="relative p-4 bg-white border-2 border-black">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-black">{icon}</span>
                        <span className="font-mono font-medium">{skill}</span>
                    </div>
                    <span className="font-mono font-bold">{percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 border-2 border-black">
                    <div
                        className={`h-full ${color} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
