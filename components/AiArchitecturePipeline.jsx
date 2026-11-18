"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Workflow, 
  BarChart3, 
  Zap,
  ChevronRight
} from "lucide-react";

export default function AiArchitecturePipeline() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "Problem Synthesis & Feasibility Matrix",
      tagline: "Architecture Assessment",
      desc: "We analyze your business workflows, data readiness, latency targets, and compute budget to formulate a quantitative AI feasibility matrix before writing a single line of code.",
      deliverables: [
        "Quantitative ROI projection & token economics model",
        "Data hygiene & vectorization feasibility audit",
        "Model architecture recommendation (Proprietary vs Open-Weight)",
        "Zero-trust security & regulatory compliance blueprint"
      ],
      icon: Terminal,
      color: "text-orange-400 border-orange-500/30 bg-orange-500/10"
    },
    {
      num: "02",
      title: "Custom RAG & Memory Topology",
      tagline: "Data Pipeline Engineering",
      desc: "We construct high-dimensional vector embeddings, hybrid dense/sparse search indices, and episodic memory pipelines that guarantee context accuracy without hallucinations.",
      deliverables: [
        "Pinecone / Qdrant / Milvus vector store provisioning",
        "Document chunking & metadata enrichment pipelines",
        "Cross-encoder reranking algorithms",
        "Private VPC data encryption at rest and in transit"
      ],
      icon: Layers,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
    },
    {
      num: "03",
      title: "Multi-Agent Deliberation & Tool Calling",
      tagline: "Agent Swarm Development",
      desc: "We design multi-agent swarms with separated concerns (Planner, Critic, Tool Executor) capable of calling external databases, executing APIs, and validating their own output.",
      deliverables: [
        "LangChain / LlamaIndex / AutoGen agent topologies",
        "Custom deterministic tool wrappers & API connectors",
        "Few-shot prompt calibration & chain-of-thought routing",
        "Automated regression evaluation against ground-truth datasets"
      ],
      icon: Workflow,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
    },
    {
      num: "04",
      title: "Enterprise Shield & Guardrail Enforcement",
      tagline: "Security & Governance",
      desc: "We inject real-time security guardrails that inspect prompts and completions for PII redaction, prompt injection defense, and strict enterprise policy alignment.",
      deliverables: [
        "NeMo Guardrails & Llama-Guard policy integration",
        "Real-time PII / HIPAA identifier scrubbing",
        "Deterministic output schema enforcement (JSON / Pydantic)",
        "Immutable compliance audit logs with cryptographic signatures"
      ],
      icon: ShieldCheck,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      num: "05",
      title: "Production Scaling & Drift Observability",
      tagline: "Day-2 Operations",
      desc: "We deploy auto-scaling inference clusters (vLLM / TensorRT-LLM) on Kubernetes with continuous tracing, hallucination rate tracking, and automated model fine-tuning loops.",
      deliverables: [
        "Kubernetes Helm charts & auto-scaling GPU node pools",
        "Sub-100ms P95 latency optimization with KV-caching",
        "OpenTelemetry + LangSmith end-to-end tracing",
        "Automated continuous evaluation and fine-tuning pipeline"
      ],
      icon: Zap,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    }
  ];

  return (
    <section className="py-28 relative bg-[#05070c] border-y border-white/[0.06] overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/5 via-indigo-600/5 to-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>The Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How We Take AI From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-orange-400">Mission-Critical Production</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Our 5-stage architectural methodology guarantees predictability, strict enterprise governance, and zero operational surprises.
          </p>
        </div>

        {/* Desktop Interactive Layout: Left Nav + Right Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Stages List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {stages.map((stg, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stg.num}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? "bg-white/[0.06] border-orange-500/40 shadow-lg shadow-orange-500/10" 
                      : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm font-bold ${isActive ? "text-orange-400" : "text-slate-500"}`}>
                      {stg.num}
                    </span>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        {stg.tagline}
                      </div>
                      <div className={`text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {stg.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-orange-400 translate-x-1" : "text-slate-600"}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Stage Inspection Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0c101a] to-[#07090f] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle Stage Background Number */}
              <div className="absolute top-4 right-8 font-mono text-8xl font-black text-white/[0.02] select-none pointer-events-none">
                {stages[activeStage].num}
              </div>

              {/* Stage Badge & Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${stages[activeStage].color}`}>
                  {React.createElement(stages[activeStage].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-orange-400 uppercase tracking-widest">
                    Stage {stages[activeStage].num} of 05
                  </span>
                  <div className="text-xs font-mono text-slate-500">
                    {stages[activeStage].tagline}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {stages[activeStage].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {stages[activeStage].desc}
              </p>

              {/* Concrete Architectural Deliverables */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guaranteed Technical Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {stages[activeStage].deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-slate-300">
                      <span className="text-orange-400 font-bold">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Ready to assess your enterprise pipeline?
                </span>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold font-mono transition-colors"
                >
                  <span>Book Methodology Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

