import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Zap, Layers } from "lucide-react";

function getCaseStudies() {
  const filePath = path.join(process.cwd(), "public", "data", "case-studies.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const studies = getCaseStudies();
  const cs = studies.find((item) => item.id === id);
  if (!cs) return { title: "Case Study Not Found | Qrious Tech" };
  return {
    title: `${cs.title} | Qrious Tech Team LLP`,
    description: cs.heroDesc,
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const studies = getCaseStudies();
  const cs = studies.find((item) => item.id === id);

  if (!cs) {
    notFound();
  }

  const kpis = cs.kpis || [];
  const overview = cs.overview || {};
  const challenges = cs.challenge || {};
  const solutions = cs.solution || {};
  const outcomes = cs.outcome || {};

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-12 md:py-20 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Hero Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] shadow-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b2b]/15 border border-[#ff6b2b]/30 text-xs font-mono text-[#ff8a48] uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{cs.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 max-w-4xl">
            {cs.title}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {cs.heroDesc}
          </p>

          {/* Metric KPIs Row */}
          {kpis.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ff8a48] font-mono">
                    {kpi.val}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-mono">
                    {kpi.lbl}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Case Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Section */}
            {overview.subtitle && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  System Overview
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                  {overview.subtitle}
                </p>
                {overview.summary && (
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {overview.summary}
                  </p>
                )}
              </div>
            )}

            {/* The Challenge Section */}
            {challenges.points && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>The Engineering Challenge</span>
                </h3>
                {challenges.summary && (
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {challenges.summary}
                  </p>
                )}
                <ul className="space-y-3">
                  {challenges.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* The Solution Section */}
            {solutions.points && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Architectural Solution</span>
                </h3>
                {solutions.summary && (
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {solutions.summary}
                  </p>
                )}
                <ul className="space-y-3">
                  {solutions.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Outcomes Section */}
            {outcomes.points && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b2b]"></span>
                  <span>Measurable Production Outcomes</span>
                </h3>
                <ul className="space-y-3">
                  {outcomes.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                      <span className="text-[#ff8a48] font-bold shrink-0 mt-0.5">★</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Sidebar Info & CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Project Specs Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08] space-y-4">
              <h4 className="text-base font-bold text-white pb-3 border-b border-white/[0.06]">
                Deployment Specifications
              </h4>
              
              <div>
                <div className="text-xs font-mono text-zinc-400">Industry Domain</div>
                <div className="text-sm font-semibold text-white mt-0.5">{cs.category}</div>
              </div>

              {cs.client && (
                <div>
                  <div className="text-xs font-mono text-zinc-400">Client Partner</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{cs.client}</div>
                </div>
              )}

              {cs.technologies && cs.technologies.length > 0 && (
                <div>
                  <div className="text-xs font-mono text-zinc-400 mb-2">Technology Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((t, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Consultation Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e111a] to-[#151926] border border-white/[0.08] shadow-xl text-center space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6b2b]/15 border border-[#ff6b2b]/30 flex items-center justify-center text-[#ff8a48] mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="text-lg font-bold text-white">Require Similar Performance?</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Connect with our Principal AI Architects to evaluate feasibility, data hygiene, and compute models for your workloads.
              </p>
              <Link 
                href="/contact"
                className="w-full btn-pill-primary text-xs py-3 inline-flex items-center justify-center gap-2"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
