"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, Lock, Zap, ArrowRight, CheckCircle2, MessageSquare, Building2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    scope: "Autonomous AI Agents",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#ff8a48] uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Confidential Technical Discovery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Let&apos;s build your <br />
            <span className="text-[#ff8a48]">AI advantage.</span>
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Schedule a confidential 30-minute technical session with our Principal AI Architects. We will evaluate technical feasibility, compute economics, and data hygiene for your enterprise systems.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:info@qrioustech.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-[#ff6b2b]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Direct Inquiries</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#ff8a48] transition-colors mt-0.5">
                    info@qrioustech.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+916355794606"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-[#ff6b2b]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Direct Phone</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#ff8a48] transition-colors mt-0.5">
                    +91 63557 94606
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0e16] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Headquarters</div>
                  <div className="text-sm font-semibold text-white leading-relaxed mt-0.5">
                    A-706 to 709, Dev Aurum, Prahladnagar, Ahmedabad, Gujarat - 380015, India
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Trust Guarantees */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Enterprise Standards Guaranteed
              </div>
              
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <Lock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Strict Mutual NDA executed prior to discovery</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero data retention & 100% private VPC isolation</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
                <span>5-Day rapid sprint onboarding SLA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0d14] border border-white/[0.09] shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Discovery Session Requested</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.firstName || "there"}. One of our Principal AI Architects will review your project parameters and reach out within 24 hours under mutual NDA.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-pill-secondary mt-4"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Satya"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6b2b] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Nadella"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6b2b] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="architect@enterprise.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6b2b] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6b2b] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Primary Technical Requirement
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-[#0e1017] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff6b2b] transition-colors"
                    >
                      <option>Autonomous AI Agents & Swarm Orchestration</option>
                      <option>Custom Foundation Models & Private VPC RAG</option>
                      <option>High-Throughput Cloud & Distributed Systems</option>
                      <option>Unified Data Intelligence & Executive BI</option>
                      <option>Dedicated Senior AI Engineering Pods</option>
                      <option>Salesforce CRM Modernization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Project Context &amp; Objective
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your workload, target latency, data scale, or current bottlenecks..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6b2b] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-pill-primary cursor-pointer py-3.5"
                  >
                    <span>Request Discovery Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] font-mono text-zinc-500">
                    Protected by mutual confidentiality • Zero spam policy
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
