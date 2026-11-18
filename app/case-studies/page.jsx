"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Globe, Smartphone, BarChart3, Cloud, TrendingUp, Sparkles, Filter } from "lucide-react";
import caseStudiesData from "@/public/data/case-studies.json";

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All Work", count: caseStudiesData.length, icon: Sparkles },
    { id: "ai", label: "AI & Autonomous", count: caseStudiesData.filter(d => d.tab === "ai").length, icon: Bot },
    { id: "web", label: "Cloud & Web", count: caseStudiesData.filter(d => d.tab === "web").length, icon: Globe },
    { id: "mobile", label: "Mobile Apps", count: caseStudiesData.filter(d => d.tab === "mobile").length, icon: Smartphone },
    { id: "power-bi", label: "Data & BI", count: caseStudiesData.filter(d => d.tab === "power-bi").length, icon: BarChart3 },
    { id: "salesforce", label: "Salesforce CRM", count: caseStudiesData.filter(d => d.tab === "salesforce").length, icon: Cloud },
  ];

  const filteredStudies = caseStudiesData.filter((item) => {
    const matchesTab = activeTab === "all" || item.tab === activeTab;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.heroDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Engineering Deployments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Real systems. <br />
            <span className="text-[#ff8a48]">Measurable client impact.</span>
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Explore 37 verified engineering case studies. See how we architect multi-agent systems, migrate legacy databases, scale distributed backends, and automate mission-critical enterprise workflows.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[#ff6b2b] text-white font-bold shadow-md shadow-[#ff6b2b]/20" 
                      : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-black/30 text-white" : "bg-white/[0.06] text-zinc-400"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#ff6b2b] rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors font-mono"
            />
          </div>

        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((cs) => {
            const firstKpi = cs.kpis && cs.kpis[0] ? cs.kpis[0] : null;
            return (
              <Link
                key={cs.id}
                href={`/case-study/${cs.id}`}
                className="group p-6 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-[#ff6b2b]/50 hover:bg-[#10131d] transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Category & Metric Pill */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {cs.category}
                    </span>
                    {firstKpi && (
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#ff6b2b]/15 text-[#ff8a48] border border-[#ff6b2b]/25">
                        {firstKpi.val}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#ff8a48] transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-6">
                    {cs.heroDesc}
                  </p>
                </div>

                {/* Bottom Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  {firstKpi ? (
                    <span className="text-[11px] font-mono text-zinc-400 truncate">
                      ✓ {firstKpi.lbl}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400">
                      ✓ Production Verified
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff8a48] group-hover:translate-x-1 transition-transform shrink-0">
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-20 text-zinc-400 font-mono text-sm">
            No case studies found matching &quot;{searchQuery}&quot;.
          </div>
        )}

      </div>

    </div>
  );
}
