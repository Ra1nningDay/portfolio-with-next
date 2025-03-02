export default function Navbar() {
    return (
        <nav className="flex justify-between h-[5rem] items-center px-4">
            <div>
                <h1 className="">Hello</h1>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li>หน้าหลัก</li>
                    <li>เกี่ยวกับ</li>
                    <li>ติดต่อ</li>
                </ul>
            </div>
        </nav>
    );
}
