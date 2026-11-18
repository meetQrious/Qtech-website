"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Sparkles, 
  Terminal, 
  Layers, 
  Zap,
  Lock,
  Server
} from "lucide-react";

export default function AiMlDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      title: "Goal-Directed Multi-Agent Swarms",
      tag: "LangGraph StateGraph",
      desc: "Architect hierarchical agent topologies where specialized planner, researcher, critic, and actuator agents collaborate to resolve multi-step enterprise workflows with automated self-correction.",
      icon: Bot,
      metrics: "Sub-1.2s Decision Cycles",
      features: [
        "Stateful graph orchestration & checkpointing",
        "Deterministic fallback & loop-prevention guards",
        "Parallel tool calling across ERP, CRM, & SQL silos",
        "Continuous trace observability via OpenTelemetry"
      ]
    },
    {
      title: "Contextual RAG & Hybrid Vector Memory",
      tag: "Dense + Sparse Hybrid",
      desc: "Eliminate hallucinations with high-precision retrieval engines combining vector similarity (Pinecone, pgvector) with lexical BM25 rerankers for 99.9% accurate enterprise knowledge ingestion.",
      icon: Database,
      metrics: "99.4% Retrieval Precision",
      features: [
        "Semantic document chunking & contextual headers",
        "Cross-encoder reranking for maximum relevancy",
        "Role-based document access control (RBAC)",
        "Zero-data-leakage private VPC vector storage"
      ]
    },
    {
      title: "Domain Model Adaptation & Quantization",
      tag: "LoRA / QLoRA / vLLM",
      desc: "Fine-tune open-weights foundation models (Llama 3, Mistral, DeepSeek) on your proprietary datasets, quantized for ultra-low latency and minimal GPU compute footprint.",
      icon: Cpu,
      metrics: "4.8x Inference Throughput",
      features: [
        "Parameter-efficient fine-tuning (PEFT/LoRA)",
        "AWQ & FP8 quantized inference runtimes",
        "Air-gapped on-premise or sovereign cloud hosting",
        "Full intellectual property retention of weights"
      ]
    },
    {
      title: "Zero-Trust Enterprise Guardrail Shield",
      tag: "SOC2 & HIPAA Compliant",
      desc: "Comprehensive security layer that intercepts all prompts and completions to prevent prompt injections, enforce strict PII tokenization, and verify factual grounding before action dispatch.",
      icon: ShieldCheck,
      metrics: "100% Deterministic Policy",
      features: [
        "Real-time PII/PHI redaction & tokenization",
        "Prompt injection & jailbreak heuristic defenses",
        "Hallucination detection & factual consistency check",
        "Full cryptographic audit logging for compliance"
      ]
    }
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "Workflow Synthesis & Token Economics",
      desc: "We analyze target operational bottlenecks, quantify manual labor hours, model token costs, and formulate an algorithmic feasibility score before writing a single line of code."
    },
    {
      step: "02",
      title: "Knowledge Topology & Hybrid RAG PoC",
      desc: "We ingest enterprise knowledge silos, build semantic chunking pipelines, calibrate embedding models, and benchmark retrieval precision against real customer queries."
    },
    {
      step: "03",
      title: "Multi-Agent Topology & Tool Dispatch",
      desc: "We construct state machines with specialized reasoning pods, wire secure API tool calls to your backend systems, and enforce deterministic guardrails."
    },
    {
      step: "04",
      title: "Private VPC Hardening & Production SLA",
      desc: "We deploy the runtime inside your air-gapped AWS/GCP VPC with autoscaling vLLM clusters, 24/7 telemetry monitoring, and a 99.99% uptime guarantee."
    }
  ];

  const techStack = [
    "LangChain / LangGraph",
    "PyTorch",
    "vLLM",
    "FastAPI",
    "Pinecone",
    "PostgreSQL / pgvector",
    "Ray Distributed",
    "Docker & Kubernetes",
    "Llama 3 / Claude 3.5",
    "Hugging Face",
    "Triton Inference Server",
    "Prometheus / Grafana"
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="ambient-glow-top"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Bot className="w-3.5 h-3.5" />
            <span>Capability // Enterprise AI & Machine Learning</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Architecting Autonomous AI & <br />
            <span className="text-[#ff8a48]">Intelligent Multi-Agent Swarms</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We move enterprises beyond static LLM chatbots into production-grade autonomous systems: goal-directed agent swarms capable of multi-step reasoning, external tool execution, real-time database queries, and zero-hallucination verification.
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
              <span>Explore AI Case Studies</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Private VPC Isolation</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Sub-100ms P95 Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-Data-Retention SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full Weights & IP Ownership</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Terminal / Live Agent Inspection */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                qrious-agentic-runtime v3.4.1 // Live Autonomous Session
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Cluster State: Operational (4 Nodes Sync)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-5 space-y-3 font-mono text-xs">
              <div className="text-zinc-500 uppercase tracking-wider text-[11px]">Select Architecture Node</div>
              {capabilities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    activeTab === i
                      ? "bg-white/[0.08] border-[#ff8a48]/50 text-white shadow-lg"
                      : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <c.icon className={`w-4 h-4 ${activeTab === i ? "text-[#ff8a48]" : "text-zinc-500"}`} />
                    <span className="font-sans font-medium text-sm">{c.title}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">{c.tag}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#07080b] p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-[#ff8a48] font-semibold">
                    {capabilities[activeTab].tag}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                    {capabilities[activeTab].metrics}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {capabilities[activeTab].title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {capabilities[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {capabilities[activeTab].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Deterministic Execution Matrix</span>
                <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-semibold">
                  <span>Deploy this architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Engineering Delivery Lifecycle */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Methodology
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              From Mathematical Feasibility to Production Scale
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              We do not build flimsy prototype wrappers. Our 4-stage engineering lifecycle guarantees enterprise stability, cost predictability, and zero operational surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#ff8a48]/40 mb-4">
                    {s.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Sprint Milestone #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Production Tech Stack */}
        <div className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#ff8a48] mb-1">Ecosystem</div>
              <h3 className="text-xl font-bold text-white">Production AI Tech Stack & Tooling</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Validated across 150+ Enterprise Deployments</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tool, i) => (
              <div 
                key={i}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white hover:border-[#ff8a48]/40 transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-slate-50 dark:from-[#0c0e16] dark:via-[#111422] dark:to-[#0c0e16] border border-orange-200/80 dark:border-[#ff6b2b]/30 shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden transition-all duration-300">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-[#ff6b2b]/10 border border-orange-200 dark:border-[#ff6b2b]/20 text-xs font-mono text-[#ff5a1f] dark:text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Architecture Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Build your custom AI foundation with our senior architects.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              Book a 45-minute technical discovery session. We will evaluate your workflow data readiness, token economics, and provide a concrete architectural blueprint.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2"
              >
                <span>Schedule Technical Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 hover:bg-slate-50 transition-all shadow-sm dark:shadow-none"
              >
                <span>Browse Client Results</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
