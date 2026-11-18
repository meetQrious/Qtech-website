"use client";

import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  Activity, 
  Eye, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Server, 
  Video, 
  Flame,
  Radio
} from "lucide-react";

export default function SportsPage() {
  const solutions = [
    {
      title: "Computer Vision & 3D Pose Estimation",
      tag: "Markerless Biomechanics",
      desc: "Extract 33 anatomical joint keypoints in 3D coordinate space directly from standard broadcast or smartphone video. Analyze kinematic velocity, angular acceleration, and postural alignment in real-time with zero wearable markers.",
      icon: Eye,
      metric: "60 FPS Real-Time CV",
      features: [
        "PyTorch & TensorRT accelerated keypoint detectors",
        "Sub-millimeter joint angle calculation accuracy",
        "Multi-camera occlusion handling & ray triangulations",
        "Edge-compatible inference on iOS (CoreML) and Android"
      ]
    },
    {
      title: "Real-Time Sensor Mesh & Telemetry",
      tag: "High-Frequency IoT Ingestion",
      desc: "Ingest high-frequency sensor streams from GPS vests, heart rate straps, force plates, and smart equipment into a centralized telemetry engine delivering live sideline feedback to coaches.",
      icon: Activity,
      metric: "< 100ms Telemetry Latency",
      features: [
        "MQTT and WebSocket streaming data pipelines",
        "Time-series database optimization via TimescaleDB",
        "Dynamic player load and cardiovascular exertion scoring",
        "Instant sideline tablet alerts for coaching staff"
      ]
    },
    {
      title: "Predictive Injury & Musculoskeletal Modeling",
      tag: "Fatigue & Asymmetry Detection",
      desc: "Machine learning models trained on longitudinal biomechanical data to detect subtle movement asymmetries and muscular overload — alerting athletic trainers to elevated strain before acute injury occurs.",
      icon: Flame,
      metric: "-48% Preventable Injuries",
      features: [
        "Kinematic asymmetry drift detection algorithms",
        "Automated individualized recovery recommendations",
        "Historical strain load versus peak performance modeling",
        "HIPAA-compliant athlete health record protection"
      ]
    },
    {
      title: "Low-Latency Interactive Video Streaming",
      tag: "WebRTC & Synchronized Overlays",
      desc: "Deliver broadcast-grade live sports feeds with sub-second latency, synchronized with frame-accurate player tracking telemetry, predictive odds, and interactive fan engagement graphics.",
      icon: Video,
      metric: "Sub-Second WebRTC Latency",
      features: [
        "WebRTC and Low-Latency HLS (LL-HLS) distribution",
        "Frame-accurate dynamic telemetry graphic overlay rendering",
        "Interactive live betting & fantasy sports data sync",
        "Global CDN distribution supporting millions of concurrent viewers"
      ]
    }
  ];

  const metrics = [
    { val: "60 FPS", lbl: "Real-Time Tracking" },
    { val: "< 100ms", lbl: "Sideline Latency" },
    { val: "33 Points", lbl: "3D Joint Estimation" },
    { val: "99.99%", lbl: "Live Stream SLA" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Trophy className="w-3.5 h-3.5" />
            <span>Industry Solution // Sports Analytics & Computer Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Computer Vision & <br />
            <span className="text-[#ff8a48]">Real-Time Sports Intelligence</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We engineer computer vision pose estimation engines, real-time athlete telemetry platforms, predictive injury algorithms, and ultra-low-latency interactive video streaming systems for sports federations, franchises, and fitness technology pioneers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Schedule Sports Tech Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>View FitMind AI Case Study</span>
            </Link>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>60 FPS Markerless CV</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-100ms Sideline Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Millimeter Joint Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Edge & Cloud Hybrid Runtimes</span>
            </div>
          </div>
        </div>

        {/* 2. Solutions Bento Grid */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Technical Solutions
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Pushing the Boundaries of Athletic Performance
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              From elite professional teams to high-volume fitness apps, our computer vision pipelines transform raw pixels into actionable biometric insights.
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
                  <span>Sports Vector #{idx + 1}</span>
                  <Link href="/contact" className="text-[#ff8a48] hover:underline flex items-center gap-1 font-sans font-medium">
                    <span>Discuss sports architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Performance Metrics */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Biometric Telemetry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineered for High-Velocity Athletic Motion
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
              <span>Modernize Sports Technology</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build computer vision sports systems with our team.
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Schedule a technical discovery session. We will review your camera topology, model inference latency targets, and data integration roadmaps.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Schedule Sports Tech Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 transition-all"
              >
                <span>Explore FitMind AI Study</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
