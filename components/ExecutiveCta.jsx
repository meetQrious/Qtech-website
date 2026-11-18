"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, Zap } from "lucide-react";

export default function ExecutiveCta() {
  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-slate-50 dark:bg-[#07080b] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden text-center transition-colors duration-300">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff6b2b]/10 to-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ff6b2b]"></span>
          <span>Enterprise Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6 transition-colors">
          Ready to engineer your <br />
          <span className="text-[#ff5a1f] dark:text-[#ff8a48]">autonomous AI advantage?</span>
        </h2>

        <p className="text-slate-600 dark:text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 transition-colors">
          Schedule a confidential 30-minute technical discovery session with our Principal AI Architects. We will evaluate feasibility, data hygiene, and vector infrastructure for your workflows.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-pill-primary"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/case-studies"
            className="btn-pill-secondary"
          >
            <span>View Client Case Studies</span>
          </Link>
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
            <span>Strict Mutual NDA First</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Zero Data Retention</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#ff5a1f] dark:text-[#ff8a48]" />
            <span>5-Day Sprint Onboarding</span>
          </div>
        </div>

      </div>
    </section>
  );
}
