import { Shield } from "lucide-react";
import { research } from "@/data/research";
import { teamMembers } from "@/data/team";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--background-alt)] border-t border-[var(--border)]">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-600/40 dark:via-cyan-900/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <span
                className="text-sm font-bold text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                UoB Research
              </span>
            </div>
            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed max-w-xs">
              Senior Research Project — University of Bahrain, College
              of Information Technology, {research.year}.
            </p>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
              Research
            </h3>
            <p
              className="text-sm text-[var(--foreground-muted)] leading-snug"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              {research.title}
            </p>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
              Researchers
            </h3>
            <div className="flex flex-col gap-1">
              {teamMembers.map((member) => (
                <p key={member.email} className="text-sm text-[var(--foreground-muted)]">
                  {member.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {research.year} {research.university} — Senior Project Exhibition
          </p>
          <p className="text-xs text-[var(--foreground-subtle)] font-mono">
            Agentic AI Security Research
          </p>
        </div>
      </div>
    </footer>
  );
}
