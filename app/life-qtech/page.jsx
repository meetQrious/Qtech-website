"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Heart, 
  Trophy, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Coffee, 
  Zap, 
  Smile,
  Compass
} from "lucide-react";

export default function LifeQtechPage() {
  const [activeTab, setActiveTab] = useState("all");

  const values = [
    {
      title: "Relentless Curiosity",
      desc: "We are obsessed with how things work under the hood. We encourage open-source experimentation, weekly architecture teardowns, and deep exploration of frontier models.",
      icon: Compass
    },
    {
      title: "Extreme Ownership",
      desc: "Every engineer has direct ownership of their deliverables. From initial PR design to production telemetry, we celebrate initiative and pride of craftsmanship.",
      icon: Zap
    },
    {
      title: "Radical Transparency",
      desc: "Information flows freely. No hidden silos, no gatekeeping. Executive leadership is directly accessible, and our sprint planning is open to the entire company.",
      icon: Users
    },
    {
      title: "Celebration & Joy",
      desc: "Great engineering deserves great celebrations. From celebrating team birthdays and festive traditions to weekend sports tournaments, we work hard and celebrate together.",
      icon: Smile
    }
  ];

  const galleryItems = [
    {
      title: "Annual Excellence Awards",
      category: "milestones",
      img: "/images/resource/awards.webp",
      caption: "Honoring outstanding architectural and delivery achievements across our engineering pods."
    },
    {
      title: "Festival Celebrations",
      category: "festivals",
      img: "/images/festival/festival-1.webp",
      caption: "Embracing cultural diversity with colorful festivities, traditional cuisine, and team bonding."
    },
    {
      title: "Weekend Team Celebrations",
      category: "weekends",
      img: "/images/weekend/weekend-1.webp",
      caption: "Unwinding after high-velocity sprint deliveries with games, team dinners, and relaxed hangouts."
    },
    {
      title: "Birthday & Milestone Parties",
      category: "milestones",
      img: "/images/birthday/birthday-main.webp",
      caption: "Every team member's birthday and work anniversary is celebrated with cake and fun rituals."
    },
    {
      title: "Innovation Summit & Tech Sprints",
      category: "hackathons",
      img: "/images/resource/IMG_2530.webp",
      caption: "Hackathon brainstorms where engineers build proof-of-concepts using emerging AI frameworks."
    },
    {
      title: "Workplace Happy Hours",
      category: "weekends",
      img: "/images/resource/IMG_7618.webp",
      caption: "Friday happy hours filled with gaming tournaments, snacks, and lively technical banter."
    }
  ];

  const filteredGallery = galleryItems.filter(
    item => activeTab === "all" || item.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-16 md:py-24 relative overflow-hidden">
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#ff8a48]">
            <Heart className="w-3.5 h-3.5" />
            <span>Culture & Community // Life @ QTech</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Where Technical Excellence <br />
            <span className="text-[#ff8a48]">Meets Vibrant Culture</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            We believe that high-performance engineering thrives in an environment of camaraderie, trust, and continuous celebration. Take a look inside the daily life, celebrations, and team milestones at Qrious Tech.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/crew"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#07080b] hover:bg-zinc-200 transition-all shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
            >
              <span>Join Our Crew</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>About Our Company</span>
            </Link>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#ff8a48] shrink-0" />
              <span>88+ Talented Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Quarterly Hackathons</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Annual Retreats</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Free Fuel & Snacks Daily</span>
            </div>
          </div>
        </div>

        {/* 2. Cultural Values */}
        <div className="space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
              Our Principles
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              The Cultural Pillars of Qrious Tech
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              These shared values guide how we collaborate, resolve architectural challenges, and treat one another.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff8a48] mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                  Value #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Life at QTech Gallery */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff8a48] mb-2">
                Moments & Memories
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Life in Action at QTech
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Moments" },
                { id: "milestones", label: "Milestones & Awards" },
                { id: "festivals", label: "Festivals" },
                { id: "weekends", label: "Weekends & Happy Hours" },
                { id: "hackathons", label: "Hackathons" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeTab === tab.id
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
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx}
                className="group rounded-3xl overflow-hidden bg-[#0c0e16] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] relative w-full overflow-hidden bg-black/40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e16] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#ff8a48] tracking-wider font-semibold">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#ff8a48] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Executive CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-slate-50 dark:from-[#0c0e16] dark:via-[#111422] dark:to-[#0c0e16] border border-orange-200/80 dark:border-[#ff6b2b]/30 shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_50px_rgba(255,107,43,0.1)] relative overflow-hidden transition-all duration-300">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-[#ff6b2b]/10 border border-orange-200 dark:border-[#ff6b2b]/20 text-xs font-mono text-[#ff5a1f] dark:text-[#ff8a48]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Be Part of the Story?</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Join a team that values your craft and celebrates your growth.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              Explore our current career opportunities or connect with our team to learn more about life at Qrious Tech.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/crew"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2"
              >
                <span>View Open Engineering Roles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 hover:bg-slate-50 transition-all shadow-sm dark:shadow-none"
              >
                <span>Read About Our Leadership</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
