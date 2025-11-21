"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "minimalist" | "neobrutalist" | "gamer";
type Mode = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    mode: Mode;
    setTheme: (theme: Theme) => void;
    setMode: (mode: Mode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("minimalist");
    const [mode, setMode] = useState<Mode>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load from localStorage
        const savedTheme = localStorage.getItem("theme") as Theme;
        const savedMode = localStorage.getItem("mode") as Mode;

        if (savedTheme) setTheme(savedTheme);
        if (savedMode) setMode(savedMode);
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setMode("dark");
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        // Apply Theme
        if (theme === "minimalist") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", theme);
        }

        // Apply Mode
        if (mode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // Save to localStorage
        localStorage.setItem("theme", theme);
        localStorage.setItem("mode", mode);
    }, [theme, mode, mounted]);

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
