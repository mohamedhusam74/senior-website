export interface ResearchPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ResearchData {
  title: string;
  subtitle: string;
  university: string;
  year: string;
  abstract: string; // TODO: Replace with actual abstract text
  pdfFile: string; // drop file at /public/research.pdf
  pillars: ResearchPillar[];
}

export const research: ResearchData = {
  title: "Developing an Agentic AI Vulnerabilities Framework",
  subtitle: "Senior Research Project",
  university: "University of Bahrain",
  year: "2026",
  abstract:
    "The emergence of agentic artificial intelligence (AI) presents the next iteration of intelligent systems, characterized by their ability to think independently, make use of memories, make decisions, and execute external tools. While these qualities enable better automation and increased effectiveness, agentic systems also introduce unique cybersecurity vulnerabilities distinct from those in conventional AI or traditional software. This paper proposes a framework for examining vulnerabilities in agentic AI systems, analyzing security threats across five operational layers: Interaction, Context & Memory, Reasoning, Tool & Execution, and Governance & Trust. Additionally, this research introduces the concept of cross-layer vulnerability propagation — threats that cascade across multiple stages of an agentic system rather than remaining isolated. The framework was evaluated through qualitative interviews with cybersecurity professionals and AI practitioners. Findings confirm that the proposed framework, along with concepts such as vulnerability propagation and prompt injection, is highly relevant and broadly supported by domain experts.",
  pdfFile: "research.pdf", // drop file at /public/research.pdf to enable download & viewer
  pillars: [
    {
      title: "Agentic AI Systems",
      description:
        "Analysis of autonomous AI agents, their architectures, and how they interact with external environments and tools.",
      icon: "Brain",
    },
    {
      title: "Vulnerability Detection",
      description:
        "Systematic identification and classification of security vulnerabilities unique to agentic AI deployments.",
      icon: "Search",
    },
    {
      title: "Security Frameworks",
      description:
        "Development of structured frameworks and methodologies for assessing and hardening agentic AI systems.",
      icon: "Shield",
    },
    {
      title: "Risk Assessment",
      description:
        "Quantitative and qualitative approaches to evaluating threat surfaces and risk posture in AI-driven pipelines.",
      icon: "BarChart",
    },
  ],
};
