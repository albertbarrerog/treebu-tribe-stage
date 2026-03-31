import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import DJsSection from "@/components/DJsSection";
import EventSection from "@/components/EventSection";
import ValuesMarquee from "@/components/ValuesMarquee";
import MusicAmigosBreak from "@/components/MusicAmigosBreak";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import eventBg from "@/assets/event-bg.png";

const Index = () => {
  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${eventBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.75)" }} />
        <div className="relative z-10">
          <Header />
          <main>
            <EventSection />
            <AboutSection />
            <ValuesMarquee />
            <DJsSection />
            <MusicAmigosBreak />
            <CommunitySection />
            <ContactSection />
          </main>
        </div>
      </div>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
