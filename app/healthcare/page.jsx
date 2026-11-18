"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  ShieldCheck, 
  FileText, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Database, 
  Server,
  Zap,
  Stethoscope
} from "lucide-react";

export default function HealthcarePage() {
  const solutions = [
    {
      title: "Autonomous Clinical Note Synthesis",
      tag: "Ambient Clinical Intelligence",
      desc: "Transform ambient patient-physician consultations into structured, ICD-10 coded SOAP notes in real-time. Clinicians review and sign off in seconds, saving up to 2.5 hours per day on administrative documentation.",
      icon: Stethoscope,
      metric: "-65% Charting Burden",
      features: [
        "Specialty-adapted medical LLMs with zero PHI storage",
        "Automated ICD-10 & CPT billing code recommendation",
        "Direct bidirectional write-back into Epic and Cerner",
        "Deterministic physician review and signature verification"
      ]
    },
    {
      title: "Medical Imaging & Diagnostic Computer Vision",
      tag: "DICOM & MONAI Acceleration",
      desc: "High-throughput neural network pipelines that ingest standard DICOM scans (X-ray, MRI, CT) to detect acute anomalies, segment regions of interest, and triage emergency findings to on-call radiologists.",
      icon: Activity,
      metric: "< 800ms Scan Triage",
      features: [
        "MONAI and PyTorch deep convolutional models",
        "Automated multi-planar DICOM volumetric reconstruction",
        "Priority alert dispatch for critical pulmonary/brain findings",
        "Zero degradation image compression for telemedicine"
      ]
    },
    {
      title: "Intelligent Patient Triage & Virtual Care",
      tag: "Deterministic Clinical Decision Trees",
      desc: "Empower patients with 24/7 intelligent symptom assessment engines that classify acuity, recommend urgent care or telehealth visits, and schedule appointments directly on provider calendars.",
      icon: HeartPulse,
      metric: "99.2% Clinical Triage Accuracy",
      features: [
        "Guarded decision trees verified by board-certified physicians",
        "Multi-lingual patient conversational interfaces",
        "Integration with remote patient monitoring (RPM) vitals",
        "Automated emergency 911 / ER redirection triggers"
      ]
    },
    {
      title: "FHIR / HL7 Interoperable Data Fabric",
      tag: "Enterprise Healthcare Integration",
      desc: "Break down medical data silos with standardized HL7 FHIR RESTful APIs. Connect legacy EHR databases, laboratory LIMS systems, and pharmacy benefit networks into a unified compliance-hardened data lake.",
      icon: Database,
      metric: "100% FHIR R4 Compliant",
      features: [
        "Bidirectional Epic, Cerner, and Athenahealth EHR bridges",
        "Automated cryptographic PHI de-identification for research",
        "Row-level consent enforcement and patient privacy controls",
        "Comprehensive HIPAA audit logging with immutable traces"
      ]
    }
  ];

  const complianceBadges = [
    { title: "HIPAA Compliant", desc: "Full Business Associate Agreement (BAA) execution" },
    { title: "HL7 FHIR R4", desc: "Standardized interoperability across major EHR systems" },
    { title: "SOC2 Type II", desc: "Independently audited security and availability controls" },
    { title: "Zero-Data Retention", desc: "Air-gapped private VPC inference with no data retention" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Industry Solution // Healthcare & Life Sciences</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            AI Engineering & Digital Health <br />
            <span className="text-[#ff8a48]">for Mission-Critical Care</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We engineer HIPAA-compliant medical software, ambient AI clinical documentation, diagnostic imaging pipelines, and HL7 FHIR interoperability fabrics for hospital networks and high-growth digital health companies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Healthcare Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Healthcare Case Studies</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>HIPAA BAA Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>HL7 FHIR Interoperable</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>Sub-Second Clinical Triage</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Air-Gapped Private VPC</span>
            </div>
          </div>
        </div>

        {/* 2. Solutions Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Clinical Solutions
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Transforming Patient Outcomes with Precision AI
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Strictly engineered to comply with healthcare regulatory frameworks while reducing clinician burnout and diagnostic latency.
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
                  <span>Healthcare Solution #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss healthcare architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Compliance Frameworks */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Governance & Security
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Healthcare Compliance Guarantees
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              We never compromise on patient confidentiality. Every pipeline is protected with end-to-end cryptographic safeguards and zero data leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceBadges.map((b, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{b.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-emerald-400/80">
                  Audit Verified
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
              <span>Modernize Healthcare Delivery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build your HIPAA-compliant AI health system with us.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Schedule a technical discovery session with our digital health architects. Review security architectures, EHR integration roadmaps, and BAA terms.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Healthcare Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View Healthcare Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
