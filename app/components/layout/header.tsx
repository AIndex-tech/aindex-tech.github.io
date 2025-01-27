// header

import Link from "next/link";
import ThemeToggle from "./themeToggle";
import SearchBar from "./searchBar";

export default function Header() {
    return (
        <header className="flex top-0 px-bt py-bt w-full border-b bg-gradient-to-r 
                        from-bg-light2nd via-blue-500/70 to-bg-light2nd 
                        dark:from-bg-dark2nd dark:via-blue-500/30 dark: dark:to-bg-dark2nd">
            <div className="justify-between container items-center flex max-w mx-auto px-md">
                <div className="flex w-1/3 justify-start gap-bt items-center">

                    {/* Logo */}
                    <img src="/Logo_2.svg" alt="the AIndex logo" className="flex h-10 w-auto" />
                    {/* <h1 className="text-lg leading-tight font-bold">
                        ＡＩｎｄｅｘ
                        *Discover the AI future. At your fingerti: Anytime, anywhere.*
                    </h1> */}
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
                <div className="flex-grow w-1/3 justify-center">
                    <SearchBar />
                </div>
                <div className="flex w-1/3 justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
