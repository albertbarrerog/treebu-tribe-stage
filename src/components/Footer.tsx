import logoAloneWhite from "@/assets/Treebu_Versiones_Graf_Alone_Blanco_.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 pt-8 pb-6">
      <div className="px-6 md:px-12 lg:px-20">

        {/* Mobile layout */}
        <div className="flex md:hidden justify-between items-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 TREEBU
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#colectivo"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Colectivo
            </a>
            <a
              href="#djs"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              DJs
            </a>
            <a
              href="https://instagram.com/treebu.music"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TREEBU en Instagram"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 items-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 TREEBU — Santa Rosa de Cabal, CO
          </p>
          <div className="flex justify-center">
            <img src={logoAloneWhite} alt="TREEBU" className="w-[48px] h-auto opacity-60" />
          </div>
          <div className="flex justify-end gap-6">
            <a
              href="#colectivo"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Colectivo
            </a>
            <a
              href="#djs"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              DJs
            </a>
            <a
              href="https://instagram.com/treebu.music"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TREEBU en Instagram"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
