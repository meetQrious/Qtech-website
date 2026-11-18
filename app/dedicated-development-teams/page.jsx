"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  GitBranch, 
  Cpu, 
  Code2, 
  Building2,
  XCircle
} from "lucide-react";

export default function DedicatedDevelopmentTeamsPage() {
  const [activePod, setActivePod] = useState(0);

  const pods = [
    {
      title: "AI & Autonomous Systems Pod",
      tag: "Agent Swarms & RAG",
      desc: "A pre-assembled engineering pod designed to architect, fine-tune, and deploy multi-agent LLM systems, custom vector retrieval pipelines, and private VPC inference infrastructure.",
      composition: [
        "1x Principal AI Architect",
        "2x Senior Python / LangGraph Engineers",
        "1x Vector DB & Data Pipeline Specialist",
        "1x MLOps & Kubernetes Engineer"
      ],
      idealFor: "Enterprises needing to deploy private LLMs, autonomous workflows, and RAG architectures in under 60 days."
    },
    {
      title: "Cloud-Native Full-Stack Pod",
      tag: "Next.js & Microservices",
      desc: "High-velocity web engineering team capable of building high-throughput modern SaaS platforms, real-time dashboards, and distributed cloud backends with sub-100ms latency.",
      composition: [
        "1x Lead Software Architect",
        "2x Senior Next.js / React Engineers",
        "1x Distributed Backend Engineer (Node/Go/FastAPI)",
        "1x QA Automation & CI/CD Specialist"
      ],
      idealFor: "B2B SaaS companies accelerating product feature velocity or migrating monolithic apps to microservices."
    },
    {
      title: "Mobile & Edge Engineering Pod",
      tag: "Cross-Platform iOS & Android",
      desc: "Dedicated mobile architects and developers building 60-120 FPS React Native and Flutter applications with offline-first synchronization and on-device neural processing.",
      composition: [
        "1x Mobile Engineering Lead",
        "2x Senior React Native / Flutter Developers",
        "1x Native iOS (Swift) / Android (Kotlin) Specialist",
        "1x Mobile QA Automation Engineer"
      ],
      idealFor: "Brands requiring polished consumer or enterprise mobile apps with strict biometric and offline guarantees."
    },
    {
      title: "Legacy Modernization Pod",
      tag: "Refactoring & Cloud Cutover",
      desc: "Specialized systems engineers tasked with decoupling legacy ERPs, monolithic databases, and legacy backend code into maintainable, containerized cloud microservices.",
      composition: [
        "1x Enterprise Modernization Lead",
        "2x Senior Backend & Refactoring Engineers",
        "1x Database Architect (SQL / PostgreSQL migration)",
        "1x Cloud Infrastructure & DevOps Lead"
      ],
      idealFor: "Mid-market enterprises burdened by technical debt and looking for a zero-downtime cloud modernization path."
    }
  ];

  const comparisonRows = [
    {
      metric: "Time to First Sprint",
      traditional: "6 to 12 weeks of bureaucratic delays",
      qtech: "5 Business Days rapid onboarding"
    },
    {
      metric: "Talent Quality",
      traditional: "Bait-and-switch junior developers",
      qtech: "Top 3% senior engineers with architect oversight"
    },
    {
      metric: "Communication",
      traditional: "Siloed account managers & filtered updates",
      qtech: "Direct Slack, daily async standups, and GitHub PRs"
    },
    {
      metric: "Code & IP Governance",
      traditional: "Vague licensing & offshore ambiguity",
      qtech: "100% IP ownership assigned to you from Day 1"
    },
    {
      metric: "Engineering Standards",
      traditional: "High technical debt, rushed deliverables",
      qtech: "Strict PR review gates, automated CI/CD, 90%+ test coverage"
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Users className="w-3.5 h-3.5" />
            <span>Capability // Dedicated Engineering Pods</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Dedicated AI & Engineering Pods <br />
            <span className="text-[#ff8a48]">Embedded Directly into Your Team</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Scale your engineering capacity instantly with battle-tested senior engineers, AI architects, and cloud specialists. Zero body-shopping, zero overhead, and guaranteed code governance from Day 1.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Build Your Engineering Pod</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Review Delivery Methodology</span>
            </Link>
          </div>

          {/* SLA Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>5-Day Rapid Sprint Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Time-Zone Alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% Day-1 IP Assignment</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Direct GitHub & Slack Access</span>
            </div>
          </div>
        </div>

        {/* 2. Specialized Engineering Pod Formats */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Pod Archetypes
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Pre-Assembled Pods for High-Velocity Execution
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Choose a dedicated pod structure tailored specifically to your technological priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pods.map((pod, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[#ff8a48] border border-[#ff8a48]/20">
                      {pod.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{pod.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{pod.desc}</p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                    <div className="text-xs font-mono uppercase text-zinc-400 mb-2">Pod Composition:</div>
                    {pod.composition.map((member, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{member}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-500 italic pt-4 mt-4 border-t border-white/[0.04]">
                    Best for: {pod.idealFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Pod Template #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Reserve this pod</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Comparison Table vs Traditional Staffing */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Comparison
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why High-Growth Companies Choose QTech Pods
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              We reject body-shopping models and opaque staffing agencies in favor of radical transparency and engineering discipline.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-zinc-400 font-mono">
                  <th className="py-4 pr-6 font-semibold">Evaluation Criteria</th>
                  <th className="py-4 px-6 font-semibold text-zinc-500">Traditional IT Outsourcing</th>
                  <th className="py-4 pl-6 font-semibold text-[#ff8a48]">Qrious Tech Co-Dev Pods</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 pr-6 font-medium text-white">{row.metric}</td>
                    <td className="py-4 px-6 text-zinc-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 pl-6 text-emerald-300 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.qtech}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c0e16] via-[#111422] to-[#0c0e16] border border-[#ff6b2b]/30 shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/10 border border-[#ff6b2b]/20 text-xs font-mono text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immediate Pod Availability</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Assemble your dedicated engineering pod in 5 business days.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Schedule an alignment call with our engineering directors. Review engineer CVs, conduct technical interviews, and kick off your first sprint next week.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Request Pod Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>Explore Client Results</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
