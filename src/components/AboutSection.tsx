import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  const paragraphs = useMemo(
    () => [
      "Somos un espacio de encuentro, comunidad y creación colectiva. Nos inspira el concepto de tribu como forma contemporánea de pertenecer: sin fronteras, sin etiquetas, sin exclusiones.",
      "Nuestros espacios son seguros, diversos y respetuosos, donde cada persona vive la experiencia desde la libertad y la convivencia.",
      "Utilizamos la música electrónica como medio para encontrarnos, escucharnos y reconocernos.",
    ],
    [],
  );

  const wordsByParagraph = useMemo(
    () => paragraphs.map((p) => p.split(" ")),
    [paragraphs],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleEl = titleRef.current;
    const textContainer = textContainerRef.current;
    if (!titleEl || !textContainer) return;

    const wordSpans = Array.from(textContainer.querySelectorAll("span[data-word]"));

    const ctx = gsap.context(() => {
      gsap.to(titleEl, {
        color: "rgba(255,255,255,1)",
        ease: "none",
        scrollTrigger: {
          trigger: titleEl,
          start: "top 85%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.to(wordSpans, {
        color: "rgba(255,255,255,0.75)",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: textContainer,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, textContainer);

    return () => ctx.revert();
  }, [wordsByParagraph]);

  return (
    <section id="colectivo" className="section-padding -mt-[60px] md:-mt-[192px]">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="font-display text-3xl md:text-6xl mb-4"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          TREEBU
        </h2>
        <p className="text-xs md:text-sm font-body uppercase tracking-[0.1em] md:tracking-[0.3em] text-muted-foreground">
          Colectivo de música electrónica
        </p>
        <div
          ref={textContainerRef}
          className="font-body mt-10 space-y-8"
          style={{
            fontSize: "clamp(16px, 4.5vw, 40px)",
            lineHeight: 1.22,
            letterSpacing: "-0.01em",
            fontWeight: 500,
          }}
        >
          {wordsByParagraph.map((words, pIdx) => (
            <p key={pIdx}>
              {words.map((word, i) => (
                <span
                  key={`${pIdx}-${word}-${i}`}
                  data-word
                  style={{ color: "rgba(255,255,255,0.08)" }}
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
