import { useState, useEffect } from "react";

const values = [
  "Colaboracion",
  "Compartir",
  "Expresion",
  "Escucha",
  "Respeto",
  "Creacion",
  "Conciencia",
  "Pluralidad",
  "Expansion",
];

const MarqueeRow = ({ reverse, durationSeconds, fontSize }: { reverse: boolean; durationSeconds: number; fontSize: string }) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`treebu-marquee-track ${reverse ? "treebu-marquee-reverse" : ""}`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {[0, 1].map((dupIdx) => (
          <div
            key={dupIdx}
            className="flex whitespace-nowrap gap-0"
            aria-hidden={dupIdx === 1}
          >
            {values.map((word, i) => (
              <span key={`${dupIdx}-${word}`} className="flex items-center">
                <span className="font-display font-normal uppercase tracking-[0.2em] text-white/60" style={{ fontSize }}>
                  {word}
                </span>
                {i !== values.length - 1 && (
                  <span className="mx-6 inline-block h-[6px] w-[6px] rounded-full bg-white/40" />
                )}
              </span>
            ))}

            <span className="mx-6 inline-block h-[6px] w-[6px] rounded-full bg-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ValuesMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#111111] py-6">
      <MarqueeRow reverse={false} durationSeconds={isMobile ? 35 : 25} fontSize={isMobile ? "13px" : "18px"} />
      <MarqueeRow reverse={true} durationSeconds={isMobile ? 42 : 30} fontSize={isMobile ? "13px" : "18px"} />
    </section>
  );
};

export default ValuesMarquee;
