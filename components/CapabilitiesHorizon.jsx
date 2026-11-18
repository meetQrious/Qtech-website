"use client";

import React from "react";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  Layers, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Workflow,
  Lock,
  Zap,
  TrendingUp
} from "lucide-react";

export default function CapabilitiesHorizon() {
  const pillars = [
    {
      num: "01",
      id: "agents",
      title: "Autonomous Multi-Agent Swarms",
      subtitle: "Beyond Chatbots: Goal-Directed Autonomous Logic",
      desc: "We architect multi-agent systems with specialized sub-roles (Planner, Validator, Executor) capable of decomposing complex business objectives, invoking external APIs, and self-correcting hallucinations in real-time.",
      deliverables: [
        "Stateful graph orchestration with deterministic retry policies",
        "Autonomous multi-step tool execution across internal databases",
        "Continuous chain-of-thought verification & regression testing",
        "40-hour weekly manual processes compressed into sub-minute runs"
      ],
      impact: "12x Process Velocity",
      href: "/ai-ml-development",
      accent: "#ff6b2b",
      tech: ["LangGraph", "AutoGen", "Python", "LlamaIndex"]
    },
    {
      num: "02",
      id: "models",
      title: "Custom Foundation Models & Private RAG",
      subtitle: "Domain Adaptation with Complete Data Sovereignty",
      desc: "Stop relying on public third-party endpoints that leak sensitive IP. We fine-tune frontier open-weight models (Llama 3.3, Mistral, DeepSeek) on your proprietary datasets and deploy them inside your isolated private cloud VPC.",
      deliverables: [
        "Domain-specific LoRA and full-parameter model adaptation",
        "Hybrid sparse-dense vector search across billions of embeddings",
        "Quantized on-premises and private AWS/GCP cluster deployment",
        "Zero data retention — your proprietary data never leaves your VPC"
      ],
      impact: "99.9% Context Accuracy",
      href: "/ai-modernization-partner",
      accent: "#6366f1",
      tech: ["vLLM", "TensorRT", "Pinecone", "HuggingFace"]
    },
    {
      num: "03",
      id: "cloud",
      title: "High-Throughput Cloud & Distributed Systems",
      subtitle: "Sub-100ms Architectures Built for Heavy Enterprise Loads",
      desc: "An intelligent model is only as powerful as the pipeline serving it. We build reactive event-driven microservices, distributed queue architectures, and resilient Kubernetes clusters handling tens of millions of transactions.",
      deliverables: [
        "Distributed microservices with Kubernetes & auto-scaling pods",
        "Multi-region failover and active-active database replication",
        "Zero-trust IAM authentication with end-to-end payload encryption",
        "Comprehensive OpenTelemetry tracing and automated rollback pipelines"
      ],
      impact: "99.99% Guaranteed SLA",
      href: "/web-development",
      accent: "#ff8a48",
      tech: ["FastAPI", "Go", "Docker", "Kubernetes", "Next.js"]
    },
    {
      num: "04",
      id: "data",
      title: "Enterprise BI & Data Intelligence Pipelines",
      subtitle: "Transforming Fragmented Silos into Actionable Clarity",
      desc: "Unify fragmented ERP, CRM, and transactional databases into a coherent operational intelligence lakehouse. We deliver real-time automated analytics, predictive KPI alerts, and natural-language querying for executive teams.",
      deliverables: [
        "Consolidation of multi-ERP SAP, Salesforce, and legacy SQL records",
        "Real-time anomaly detection with automated alert triggers",
        "Interactive executive dashboards with sub-second query speeds",
        "Natural-language SQL querying with strict role-based access control"
      ],
      impact: "7 ERPs Consolidated",
      href: "/data-visualization",
      accent: "#10b981",
      tech: ["Tableau", "QuickSight", "Snowflake", "dbt"]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 relative bg-slate-50 dark:bg-[#07080b] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header - Left Aligned */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b2b]"></span>
            <span>Core Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] transition-colors">
            Architected for enterprise rigor, <br />
            <span className="text-slate-500 dark:text-zinc-400 font-normal">not superficial prototypes.</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed transition-colors">
            We don&apos;t build generic wrappers. We partner with technology leaders to engineer end-to-end intelligent systems with guaranteed security, determinism, and measurable ROI.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid (Equal Height, Stretch & Aligned Top Edges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pillars.map((p) => (
            <div 
              key={p.id}
              className="h-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b0d14] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl dark:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col flex-grow">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/[0.06] mb-6">
                  <span className="text-sm font-mono font-bold text-slate-400 dark:text-zinc-400">
                    {p.num} //
                  </span>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-white border border-slate-200 dark:border-white/[0.08]">
                    {p.impact}
                  </span>
                </div>

                {/* Title & Subtitle with structured min-height for uniform alignment */}
                <div className="min-h-[5.25rem] mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-[#ff5a1f] dark:group-hover:text-[#ff8a48] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    {p.subtitle}
                  </div>
                </div>

                {/* Description with normalized baseline */}
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 min-h-[4.5rem]">
                  {p.desc}
                </p>

                {/* Deliverables Checklist (flex-grow for equal distribution) */}
                <div className="space-y-3 mb-8 flex-grow">
                  {p.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300">
                      <span className="text-[#ff5a1f] dark:text-[#ff8a48] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech & Link */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/[0.05]">
                      {t}
                    </span>
                  ))}
                </div>

                <Link 
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-[#ff5a1f] dark:hover:text-[#ff8a48] transition-colors shrink-0 group/link"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
