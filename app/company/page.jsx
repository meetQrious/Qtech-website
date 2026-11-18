"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowRight, ShieldCheck, Users, Zap, CheckCircle2, Award, Quote } from "lucide-react";

export default function CompanyPage() {
  const values = [
    {
      title: "Client-Centric Engineering",
      desc: "For any business, customers are always at the center. We think from your end customers' perspectives, their pain points, and devise architecture that solves core business problems.",
      icon: Users
    },
    {
      title: "Radical Transparency & Collaboration",
      desc: "When our engineering pods collaborate across time zones, we maintain continuous alignment through shared sprint boards, daily async standups, and direct access to senior architects.",
      icon: Zap
    },
    {
      title: "Guaranteed Production Quality",
      desc: "With over two decades of combined enterprise delivery experience, we enforce strict internal code review frameworks, automated CI/CD pipelines, and zero-compromise security standards.",
      icon: ShieldCheck
    }
  ];

  const stats = [
    { val: "200+", lbl: "Enterprise Clients" },
    { val: "500+", lbl: "Projects Delivered" },
    { val: "88+", lbl: "Full-Time Engineers" },
    { val: "99.99%", lbl: "Architecture SLA" }
  ];

  const testimonials = [
    {
      quote: "Partnering with Qrious Tech has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. From AI-driven automation to healthcare systems, their expertise has been invaluable.",
      author: "Stuart Rox",
      role: "Founder / CEO"
    },
    {
      quote: "We were impressed by Qrious Tech's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative architecture and clean code. Highly recommended for reliable enterprise engineering.",
      author: "Lorel Parker",
      role: "CTO"
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. Hero Section */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Qrious Tech</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Empowering innovation <br />
            <span className="text-[#ff8a48]">through engineering rigor.</span>
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Qrious Tech Team LLP is an enterprise technology and AI engineering partner. We combine deep domain expertise in multi-agent systems, cloud-native distributed backends, and full-stack product engineering to build software that scales reliably.
          </p>
        </div>

        {/* 2. Message from the CEO */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff8a48] uppercase tracking-wider font-semibold">
                Executive Leadership
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Message from the CEO
              </h2>
              <div className="text-xs font-mono text-zinc-400">
                Rikin Thakkar, CEO, <strong className="text-white">Qrioustech Team LLP</strong>
              </div>
              
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
                <p>
                  &ldquo;At Qrious Tech, our mission is to empower forward-thinking businesses with world-class engineering talent — enabling technology leaders to focus on core strategic objectives while we build and manage the mission-critical software backbone.&rdquo;
                </p>
                <p>
                  &ldquo;Our team of 88+ skilled professionals works tirelessly across diverse domains including autonomous AI agents, foundation model RAG, cloud-native distributed microservices, and enterprise data intelligence. We pride ourselves on transparent collaboration, strict IP protection, and measurable business velocity.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] text-center w-full max-w-xs space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2 mx-auto flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                  <img src="/logo.png" alt="Qrious Tech Logo" className="w-16 h-16 object-contain" />
                </div>
                <div className="font-bold text-white text-base">Rikin Thakkar</div>
                <div className="text-xs font-mono text-zinc-400">Chief Executive Officer</div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400">
                  ● 20+ Years Tech Heritage
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Stats Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0b0d14] border border-white/[0.08] text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ff8a48]">{s.val}</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* 4. Core Values */}
        <div className="space-y-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Every team member&apos;s conviction.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08] hover:border-[#ff6b2b]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] mb-6">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Client Testimonials */}
        <div className="space-y-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-2">
              <Quote className="w-3.5 h-3.5" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Trusted by tech leaders globally.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff6b2b] to-[#ff8a48] flex items-center justify-center text-xs font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.author}</div>
                    <div className="text-[11px] font-mono text-zinc-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Closing CTA Banner */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-slate-50 dark:from-[#0e111a] dark:via-[#121622] dark:to-[#07080b] border border-orange-200/80 dark:border-white/[0.09] shadow-xl shadow-orange-500/5 text-center space-y-6 transition-all duration-300">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
            Ready to partner with Qrious Tech?
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Schedule a technical discovery session with our Principal Architects and learn how our dedicated engineering pods can scale your velocity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-pill-primary">
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/crew" className="btn-pill-secondary">
              <span>Join Our Team</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
