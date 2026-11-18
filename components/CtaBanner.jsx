"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Calendar } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#05070c]">
      
      {/* Aurora Radial Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-orange-500/20 via-indigo-600/25 to-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center relative overflow-hidden">
          
          {/* Subtle Top Accent Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accelerate Your Transformation</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Architect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-indigo-400">Autonomous AI Advantage?</span>
          </h2>

          {/* Subtext */}
          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a confidential 30-minute discovery session with our Principal AI Architects. We will evaluate technical feasibility, model economics, and vector infrastructure for your workflows.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-600 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_45px_rgba(249,115,22,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              Explore Client Results
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              <span>Strict Mutual NDA First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>5-Day Sprint Onboarding</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

