"use client";

import React from "react";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Database, 
  Smartphone, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  Activity,
  Zap,
  CheckCircle2,
  Code2
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-28 relative bg-[#07090e] overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Enterprise Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Autonomous Scale & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-indigo-400">Measurable Enterprise ROI</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            We don't build superficial wrappers. We architect end-to-end autonomous intelligent systems, private cloud RAG pipelines, and resilient distributed platforms that give enterprises an unfair advantage.
          </p>
        </div>

        {/* 6-Card Master Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Autonomous AI Agents (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500"></div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-orange-400 uppercase tracking-widest">
                  Flagship Capability
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Agentic Runtime
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Autonomous Multi-Agent Systems & Swarm Orchestration
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                Deploy goal-directed AI agent swarms capable of multi-step reasoning, external tool execution, real-time database querying, and self-correcting logic — turning manual 40-hour business processes into sub-minute autonomous workflows.
              </p>
            </div>

            {/* Visual Mini Mockup inside Card 1 */}
            <div className="bg-[#090c14] border border-white/[0.06] rounded-2xl p-4 font-mono text-xs mb-6 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.04] text-[10px] text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-orange-400" />
                  agent_topology_executor.py
                </span>
                <span className="text-emerald-400">● 4 Nodes Synchronized</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-slate-500 text-[9px]">PLANNER</div>
                  <div className="font-semibold text-white">Decomposition</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-slate-500 text-[9px]">RETRIEVER</div>
                  <div className="font-semibold text-cyan-400">Vector Hybrid</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-slate-500 text-[9px]">CRITIC</div>
                  <div className="font-semibold text-indigo-400">Hallucination Guard</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-slate-500 text-[9px]">ACTUATOR</div>
                  <div className="font-semibold text-orange-400">API Dispatch</div>
                </div>
              </div>
            </div>

            <Link 
              href="/ai-ml-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group/link"
            >
              <span>Explore Autonomous Agent Engineering</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>

          </div>

          {/* Bento Card 2: Enterprise LLM Modernization */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            
            <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest mb-2">
                Private Fine-Tuning
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Enterprise LLM & RAG Modernization
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Domain-specific model adaptation (Llama 3, Claude 3.5, Mistral), quantized local inference, and high-precision RAG pipelines designed to operate within your private VPC with zero data leakage.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs font-mono">
                <span className="text-slate-400">Context Window Latency</span>
                <span className="text-emerald-400 font-bold">&lt; 90ms</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs font-mono">
                <span className="text-slate-400">Embedding Precision</span>
                <span className="text-indigo-400 font-bold">99.9% Cosine Match</span>
              </div>
            </div>

            <Link 
              href="/ai-modernization-partner"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
            >
              <span>Learn About LLM Adaptation</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>

          </div>

          {/* Bento Card 3: Cloud & Distributed Backends */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                Distributed Scale
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Cloud-Native Full-Stack Engineering
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Next.js, Node.js, Python FastAPI, Kubernetes, and AWS/GCP serverless architectures built for million-user loads, 99.99% uptime SLAs, and seamless CI/CD delivery pipelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Next.js", "Kubernetes", "FastAPI", "AWS ECS", "Kafka", "PostgreSQL"].map((tech, i) => (
                <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <Link 
              href="/web-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              <span>Explore Cloud Systems</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>

          </div>

          {/* Bento Card 4: Data Intelligence & SAP BI */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest mb-2">
                Unified Telemetry
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Data Intelligence & Enterprise BI
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Turn fragmented SAP, Salesforce, and legacy SQL silos into real-time operational BI dashboards, automated executive summaries, and predictive KPI anomaly engines.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs mb-6 font-mono">
              ★ Consolidated 7 ERP systems into 1 real-time Tableau/QuickSight stream for global clients.
            </div>

            <Link 
              href="/data-visualization"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
            >
              <span>View Data Intelligence Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>

          </div>

          {/* Bento Card 5: Dedicated AI Pods & Co-Development */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2">
                Dedicated Engineering
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Elite AI Engineering Pods & Co-Dev
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Embed high-caliber senior AI architects, full-stack engineers, and cloud specialists directly into your product teams. Zero body-shopping, guaranteed code governance, and 5-day rapid sprint onboarding.
              </p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono mb-6">
              <span className="text-slate-400">Time-to-First-Sprint:</span>
              <span className="text-emerald-400 font-bold">5 Business Days</span>
            </div>

            <Link 
              href="/dedicated-development-teams"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
            >
              <span>Hire Dedicated AI Pods</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

