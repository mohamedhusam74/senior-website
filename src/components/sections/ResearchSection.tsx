"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Search, Shield, BarChart2, Download, FileText } from "lucide-react";
import { research } from "@/data/research";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Search,
  Shield,
  BarChart: BarChart2,
};

function PillarCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
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
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/40 transition-all">
        <Icon className="w-5 h-5 text-cyan-400" />
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
      {/* Background accent */}
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
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
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
            A comprehensive research effort to identify, classify, and
            mitigate the unique security vulnerabilities present in agentic AI
            systems.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Abstract card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-cyan-400" />
              </div>
              <h3
                className="text-lg font-semibold text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                Research Title
              </h3>
            </div>

            <p
              className="text-xl font-semibold mb-6 leading-snug bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              {research.title}
            </p>

            <div className="border-t border-[var(--border)] pt-6">
              <h4 className="text-sm font-medium text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
                Abstract
              </h4>
              {/* TODO: Replace research.abstract in /src/data/research.ts with actual abstract text */}
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {research.abstract}
              </p>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-[var(--border)]">
              {[
                { label: "Institution", value: research.university },
                { label: "Year", value: research.year },
                { label: "Type", value: "Senior Project" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-[var(--foreground-muted)]">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Download button */}
            {/* TODO: Drop research.pdf into /public/research.pdf, then change disabled to href="/research.pdf" download */}
            <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6">
              <h3
                className="text-base font-semibold text-[var(--foreground)] mb-2"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                Research Paper
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-5">
                The full research document will be available once finalized.
              </p>
              <div className="relative group">
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500/10 border border-cyan-900/40 text-slate-500 font-medium px-5 py-3 rounded-xl cursor-not-allowed select-none"
                  aria-label="Research paper coming soon"
                  title="Coming Soon — PDF will be uploaded"
                >
                  <Download className="w-4 h-4" />
                  Download Research Paper
                </button>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground-muted)] text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                  Coming Soon — PDF will be uploaded
                </span>
              </div>
            </div>

            {/* Research stats */}
            <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6 flex-1">
              <h3
                className="text-sm font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                Research Scope
              </h3>
              {[
                { label: "Research Pillars", value: "4" },
                { label: "Team Members", value: "2" },
                { label: "Focus Area", value: "AI Security" },
                { label: "Year", value: "2026" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5 border-b border-[var(--border)] last:border-0"
                >
                  <span className="text-sm text-[var(--foreground-muted)]">{label}</span>
                  <span className="text-sm font-semibold text-cyan-400">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Research Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3
            className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6"
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
