"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Code2, ExternalLink } from "lucide-react";
import portfolioData from "@/public/data/portfolio-projects.json";

export default function PortfolioPage() {
  const [activeDomain, setActiveDomain] = useState("all");

  const domains = [
    { id: "all", label: "All Work", count: portfolioData.length },
    { id: "finance", label: "Finance & Banking", count: portfolioData.filter(d => d.domain === "finance").length },
    { id: "healthcare", label: "Healthcare", count: portfolioData.filter(d => d.domain === "healthcare").length },
    { id: "ecommerce", label: "E-Commerce", count: portfolioData.filter(d => d.domain === "ecommerce").length },
    { id: "workforce", label: "Workforce & HR", count: portfolioData.filter(d => d.domain === "workforce").length },
    { id: "community", label: "Community & Social", count: portfolioData.filter(d => d.domain === "community").length },
  ];

  const filteredProjects = portfolioData.filter((item) => {
    return activeDomain === "all" || item.domain === activeDomain;
  });

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Engineered systems, <br />
            <span className="text-[#ff8a48]">delivered to production.</span>
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Explore 16 flagship production platforms engineered for high-growth startups and global enterprises across finance, healthcare, SaaS, and workforce automation.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-white/[0.08] mb-10">
          {domains.map((tab) => {
            const isActive = activeDomain === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isActive 
                    ? "bg-[#ff6b2b] text-white font-bold shadow-md shadow-[#ff6b2b]/20" 
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-black/30 text-white" : "bg-white/[0.06] text-zinc-400"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group p-6 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-[#ff6b2b]/50 hover:bg-[#10131d] transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Image Preview Banner */}
                {item.image && (
                  <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#07080b] border border-white/[0.06] mb-5 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10">
                      {item.year || "2024"}
                    </div>
                  </div>
                )}

                {/* Header Category */}
                <div className="text-[11px] font-mono text-[#ff8a48] uppercase tracking-wider mb-2">
                  {item.category || item.originalContext}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff8a48] transition-colors">
                  {item.name}
                </h3>

                {/* Summary */}
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-6">
                  {item.summary}
                </p>

                {/* Tech Pills */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                        +{item.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-zinc-400">
                  Domain: <span className="text-zinc-200 capitalize">{item.domain}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff8a48] group-hover:translate-x-1 transition-transform">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}
