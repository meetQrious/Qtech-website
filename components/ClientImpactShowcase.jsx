"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, Building2, ShieldCheck } from "lucide-react";

export default function ClientImpactShowcase() {
  const caseStudies = [
    {
      id: "papervisor",
      category: "Enterprise AI & Autonomous Agents",
      metric: "94%",
      metricLabel: "Reduction in Document Extraction Latency",
      subMetric: "2.4M Pages Processed Monthly",
      title: "Papervisor: Autonomous Multimodal Document Understanding",
      desc: "Architected a distributed visual-language model pipeline that parses complex, multi-lingual commercial leases and invoices with 99.8% field accuracy, replacing manual indexing workflows across 14 global offices.",
      tech: ["Vision LLM", "LangChain", "Vector RAG", "FastAPI", "AWS Textract"]
    },
    {
      id: "migraflow",
      category: "Foundation Models & Legacy Migration",
      metric: "68%",
      metricLabel: "Engineering Sprint Acceleration",
      subMetric: "Zero Production Regressions",
      title: "MigraFlow: Automated Legacy Codebase Refactoring Engine",
      desc: "Engineered an enterprise code-translation intelligence agent that ingests legacy Java/COBOL monoliths and synthesizes clean, idiomatic Go/TypeScript microservices complete with automated test suites.",
      tech: ["Fine-Tuned Llama 3", "Tree-Sitter AST", "Docker", "PostgreSQL"]
    },
    {
      id: "fitmindai",
      category: "Edge AI & Real-Time Computer Vision",
      metric: "60 FPS",
      metricLabel: "Real-Time 3D Biomechanics Inference",
      subMetric: "Sub-25ms Edge Latency",
      title: "FitMind AI: Computer Vision Telemetry & Biomechanics",
      desc: "Engineered high-frame-rate skeletal tracking running locally on user edge devices (iOS/Android CoreML) to assess physical therapy kinematics with zero video upload requirements and strict HIPAA compliance.",
      tech: ["MediaPipe", "CoreML", "TensorFlow Lite", "WebRTC", "React Native"]
    },
    {
      id: "budget-bee",
      category: "Fintech & Fraud Anomaly Detection",
      metric: "$4.2M",
      metricLabel: "Quarterly Fraud Losses Intercepted",
      subMetric: "Sub-45ms Transaction Scoring",
      title: "Fintech Risk Core: Real-Time Anti-Fraud Neural Fabric",
      desc: "Deployed a low-latency graph neural network evaluating incoming high-frequency ACH and credit transactions across 12 banking institutions with a false-positive rate under 0.04%.",
      tech: ["Graph Neural Networks", "Kafka", "ClickHouse", "Kubernetes", "Redis"]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-slate-50 dark:bg-[#07080b] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff6b2b]"></span>
              <span>Client Case Studies & Quantitative ROI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
              Proven enterprise scale, <br />
              <span className="text-slate-500 dark:text-zinc-400 font-normal">measured in millions.</span>
            </h2>
          </div>

          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-[#ff5a1f] dark:hover:border-[#ff8a48] transition-all shrink-0 self-start md:self-auto shadow-sm dark:shadow-none"
          >
            <span>View All 30+ Deployments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Case Study Cards */}
        <div className="space-y-6">
          {caseStudies.map((cs) => (
            <Link 
              key={cs.id}
              href={`/case-study/${cs.id}`}
              className="block p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b0d14] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-xl hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Metric Hero (4 cols) */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-400 mb-2">
                    {cs.category}
                  </div>
                  <div className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-[#ff5a1f] dark:group-hover:text-[#ff8a48] transition-colors">
                    {cs.metric}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-zinc-300 mt-2 font-mono">
                    {cs.metricLabel}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                    ✓ {cs.subMetric}
                  </div>
                </div>

                {/* Narrative Description (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#ff5a1f] dark:group-hover:text-slate-100 transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                      {cs.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-white/[0.04]">
                    <div className="flex flex-wrap gap-2">
                      {cs.tech.map((t, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/[0.05]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-[#ff5a1f] dark:text-[#ff8a48] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Technical Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
