"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Search, Shield, BarChart2, Download, FileText,
  Layers, Database, Cpu, Wrench, Quote,
} from "lucide-react";
import { research } from "@/data/research";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Search,
  Shield,
  BarChart: BarChart2,
};

const FRAMEWORK_LAYERS = [
  { label: "Interaction",         icon: Layers,   color: "text-cyan-600 dark:text-cyan-400",   bg: "bg-cyan-500/10 border-cyan-500/25 dark:border-cyan-500/20"   },
  { label: "Context & Memory",    icon: Database, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10 border-purple-500/25 dark:border-purple-500/20" },
  { label: "Reasoning",           icon: Brain,    color: "text-blue-600 dark:text-blue-400",   bg: "bg-blue-500/10 border-blue-500/25 dark:border-blue-500/20"   },
  { label: "Tool & Execution",    icon: Wrench,   color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10 border-orange-500/25 dark:border-orange-500/20" },
  { label: "Governance & Trust",  icon: Shield,   color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/25 dark:border-emerald-500/20" },
];

function PillarCard({
  title, description, icon, index,
}: {
  title: string; description: string; icon: string; index: number;
}) {
  const Icon = ICON_MAP[icon] ?? Shield;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-[var(--background-card)] border border-[var(--border)] rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/40 transition-all">
        <Icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
      </div>
      <h3
        className="text-base font-semibold text-[var(--foreground)] mb-2"
        style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
      >
        {title}
      </h3>
      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      className="relative py-24 px-4 md:px-8 bg-[var(--background)]"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium tracking-widest uppercase">
              The Research
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            About the Project
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl text-base md:text-lg leading-relaxed">
            A research effort to identify, classify, and mitigate the unique security
            vulnerabilities present in agentic AI systems.
          </p>
        </motion.div>

        {/* ── FEATURED ABSTRACT BLOCK ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="relative mb-10 bg-[var(--background-card)] border border-[var(--border)] rounded-2xl overflow-hidden"
        >
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <div className="p-8 md:p-10">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-widest mb-0.5">
                    Research Abstract
                  </p>
                  <p
                    className="text-sm font-semibold bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
                  >
                    {research.title}
                  </p>
                </div>
              </div>
              {/* Decorative quote icon */}
              <Quote className="w-8 h-8 text-cyan-500/20 dark:text-cyan-400/15 shrink-0 mt-1" aria-hidden="true" />
            </div>

            {/* Abstract text */}
            <blockquote className="relative pl-5 border-l-2 border-cyan-500/40 mb-8">
              <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed md:leading-loose">
                {research.abstract}
              </p>
            </blockquote>

            {/* Framework layers */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-widest mb-3">
                Five Operational Layers of the Framework
              </p>
              <div className="flex flex-wrap gap-2">
                {FRAMEWORK_LAYERS.map(({ label, icon: Icon, color, bg }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${bg} ${color}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[var(--border)]">
              {[
                { label: "Institution", value: research.university },
                { label: "Year",        value: research.year },
                { label: "Type",        value: "Senior Project" },
                { label: "Supervisor",  value: "Dr. Yaqoob Salman Alslais" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground-muted)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SIDE CARDS: Download + Research Scope ─────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Download */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3
                className="text-base font-semibold text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                Research Paper
              </h3>
            </div>
            <p className="text-sm text-[var(--foreground-muted)] mb-5 flex-1">
              The full research document — available for download once the final version is published.
            </p>
            <div className="relative group">
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-[var(--foreground-subtle)] font-medium px-5 py-3 rounded-xl cursor-not-allowed select-none"
                aria-label="Research paper coming soon"
                title="Coming Soon — PDF will be uploaded"
              >
                <Download className="w-4 h-4" />
                Download Research Paper
              </button>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground-muted)] text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                Coming Soon — PDF will be uploaded
              </span>
            </div>
          </motion.div>

          {/* Research Scope */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6"
          >
            <h3
              className="text-sm font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              Research Scope
            </h3>
            {[
              { label: "Framework Layers",  value: "5" },
              { label: "Team Members",       value: "2" },
              { label: "Focus Area",         value: "AI Security" },
              { label: "Methodology",        value: "Qualitative" },
              { label: "Year",               value: "2026" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between py-2.5 border-b border-[var(--border)] last:border-0"
              >
                <span className="text-sm text-[var(--foreground-muted)]">{label}</span>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── KEY RESEARCH PILLARS ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <h3
            className="text-sm font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-6"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            Key Research Pillars
          </h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {research.pillars.map((pillar, i) => (
              <PillarCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
