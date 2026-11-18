"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Terminal, 
  Cpu,
  Mail
} from "lucide-react";
import TeamShowcase from "@/components/TeamShowcase";

export default function CrewPage() {
  const [filter, setFilter] = useState("all");

  const perks = [
    {
      title: "Frontier AI & Autonomous Tech",
      desc: "Work daily with multi-agent swarms, custom model fine-tuning, vector databases, and high-throughput Kubernetes clusters.",
      icon: Cpu
    },
    {
      title: "High Autonomy & Zero Politics",
      desc: "We are an engineer-led organization. No endless bureaucratic meetings, no body-shopping, and no micromanagement.",
      icon: Zap
    },
    {
      title: "Top-Tier Compensation & Equity",
      desc: "Competitive salary packages benchmarked against top product engineering firms, plus annual performance bonuses.",
      icon: ShieldCheck
    },
    {
      title: "Flexible Hybrid / Remote Culture",
      desc: "Work from our state-of-the-art innovation center in Ahmedabad or collaborate remotely with flexible async working hours.",
      icon: Clock
    }
  ];

  const jobs = [
    {
      id: "ai-architect",
      title: "Principal AI Systems Architect",
      department: "ai",
      type: "Full-Time",
      location: "Ahmedabad / Hybrid / Remote",
      experience: "5+ Years",
      desc: "Lead the design and deployment of multi-agent LLM systems, custom RAG architectures, and quantized private cloud inference pipelines for global clients.",
      tags: ["LangGraph", "PyTorch", "vLLM", "pgvector", "FastAPI"]
    },
    {
      id: "fullstack-lead",
      title: "Senior Full-Stack Cloud Engineer",
      department: "engineering",
      type: "Full-Time",
      location: "Ahmedabad / Hybrid / Remote",
      experience: "4+ Years",
      desc: "Architect scalable Next.js web applications and distributed microservices with sub-100ms latency, event streams, and automated CI/CD pipelines.",
      tags: ["Next.js", "React", "Node.js", "Kubernetes", "PostgreSQL"]
    },
    {
      id: "mobile-lead",
      title: "Senior Mobile Systems Engineer",
      department: "mobile",
      type: "Full-Time",
      location: "Ahmedabad / Hybrid",
      experience: "4+ Years",
      desc: "Develop 60-120 FPS React Native and Flutter mobile applications with on-device edge AI inference (CoreML/TFLite) and offline-first state synchronization.",
      tags: ["React Native", "Flutter", "CoreML", "SQLite", "Swift/Kotlin"]
    },
    {
      id: "data-bi-lead",
      title: "Data Intelligence & BI Architect",
      department: "data",
      type: "Full-Time",
      location: "Ahmedabad / Hybrid",
      experience: "3+ Years",
      desc: "Build modern data warehousing, real-time telemetry streaming, and automated Power BI / Apache Superset dashboards across enterprise silos.",
      tags: ["Power BI", "Snowflake", "ClickHouse", "dbt", "Kafka"]
    }
  ];

  const filteredJobs = jobs.filter(j => filter === "all" || j.department === filter);

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Users className="w-3.5 h-3.5" />
            <span>Careers // Join The Crew</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Build the Future of <br />
            <span className="text-[#ff8a48]">Autonomous AI with Us</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We are an engineering-driven company of 88+ architects, developers, and AI researchers building mission-critical software systems for global enterprises. Join our crew and push the boundaries of technology.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/life-qtech"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Life @ QTech</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Zero Bureaucracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Frontier AI Tooling</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Top 5% Compensation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Flexible Work Hours</span>
            </div>
          </div>
        </div>

        {/* 2. Culture & Perks Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Why Join QTech
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              An Environment Where Engineers Do Their Best Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              We provide the autonomy, hardware compute, and mentorship you need to accelerate your career trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] mb-4">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Perk #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Open Positions Section */}
        <div id="open-positions" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
                Join Our Team
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Current Open Opportunities
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Roles" },
                { id: "ai", label: "AI & ML" },
                { id: "engineering", label: "Cloud & Web" },
                { id: "mobile", label: "Mobile" },
                { id: "data", label: "Data & BI" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    filter === tab.id
                      ? "bg-white text-[#07080b] font-semibold"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase text-[#ff8a48] font-semibold">
                      {job.department.toUpperCase()} DEPT
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{job.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((t, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-4 border-t border-white/[0.04]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">Position Open</span>
                  <a 
                    href={`mailto:careers@qrioustech.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <span>Apply via Email</span>
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Team Showcase Component */}
        <div className="pt-8">
          <TeamShowcase />
        </div>

        {/* 5. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-slate-50 dark:from-[#0c0e16] dark:via-[#111422] dark:to-[#0c0e16] border border-orange-200/80 dark:border-[#ff6b2b]/30 shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden transition-all duration-300">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-[#ff6b2b]/10 border border-orange-200 dark:border-[#ff6b2b]/20 text-xs font-mono text-[#ff5a1f] dark:text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Don&apos;t See Your Exact Role?</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              We are always looking for exceptional engineering talent.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              If you have deep expertise in autonomous systems, distributed backends, or mobile engineering, send your resume and portfolio directly to our engineering leadership.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="mailto:careers@qrioustech.com?subject=General Engineering Application"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2"
              >
                <span>Email careers@qrioustech.com</span>
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/company"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 hover:bg-slate-50 transition-all shadow-sm dark:shadow-none"
              >
                <span>About Our Company</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
