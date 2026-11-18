"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Overview & Commitment to Privacy",
      content: `At Qrious Tech (Qrioustech Team LLP), accessible from https://qrioustech.com, our fundamental priority is safeguarding the privacy, confidentiality, and intellectual property of our clients, visitors, and commercial partners. This Privacy Policy details the categories of information we collect, our lawful bases for processing, and our zero-compromise security protocols.`
    },
    {
      title: "2. Information We Collect",
      content: `When you interact with our website, request architectural scoping, submit an RFP inquiry, or communicate with our engineering directors, we collect:
- Contact Information: Full name, corporate email address, direct phone number, job title, and company entity.
- Technical & Architectural Scope: Technical problem statements, project briefs, RFP specifications, and codebase documentation provided under mutual NDA.
- Device & Network Telemetry: IP addresses, browser runtime headers, and referral metrics gathered through standard, anonymized server logs to prevent DDoS and malicious attacks.`
    },
    {
      title: "3. Enterprise AI & Zero-Data-Retention Commitment",
      content: `We enforce strict data governance for all AI and machine learning engagements:
- Zero Model Training on Client Data: We do not permit proprietary client codebases, internal documentation, or transactional payloads to be ingested into public third-party foundation models.
- Private Cloud & VPC Isolation: All client fine-tuning, embeddings, and RAG pipelines are hosted within sovereign, isolated VPC clusters (AWS, GCP, or client-managed infrastructure).
- Ephemeral Inference: Data processed by our agent runtimes is held transiently in memory and never persisted without explicit cryptographic authorization.`
    },
    {
      title: "4. Regulatory Standards & Compliance",
      content: `Qrious Tech implements administrative, technical, and physical safeguards aligned with global standards:
- HIPAA & HITECH: Full Business Associate Agreements (BAA) and cryptographic PHI de-identification protocols.
- SOC2 Type II: Annual independent audits verifying availability, confidentiality, and integrity controls.
- GDPR & CCPA: Complete data portability, right-to-be-forgotten adherence, and transparent audit logging.`
    },
    {
      title: "5. Non-Disclosure & Intellectual Property",
      content: `All client engagements operate under strict mutual Non-Disclosure Agreements (NDAs). Qrioustech Team LLP never sells, leases, or monetizes client information. 100% of custom code, model weights, and architectural assets developed during client engagements belong unconditionally to the client from Day 1.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance & Legal // Privacy Policy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy & <br />
            <span className="text-[#ff8a48]">Enterprise Data Governance</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Effective Date: November 17, 2026 // Qrioustech Team LLP
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-4"
            >
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span className="text-[#ff8a48] font-mono text-sm">#0{idx + 1}</span>
                <span>{sec.title}</span>
              </h2>
              <div className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line space-y-2">
                {sec.content}
              </div>
            </div>
          ))}

          {/* Legal Contact Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-6">
            <h3 className="text-lg font-bold text-white">Legal & Compliance Inquiries</h3>
            <p className="text-sm text-zinc-400">
              For any privacy, security questionnaire, or compliance inquiries, please contact our legal office:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[#ff8a48]">Corporate Entity</span>
                <div className="text-white font-sans font-semibold text-sm">Qrioustech Team LLP</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[#ff8a48]">Compliance Email</span>
                <div>
                  <a href="mailto:info@qrioustech.com" className="text-white hover:underline font-sans font-semibold text-sm">
                    info@qrioustech.com
                  </a>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[#ff8a48]">Telephone Hotline</span>
                <div>
                  <a href="tel:+916355794606" className="text-white hover:underline font-sans font-semibold text-sm">
                    +91 63557 94606
                  </a>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[#ff8a48]">Headquarters</span>
                <div className="text-zinc-300 font-sans text-xs">
                  A-706 to 709, Dev Aurum, Prahladnagar, Ahmedabad, Gujarat, India
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
