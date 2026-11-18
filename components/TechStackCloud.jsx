"use client";

import React, { useState } from "react";
import { Cpu, Terminal, Database, Cloud, Layers, CheckCircle2 } from "lucide-react";

export default function TechStackCloud() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Full Enterprise Stack" },
    { id: "models", label: "Foundation Models & LLMs" },
    { id: "agents", label: "Agentic & RAG Frameworks" },
    { id: "infra", label: "Cloud & Compute" },
    { id: "fullstack", label: "Full-Stack & Systems" }
  ];

  const technologies = [
    // Models
    { name: "Anthropic Claude 3.5", category: "models", desc: "Complex reasoning & code generation", tag: "Frontier LLM" },
    { name: "OpenAI GPT-4o", category: "models", desc: "Multimodal intelligence & structured output", tag: "Multimodal" },
    { name: "Meta Llama 3.3", category: "models", desc: "Self-hosted private VPC fine-tuning", tag: "Open-Weight" },
    { name: "Mistral Large & Codestral", category: "models", desc: "High-throughput inference & tool use", tag: "Low-Latency" },
    { name: "DeepSeek V3", category: "models", desc: "Mathematical reasoning & logic verification", tag: "Reasoning" },

    // Agents & Vectors
    { name: "LangChain & LangGraph", category: "agents", desc: "Cyclic stateful multi-agent workflows", tag: "Agentic" },
    { name: "LlamaIndex", category: "agents", desc: "Advanced semantic RAG & document indexing", tag: "RAG" },
    { name: "Pinecone Vector DB", category: "agents", desc: "Billion-scale real-time vector retrieval", tag: "Vector" },
    { name: "Milvus / Qdrant", category: "agents", desc: "Self-hosted high-throughput vector search", tag: "Private RAG" },
    { name: "HuggingFace Transformers", category: "agents", desc: "Model quantization & custom LoRA adapters", tag: "Fine-Tuning" },

    // Infra
    { name: "AWS SageMaker & ECS", category: "infra", desc: "Secure distributed training & cluster hosting", tag: "Cloud" },
    { name: "Google Cloud Vertex AI", category: "infra", desc: "Managed enterprise model pipelines", tag: "Cloud" },
    { name: "Kubernetes & vLLM", category: "infra", desc: "Auto-scaling GPU node orchestration", tag: "Compute" },
    { name: "Docker & CI/CD", category: "infra", desc: "Immutable containerized deployment pipelines", tag: "DevOps" },

    // Full-Stack
    { name: "Next.js & React 19", category: "fullstack", desc: "Server-rendered enterprise web interfaces", tag: "Frontend" },
    { name: "Python FastAPI", category: "fullstack", desc: "Asynchronous high-throughput AI microservices", tag: "Backend" },
    { name: "Node.js & TypeScript", category: "fullstack", desc: "Scalable event-driven enterprise APIs", tag: "Backend" },
    { name: "PostgreSQL & pgvector", category: "fullstack", desc: "Relational persistence + embedded vector search", tag: "Database" },
    { name: "Redis Cache", category: "fullstack", desc: "Sub-millisecond KV-caching & rate-limiting", tag: "In-Memory" },
  ];

  const filtered = activeCategory === "all" 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 relative bg-[#07090e] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Engineering Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built with the World's Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">AI & Cloud Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            We select and tune the optimal technology stack for each enterprise requirement — balancing inference latency, cost efficiency, and security.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? "bg-white text-slate-900 font-bold shadow-lg shadow-white/10"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((tech, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

