"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#06070a] border-t border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 pt-20 pb-12 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Manifesto & Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-white/[0.06]">
          
          <div className="lg:col-span-6 space-y-5">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-8 h-8 flex items-center justify-center transition-all group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="Qrious Tech Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,107,43,0.25)]" 
                />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight transition-colors">
                QRIOUS<span className="text-[#ff5a1f] dark:text-[#ff8a48]">TECH</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Qrious Tech Team LLP partners with high-growth companies and global enterprises to engineer mission-critical autonomous AI systems, custom foundation pipelines, and scalable cloud infrastructure.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/[0.03] border border-slate-300/80 dark:border-white/[0.06] text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational // 99.99% Architecture SLA</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:items-end">
            <div className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
              <div className="text-xs font-mono uppercase tracking-wider text-[#ff5a1f] dark:text-[#ff8a48] mb-1 font-semibold">
                Architecture Dispatch
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Executive Engineering Insights
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Bi-weekly architectural breakdowns on multi-agent swarms, RAG benchmarks, and production inference optimization.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed successfully. Welcome to the Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="architect@company.com"
                    className="flex-1 bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#ff5a1f] dark:focus:border-white/30"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] font-semibold text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shrink-0 shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* 4 Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-slate-200 dark:border-white/[0.06] text-xs">
          
          <div>
            <div className="font-mono text-slate-900 dark:text-white uppercase tracking-wider mb-4 font-semibold">
              Capabilities
            </div>
            <ul className="space-y-2.5">
              <li><Link href="/ai-ml-development" className="hover:text-slate-900 dark:hover:text-white transition-colors">Autonomous AI Agents</Link></li>
              <li><Link href="/ai-modernization-partner" className="hover:text-slate-900 dark:hover:text-white transition-colors">Custom Foundation Models</Link></li>
              <li><Link href="/web-development" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cloud & Microservices</Link></li>
              <li><Link href="/data-visualization" className="hover:text-slate-900 dark:hover:text-white transition-colors">Enterprise BI & Telemetry</Link></li>
              <li><Link href="/mobile-development" className="hover:text-slate-900 dark:hover:text-white transition-colors">Edge AI & Mobile Apps</Link></li>
              <li><Link href="/dedicated-development-teams" className="hover:text-slate-900 dark:hover:text-white transition-colors">Dedicated Engineering Pods</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-slate-900 dark:text-white uppercase tracking-wider mb-4 font-semibold">
              Industries
            </div>
            <ul className="space-y-2.5">
              <li><Link href="/healthcare" className="hover:text-slate-900 dark:hover:text-white transition-colors">Healthcare & Diagnostics</Link></li>
              <li><Link href="/finance" className="hover:text-slate-900 dark:hover:text-white transition-colors">Fintech & Banking</Link></li>
              <li><Link href="/retail" className="hover:text-slate-900 dark:hover:text-white transition-colors">Retail & Intelligent Commerce</Link></li>
              <li><Link href="/saas-development-partner" className="hover:text-slate-900 dark:hover:text-white transition-colors">Enterprise B2B SaaS</Link></li>
              <li><Link href="/sports" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sports Analytics</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-slate-900 dark:text-white uppercase tracking-wider mb-4 font-semibold">
              Company
            </div>
            <ul className="space-y-2.5">
              <li><Link href="/company" className="hover:text-slate-900 dark:hover:text-white transition-colors">About Qrious Tech</Link></li>
              <li><Link href="/working-methodology" className="hover:text-slate-900 dark:hover:text-white transition-colors">Working Methodology</Link></li>
              <li><Link href="/crew" className="hover:text-slate-900 dark:hover:text-white transition-colors">Join The Crew</Link></li>
              <li><Link href="/life-qtech" className="hover:text-slate-900 dark:hover:text-white transition-colors">Life @ QTech</Link></li>
              <li><Link href="/case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-slate-900 dark:hover:text-white transition-colors">Client Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-slate-900 dark:text-white uppercase tracking-wider mb-4 font-semibold">
              Headquarters
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>A-706 to 709, Dev Aurum, Prahladnagar, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@qrioustech.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">info@qrioustech.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+916355794606" className="hover:text-slate-900 dark:hover:text-white transition-colors">+91 63557 94606</a>
              </div>
              <div className="pt-2">
                <Link href="/privacy" className="underline hover:text-slate-900 dark:hover:text-white">Privacy Policy</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            All Rights Reserved. © {new Date().getFullYear()} <strong>Qrious Tech Team LLP</strong>.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/company/qrious-tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/qrious_tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="X / Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
