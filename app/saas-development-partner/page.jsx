"use client";

import React from "react";
import Link from "next/link";
import { 
  Boxes, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Server, 
  Layers,
  Cpu,
  Workflow
} from "lucide-react";

export default function SaasDevelopmentPartnerPage() {
  const pillars = [
    {
      title: "Multi-Tenant Cloud Architecture",
      tag: "Strict Data Isolation",
      desc: "Engineer resilient multi-tenant SaaS backends with dynamic schema routing and PostgreSQL Row-Level Security (RLS) guaranteeing absolute tenant privacy and zero data leakage across organizations.",
      icon: Layers,
      metric: "100% Tenant Isolation",
      features: [
        "Dynamic tenant provisioning & connection pooling",
        "Row-Level Security (RLS) & schema-per-tenant support",
        "Sub-domain & custom domain CNAME routing with automatic SSL",
        "Multi-region tenant data residency compliance"
      ]
    },
    {
      title: "Usage-Based Metering & Stripe Billing",
      tag: "Flexible Monetization Engines",
      desc: "Architect consumption-based telemetry pipelines that track API calls, storage, or seats in real-time. Integrate Stripe Billing with automated invoicing, dunning management, and multi-tier subscription plans.",
      icon: CreditCard,
      metric: "99.99% Billing Accuracy",
      features: [
        "Real-time event metering with Apache Kafka & Redis",
        "Stripe Billing, Customer Portal, and webhook handling",
        "Automated overage alerts & plan upgrade nudges",
        "Multi-currency & localized tax calculation (Stripe Tax)"
      ]
    },
    {
      title: "Enterprise SSO, RBAC & Audit Trails",
      tag: "Enterprise-Ready Tiering",
      desc: "Unlock enterprise sales deals with turnkey SAML 2.0 / OIDC Single Sign-On (Okta, Azure AD, Google Workspace), Directory Sync (SCIM), role-based access control, and immutable audit logs.",
      icon: ShieldCheck,
      metric: "SOC2 Type II Ready",
      features: [
        "WorkOS & Auth0 enterprise SAML / SCIM integration",
        "Granular Role-Based & Attribute-Based Access Control (RBAC/ABAC)",
        "Cryptographically signed enterprise activity audit logs",
        "Session timeout and device management policies"
      ]
    },
    {
      title: "Embedded AI Copilots & Workflow Swarms",
      tag: "Generative Product Acceleration",
      desc: "Differentiate your SaaS platform from legacy competitors by embedding contextual AI copilots capable of generating reports, automating multi-step tasks, and querying tenant data in natural language.",
      icon: Cpu,
      metric: "3.4x Higher Retention",
      features: [
        "Contextual tenant-isolated RAG vector indexes",
        "Natural language workflow triggers & tool dispatch",
        "Zero data retention to foundation model providers",
        "Streaming response rendering with sub-500ms TTFB"
      ]
    }
  ];

  const lifecycle = [
    {
      step: "01",
      title: "Architecture & Data Schema Blueprint",
      desc: "We define tenant isolation boundaries, database schemas, API contracts, and user journey wireframes in an interactive 2-week sprint."
    },
    {
      step: "02",
      title: "MVP Production Sprint (Weeks 3-8)",
      desc: "We construct the core Next.js frontend, backend microservices, authentication, and core workflow features ready for initial customer pilot onboarding."
    },
    {
      step: "03",
      title: "Enterprise Hardening & SOC2 Audit",
      desc: "We implement SAML SSO, automated billing metering, rate-limiting gateways, and penetration testing verification for SOC2 Type II compliance."
    },
    {
      step: "04",
      title: "Continuous Scale & SLA Guarantee",
      desc: "We maintain 99.99% uptime, manage multi-region cloud scaling, and continuously ship product enhancements as your dedicated engineering partner."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Boxes className="w-3.5 h-3.5" />
            <span>Industry Solution // Enterprise B2B SaaS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Enterprise B2B SaaS <br />
            <span className="text-[#ff8a48]">Product Engineering & Hyper-Scale</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We partner with ambitious software founders and technology companies to engineer multi-tenant SaaS platforms from MVP to enterprise maturity — with usage-based billing, enterprise SSO, and native AI copilots.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule SaaS Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore SaaS Products</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Tenant Isolation</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Usage Metering & Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>SAML SSO & SCIM Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400 shrink-0" />
              <span>99.99% Multi-Region SLA</span>
            </div>
          </div>
        </div>

        {/* 2. Solutions Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              SaaS Engineering Vectors
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Enterprise Foundations for High-Growth SaaS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered to satisfy the stringent security questionnaires of Fortune 500 procurement teams.
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
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-emerald-400 border border-emerald-500/20">
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
                  <span>SaaS Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss SaaS roadmap</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Delivery Lifecycle */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              SaaS Delivery Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Concept to Market-Ready SaaS in 8 Weeks
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              A disciplined, predictable agile roadmap that transforms product vision into recurring revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycle.map((l, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] hover:border-[#ff8a48]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff8a48] mb-2">{l.step}</div>
                  <h4 className="text-base font-bold text-white mb-2">{l.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{l.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Milestone #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c0e16] via-[#111422] to-[#0c0e16] border border-[#ff6b2b]/30 shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/10 border border-[#ff6b2b]/20 text-xs font-mono text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Your SaaS Platform</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turn your software concept into an enterprise-grade SaaS.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Book a product architecture session with our SaaS engineering leads. We will review your data schemas, tenant model, and technical roadmap.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule SaaS Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View SaaS Portfolio</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
