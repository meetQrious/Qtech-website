"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Rocket, 
  Code2,
  FileCheck
} from "lucide-react";

export default function EngineeringDeliveryFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "Architecture Discovery & Feasibility",
      duration: "Week 1",
      title: "Workflow Synthesis & Vector Feasibility Matrix",
      summary: "We analyze your business workflows, latency targets, and data readiness to formulate a quantitative AI feasibility matrix before writing a single line of code.",
      deliverable: "Quantitative Token ROI Model & System Blueprint",
      codeSnippet: `// Step 01: Feasibility Evaluation
const feasibility = await QriousEngine.evaluate({
  workflows: ["SAP_Invoice_Matching", "Support_Escalation"],
  constraints: { maxLatencyMs: 120, maxHallucinationRate: 0.001 },
  compliance: ["SOC2_TYPE_II", "HIPAA_BAA"]
});`
    },
    {
      num: "02",
      name: "Data Hygiene & Private Vector Topology",
      duration: "Weeks 2-3",
      title: "Hybrid Sparse-Dense Embeddings & Private Cluster Setup",
      summary: "We cleanse, de-duplicate, and chunk unstructured enterprise documents into multi-tenant vector indexes deployed inside your isolated VPC boundary.",
      deliverable: "Private VPC Vector Cluster & PII Masking Pipeline",
      codeSnippet: `// Step 02: Air-Gapped Vector Topology
const cluster = new IsolatedVpcCluster({
  sanitization: "AUTOMATED_PII_SCRUBBING",
  embeddingModel: "bge-large-en-v1.5",
  encryption: "AES_256_GCM",
  dataRetention: "ZERO_PERSISTENCE_GUARANTEE"
});`
    },
    {
      num: "03",
      name: "Agent Swarm Architecture & RAG",
      duration: "Weeks 4-5",
      title: "Stateful Multi-Agent Deliberation & Tool Dispatch",
      summary: "We build specialized agent graphs with structured chain-of-thought routing, deterministic rollback logic, and direct enterprise API integrations.",
      deliverable: "Deterministic Swarm Graph & LangGraph Topologies",
      codeSnippet: `// Step 03: Multi-Agent State Machine
const swarm = new AgentSwarm({
  planner: new DecompositionAgent({ model: "claude-3-5-sonnet" }),
  validator: new HallucinationGuard({ threshold: 0.98 }),
  executor: new ApiDispatchPod({ maxRetries: 3 })
});`
    },
    {
      num: "04",
      name: "Enterprise Shield & Hardening",
      duration: "Week 6",
      title: "Adversarial Red-Teaming & Compliance Validation",
      summary: "Rigorous automated penetration testing against prompt injection, jailbreaks, and sensitive data extraction before production sign-off.",
      deliverable: "Independent Red-Team Report & SOC2 Compliance Audit",
      codeSnippet: `// Step 04: Automated Adversarial Suite
const guardrail = new EnterpriseShield({
  promptInjectionDefense: "ACTIVE_INTERCEPT",
  jailbreakFilter: "STRICT_GOVERNANCE",
  leakageAudit: "CRYPTOGRAPHIC_VERIFICATION"
});`
    },
    {
      num: "05",
      name: "Scaled Production & Observability",
      duration: "Week 7+",
      title: "Auto-Scaling vLLM Inference & Continuous Model Tuning",
      summary: "We deploy auto-scaling inference clusters on Kubernetes with continuous tracing, hallucination rate tracking, and automated model fine-tuning loops.",
      deliverable: "99.99% Architecture SLA & Live Tracing Dashboard",
      codeSnippet: `// Step 05: Kubernetes Cluster Observability
const cluster = new AutoScalingInferencePool({
  replicas: { min: 4, max: 64 },
  p95Target: 80 /* ms */,
  telemetry: ["OpenTelemetry", "LangSmith"],
  activeMonitoring: "24/7_ENTERPRISE_SLA"
});`
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-white dark:bg-[#090b11] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b2b]"></span>
            <span>Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
            How we take AI from concept to <br />
            <span className="text-slate-500 dark:text-zinc-400 font-normal">high-throughput production.</span>
          </h2>
        </div>

        {/* Horizontal Step Navigation Bar (Strictly Active Single Highlight + Subtle Separate Hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pb-8 border-b border-slate-200 dark:border-white/[0.08] mb-12">
          {steps.map((stg, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stg.num}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive 
                    ? "bg-slate-50 dark:bg-white/[0.08] border-[#ff5a1f] dark:border-[#ff6b2b]/50 shadow-sm dark:shadow-[0_4px_20px_rgba(255,107,43,0.12)] text-slate-900 dark:text-white" 
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.14]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-[#ff5a1f] dark:text-[#ff8a48]" : "text-slate-400 dark:text-zinc-400"}`}>
                    {stg.num}
                  </span>
                  <span className={`text-[10px] font-mono ${isActive ? "text-slate-700 dark:text-zinc-200" : "text-slate-400 dark:text-zinc-400"}`}>
                    {stg.duration}
                  </span>
                </div>
                <div className={`text-xs leading-snug line-clamp-2 ${isActive ? "text-slate-900 dark:text-white font-semibold" : "text-slate-600 dark:text-zinc-300 font-normal"}`}>
                  {stg.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Step Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5a1f]/10 dark:bg-[#ff6b2b]/10 border border-[#ff5a1f]/20 dark:border-[#ff6b2b]/20 text-[#ff5a1f] dark:text-[#ff8a48] text-xs font-mono">
              <span>Phase {current.num} // {current.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug transition-colors">
              {current.title}
            </h3>

            <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed transition-colors">
              {current.summary}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Core Milestone Deliverable:
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>{current.deliverable}</span>
              </div>
            </div>

            <div>
              <Link 
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff5a1f] dark:text-[#ff8a48] hover:text-[#e04810] dark:hover:text-[#ffa043] transition-colors"
              >
                <span>Read Full Methodology Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Code Artifact (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0e1017] border border-slate-700/50 dark:border-white/10 p-6 font-mono text-xs shadow-2xl overflow-hidden relative group">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[11px] ml-2 text-zinc-400">topology_spec.ts</span>
                </div>
                <div className="text-[10px] text-zinc-500">
                  TypeScript 5.3 // Strict
                </div>
              </div>

              <pre className="text-zinc-300 leading-relaxed overflow-x-auto py-2">
                <code>{current.codeSnippet}</code>
              </pre>

              <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Architecture Verified</span>
                </span>
                <span className="font-mono text-zinc-400">Phase 0{activeStep + 1} of 05</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
