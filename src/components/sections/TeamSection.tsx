"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Download, CheckCircle } from "lucide-react";

import LinkedinIcon from "@/components/LinkedinIcon";
import { teamMembers, type TeamMember } from "@/data/team";

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--background-card)] border border-[var(--border)] text-xs font-medium text-[var(--foreground-muted)] hover:border-cyan-700/50 hover:text-cyan-400 transition-colors">
      {skill}
    </span>
  );
}

function CertBadge({ cert }: { cert: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
      <span className="text-[var(--foreground-muted)] leading-snug">{cert}</span>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="group relative bg-[var(--background-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-cyan-500/35 transition-all duration-300"
      aria-label={`Team member: ${member.name}`}
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400" />

      <div className="p-7">
        {/* Avatar + name */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/25 flex items-center justify-center shrink-0 group-hover:border-cyan-400/40 transition-colors">
            <span
              className="text-xl font-bold text-cyan-400"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              {initials}
            </span>
          </div>
          <div className="min-w-0">
            <h3
              className="text-lg font-bold text-[var(--foreground)] leading-tight mb-1"
              style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
            >
              {member.name}
            </h3>
            <p className="text-sm text-cyan-400 font-medium">{member.role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-6">
          {member.bio}
        </p>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
            Technical Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
            Certifications
          </h4>
          <div className="flex flex-col gap-2">
            {member.certifications.map((cert) => (
              <CertBadge key={cert} cert={cert} />
            ))}
          </div>
        </div>

        {/* Activities */}
        {member.activities.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
              {index === 0 ? "Projects" : "Experience & Activities"}
            </h4>
            <div className="flex flex-col gap-1.5">
              {member.activities.map((activity) => (
                <div key={activity} className="flex items-start gap-2 text-sm">
                  <span className="w-1 h-1 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span className="text-[var(--foreground-muted)]">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-[var(--border)] pt-5">
          {/* Contact links */}
          <div className="flex flex-col gap-2.5 mb-5">
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-2.5 text-sm text-[var(--foreground-muted)] hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group/link"
              aria-label={`Call ${member.name}`}
            >
              <Phone className="w-3.5 h-3.5 shrink-0 text-[var(--foreground-subtle)] group-hover/link:text-cyan-500 dark:group-hover/link:text-cyan-400 transition-colors" />
              {member.phone}
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2.5 text-sm text-[var(--foreground-muted)] hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group/link"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[var(--foreground-subtle)] group-hover/link:text-cyan-500 dark:group-hover/link:text-cyan-400 transition-colors" />
              {member.email}
            </a>
            {/* TODO: Replace null with LinkedIn URL in /src/data/team.ts */}
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[var(--foreground-muted)] hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group/link"
                aria-label={`${member.name} LinkedIn profile`}
              >
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0 text-[var(--foreground-subtle)] group-hover/link:text-cyan-500 dark:group-hover/link:text-cyan-400 transition-colors" />
                LinkedIn Profile
              </a>
            ) : (
              <span className="flex items-center gap-2.5 text-sm text-[var(--foreground-subtle)] cursor-default">
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                LinkedIn — Coming Soon
              </span>
            )}
          </div>

          {/* CV Download */}
          {/* TODO: Drop {member.cvFile} into /public/cvs/ to enable download */}
          {member.cvFile ? (
            <a
              href={`/cvs/${member.cvFile}`}
              download
              className="w-full flex items-center justify-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/15 border border-cyan-900/40 hover:border-cyan-600/50 text-cyan-400 font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-200"
              aria-label={`Download ${member.name}'s CV`}
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground-subtle)] font-medium text-sm px-4 py-2.5 rounded-xl cursor-not-allowed"
              title="CV will be available soon"
            >
              <Download className="w-3.5 h-3.5" />
              CV Available Soon
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="relative py-24 px-4 md:px-8 bg-[var(--background-alt)]"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/3 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              The Team
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            Meet the Researchers
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl text-base md:text-lg">
            Two cybersecurity students from the University of Bahrain driving this
            research forward.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.email} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
