import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/Treebu_Versiones_Graf_Alone_Blanco_.png";

const MusicAmigosBreak = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const musicaRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const amigosRef = useRef<HTMLDivElement | null>(null);
  const isMobileRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = (matches: boolean) => {
      isMobileRef.current = matches;
      setIsMobile(matches);
    };
    apply(mq.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!musicaRef.current || !amigosRef.current || !logoRef.current || !containerRef.current) return;

      const dist = isMobileRef.current ? "110vw" : "120vw";
      gsap.set(musicaRef.current, { x: `-${dist}` });
      gsap.set(amigosRef.current, { x: dist });
      gsap.set(logoRef.current, { opacity: 0 });

      gsap.to([musicaRef.current, amigosRef.current], {
        x: 0,
        ease: "back.out(1.7)",
        duration: 1.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(logoRef.current, {
        opacity: 1,
        delay: 0.7,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[280px] overflow-hidden" style={{ background: "transparent" }}>
      <div className="w-full h-full flex items-center justify-center" style={{ flexDirection: isMobile ? "column" : "row", gap: isMobile ? "12px" : "80px" }}>
        <div
          ref={musicaRef}
          className="font-display font-bold text-white tracking-[0.15em]"
          style={{ fontSize: isMobile ? "clamp(20px, 5vw, 28px)" : "clamp(16px, 2.2vw, 30px)" }}
        >
          MUSICA
        </div>
        <img ref={logoRef} src={logo} alt="TREEBU" width={80} className="w-[80px] h-auto" />
        <div
          ref={amigosRef}
          className="font-display font-bold text-white tracking-[0.15em]"
          style={{ fontSize: isMobile ? "clamp(20px, 5vw, 28px)" : "clamp(16px, 2.2vw, 30px)" }}
        >
          AMIGOS
        </div>
      </div>
    </section>
  );
};

export default MusicAmigosBreak;
