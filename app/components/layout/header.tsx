// header

import Link from "next/link";
import ThemeToggle from "./themeToggle";
import SearchBar from "./searchBar";

export default function Header() {
    return (
        <header className="flex top-0 px-bt py-bt w-full border-b border-b-bg-darkBorder bg-gray-900 bg-gradient-to-r from-[#000000] via-blue-500/30 to-[#000000]">
            <div className="flex justify-between container items-center max-w">
                <div className="flex justify-start bg-yellow-200">
                    <div className="flex gap-bt">
                        <h1 className="text-lg leading-tight font-bold">
                            ＡＩｎｄｅｘ
                            {/*Discover the AI future. At your fingerti: Anytime, anywhere.*/}
                        </h1>
                        {/* Navigation */}
                        <nav>
                            <ul className="flex gap-bt">
                                <li>
                                    <Link href="/about">About </Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex justify-center">
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
