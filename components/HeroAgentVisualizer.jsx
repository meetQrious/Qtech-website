"use client";

import React, { useState, useEffect } from "react";
import { 
  Bot, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Database, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Play, 
  RotateCw,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function HeroAgentVisualizer() {
  const [activeTab, setActiveTab] = useState("swarm");
  const [isRunning, setIsRunning] = useState(true);
  const [activeStep, setActiveStep] = useState(2);
  const [metrics, setMetrics] = useState({
    throughput: "4,820 req/s",
    latency: "68ms",
    accuracy: "99.94%",
    activeAgents: "24 Pods"
  });

  // Cycle through active steps to create live-action pulse
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [isRunning]);

  const steps = [
    {
      id: 0,
      title: "Semantic Router",
      type: "Ingestion",
      desc: "Zero-latency intent classification & policy validation",
      status: "Active",
      time: "4ms",
      icon: Terminal,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 1,
      title: "Context RAG Engine",
      type: "Retrieval",
      desc: "Hybrid semantic vector search across 12M+ enterprise embeddings",
      status: "Verified",
      time: "22ms",
      icon: Database,
      color: "from-indigo-500 to-purple-400"
    },
    {
      id: 2,
      title: "Multi-Agent Reasoning",
      type: "Core LLM",
      desc: "Autonomous agent deliberation, chain-of-thought verification",
      status: "Executing",
      time: "38ms",
      icon: Bot,
      color: "from-orange-500 to-amber-400"
    },
    {
      id: 3,
      title: "Enterprise Guardrail",
      type: "Governance",
      desc: "PII masking, hallucination check & SOC-2 compliance seal",
      status: "Enforced",
      time: "4ms",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 relative group">
      
      {/* Decorative Glow under the console */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500/20 via-indigo-600/30 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Console Box */}
      <div className="relative rounded-2xl bg-[#0b0e17]/95 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
        
        {/* Console Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          
          {/* Window Controls & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/60 border border-green-500/80"></span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-slate-200">
                qrious-agentic-runtime v3.4.1
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE CLUSTER
              </span>
            </div>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 mt-2 sm:mt-0 bg-[#07090f] p-1 rounded-xl border border-white/[0.06]">
            <button
              onClick={() => setActiveTab("swarm")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "swarm" 
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Agent Swarm
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "telemetry" 
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-semibold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Telemetry Metrics
            </button>
            <button
              onClick={() => setActiveTab("guardrails")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "guardrails" 
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Enterprise Shield
            </button>
          </div>

        </div>

        {/* Tab 1: Agent Swarm Live Pipeline */}
        {activeTab === "swarm" && (
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Autonomous Enterprise Orchestration
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Multi-Agent Decision Pipeline & Tool Dispatch
                </h3>
              </div>
              <button 
                onClick={() => setIsRunning(!isRunning)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 transition-colors w-fit"
              >
                {isRunning ? (
                  <>
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                    <span>Real-time Stream: Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-orange-400" />
                    <span>Resume Simulation</span>
                  </>
                )}
              </button>
            </div>

            {/* 4-Stage Connected Workflow Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {steps.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div 
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer relative p-5 rounded-xl border transition-all duration-300 ${
                      isCurrent 
                        ? "bg-white/[0.06] border-orange-500/50 shadow-[0_0_25px_rgba(249,115,22,0.15)] scale-[1.02]" 
                        : "bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} p-[1px]`}>
                        <div className="w-full h-full bg-[#0d111a] rounded-[7px] flex items-center justify-center text-white">
                          <step.icon className="w-4 h-4" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        {step.time}
                      </span>
                    </div>

                    {/* Step Title & Type */}
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                      {step.type}
                    </div>
                    <div className="text-sm font-bold text-white mb-2 flex items-center justify-between">
                      <span>{step.title}</span>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Status Footer */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">Node Status:</span>
                      <span className={isCurrent ? "text-orange-400 font-semibold" : "text-emerald-400"}>
                        {isCurrent ? "Executing..." : step.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Live Streaming Terminal Output */}
            <div className="mt-6 p-4 rounded-xl bg-[#06080e] border border-white/[0.06] font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04] text-slate-500 text-[10px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-orange-400" />
                  <span>Agent Execution Log [Session ID: #qtech_9982a]</span>
                </div>
                <span>P99: 68ms</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p className="text-slate-400">
                  <span className="text-emerald-400">[00:04.120]</span> Semantic Router dispatching prompt to reasoning swarm: <span className="text-orange-300">"Synthesize quarterly SAP revenue leakages & generate executive action items"</span>
                </p>
                <p className="text-slate-400">
                  <span className="text-cyan-400">[00:04.142]</span> Pinecone Vector Store retrieved <span className="text-white">48 high-relevance chunks</span> (cosine similarity: 0.942).
                </p>
                <p className="text-slate-300 font-medium">
                  <span className="text-amber-400">[00:04.180]</span> Autonomous Agent Swarm completed deliberation: <span className="text-emerald-400">3 root causes identified, $2.4M remediation workflow queued.</span>
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Telemetry Metrics */}
        {activeTab === "telemetry" && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Production SLA Benchmarks
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Real-Time Inference & High-Throughput Telemetry
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">P95 Inference Latency</div>
                <div className="text-2xl font-bold text-indigo-400 font-mono">68ms</div>
                <div className="text-[11px] text-emerald-400 mt-1">✓ 8.2x faster than raw API</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">Factual Precision</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono">99.94%</div>
                <div className="text-[11px] text-slate-400 mt-1">Zero Hallucination Guardrail</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">Peak Throughput</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono">4.8k req/s</div>
                <div className="text-[11px] text-slate-400 mt-1">Auto-scaling vLLM Cluster</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">Compute Cost Delta</div>
                <div className="text-2xl font-bold text-orange-400 font-mono">-74.2%</div>
                <div className="text-[11px] text-orange-300 mt-1">Quantized Model Routing</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Every system built by Qrious Tech includes integrated OpenTelemetry hooks, LangSmith/Weights&Biases tracing, automated drift evaluation, and multi-cloud fallback routing.
            </p>
          </div>
        )}

        {/* Tab 3: Enterprise Shield & Governance */}
        {activeTab === "guardrails" && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise Zero-Trust Security
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Zero Data Leakage & Private VPC Guardrails
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">Zero Data Retention</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enterprise inputs never train public foundation models. All telemetry and cache data reside exclusively within your private cloud VPC.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <Workflow className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">Automated PII Sanitization</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time redaction of sensitive identifiers, HIPAA patient records, and financial numbers before reaching generative context windows.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <CheckCircle2 className="w-6 h-6 text-indigo-400 mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">SOC-2 & Role-Based ACL</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fine-grained cryptographic access controls, immutable audit trails, and automated compliance logging for regulated industries.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

