"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Workflow, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Server, 
  RefreshCw, 
  Lock, 
  Layers,
  Zap
} from "lucide-react";

export default function AiModernizationPartnerPage() {
  const [activeStep, setActiveStep] = useState(0);

  const modernizationPillars = [
    {
      title: "Domain-Specific Model Adaptation",
      tag: "Fine-Tuning & Distillation",
      desc: "Transform open-weight foundation models (Llama 3, Mistral, DeepSeek) into proprietary corporate assets. We adapt models on your enterprise manuals, contracts, CRM histories, and technical specs with zero data leakage.",
      icon: Cpu,
      stats: "4.8x Throughput Boost",
      highlights: [
        "Parameter-Efficient Fine-Tuning (PEFT / QLoRA)",
        "Synthetic domain dataset generation & filtering",
        "Direct Preference Optimization (DPO / RLHF)",
        "Strict intellectual property retention"
      ]
    },
    {
      title: "Legacy Monolith to AI-Native Architecture",
      tag: "Full-Stack Refactoring",
      desc: "Deconstruct sluggish monolithic applications and legacy backend silos into high-throughput microservices, event-driven message buses, and asynchronous AI agent execution pipelines.",
      icon: RefreshCw,
      stats: "70% Lower Compute Costs",
      highlights: [
        "Monolith-to-microservice decomposition",
        "Kafka & RabbitMQ event streaming integration",
        "Containerization with Docker & Kubernetes orchestration",
        "CI/CD zero-downtime blue/green deployment"
      ]
    },
    {
      title: "Private Enterprise RAG & Context Engine",
      tag: "Vector & Graph Memory",
      desc: "Consolidate fragmented SharePoint, Salesforce, Confluence, and PostgreSQL silos into a unified semantic search and retrieval fabric with role-based document access controls.",
      icon: Database,
      stats: "99.4% Factual Precision",
      highlights: [
        "Hybrid dense-sparse retrieval (pgvector + BM25)",
        "Hierarchical parent-child chunking architectures",
        "Active hallucination guardrails & citation anchors",
        "Sub-100ms P95 semantic search latency"
      ]
    },
    {
      title: "Autonomous Copilots & Task Dispatchers",
      tag: "Workflow Automation",
      desc: "Embed purpose-built AI copilots directly into your operational software, enabling employees and customers to execute complex business tasks through natural language dialogs.",
      icon: Workflow,
      stats: "65% Time-to-Resolution Cut",
      highlights: [
        "Multi-turn conversational context memory",
        "Deterministic JSON schema tool execution",
        "Human-in-the-loop review triggers for high-risk actions",
        "Telemetry tracking for model accuracy & drift"
      ]
    }
  ];

  const phases = [
    {
      phase: "Phase 01",
      title: "AI Readiness & Architecture Audit",
      duration: "Weeks 1 - 2",
      description: "We perform a comprehensive audit of your existing codebase, database schemas, compute budget, and unstructured data assets to produce a concrete AI modernization matrix."
    },
    {
      phase: "Phase 02",
      title: "Domain Data Calibration & Model PoC",
      duration: "Weeks 3 - 4",
      description: "We clean, tokenize, and curate proprietary training data, establish private vector memory indexes, and deploy an initial domain-adapted model in an isolated testing sandbox."
    },
    {
      phase: "Phase 03",
      title: "System Integration & Shadow Deployment",
      duration: "Weeks 5 - 7",
      description: "We wire the AI pipelines into your production backends in shadow mode, validating inference accuracy against live traffic and measuring latency under load."
    },
    {
      phase: "Phase 04",
      title: "Production Cutover & Continuous Tuning",
      duration: "Week 8+",
      description: "Full production cutover with 99.99% architecture SLA, automated retraining feedback loops, and 24/7 telemetry monitoring by our dedicated engineering pod."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capability // Custom Foundation Models & Modernization</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Modernize Legacy Systems with <br />
            <span className="text-[#ff8a48]">Custom Foundation Models</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We partner with enterprises to transform dated monolithic software into agile, AI-native platforms. From fine-tuning private LLMs on proprietary corporate data to architecting air-gapped RAG pipelines, we modernize your tech stack with zero business disruption.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Request Modernization Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Our Delivery Methodology</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-Data Leakage Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Air-Gapped Private Cloud</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>5-Day Rapid Sprint Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SOC2 & HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {/* 2. Modernization Pillars */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Core Modernization Vectors
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineering Pillars of Enterprise Modernization
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              We eliminate technical debt while infusing mission-critical intelligence across your infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernizationPillars.map((p, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48]">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {p.stats}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#ff8a48] uppercase mb-1">{p.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{p.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Architecture Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Audit this vector</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The 4-Phase Modernization Roadmap */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Execution Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Predictable 8-Week AI Modernization Sprints
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Our structured roadmap minimizes operational risk, ensuring your production systems remain 100% stable throughout the modernization cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((ph, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] hover:border-[#ff8a48]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#ff8a48]">{ph.phase}</span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.04]">
                      {ph.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{ph.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{ph.description}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Deliverable: Architecture Signoff
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
              <span>Modernize with Confidence</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Start your enterprise AI modernization today.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Book a technical consultation with our engineering directors to evaluate your legacy architecture and review custom model adaptation feasibility.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Book Modernization Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View Migration Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
