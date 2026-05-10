import type { Metadata } from "next";
import { Oxanium, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Developing an Agentic AI Vulnerabilities Framework | University of Bahrain",
  description:
    "Senior Research Project by Mohamed Husam and Kaltham Abdulla — University of Bahrain, 2026. Developing a comprehensive framework for identifying and mitigating vulnerabilities in agentic AI systems.",
  keywords: ["agentic AI", "cybersecurity", "vulnerabilities", "University of Bahrain", "senior project", "AI security"],
  openGraph: {
    title: "Agentic AI Vulnerabilities Framework — UoB Senior Project 2026",
    description: "Senior Research: Developing a framework for agentic AI security vulnerabilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
