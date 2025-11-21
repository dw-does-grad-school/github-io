"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function SideBar() {
    return (
        <aside className="w-64 h-screen sticky top-0 flex flex-col border-r border-border bg-card text-card-foreground p-6 transition-colors duration-300">
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">Portfolio.</h1>
                <p className="text-sm text-muted-foreground opacity-70">Welcome to my world.</p>
            </div>

            <nav className="flex-1 space-y-2">
                <Link
                    href="/"
                    className="block px-4 py-2 rounded-(--radius-theme) hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                    Home
                </Link>
                <Link
                    href="#projects"
                    className="block px-4 py-2 rounded-(--radius-theme) hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                    Projects
                </Link>
                <Link
                    href="#about"
                    className="block px-4 py-2 rounded-(--radius-theme) hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                    About
                </Link>
                <Link
                    href="#contact"
                    className="block px-4 py-2 rounded-(--radius-theme) hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                    Contact
                </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-border">
                <ThemeSwitcher />
            </div>
        </aside>
    );
}