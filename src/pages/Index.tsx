import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DJsSection from "@/components/DJsSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DJsSection />
        <EventSection />
        <GallerySection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
