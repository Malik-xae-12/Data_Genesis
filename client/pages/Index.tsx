import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrainingSection from "@/components/TrainingSection";
import JobSupportSection from "@/components/JobSupportSection";
import ProjectsSection from "@/components/ProjectsSection";
import InternshipsSection from "@/components/InternshipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrainingSection />
      <JobSupportSection />
      <ProjectsSection />
      <InternshipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
