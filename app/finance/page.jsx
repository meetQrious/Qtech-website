"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Landmark, 
  ShieldCheck, 
  TrendingUp, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Activity, 
  Database,
  Server
} from "lucide-react";

export default function FinancePage() {
  const solutions = [
    {
      title: "Real-Time Fraud & Anomaly Detection",
      tag: "Sub-45ms Payment Telemetry",
      desc: "Deploy low-latency machine learning models that evaluate millions of payment transactions concurrently. Intercept anomalous charge patterns, synthetic identities, and account takeovers before settlement.",
      icon: ShieldCheck,
      metric: "< 45ms Decision Latency",
      features: [
        "Graph neural networks mapping complex fraud rings",
        "Sub-second behavioral biometric keystroke analysis",
        "Adaptive thresholding minimizing false positive declines",
        "Seamless webhook integration with Stripe, Adyen, & core gateways"
      ]
    },
    {
      title: "Algorithmic Credit Scoring & Risk Modeling",
      tag: "Explainable Risk Decisioning",
      desc: "Augment traditional credit bureau scoring with alternative banking telemetry, cash-flow velocity, and behavioral indicators. Deliver automated, auditable loan approvals in seconds with zero demographic bias.",
      icon: TrendingUp,
      metric: "+34% Approval Velocity",
      features: [
        "SHAP / LIME explainability models for FCRA regulatory audits",
        "Plaid & Open Banking automated bank statement ingestion",
        "Dynamic debt-service coverage ratio (DSCR) calculations",
        "Automated adverse action notice generation"
      ]
    },
    {
      title: "Immutable Core Ledgers & Reconciliation",
      tag: "Event-Sourced Financial Systems",
      desc: "Engineer fault-tolerant double-entry financial ledgers built on PostgreSQL and Kafka event sourcing. Ensure mathematical zero-drift balance consistency across multi-currency settlement accounts.",
      icon: Database,
      metric: "99.999% Ledger Consistency",
      features: [
        "Strict ACID double-entry accounting constraints",
        "Asynchronous automated multi-bank clearing reconciliation",
        "Cryptographically signed audit logs with tamper detection",
        "Micro-service architecture with multi-region failover"
      ]
    },
    {
      title: "Autonomous AML & Regulatory Compliance",
      tag: "Automated SAR Synthesis",
      desc: "Streamline Bank Secrecy Act (BSA) compliance. Our intelligent transaction monitoring agents flag suspicious structuring, synthesize SAR filing drafts for compliance officers, and conduct automated PEP/sanctions screening.",
      icon: Landmark,
      metric: "-70% Manual Review Hours",
      features: [
        "Automated FinCEN Suspicious Activity Report (SAR) drafting",
        "Global PEP & OFAC sanctions watchlist synchronization",
        "Automated KYC document extraction & biometric liveness matching",
        "Immutable cryptographic compliance audit archives"
      ]
    }
  ];

  const standards = [
    { title: "PCI-DSS Level 1", desc: "Engineered to satisfy highest payment card security standards" },
    { title: "SOC2 Type II", desc: "Rigorous verification of enterprise security and confidentiality" },
    { title: "ISO 27001", desc: "Comprehensive information security management governance" },
    { title: "Zero-Knowledge Cloud", desc: "End-to-end payload encryption with client-held HSM keys" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Landmark className="w-3.5 h-3.5" />
            <span>Industry Solution // Fintech & Banking</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Quantitative Intelligence & <br />
            <span className="text-[#ff8a48]">Mission-Critical Financial Systems</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We partner with leading fintechs and institutional financial services to engineer low-latency core ledgers, real-time AI fraud detection engines, algorithmic credit scoring, and compliance-hardened cloud platforms.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Fintech Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Banking Case Studies</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Sub-45ms Decision Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>PCI-DSS Level 1 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>SOC2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400 shrink-0" />
              <span>99.999% High Availability</span>
            </div>
          </div>
        </div>

        {/* 2. Solutions Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Fintech Capabilities
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineered for High-Frequency Integrity
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Zero tolerance for calculation drift, settlement lags, or security lapses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-emerald-400 border border-emerald-500/20">
                      {item.metric}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#ff8a48] uppercase mb-1">{item.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{item.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Fintech Solution #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss financial architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Regulatory Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Financial Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Institutional-Grade Financial Security Standards
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Our engineering adheres to global regulatory frameworks, ensuring seamless audits and banking partner approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-emerald-400/80">
                  Institutional Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c0e16] via-[#111422] to-[#0c0e16] border border-[#ff6b2b]/30 shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/10 border border-[#ff6b2b]/20 text-xs font-mono text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architect Modern Fintech</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to engineer your next-generation financial platform?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Book a confidential architecture session with our fintech engineering leads. We will review ledger integrity, fraud latency goals, and compliance requirements.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Fintech Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View Banking Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
