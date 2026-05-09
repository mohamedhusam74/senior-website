"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { research } from "@/data/research";

// ─── Change this to true once /public/research.pdf is present ─────────────────
// TODO: Set PDF_AVAILABLE to true and re-deploy once you drop research.pdf into /public/
const PDF_AVAILABLE = false;

export default function PaperSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="paper"
      className="relative py-24 px-4 md:px-8 bg-[#050a14]"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              Research Paper
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            Full Research Document
          </h2>
        </motion.div>

        {/* PDF Viewer or Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {PDF_AVAILABLE ? (
            /* ── ACTIVE: shows once /public/research.pdf is present ─────────── */
            <div className="rounded-2xl overflow-hidden border border-cyan-900/30 bg-slate-900/60">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span
                    className="text-sm font-semibold text-slate-200"
                    style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
                  >
                    {research.title}
                  </span>
                </div>
                <a
                  href={`/${research.pdfFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Open research paper in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in tab
                </a>
              </div>
              <iframe
                src={`/${research.pdfFile}`}
                title="Research Paper PDF"
                className="w-full h-[700px]"
                loading="lazy"
              />
            </div>
          ) : (
            /* ── PLACEHOLDER: shown until PDF is added ───────────────────────── */
            <div className="relative rounded-2xl border-2 border-dashed border-cyan-900/40 bg-slate-900/40 overflow-hidden">
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center justify-center min-h-[420px] text-center p-10">
                {/* Animated icon */}
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <FileText className="w-9 h-9 text-cyan-400" />
                </div>

                <h3
                  className="text-xl font-bold text-slate-200 mb-3"
                  style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
                >
                  Research Paper Coming Soon
                </h3>
                <p className="text-slate-500 max-w-md mb-2">
                  The full research document will be embedded here once finalized.
                </p>
                <p className="text-xs text-slate-600 font-mono bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2.5 mt-2">
                  Drop{" "}
                  <span className="text-cyan-500">research.pdf</span> into{" "}
                  <span className="text-cyan-500">/public/</span> and set{" "}
                  <span className="text-emerald-400">PDF_AVAILABLE = true</span>{" "}
                  in PaperSection.tsx to activate
                </p>

                {/* Decorative corner dots */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-cyan-800/60" aria-hidden="true" />
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-800/60" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-cyan-800/60" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-cyan-800/60" aria-hidden="true" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
