import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ResearchSection from "@/components/sections/ResearchSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <ResearchSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
