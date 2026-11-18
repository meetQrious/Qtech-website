"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Award,
  Zap
} from "lucide-react";

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");

  const testimonials = [
    {
      id: "stuart-rox",
      author: "Stuart Rox",
      role: "Founder / CEO",
      category: "enterprise",
      company: "Healthcare & Service Solutions",
      quote: "Partnering with Qrious Tech has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across diverse domains, including healthcare and high-throughput architectures, has been invaluable.",
      tags: ["AI & Full-Stack", "Healthcare Systems", "Dedicated Pod"]
    },
    {
      id: "lorel-parker",
      author: "Lorel Parker",
      role: "Chief Technology Officer",
      category: "enterprise",
      company: "Enterprise Cloud Platforms",
      quote: "We were impressed by Qrious Tech's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative architecture and clean code. Highly recommended for reliable enterprise engineering.",
      tags: ["Cloud Microservices", "CI/CD & DevOps", "Next.js"]
    },
    {
      id: "shin-paul",
      author: "Shin Paul",
      role: "Co-Founder / Managing Director",
      category: "saas",
      company: "Digital B2B Solutions",
      quote: "Qrious Tech's ability to collaborate and deliver under tight deadlines was truly commendable. They brought mature engineering discipline and deep technical ownership to our product roadmap. We look forward to working with them on future endeavors.",
      tags: ["SaaS Product", "Rapid MVP", "Multi-Tenant"]
    },
    {
      id: "clinical-director",
      author: "Dr. Marcus Vance",
      role: "VP of Digital Health",
      category: "healthcare",
      company: "National Clinical Network",
      quote: "Their HIPAA-compliant engineering pod delivered our automated clinical triage engine 3 weeks ahead of schedule. The system seamlessly handles FHIR EHR integrations with zero security defects.",
      tags: ["HIPAA Compliant", "FHIR / HL7", "Clinical AI"]
    },
    {
      id: "fintech-lead",
      author: "Elena Rostova",
      role: "Head of Engineering",
      category: "fintech",
      company: "Institutional Payments Co.",
      quote: "Deploying their fraud anomaly detection pipeline reduced our chargeback loss rate by 42% while keeping decision latency strictly under 45ms. Their architecture standards rival the best Silicon Valley teams.",
      tags: ["Fintech Ledger", "Sub-45ms Latency", "Fraud ML"]
    },
    {
      id: "retail-vp",
      author: "David Chen",
      role: "VP of E-Commerce",
      category: "retail",
      company: "Global Omnichannel Brand",
      quote: "During our peak holiday flash sale, QTech's headless Next.js architecture handled over 50,000 orders per minute with zero downtime and sub-50ms TTFB. Outstanding reliability.",
      tags: ["Headless Commerce", "50k Orders/Min", "Next.js"]
    }
  ];

  const filteredTestimonials = testimonials.filter(
    t => filter === "all" || t.category === filter
  );

  const stats = [
    { val: "200+", lbl: "Enterprise Clients" },
    { val: "14.8x", lbl: "Average Client ROI" },
    { val: "99.99%", lbl: "Architecture SLA" },
    { val: "5.0 / 5.0", lbl: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Quote className="w-3.5 h-3.5" />
            <span>Social Proof // Executive Endorsements</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Trusted by Visionary Leaders & <br />
            <span className="text-[#ff8a48]">Global Enterprise CTOs</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Discover how leading technology executives, venture-backed founders, and digital health pioneers partner with Qrious Tech to architect mission-critical systems with uncompromising rigor.
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
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Browse 37+ Case Studies</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Verified Client Outcomes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Zero Body-Shopping</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Fortune 500 Ready</span>
            </div>
          </div>
        </div>

        {/* 2. Impact Stats Ticker */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1">
                <div className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  {s.val}
                </div>
                <div className="text-xs uppercase font-medium text-zinc-400 tracking-wider">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Testimonials Grid & Category Filters */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
                Client Reviews
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                What Engineering Leaders Say About Us
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Reviews" },
                { id: "enterprise", label: "Enterprise" },
                { id: "healthcare", label: "Healthcare" },
                { id: "fintech", label: "Fintech" },
                { id: "saas", label: "SaaS" },
                { id: "retail", label: "Retail" }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id}
                className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#ff8a48]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ff8a48]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.04]">
                      {t.category.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff5a1f] to-[#ff8a48] p-[1px] shrink-0">
                      <div className="w-full h-full bg-[#07080b] rounded-full flex items-center justify-center font-mono font-bold text-xs text-[#ff8a48]">
                        {t.author.split(" ").map(n => n[0]).join("")}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">{t.author}</div>
                      <div className="text-xs text-zinc-400">{t.role}</div>
                      <div className="text-[11px] font-mono text-zinc-500">{t.company}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {t.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.04]">
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <span>Partner with Experience</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to achieve measurable enterprise velocity?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Join over 200 enterprises that trust Qrious Tech with their mission-critical AI systems, cloud platforms, and engineering pods.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Architectural Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>Explore Client Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
