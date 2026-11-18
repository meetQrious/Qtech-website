"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, ArrowRight, Sparkles, LayoutGrid, Rows3 } from "lucide-react";

export default function TeamShowcase() {
  const [viewMode, setViewMode] = useState("stream"); // "stream" | "grid"

  // 88 unique engineer photo IDs in /public/images/staff-headshots/
  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const row2 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
  const row3 = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88];

  const allStaff = Array.from({ length: 88 }, (_, i) => i + 1);

  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-slate-50 dark:bg-[#07080b] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>The Builders Behind The Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
              Strength in unity, <br />
              <span className="text-slate-500 dark:text-zinc-400 font-normal">success in teamwork.</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed transition-colors">
              Behind every high-throughput vector pipeline and autonomous multi-agent swarm is our cohesive engineering collective of 88+ full-time AI architects, distributed systems engineers, and cloud specialists.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Switcher Pill */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.08] text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode("stream")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "stream" 
                    ? "bg-[#ff6b2b] text-white font-semibold shadow-sm" 
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Rows3 className="w-3.5 h-3.5" />
                <span>Stream</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "grid" 
                    ? "bg-[#ff6b2b] text-white font-semibold shadow-sm" 
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All 88 Wall</span>
              </button>
            </div>

            <Link
              href="/crew"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-zinc-100 transition-all shadow-md shrink-0"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Real Metrics Badges */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 pb-8 text-xs font-mono text-slate-600 dark:text-zinc-400 border-b border-slate-200 dark:border-white/[0.06] mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-800 dark:text-zinc-200 font-semibold">88+ Full-Time Engineers</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
            <span className="text-[#ff5a1f] dark:text-[#ff8a48]">✓</span>
            <span>100% In-House Technical Talent</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
            <span className="text-[#ff5a1f] dark:text-[#ff8a48]">✓</span>
            <span>Zero Outsourced Body-Shopping</span>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 1. STREAM VIEW (3 Infinite Flowing Marquee Rows with Edge Fade) */}
      {/* ============================================================== */}
      {viewMode === "stream" && (
        <div className="relative w-full overflow-hidden space-y-3 pt-2">
          
          {/* Subtle Left & Right Gradient Shadows */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-[#07080b] via-slate-50/80 dark:via-[#07080b]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 dark:from-[#07080b] via-slate-50/80 dark:via-[#07080b]/80 to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 (Moving Left) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-3">
              {[...row1, ...row1].map((id, index) => (
                <div 
                  key={`r1-${id}-${index}`} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/[0.08] hover:border-[#ff6b2b]/70 hover:scale-105 transition-all duration-300 shrink-0 relative group shadow-sm hover:shadow-md"
                >
                  <img
                    src={`/images/staff-headshots/${id}.webp`}
                    alt={`Qrious Tech Engineer #${id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                    <span className="text-[9px] font-mono font-semibold text-white truncate">
                      Tech #{id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Moving Right) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex gap-3">
              {[...row2, ...row2].map((id, index) => (
                <div 
                  key={`r2-${id}-${index}`} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/[0.08] hover:border-[#ff6b2b]/70 hover:scale-105 transition-all duration-300 shrink-0 relative group shadow-sm hover:shadow-md"
                >
                  <img
                    src={`/images/staff-headshots/${id}.webp`}
                    alt={`Qrious Tech Engineer #${id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                    <span className="text-[9px] font-mono font-semibold text-white truncate">
                      Tech #{id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 (Moving Left) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-3">
              {[...row3, ...row3].map((id, index) => (
                <div 
                  key={`r3-${id}-${index}`} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/[0.08] hover:border-[#ff6b2b]/70 hover:scale-105 transition-all duration-300 shrink-0 relative group shadow-sm hover:shadow-md"
                >
                  <img
                    src={`/images/staff-headshots/${id}.webp`}
                    alt={`Qrious Tech Engineer #${id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                    <span className="text-[9px] font-mono font-semibold text-white truncate">
                      Tech #{id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* 2. FULL GRID VIEW (Original High-Density 88-Member Photo Wall) */}
      {/* ============================================================== */}
      {viewMode === "grid" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#0b0d14] border border-slate-200 dark:border-white/[0.08] shadow-xl dark:shadow-2xl">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2 sm:gap-2.5">
              {allStaff.map((id) => (
                <div
                  key={`grid-${id}`}
                  className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-[#07080b] border border-slate-200 dark:border-white/[0.06] hover:border-[#ff6b2b] hover:scale-110 transition-all duration-200 relative group cursor-pointer shadow-sm"
                >
                  <img
                    src={`/images/staff-headshots/${id}.webp`}
                    alt={`Qrious Tech Engineer #${id}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1">
                    <span className="text-[8px] font-mono font-bold text-white truncate">
                      #{id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sub-Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <Link
          href="/life-qtech"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-400 hover:text-[#ff5a1f] dark:hover:text-[#ff8a48] transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ff5a1f] dark:text-[#ff8a48]" />
          <span>Learn more about culture, hackathons, and celebrations in Life @ QTech</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

    </section>
  );
}
