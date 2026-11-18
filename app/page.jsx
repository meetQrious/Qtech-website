import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Activity,
  Lock
} from "lucide-react";
import CapabilitiesHorizon from "@/components/CapabilitiesHorizon";
import EngineeringDeliveryFlow from "@/components/EngineeringDeliveryFlow";
import ClientImpactShowcase from "@/components/ClientImpactShowcase";
import EnterpriseStandards from "@/components/EnterpriseStandards";
import TeamShowcase from "@/components/TeamShowcase";
import ExecutiveCta from "@/components/ExecutiveCta";

export const metadata = {
  title: "Qrious Tech | Enterprise Autonomous AI Systems & Cloud Engineering",
  description: "Qrious Tech Team LLP designs, trains, and deploys production-grade multi-agent AI systems, private foundation pipelines, and high-throughput cloud architectures.",
  keywords: "Enterprise AI Development, Autonomous AI Agents, Multi-Agent Swarms, LLM Fine-Tuning, High-Scale Cloud Engineering, RAG Systems, Qrious Tech",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#07080b] text-slate-900 dark:text-[#f8fafc] transition-colors duration-300">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 pointer-events-none"></div>

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Clean, Authoritative & Architectural)     */}
      {/* ========================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-32 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-zinc-300 shadow-sm dark:shadow-none mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6b2b] animate-pulse"></span>
            <span>ENTERPRISE COGNITIVE ARCHITECTURE // MULTI-AGENT SWARMS</span>
          </div>

          {/* Master Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06] mb-6 transition-colors">
            Where Intelligence <br className="hidden sm:inline" />
            Becomes <span className="text-[#ff5a1f] dark:text-[#ff8a48]">Infrastructure.</span>
          </h1>

          {/* Sophisticated Narrative Subhead */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal mb-10 transition-colors">
            Qrious Tech engineers production-grade multi-agent swarms, private foundation models, and resilient cloud architectures — transforming complex business operations into deterministic autonomous advantage.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
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
              <span>Explore Client Results</span>
            </Link>
          </div>

          {/* Enterprise Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-600 dark:text-zinc-400 mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>100% Private VPC Isolation</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a1f] dark:text-[#ff8a48]" />
              <span>Zero-Data-Retention Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>5-Day Rapid Sprint Onboarding</span>
            </div>
          </div>

          {/* Real Metrics Ticker Bar */}
          <div className="pt-10 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 font-mono max-w-4xl mx-auto text-center transition-colors">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">150+</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ff5a1f] dark:text-[#ff8a48]">14.8x</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Average Client ROI</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">&lt; 120ms</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">P95 Inference Latency</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">99.99%</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Architecture SLA</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE CAPABILITIES HORIZON (4 Strategic Pillars)        */}
      {/* ========================================================= */}
      <CapabilitiesHorizon />

      {/* ========================================================= */}
      {/* 3. ENGINEERING DELIVERY FLOW (Step-by-Step Methodology)   */}
      {/* ========================================================= */}
      <EngineeringDeliveryFlow />

      {/* ========================================================= */}
      {/* 4. CLIENT IMPACT SHOWCASE (Verified Case Studies)         */}
      {/* ========================================================= */}
      <ClientImpactShowcase />

      {/* ========================================================= */}
      {/* 5. ENTERPRISE STANDARDS (Guarantees & Governance)         */}
      {/* ========================================================= */}
      <EnterpriseStandards />

      {/* ========================================================= */}
      {/* 6. TEAM SHOWCASE (Strength in Unity, Success in Teamwork) */}
      {/* ========================================================= */}
      <TeamShowcase />

      {/* ========================================================= */}
      {/* 7. EXECUTIVE CALL TO ACTION                              */}
      {/* ========================================================= */}
      <ExecutiveCta />

    </div>
  );
}
