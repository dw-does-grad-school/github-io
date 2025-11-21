"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
    const { theme, setTheme, mode, toggleMode } = useTheme();

    return (
        <div className="flex flex-col gap-4 p-4 border border-border rounded-(--radius-theme) bg-card text-card-foreground shadow-sm theme-shadow transition-all duration-300">
            <div>
                <h3 className="text-sm font-semibold mb-2 opacity-70 uppercase tracking-wider">Theme</h3>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setTheme("minimalist")}
                        className={`px-3 py-2 text-left text-sm rounded-(--radius-theme) transition-colors ${theme === "minimalist"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary hover:text-secondary-foreground"
                            }`}
                    >
                        Minimalist
                    </button>
                    <button
                        onClick={() => setTheme("neobrutalist")}
                        className={`px-3 py-2 text-left text-sm rounded-(--radius-theme) transition-colors ${theme === "neobrutalist"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary hover:text-secondary-foreground"
                            }`}
                    >
                        Neobrutalist
                    </button>
                    <button
                        onClick={() => setTheme("gamer")}
                        className={`px-3 py-2 text-left text-sm rounded-(--radius-theme) transition-colors ${theme === "gamer"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary hover:text-secondary-foreground"
                            }`}
                    >
                        Gamer
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-2 opacity-70 uppercase tracking-wider">Mode</h3>
                <button
                    onClick={toggleMode}
                    className="w-full px-3 py-2 text-sm border border-border rounded-(--radius-theme) hover:bg-secondary hover:text-secondary-foreground transition-colors flex items-center justify-between"
                >
                    <span>{mode === "light" ? "Light" : "Dark"}</span>
                    <span className="text-lg">{mode === "light" ? "☀️" : "🌙"}</span>
                </button>
            </div>
        </div>
    );
}
