"use client";

import React from "react";
import { ShieldCheck, Zap, Users, Lock, Award, CheckCircle2 } from "lucide-react";

export default function EnterpriseStandards() {
  const standards = [
    {
      icon: Lock,
      title: "Zero Data Retention Guarantee",
      desc: "Your proprietary code, transactional records, and user inputs never leave your isolated private VPC. We enforce strict contractual zero-retention policies with all model providers."
    },
    {
      icon: Zap,
      title: "Sub-100ms Inference Latency",
      desc: "Through continuous tensor quantization (AWQ/GPTQ), optimized KV-caching, and auto-scaling vLLM clusters, we achieve production response speeds that rival native APIs."
    },
    {
      icon: Users,
      title: "Dedicated Senior Engineering Pods",
      desc: "No junior body-shopping. We embed veteran Staff AI Engineers and Distributed Systems Architects directly into your sprint cycles with a 5-day rapid onboarding SLA."
    },
    {
      icon: ShieldCheck,
      title: "100% Client Intellectual Property",
      desc: "Every line of code, custom model adapter, vector database schema, and orchestration workflow is 100% owned by your enterprise under full perpetual commercial licensing."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-white dark:bg-[#090b11] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Qrious Tech Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
            Enterprise Governance <br />
            <span className="text-slate-500 dark:text-zinc-400 font-normal">Without Compromise.</span>
          </h2>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {standards.map((std, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0b0d14] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-md dark:shadow-none"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-[#ff5a1f] dark:text-[#ff8a48] mb-6 shadow-sm dark:shadow-none">
                  <std.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 leading-snug transition-colors">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed transition-colors">
                  {std.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
