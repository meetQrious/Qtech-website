"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export default function CaseStudySpotlight() {
  const featured = [
    {
      id: "fitmindai",
      title: "FitMind AI: Multi-Agent Personal Training & Biometric Feedback",
      category: "Autonomous Multi-Agent AI",
      heroDesc: "Architected a dual-agent architecture with a real-time biometric feedback loop, reducing workout plateauing and personalizing nutrition in real-time.",
      kpis: [
        { val: "100%", lbl: "Real-time Adaptation" },
        { val: "4.8★", lbl: "User Satisfaction" }
      ],
      technologies: ["Multi-Agent Swarm", "PyTorch", "FastAPI", "Vector RAG"]
    },
    {
      id: "migraflow",
      title: "Migraflow: AI-Powered Database Migration & Schema Mapping",
      category: "AI Data Platform",
      heroDesc: "Engineered an autonomous AST translation agent capable of migrating complex SQL schemas to modern distributed databases with zero data loss.",
      kpis: [
        { val: "0 OOM", lbl: "Memory Errors" },
        { val: "12x", lbl: "Migration Velocity" }
      ],
      technologies: ["Python", "AST Parsing", "PostgreSQL", "Docker"]
    },
    {
      id: "papervisor",
      title: "Papervisor: AI-Powered Academic Assessment & Synthesis",
      category: "Generative EdTech Platform",
      heroDesc: "Deployed fine-tuned LLM agents with strict hallucination checks for automated multi-format exam generation and curriculum mapping.",
      kpis: [
        { val: "85%", lbl: "Drafting Time Reduction" },
        { val: "99.8%", lbl: "Syllabus Alignment" }
      ],
      technologies: ["Claude 3.5", "Next.js", "Python", "Vector Store"]
    }
  ];

  return (
    <section className="py-28 relative bg-[#07090e] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Enterprise Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Impact. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Quantifiable Results.</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Explore how we have engineered autonomous systems, accelerated database migrations, and transformed operations for fast-growing companies.
            </p>
          </div>

          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-sm font-semibold transition-all group shrink-0"
          >
            <span>View All 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-400" />
          </Link>
        </div>

        {/* 3 Featured Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <Link
              key={cs.id}
              href={`/case-study/${cs.id}`}
              className="group rounded-3xl p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] hover:-translate-y-1.5"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-orange-400 transition-colors">
                    Read Story →
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors line-clamp-2">
                  {cs.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {cs.heroDesc}
                </p>
              </div>

              <div>
                {/* Quantified KPIs Row */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#090c14] border border-white/[0.06] mb-5">
                  {cs.kpis.map((kpi, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-orange-400 font-mono">
                        {kpi.val}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {kpi.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {cs.technologies.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

