"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Database, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  LineChart, 
  Layers, 
  Search,
  Activity,
  Server
} from "lucide-react";

export default function DataVisualizationPage() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: "Real-Time Telemetry & Operational Dashboards",
      tag: "Power BI / Superset / Custom Next.js",
      desc: "Architect low-latency visualization platforms that transform complex multi-source streaming events into clean, responsive executive command centers with sub-second refresh rates.",
      icon: Activity,
      metric: "< 250ms Live Query Latency",
      features: [
        "Power BI embedded & custom canvas telemetry",
        "Multi-tenant dashboard security & Row-Level Security (RLS)",
        "Automated PDF/Slack executive reporting dispatches",
        "High-density responsive data tables & heatmaps"
      ]
    },
    {
      title: "Predictive Anomaly Detection & AI Insights",
      tag: "Automated KPI Guardrails",
      desc: "Deploy machine learning anomaly models that constantly monitor revenue metrics, supply chain throughput, and system health — notifying leadership before small regressions become costly leaks.",
      icon: LineChart,
      metric: "98.7% Anomaly Detection Rate",
      features: [
        "Statistical outlier detection & dynamic thresholds",
        "Automated root-cause hypothesis generation",
        "Revenue leakage & churn forecasting algorithms",
        "Zero-noise alerting via webhook and Slack integrations"
      ]
    },
    {
      title: "Unified Data Warehousing & Modern ETL",
      tag: "Snowflake / BigQuery / ClickHouse",
      desc: "Break down data silos across SAP, Salesforce, HubSpot, Stripe, and internal databases into high-throughput analytical warehouses managed via dbt and Apache Airflow.",
      icon: Database,
      metric: "10x Faster Query Throughput",
      features: [
        "dbt-based semantic models & automated testing",
        "Asynchronous change-data-capture (CDC) pipelines",
        "ClickHouse & StarRocks columnar storage optimization",
        "Automated schema drift detection & recovery"
      ]
    },
    {
      title: "Conversational BI & Natural Language Query",
      tag: "Autonomous SQL Synthesis",
      desc: "Empower non-technical executives to query complex relational data in plain English. Our specialized semantic translation models generate validated SQL, execute queries safely, and render interactive charts.",
      icon: Search,
      metric: "99.1% Text-to-SQL Accuracy",
      features: [
        "Semantic schema mapping & table relationship graphs",
        "Deterministic read-only sandbox SQL execution",
        "Automated chart generation & narrative explanation",
        "Zero data retention to third-party model providers"
      ]
    }
  ];

  const pipeline = [
    {
      stage: "01. Ingestion",
      tech: "Kafka / Airflow / Fivetran",
      desc: "High-throughput streaming ingestion capturing transactional events from operational databases, APIs, and IoT devices."
    },
    {
      stage: "02. Storage & Lakehouse",
      tech: "Snowflake / ClickHouse / S3",
      desc: "Columnar analytical warehouses structured in Medallion architecture (Bronze -> Silver -> Gold) for immediate query velocity."
    },
    {
      stage: "03. Semantic Layer",
      tech: "dbt / Cube.js / Metricflow",
      desc: "Standardized business definitions ensuring all departments calculate KPIs, churn, and gross margins identically."
    },
    {
      stage: "04. Visual Intelligence",
      tech: "Power BI / Custom Next.js Dashboards",
      desc: "Intuitive, interactive visual interfaces with drill-downs, predictive scenarios, and automated alert dispatchers."
    }
  ];

  const tools = [
    "Power BI",
    "Tableau",
    "Apache Superset",
    "Snowflake",
    "Google BigQuery",
    "ClickHouse",
    "dbt (data build tool)",
    "Apache Airflow",
    "PostgreSQL",
    "Python Pandas / Polars",
    "Next.js / Chart.js / D3.js",
    "Apache Kafka"
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Capability // Enterprise BI & Telemetry</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Enterprise BI, Telemetry & <br />
            <span className="text-[#ff8a48]">Predictive Data Intelligence</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We turn fragmented enterprise data silos into unified, real-time telemetry platforms and predictive executive dashboards that empower leadership to make high-conviction decisions with speed.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule BI Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Data Case Studies</span>
            </Link>
          </div>

          {/* SLA Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Sub-Second Query Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Real-Time Event Streaming</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Row-Level Security (RLS)</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Automated Semantic Models</span>
            </div>
          </div>
        </div>

        {/* 2. Core Pillars Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              From Raw Silos to High-Conviction Decisions
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              We eliminate guesswork with unified data engineering, predictive anomaly alarms, and conversational natural-language querying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {item.metric}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#ff8a48] uppercase mb-1">{item.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{item.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Data Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Explore integration</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The 4-Stage Modern Data Pipeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Architecture Blueprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Telemetry Flow & Data Lifecycle
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              How we ingest, process, normalize, and visualize high-scale enterprise information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] hover:border-[#ff8a48]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff8a48] mb-2">{p.stage}</div>
                  <div className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded inline-block mb-3 border border-white/[0.06]">
                    {p.tech}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Stage {idx + 1} Pipeline
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Production BI Tools */}
        <div className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#ff8a48] mb-1">Ecosystem</div>
              <h3 className="text-xl font-bold text-white">Analytics, Warehousing & BI Stack</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Seamless integration with your existing lakehouse</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {tools.map((t, i) => (
              <div 
                key={i}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white hover:border-[#ff8a48]/40 transition-all"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c0e16] via-[#111422] to-[#0c0e16] border border-[#ff6b2b]/30 shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/10 border border-[#ff6b2b]/20 text-xs font-mono text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turn Data into Revenue</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Unify your enterprise analytics with our data architects.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Schedule a data discovery call. We will review your reporting requirements, data warehouse topology, and provide an actionable implementation timeline.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View BI Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
