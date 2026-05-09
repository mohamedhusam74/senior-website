import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ResearchSection from "@/components/sections/ResearchSection";
import TeamSection from "@/components/sections/TeamSection";
import PaperSection from "@/components/sections/PaperSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050a14] text-slate-100">
      <Navbar />
      <HeroSection />
      <ResearchSection />
      <TeamSection />
      <PaperSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
