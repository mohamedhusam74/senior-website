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
  // TODO: Replace this placeholder with the actual research abstract
  abstract:
    "Research abstract will be added here — PDF content coming soon. This section will contain a comprehensive overview of the research methodology, findings, and contributions to the field of agentic AI security.",
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
