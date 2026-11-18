import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, Sparkles, CheckCircle2, Zap } from "lucide-react";

function getPortfolioProjects() {
  const filePath = path.join(process.cwd(), "public", "data", "portfolio-projects.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export async function generateStaticParams() {
  const projects = getPortfolioProjects();
  return projects.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projects = getPortfolioProjects();
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: "Project Not Found | Qrious Tech" };
  const title = project.name || project.title || "Project";
  return {
    title: `${title} | Portfolio | Qrious Tech`,
    description: project.summary || (project.overview && project.overview[0]) || "",
  };
}

export default async function PortfolioDetailPage({ params }) {
  const { id } = await params;
  const projects = getPortfolioProjects();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const title = project.name || project.title || "Project";

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] py-12 md:py-20 relative overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0e16] border border-white/[0.08] shadow-2xl mb-12">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff6b2b]/15 border border-[#ff6b2b]/30 text-xs font-mono text-[#ff8a48] uppercase tracking-wider">
              <Layers className="w-3 h-3" />
              <span>{project.category || project.domain}</span>
            </span>
            {project.year && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Year: {project.year}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 max-w-4xl">
            {title}
          </h1>

          {project.summary && (
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              {project.summary}
            </p>
          )}

          {/* Image Banner if Available */}
          {project.image && (
            <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-[#07080b] border border-white/[0.08] mb-4">
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ff8a48] font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-mono">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {project.overview && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Project Overview</h2>
                <div className="space-y-3">
                  {project.overview.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.technicalOverview && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h3 className="text-xl font-bold text-white mb-4">Technical Architecture</h3>
                <div className="space-y-3">
                  {project.technicalOverview.map((p, i) => (
                    <p key={i} className="text-sm text-zinc-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08]">
                <h3 className="text-xl font-bold text-white mb-4">Delivered Capabilities</h3>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                      <span className="text-[#ff8a48] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Card */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0d14] border border-white/[0.08] space-y-4">
                <h4 className="text-base font-bold text-white pb-3 border-b border-white/[0.06]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e111a] to-[#151926] border border-white/[0.08] text-center space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6b2b]/15 border border-[#ff6b2b]/30 flex items-center justify-center text-[#ff8a48] mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="text-lg font-bold text-white">Have a Similar Requirement?</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Let&apos;s evaluate technical architecture, team configuration, and timeline for your platform.
              </p>
              <Link 
                href="/contact"
                className="w-full btn-pill-primary text-xs py-3 inline-flex items-center justify-center gap-2"
              >
                <span>Start a Technical Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
