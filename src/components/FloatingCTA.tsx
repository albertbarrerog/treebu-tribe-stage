const FloatingCTA = () => {
  return (
    <a
      href="#evento"
      className="fixed bottom-6 right-6 z-50 font-body text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3 shadow-lg hover:bg-foreground/80 transition-all duration-300 md:hidden"
      aria-label="Comprar boletas"
    >
      Boletas
    </a>
  );
};

export default FloatingCTA;
