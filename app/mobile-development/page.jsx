"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  WifiOff, 
  Fingerprint, 
  Layers,
  Activity,
  Server
} from "lucide-react";

export default function MobileDevelopmentPage() {
  const pillars = [
    {
      title: "On-Device Edge AI & Computer Vision",
      tag: "CoreML / ONNX / TFLite",
      desc: "Run neural networks directly on user devices utilizing the Apple Neural Engine and Android NPU — achieving real-time computer vision, gesture tracking, and instant inference with zero cloud latency.",
      icon: Cpu,
      metric: "< 15ms On-Device Inference",
      features: [
        "Apple CoreML & Android NNAPI acceleration",
        "Quantized INT8 vision & embedding models",
        "Zero cloud compute fees for edge inference",
        "Complete user data privacy on-device"
      ]
    },
    {
      title: "Cross-Platform React Native & Flutter",
      tag: "Unified High-Performance Codebase",
      desc: "Deliver 60-120 FPS native experiences for iOS and Android simultaneously. We construct custom native C++/Swift/Kotlin bridges for specialized camera, Bluetooth, and biometric operations.",
      icon: Smartphone,
      metric: "50% Faster Time-to-Market",
      features: [
        "React Native with New Architecture (Fabric / TurboModules)",
        "Flutter with Dart compilation to ARM64 native binaries",
        "Fluid gesture interactions via Reanimated 3",
        "Shared business logic and multi-platform test suites"
      ]
    },
    {
      title: "Offline-First Synchronization Engines",
      tag: "CRDTs & SQLite / WatermelonDB",
      desc: "Guarantee enterprise app responsiveness even in zero-connectivity environments. Transactions are committed locally and synchronized automatically with conflict-free replicated data types.",
      icon: WifiOff,
      metric: "Zero Data Loss Guarantee",
      features: [
        "Local SQLite / Realm / WatermelonDB persistence",
        "Optimistic UI updates with instant local feedback",
        "Deterministic merge conflict resolution algorithms",
        "Background data sync via push notification triggers"
      ]
    },
    {
      title: "Enterprise Biometric & Hardware Security",
      tag: "Hardware Keystore & Secure Enclave",
      desc: "Protect sensitive corporate assets with hardware-backed encryption keys, biometric authentication (Face ID / Fingerprint), jailbreak/root detection, and end-to-end encrypted payload storage.",
      icon: Fingerprint,
      metric: "SOC2 & HIPAA Compliant",
      features: [
        "Apple Secure Enclave & Android KeyStore cryptography",
        "Runtime Application Self-Protection (RASP)",
        "Biometric multi-factor authentication workflows",
        "SSL pinning and certificate transparency verification"
      ]
    }
  ];

  const devLifecycle = [
    {
      step: "01",
      title: "Native Architecture & UX Prototyping",
      desc: "We design ergonomic mobile interaction patterns, define native bridges, and establish a cross-platform component design system."
    },
    {
      step: "02",
      title: "Edge Model Optimization & Integration",
      desc: "We quantize and benchmark AI models for on-device battery and memory efficiency, ensuring no device thermal throttling."
    },
    {
      step: "03",
      title: "Automated Device Matrix Testing",
      desc: "Every build executes across 50+ real physical iOS and Android devices via automated device farms to catch regressions early."
    },
    {
      step: "04",
      title: "Store Submission & Fastlane CI/CD",
      desc: "Automated test flight distribution, App Store and Google Play compliance review, and automated staged rollout releases."
    }
  ];

  const techStack = [
    "React Native",
    "Flutter / Dart",
    "Swift (iOS)",
    "Kotlin (Android)",
    "CoreML",
    "ONNX Runtime Mobile",
    "TensorFlow Lite",
    "SQLite / WatermelonDB",
    "Fastlane CI/CD",
    "Firebase / APNs",
    "GraphQL / Apollo Client",
    "Reanimated 3"
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Capability // Edge AI & Mobile Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Edge AI & Cross-Platform <br />
            <span className="text-[#ff8a48]">Enterprise Mobile Engineering</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We engineer high-performance mobile applications for iOS and Android powered by on-device neural processing, offline-first sync engines, and bank-grade biometric hardware security.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Mobile Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Explore Mobile Portfolio</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>60-120 FPS Native Fluidity</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-15ms On-Device Inference</span>
            </div>
            <div className="flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% Offline-First Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Biometric & Secure Enclave</span>
            </div>
          </div>
        </div>

        {/* 2. Core Pillars Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Technical Capabilities
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Mobile Engineering Engineered for Perfection
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              We eliminate sluggish web-view wrappers in favor of true native performance, edge neural networks, and fault-tolerant local synchronization.
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
                  <span>Mobile Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss mobile app</span>
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
              Engineering Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              4-Stage Mobile Delivery Pipeline
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              From concept to App Store feature, our automated pipelines ensure zero delays and seamless approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devLifecycle.map((d, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#07080b] border border-white/[0.06] hover:border-[#ff8a48]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff8a48] mb-2">{d.step}</div>
                  <h4 className="text-base font-bold text-white mb-2">{d.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{d.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Sprint Milestone #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Tech Ecosystem */}
        <div className="p-8 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#ff8a48] mb-1">Mobile Stack</div>
              <h3 className="text-xl font-bold text-white">Production Mobile & Edge Frameworks</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Native iOS & Android compilation</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((t, i) => (
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
              <span>Launch Your Mobile Experience</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build an enterprise-grade mobile app with our team.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Schedule a mobile architectural review. We will evaluate your app requirements, cross-platform vs native trade-offs, and edge AI opportunities.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Mobile Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>View Mobile Projects</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
