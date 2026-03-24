const Footer = () => {
  return (
    <footer className="border-t border-border/30 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-foreground">TREEBU</span>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 TREEBU — Santa Rosa de Cabal
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/treebu.music"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="#contacto"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
