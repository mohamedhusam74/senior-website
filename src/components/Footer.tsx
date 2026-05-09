import { Shield } from "lucide-react";
import { research } from "@/data/research";
import { teamMembers } from "@/data/team";

export default function Footer() {
  return (
    <footer className="relative bg-[#030810] border-t border-cyan-950/40">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-900/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <span
                className="text-sm font-bold text-slate-200"
                style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
              >
                UoB Research
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Senior Capstone Research Project — University of Bahrain, College
              of Information Technology, {research.year}.
            </p>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Research
            </h3>
            <p
              className="text-sm text-slate-400 leading-snug"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              {research.title}
            </p>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Researchers
            </h3>
            <div className="flex flex-col gap-1">
              {teamMembers.map((member) => (
                <p key={member.email} className="text-sm text-slate-400">
                  {member.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-slate-900">
          <p className="text-xs text-slate-700">
            © {research.year} {research.university} — Senior Project Exhibition
          </p>
          <p className="text-xs text-slate-800 font-mono">
            Agentic AI Security Research
          </p>
        </div>
      </div>
    </footer>
  );
}
