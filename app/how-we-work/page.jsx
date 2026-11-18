"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Workflow, 
  Users, 
  Cpu, 
  Boxes, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  GitBranch, 
  Zap, 
  Lock,
  Layers,
  Terminal
} from "lucide-react";

export default function HowWeWorkPage() {
  const [activeStage, setActiveStage] = useState(0);

  const engagementModels = [
    {
      title: "Dedicated Engineering Pods",
      category: "Staff Augmentation & Co-Dev",
      desc: "Scale your engineering velocity immediately with high-caliber senior architects, full-stack developers, and MLOps specialists embedded directly into your sprint boards and daily standups.",
      href: "/dedicated-development-teams",
      icon: Users,
      badge: "5-Day Onboarding",
      features: [
        "100% time-zone alignment with your internal team",
        "Direct access in your Slack, Linear, and GitHub repositories",
        "Rigorous internal architecture review and QA governance",
        "Zero long-term lock-in with flexible monthly scaling"
      ]
    },
    {
      title: "SaaS Development Partner",
      category: "Full Product Engineering",
      desc: "Transform your software vision into a market-ready multi-tenant SaaS platform. We handle everything from data schemas and frontend design systems to Stripe billing and SOC2 compliance.",
      href: "/saas-development-partner",
      icon: Boxes,
      badge: "MVP in 8 Weeks",
      features: [
        "Multi-tenant tenant isolation and PostgreSQL RLS",
        "Usage-based metering, Stripe subscriptions, and checkout",
        "Enterprise SAML 2.0 Single Sign-On and Directory Sync",
        "Production deployment on Kubernetes with 99.99% SLA"
      ]
    },
    {
      title: "AI Modernization Partner",
      category: "Enterprise AI Transformation",
      desc: "Modernize legacy enterprise software with custom foundation models, private RAG pipelines, and autonomous agent swarms tailored specifically to your domain data.",
      href: "/ai-modernization-partner",
      icon: Cpu,
      badge: "Zero Data Leakage",
      features: [
        "Domain fine-tuning on proprietary contracts and documentation",
        "High-precision hybrid dense-sparse vector retrieval engines",
        "Air-gapped private VPC deployment with zero third-party leakage",
        "Autonomous agent workflows that eliminate manual operational toil"
      ]
    }
  ];

  const stages = [
    {
      num: "01",
      phase: "Architecture Assessment",
      title: "Problem Synthesis & Feasibility Matrix",
      desc: "We analyze your business workflows, data readiness, latency targets, and compute budget to formulate a quantitative AI feasibility matrix before writing a single line of code.",
      deliverables: [
        "Quantitative ROI projection & token economics model",
        "Data hygiene & vectorization feasibility audit",
        "Model architecture recommendation (Proprietary vs Open-Weight)",
        "Zero-trust security & regulatory compliance blueprint"
      ]
    },
    {
      num: "02",
      phase: "Data Pipeline Engineering",
      title: "Custom RAG & Memory Topology",
      desc: "We ingest enterprise documents, legacy databases, and API streams into an air-gapped vector fabric with dense-sparse rerankers and role-based access control.",
      deliverables: [
        "Hierarchical document chunking & contextual header enrichment",
        "PostgreSQL pgvector / Pinecone low-latency vector indexes",
        "Automated sync pipelines with incremental delta indexing",
        "Strict Row-Level Security (RLS) enforcement per user role"
      ]
    },
    {
      num: "03",
      phase: "Agent Swarm Development",
      title: "Multi-Agent Deliberation & Tool Calling",
      desc: "We architect hierarchical agent swarms powered by LangGraph StateGraph, wiring secure API tools to internal ERP, CRM, and SQL data sources with automated self-correction.",
      deliverables: [
        "Specialized planner, critic, and actuator state-machine nodes",
        "Deterministic JSON schema validation for all tool dispatches",
        "Fallback heuristics and loop-prevention execution guards",
        "Full OpenTelemetry distributed trace logging"
      ]
    },
    {
      num: "04",
      phase: "Security & Governance",
      title: "Enterprise Shield & Guardrail Enforcement",
      desc: "We deploy an enterprise guardrail shield that intercepts every interaction to detect hallucinations, prevent prompt injections, tokenize PII/PHI, and cryptographically log transactions.",
      deliverables: [
        "Real-time PII & PHI redaction/tokenization filters",
        "Semantic similarity fact-checking against source references",
        "SOC2 Type II and HIPAA compliance verification",
        "Automated penetration and jailbreak fuzzing tests"
      ]
    },
    {
      num: "05",
      phase: "Scale & SLA Operations",
      title: "Private VPC Hardening & 99.99% Architecture SLA",
      desc: "We deploy the runtime into your sovereign AWS/GCP cloud with autoscaling vLLM clusters, blue/green canary deployments, and 24/7 telemetry monitoring.",
      deliverables: [
        "Terraform Infrastructure-as-Code (IaC) deployment",
        "Multi-region autoscaling with sub-100ms P95 latency",
        "Automated drift detection and model retraining triggers",
        "24/7 dedicated engineering support and incident escalation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodology // Engineering Rigor & Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            How We Take Systems from <br />
            <span className="text-[#ff8a48]">Concept to Mission-Critical Scale</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Our 5-stage architectural methodology guarantees predictability, strict enterprise governance, and zero operational surprises. Choose the engagement model tailored to your velocity and strategic priorities.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Client Results</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>5-Day Rapid Sprint Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Day-1 IP Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict Mutual NDA First</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Direct Slack & GitHub Access</span>
            </div>
          </div>
        </div>

        {/* 2. Three Flexible Engagement Models */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Engagement Formats
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Three Ways We Partner with Your Team
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Whether you need to augment existing sprint capacity, build a full product from scratch, or modernize legacy systems with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((m, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48]">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {m.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#ff8a48] uppercase mb-1">{m.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{m.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                    {m.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04]">
                  <Link 
                    href={m.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#ff8a48] transition-colors"
                  >
                    <span>Explore this model in depth</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The 5-Stage Architectural Delivery Lifecycle */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Execution Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our 5-Stage Engineering Lifecycle
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              From mathematical feasibility analysis to 99.99% SLA production operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2.5">
              {stages.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    activeStage === i
                      ? "bg-white/[0.08] border-[#ff8a48]/50 text-white shadow-lg"
                      : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#ff8a48]">{st.num}</span>
                    <div className="text-left">
                      <div className="text-[11px] font-mono text-zinc-500 uppercase">{st.phase}</div>
                      <div className="font-sans font-semibold text-sm">{st.title}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 ${activeStage === i ? "text-[#ff8a48]" : "text-zinc-600"}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-[#07080b] p-8 rounded-3xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-[#ff8a48] font-bold">
                    Stage {stages[activeStage].num} of 05 // {stages[activeStage].phase}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Guaranteed Deliverables
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {stages[activeStage].title}
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                  {stages[activeStage].desc}
                </p>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-zinc-400 mb-2">Technical Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stages[activeStage].deliverables.map((deliv, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ff8a48] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Enterprise Architecture Lifecycle</span>
                <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-semibold">
                  <span>Start with Stage 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-slate-50 dark:from-[#0c0e16] dark:via-[#111422] dark:to-[#0c0e16] border border-orange-200/80 dark:border-[#ff6b2b]/30 shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden transition-all duration-300">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-[#ff6b2b]/10 border border-orange-200 dark:border-[#ff6b2b]/20 text-xs font-mono text-[#ff5a1f] dark:text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Predictable Execution Guaranteed</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Ready to kick off your project with our senior architects?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              Book a 45-minute discovery consultation. We will analyze your requirements, recommend the ideal engagement model, and provide a transparent quote.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 hover:bg-slate-50 transition-all shadow-sm dark:shadow-none"
              >
                <span>Explore Client Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
