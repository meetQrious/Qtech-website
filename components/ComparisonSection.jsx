"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, Award } from "lucide-react";

export default function ComparisonSection() {
  const points = [
    {
      feature: "Core AI Architecture",
      qrious: "Custom multi-agent topologies, domain fine-tuned open-weight models & deterministic RAG",
      traditional: "Superficial API wrappers using off-the-shelf endpoints with high prompt latency"
    },
    {
      feature: "Data Privacy & Isolation",
      qrious: "100% Private VPC deployment, zero data retention, automated PII sanitization",
      traditional: "Shared cloud endpoints without vector encryption or data provenance guarantees"
    },
    {
      feature: "Engineering Talent",
      qrious: "Elite, vetted Senior AI Architects & Staff Engineers embedded directly into your sprints",
      traditional: "Junior developer body-shopping with high attrition and bloated handovers"
    },
    {
      feature: "Production Readiness & SLAs",
      qrious: "99.99% uptime, OpenTelemetry observability, automated regression tests & sub-100ms P95",
      traditional: "Fragile proof-of-concepts that collapse under high-concurrency production load"
    },
    {
      feature: "Speed to Velocity",
      qrious: "5 business days from contract to productive sprint execution",
      traditional: "6 to 10 weeks of administrative onboarding and resource procurement delays"
    },
    {
      feature: "Code & IP Ownership",
      qrious: "100% client ownership of all proprietary code, weights, vectors, and documentation",
      traditional: "Proprietary vendor lock-in or ambiguous licensing frameworks"
    }
  ];

  return (
    <section className="py-28 relative bg-[#05070c] border-t border-white/[0.06] overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>The Qrious Tech Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Visionary Teams Choose Us Over <span className="text-slate-500">Generic IT Agencies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Enterprise AI transformation requires deep mathematical rigor, distributed systems expertise, and uncompromising security. Here is how we compare.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl border border-white/10 bg-[#090c14]/90 backdrop-blur-2xl overflow-hidden shadow-2xl">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 p-6 border-b border-white/[0.08] bg-white/[0.02] text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <div className="col-span-4 hidden md:block">Evaluation Metric</div>
            <div className="col-span-12 md:col-span-4 text-orange-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Qrious Tech AI Pods</span>
            </div>
            <div className="col-span-12 md:col-span-4 text-slate-500 hidden md:block">
              Traditional IT Outsourcers
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {points.map((pt, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-12 p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Metric Title */}
                <div className="col-span-12 md:col-span-4">
                  <span className="text-sm font-bold text-white block">
                    {pt.feature}
                  </span>
                </div>

                {/* Qrious Tech Card / Column */}
                <div className="col-span-12 md:col-span-4 p-4 rounded-xl bg-orange-500/[0.06] border border-orange-500/20">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-200 leading-relaxed font-medium">
                      {pt.qrious}
                    </span>
                  </div>
                </div>

                {/* Traditional Agency Column */}
                <div className="col-span-12 md:col-span-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-400 leading-relaxed">
                      {pt.traditional}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

