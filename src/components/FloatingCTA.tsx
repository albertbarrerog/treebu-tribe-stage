import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      setVisible(footer.getBoundingClientRect().top > window.innerHeight + 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://tickets.treebumusic.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 font-body text-xs uppercase tracking-widest bg-[#C8F542] text-[#0a0a0a] font-bold px-6 py-3 shadow-lg hover:brightness-110 transition-all duration-300 md:hidden ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Comprar boletas"
    >
      Boletas
    </a>
  );
};

export default FloatingCTA;
