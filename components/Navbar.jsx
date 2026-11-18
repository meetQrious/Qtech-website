"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Bot,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Building2,
  Users,
  Workflow
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCapabilitiesOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  const capabilities = [
    {
      title: "Autonomous AI Agents",
      desc: "Goal-directed multi-agent swarms with self-correcting logic & tool dispatch.",
      href: "/ai-ml-development",
      icon: Bot,
    },
    {
      title: "Custom Foundation Models",
      desc: "Domain-specific fine-tuning on proprietary data with private VPC isolation.",
      href: "/ai-modernization-partner",
      icon: Cpu,
    },
    {
      title: "High-Throughput Cloud Backends",
      desc: "Next.js, Kubernetes, distributed microservices built for sub-100ms SLAs.",
      href: "/web-development",
      icon: Layers,
    },
    {
      title: "Enterprise BI & Data Pipelines",
      desc: "Real-time telemetry, SAP/ERP data consolidation, and predictive analytics.",
      href: "/data-visualization",
      icon: Database,
    },
  ];

  const companyLinks = [
    { title: "About Qrious Tech", href: "/company", icon: Building2 },
    { title: "Working Methodology", href: "/working-methodology", icon: Workflow },
    { title: "Careers / Join The Crew", href: "/crew", icon: Users, badge: "We're Hiring" },
    { title: "Life @ QTech", href: "/life-qtech", icon: Sparkles },
    { title: "Client Testimonials", href: "/testimonials", icon: ShieldCheck },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 dark:bg-[#07080b]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.7)]" 
          : "bg-white/60 dark:bg-[#07080b]/60 backdrop-blur-md border-b border-slate-200/50 dark:border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 flex items-center justify-center transition-all group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="Qrious Tech Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,107,43,0.25)]" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight leading-tight transition-colors">
                QRIOUS<span className="text-[#ff5a1f] dark:text-[#ff8a48]">TECH</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-mono font-medium transition-colors">
                AI Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            
            {/* Capabilities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCapabilitiesOpen(true)}
              onMouseLeave={() => setCapabilitiesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
                <span>Capabilities</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${capabilitiesOpen ? "rotate-180 text-[#ff5a1f] dark:text-[#ff8a48]" : "text-slate-400"}`} />
              </button>

              {capabilitiesOpen && (
                <div className="absolute top-full left-0 w-[540px] pt-3 z-50">
                  <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#0e1017]/95 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl backdrop-blur-2xl">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 px-2">
                      Enterprise Solutions
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {capabilities.map((item, idx) => (
                        <Link 
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] border border-transparent hover:border-slate-200 dark:hover:border-white/[0.06] transition-all group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover/item:text-[#ff5a1f] dark:group-hover/item:text-[#ff8a48] group-hover/item:border-[#ff5a1f]/30 transition-colors shrink-0 mt-0.5">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-[#ff5a1f] dark:group-hover/item:text-[#ff8a48] transition-colors">
                              {item.title}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5 line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/how-we-work"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            >
              Methodology
            </Link>

            <Link 
              href="/case-studies"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            >
              Case Studies
            </Link>

            <Link 
              href="/portfolio"
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            >
              Portfolio
            </Link>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180 text-[#ff5a1f] dark:text-[#ff8a48]" : "text-slate-400"}`} />
              </button>

              {companyOpen && (
                <div className="absolute top-full right-0 w-[320px] pt-3 z-50">
                  <div className="p-3 rounded-2xl bg-white/95 dark:bg-[#0e1017]/95 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl backdrop-blur-2xl">
                    <div className="flex flex-col gap-1">
                      {companyLinks.map((item, idx) => (
                        <Link 
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group/c"
                        >
                          <item.icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover/c:text-[#ff5a1f] dark:group-hover/c:text-[#ff8a48] transition-colors" />
                          <span className="font-medium flex-1">{item.title}</span>
                          {item.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Action / Theme Toggle & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SOC2 & HIPAA Compliant</span>
            </div>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b]"
            >
              Contact
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200 dark:border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white/98 dark:bg-[#07080b]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 p-6 shadow-2xl overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="flex flex-col gap-6">
            
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#ff5a1f] dark:text-[#ff8a48] mb-3">
                Capabilities
              </div>
              <div className="space-y-1">
                {capabilities.map((c, i) => (
                  <Link 
                    key={i} 
                    href={c.href}
                    className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  >
                    <c.icon className="w-4 h-4 text-[#ff5a1f] dark:text-[#ff8a48]" />
                    <span>{c.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] space-y-1">
              <Link href="/how-we-work" className="block p-2 text-sm font-semibold text-slate-900 dark:text-white">
                Methodology
              </Link>
              <Link href="/case-studies" className="block p-2 text-sm font-semibold text-slate-900 dark:text-white">
                Case Studies
              </Link>
              <Link href="/portfolio" className="block p-2 text-sm font-semibold text-slate-900 dark:text-white">
                Portfolio
              </Link>
              <Link href="/company" className="block p-2 text-sm font-semibold text-slate-900 dark:text-white">
                About Qrious Tech
              </Link>
              <Link href="/crew" className="block p-2 text-sm font-semibold text-slate-900 dark:text-white">
                Join The Crew
              </Link>
            </div>

            <Link 
              href="/contact"
              className="w-full py-3 rounded-full text-center font-semibold text-sm bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] shadow-lg"
            >
              Schedule Architecture Discovery
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
