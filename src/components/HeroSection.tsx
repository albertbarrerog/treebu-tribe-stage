import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="TREEBU evento de música electrónica"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p className="text-sm md:text-base font-body uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Santa Rosa de Cabal, Risaralda — Música electrónica
        </p>
        <h1 className="font-display text-7xl md:text-[10rem] lg:text-[12rem] leading-[0.85] text-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          TRIBU SIN
          <br />
          FRONTERAS
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#evento"
            className="font-body text-sm uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-foreground/80 transition-colors duration-300"
          >
            TREEBU 002 — 17 Mayo
          </a>
          <a
            href="#sobre"
            className="font-body text-sm uppercase tracking-widest border border-foreground/40 text-foreground px-8 py-4 hover:border-foreground transition-colors duration-300"
          >
            Explorar colectivo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
