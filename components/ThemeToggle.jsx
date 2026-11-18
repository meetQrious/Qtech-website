"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b2b]/50 group ${
        theme === "light"
          ? "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 shadow-sm"
          : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 shadow-inner"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {mounted && theme === "light" ? (
          <Moon className="w-4 h-4 text-slate-700 transition-all duration-300 rotate-0 scale-100 group-hover:-rotate-12 group-hover:text-[#ff5a1f]" />
        ) : (
          <Sun className="w-4 h-4 text-[#ff8a48] transition-all duration-300 rotate-0 scale-100 group-hover:rotate-45 group-hover:text-amber-400" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

