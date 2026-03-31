import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Colectivo", href: "#colectivo" },
  { label: "DJs", href: "#djs" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);
  const desktopListRef = useRef<HTMLUListElement | null>(null);
  const underlineRef = useRef<HTMLLIElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  useEffect(() => {
    const sectionIds = ["colectivo", "djs", "comunidad", "contacto"];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      const bottomOfPage =
        window.scrollY + window.innerHeight >= document.body.offsetHeight - 50;

      if (bottomOfPage) {
        setActiveHref("#contacto");
        return;
      }

      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      });

      setActiveHref(current ? `#${current}` : null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ul = desktopListRef.current;
    const underline = underlineRef.current;
    if (!ul || !underline) return;

    const updateUnderline = () => {
      if (!activeHref) {
        underline.style.opacity = "0";
        underline.style.width = "0px";
        return;
      }

      const activeLink = linkRefs.current[activeHref];
      if (!activeLink) {
        underline.style.opacity = "0";
        underline.style.width = "0px";
        return;
      }

      const ulRect = ul.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const left = linkRect.left - ulRect.left;
      const width = linkRect.width;

      underline.style.opacity = "1";
      underline.style.left = `${left}px`;
      underline.style.width = `${width}px`;
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeHref]);

  return (
    <header ref={headerRef} className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="flex items-center rounded-full px-6 py-[10px]"
        style={{
          background: "rgba(20, 20, 20, 0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          willChange: "transform",
        }}
        aria-label="Navegación principal"
      >
        <a href="#" className="inline-flex items-center flex-shrink-0">
          <img
            src="/treebu-logo-blanco.png"
            alt="TREEBU"
            className="h-6 w-auto"
          />
        </a>

        <ul
          ref={desktopListRef}
          className="hidden md:flex items-center whitespace-nowrap ml-6 relative"
        >
          <li
            aria-hidden="true"
            ref={underlineRef}
            className="absolute h-[1px] bg-[rgba(255,255,255,0.8)]"
            style={{
              left: 0,
              width: 0,
              bottom: "-3px",
              opacity: 0,
              transition:
                "left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
          {navLinks.map((link, idx) => (
            <li key={link.href} className="flex items-center">
              <a
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                className="text-sm font-body text-muted-foreground hover:text-foreground uppercase tracking-wider"
                style={{
                  transition: "all 0.2s ease",
                  ...(activeHref === link.href
                    ? {
                        color: "rgba(255,255,255,1)",
                      }
                    : null),
                }}
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span aria-hidden="true" className="mx-4 text-muted-foreground/60">·</span>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hidden md:inline-flex items-center text-xs font-body uppercase tracking-widest rounded-full bg-[#C8F542] text-[#0a0a0a] font-bold px-5 py-2 ml-6 hover:bg-[#d4f050] transition-colors duration-200 border-0"
        >
          Boletas
        </a>

        <button
          className="md:hidden text-foreground ml-4"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden mt-3 rounded-2xl animate-fade-in overflow-hidden"
          style={{
            background: "rgba(20, 20, 20, 0.92)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            width: "fit-content",
            minWidth: "200px",
          }}
        >
          <ul className="flex flex-col items-center gap-3 py-5 px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-body uppercase tracking-wider text-muted-foreground"
                  style={{
                    transition: "all 0.2s ease",
                    ...(activeHref === link.href
                      ? {
                          color: "rgba(255,255,255,1)",
                        }
                      : null),
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="text-sm font-body uppercase tracking-widest rounded-full bg-[#C8F542] text-[#0a0a0a] font-bold px-6 py-3 min-h-[44px] inline-flex items-center justify-center hover:bg-[#d4f050] transition-colors duration-200 border-0"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
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
