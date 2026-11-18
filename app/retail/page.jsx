"use client";

import React from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Database, 
  Search,
  Server,
  Boxes
} from "lucide-react";

export default function RetailPage() {
  const solutions = [
    {
      title: "Algorithmic Pricing & Margin Optimization",
      tag: "Dynamic Yield Management",
      desc: "Deploy autonomous pricing engines that adjust SKU pricing in real-time based on competitor positioning, current inventory decay, localized demand surges, and margin thresholds.",
      icon: TrendingUp,
      metric: "+18.4% Gross Margin Lift",
      features: [
        "Real-time competitor price telemetry ingestion",
        "Elasticity models preventing margin erosion",
        "Automated promotional markdown scheduling",
        "Deterministic price floors protected by guardrails"
      ]
    },
    {
      title: "Predictive Demand & Supply Chain Graph",
      tag: "SKU-Level Regional Forecasting",
      desc: "Machine learning forecasting pipelines that combine historical sales data, weather patterns, seasonal trends, and regional lead times to accurately predict stock requirements 90 days in advance.",
      icon: Boxes,
      metric: "-42% Stockout Incidents",
      features: [
        "Automated purchase order synthesis for suppliers",
        "Omnichannel warehouse inventory synchronization",
        "Perishable inventory expiration risk alerting",
        "Integration with SAP ERP, NetSuite, & Manhattan WMS"
      ]
    },
    {
      title: "Personalized Neural Product Discovery",
      tag: "Dense Vector Search & Recommendations",
      desc: "Replace rigid keyword search with multi-modal semantic discovery. Our recommendation agents analyze customer clickstream behavior and visual attributes to serve bespoke product rankings.",
      icon: Search,
      metric: "+28% Conversion Rate",
      features: [
        "Visual similarity search across catalog imagery",
        "Real-time session-based collaborative filtering",
        "Personalized dynamic bundling & cross-sell swarms",
        "Sub-20ms recommendation inference latency"
      ]
    },
    {
      title: "Resilient Headless Commerce Architecture",
      tag: "Flash-Sale Scale Architecture",
      desc: "Engineer headless, composable storefronts using Next.js, Edge middleware, and distributed microservices capable of absorbing 100x traffic surges during Black Friday flash sales with zero degradation.",
      icon: ShoppingBag,
      metric: "50,000+ Orders/Min Capacity",
      features: [
        "Headless Shopify Plus, commercetools, & custom backends",
        "Edge-cached product catalog with sub-50ms TTFB",
        "Optimistic cart checkout with automated inventory locking",
        "Zero-downtime canary deployment pipelines"
      ]
    }
  ];

  const metrics = [
    { val: "50,000+", lbl: "Peak Orders / Minute" },
    { val: "< 20ms", lbl: "Recommendation Latency" },
    { val: "99.999%", lbl: "Checkout Availability" },
    { val: "+28%", lbl: "Average Order Value (AOV)" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Industry Solution // Retail & Intelligent Commerce</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Retail Intelligence & <br />
            <span className="text-[#ff8a48]">Autonomous Omnichannel Commerce</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We engineer high-throughput headless commerce architectures, dynamic algorithmic pricing engines, predictive demand forecasting, and real-time inventory synchronization for enterprise retailers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Retail Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Commerce Portfolio</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>50k+ Orders/Min Resilience</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-20ms Personalization</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Real-Time Inventory Lock</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400 shrink-0" />
              <span>99.999% Checkout Uptime</span>
            </div>
          </div>
        </div>

        {/* 2. Solutions Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Retail Vectors
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Commerce Infrastructure Built for Infinite Scale
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Turn catalog discovery into immediate conversion with low-latency search and predictive yield optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((item, idx) => (
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
                  <span>Retail Solution #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss retail architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Metrics Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Performance Telemetry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Measurable Business Impact Across Retail Deployments
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#ff8a48] font-mono tracking-tight">{m.val}</div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0c0e16] via-[#111422] to-[#0c0e16] border border-[#ff6b2b]/30 shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/10 border border-[#ff6b2b]/20 text-xs font-mono text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accelerate Omnichannel Growth</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scale your digital commerce revenue with our architects.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Book a technical retail discovery session. We will evaluate your inventory architecture, checkout scalability, and personalized search capabilities.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Retail Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>Browse Retail Projects</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
