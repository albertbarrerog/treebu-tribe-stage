import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "DJs", href: "#djs" },
  { label: "Evento", href: "#evento" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16" aria-label="Navegación principal">
        <a href="#inicio" className="font-display text-2xl tracking-widest text-foreground">
          TREEBU
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#evento"
          className="hidden md:inline-block text-xs font-body uppercase tracking-widest border border-foreground px-5 py-2 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Boletas
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border/30 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-display tracking-widest text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#evento"
                className="text-sm font-body uppercase tracking-widest border border-foreground px-6 py-3 text-foreground"
                onClick={() => setOpen(false)}
              >
                Boletas
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
