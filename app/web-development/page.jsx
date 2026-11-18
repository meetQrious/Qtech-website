"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Layers, 
  Globe, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Cpu, 
  Database, 
  Cloud,
  Terminal
} from "lucide-react";

export default function WebDevelopmentPage() {
  const [activeLayer, setActiveLayer] = useState(0);

  const pillars = [
    {
      title: "High-Throughput Full-Stack Web Platforms",
      tag: "Next.js & React Architecture",
      desc: "Architect enterprise web applications with React 18/19, Next.js Server Components, Edge Caching, and streaming SSR — delivering sub-50ms TTFB and flawless Core Web Vitals at massive scale.",
      icon: Globe,
      metric: "Sub-50ms TTFB",
      features: [
        "React Server Components (RSC) & Streaming SSR",
        "Edge computing & dynamic global CDN caching",
        "Design systems built with Tailwind CSS & Radix UI",
        "Automated end-to-end testing with Playwright & Jest"
      ]
    },
    {
      title: "Resilient Distributed Microservices",
      tag: "Node.js / FastAPI / Golang / gRPC",
      desc: "Decompose complex enterprise domain logic into decoupled, containerized microservices communicating via ultra-fast gRPC and asynchronous Kafka event streaming.",
      icon: Server,
      metric: "50,000+ Req/Sec Capacity",
      features: [
        "Event-driven architecture with Apache Kafka & RabbitMQ",
        "High-performance gRPC and RESTful API endpoints",
        "Database connection pooling & multi-region read replicas",
        "Distributed tracing via OpenTelemetry & Jaeger"
      ]
    },
    {
      title: "Cloud-Native Infrastructure & Kubernetes",
      tag: "AWS / GCP / Terraform IaC",
      desc: "Multi-cloud infrastructure engineered as code. We build autoscaling Kubernetes (EKS/GKE) clusters with zero-downtime blue/green deployment pipelines and automated failovers.",
      icon: Cloud,
      metric: "99.99% Availability SLA",
      features: [
        "Terraform & Pulumi Infrastructure-as-Code (IaC)",
        "Zero-downtime canary & blue/green deployments",
        "Multi-zone disaster recovery and automated backups",
        "Cost optimization reducing AWS/GCP bills by 35%+"
      ]
    },
    {
      title: "Enterprise API Gateways & Zero-Trust Defense",
      tag: "mTLS & OAuth 2.0 Security",
      desc: "Harden internal and external endpoints with automated rate limiting, mutual TLS encryption, enterprise SSO (Okta, Auth0), and intelligent web application firewalls.",
      icon: ShieldCheck,
      metric: "SOC2 & PCI-DSS Compliant",
      features: [
        "Reverse proxy & ingress controllers (Envoy, NGINX)",
        "Enterprise RBAC / ABAC fine-grained access control",
        "Real-time DDoS protection & automated IP throttling",
        "Comprehensive cryptographic audit trails"
      ]
    }
  ];

  const cloudLayers = [
    {
      layer: "01. Global Edge & CDN",
      tech: "Cloudflare Workers / AWS CloudFront",
      desc: "Static asset caching, SSL termination, and edge middleware handling geo-routing and token validation in under 10ms."
    },
    {
      layer: "02. Application Mesh",
      tech: "Next.js / Node.js Pods on Kubernetes",
      desc: "Autoscaling container pods orchestrating server-rendered pages, business services, and GraphQL/REST gateway aggregation."
    },
    {
      layer: "03. Asynchronous Event Bus",
      tech: "Apache Kafka / Redis Streams",
      desc: "Decoupled message queues processing enterprise telemetry, webhooks, analytics, and background worker jobs without blocking user requests."
    },
    {
      layer: "04. Resilient Persistence Layer",
      tech: "PostgreSQL / ClickHouse / Redis",
      desc: "Sharded relational data stores with automated failover replicas and high-speed in-memory caches delivering sub-5ms query times."
    }
  ];

  const techList = [
    "Next.js",
    "React",
    "Node.js",
    "Python FastAPI",
    "Golang",
    "Kubernetes (EKS/GKE)",
    "Docker",
    "AWS & GCP Cloud",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "Apache Kafka",
    "GraphQL",
    "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Layers className="w-3.5 h-3.5" />
            <span>Capability // Cloud-Native & Web Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Cloud-Native Engineering & <br />
            <span className="text-[#ff8a48]">High-Scale Web Architectures</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We architect fault-tolerant distributed web systems, serverless backends, and multi-region cloud infrastructures for enterprises that cannot afford downtime or latency bottlenecks.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>View Production Portfolio</span>
            </Link>
          </div>

          {/* SLA Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>99.99% Architecture SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-100ms P95 Global Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Zero-Downtime CI/CD Deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Multi-Region Cloud Failover</span>
            </div>
          </div>
        </div>

        {/* 2. Engineering Pillars Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Technical Capabilities
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineered for Million-User Concurrency
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              From responsive frontend interfaces to distributed data pipelines, our engineering standards mirror Stripe and Vercel.
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
                  <span>Capability Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss requirements</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Distributed Cloud Architecture Stack */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Architecture Blueprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              4-Tier Distributed Cloud Topology
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              How we structure enterprise platforms to guarantee zero single points of failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudLayers.map((l, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] hover:border-[#ff8a48]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff8a48] mb-2">{l.layer}</div>
                  <div className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded inline-block mb-3 border border-white/[0.06]">
                    {l.tech}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{l.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Tier {idx + 1} Isolation
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Production Tech Badges */}
        <div className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#ff8a48] mb-1">Tooling</div>
              <h3 className="text-xl font-bold text-white">Cloud & Full-Stack Tech Ecosystem</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Battle-tested across production workloads</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techList.map((t, i) => (
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
              <span>Scale with Certainty</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to engineer your next-generation cloud platform?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Connect directly with our cloud architects to discuss infrastructure requirements, latency targets, and migration roadmaps.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Architectural Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>Explore Cloud Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
