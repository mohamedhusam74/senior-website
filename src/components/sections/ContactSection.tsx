"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import LinkedinIcon from "@/components/LinkedinIcon";
import { teamMembers } from "@/data/team";
import { research } from "@/data/research";

function ContactCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[number];
  index: number;
}) {
  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/25 flex items-center justify-center shrink-0">
          <span
            className="text-sm font-bold text-cyan-400"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            {initials}
          </span>
        </div>
        <div>
          <h3
            className="font-semibold text-[var(--foreground)] text-base leading-tight"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            {member.name}
          </h3>
          <p className="text-xs text-cyan-400 mt-0.5">{member.role}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={`tel:${member.phone}`}
          className="flex items-center gap-3 group"
          aria-label={`Call ${member.name}`}
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-cyan-700 group-hover:bg-cyan-950/30 transition-all">
            <Phone className="w-3.5 h-3.5 text-[var(--foreground-subtle)] group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
            {member.phone}
          </span>
        </a>

        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-3 group"
          aria-label={`Email ${member.name}`}
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-cyan-700 group-hover:bg-cyan-950/30 transition-all">
            <Mail className="w-3.5 h-3.5 text-[var(--foreground-subtle)] group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors break-all">
            {member.email}
          </span>
        </a>

        {/* TODO: Replace null with LinkedIn URL in /src/data/team.ts */}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:border-cyan-700 group-hover:bg-cyan-950/30 transition-all">
              <LinkedinIcon className="w-3.5 h-3.5 text-[var(--foreground-subtle)] group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
              LinkedIn Profile
            </span>
          </a>
        ) : (
          <div className="flex items-center gap-3 opacity-40 cursor-default">
            <div className="w-8 h-8 rounded-lg bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center shrink-0">
              <LinkedinIcon className="w-3.5 h-3.5 text-[var(--foreground-subtle)]" />
            </div>
            <span className="text-sm text-[var(--foreground-subtle)] italic">LinkedIn — Coming Soon</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 bg-[var(--background-alt)]"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
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
              Contact
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-oxanium), Oxanium, monospace" }}
          >
            Get in Touch
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-lg text-base md:text-lg">
            Interested in our research or want to connect? Reach out to either
            researcher directly.
          </p>
        </motion.div>

        {/* University info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-3 bg-[var(--background-card)] border border-[var(--border)] rounded-xl px-5 py-4 mb-8 w-fit"
        >
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <div>
            <p className="text-sm font-medium text-[var(--foreground)]">{research.university}</p>
            <p className="text-xs text-[var(--foreground-muted)]">Senior Project Exhibition · {research.year}</p>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {teamMembers.map((member, i) => (
            <ContactCard key={member.email} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
