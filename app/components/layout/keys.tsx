import React from "react";
import Link from "next/link";

const Keys = () => {

    const navItems = [
        { text: "Art", href: "/" },
        { text: "Business", href: "/about" },
        { text: "ChatBot", href: "/services" },
        { text: "Code", href: "/contact" },
        { text: "Crypto", href: "/blog" },
        { text: "Cooking", href: "/blog" },
        { text: "Design", href: "/portfolio" },
        { text: "Education", href: "/team" },
        { text: "Finance", href: "/careers" },
        { text: "Gaming", href: "/faq" },
        { text: "Legal", href: "/privacy" },
        { text: "Marketing", href: "/terms" },
        { text: "Seucrity", href: "/support" },
        { text: "Sport", href: "/support" },
        { text: "Translation", href: "/support" },
        { text: "Video", href: "/support" },
    ];

    return (
        <div className="relative w-full h-auto flex flex-col items-center justify-center gap-6">
            {/* Erste Zeile mit 3 Navs */}
            <div className="flex justify-center gap-4">
                {navItems.slice(0, 4).map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-lg text-text-light dark:text-text-dark font-bold hover:text-text-lightHover dark:hover:text-text-darkHover px-4 py-2 border border-gray-300 rounded-full hover:bg-bg-lightBorder2nd transition-all duration-200"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>

            {/* Zweite Zeile mit 5 Navs */}
            <div className="flex justify-center gap-4">
                {navItems.slice(4, 10).map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-lg text-text-light dark:text-text-dark font-bold hover:text-text-lightHover dark:hover:text-text-darkHover px-4 py-2 border border-gray-300 rounded-full hover:bg-bg-lightBorder2nd transition-all duration-200"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>

            {/* Dritte Zeile mit 4 Navs */}
            <div className="flex justify-center gap-4">
                {navItems.slice(10, 14).map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="ttext-lg text-text-light dark:text-text-dark font-bold hover:text-text-lightHover dark:hover:text-text-darkHover px-4 py-2 border border-gray-300 rounded-full hover:bg-bg-lightBorder2nd transition-all duration-200"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Keys;