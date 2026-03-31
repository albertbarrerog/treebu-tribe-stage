import { useState, useEffect } from "react";

const prices = [
  { tier: "etapa early tribu", price: "$40.000", status: "Disponible" },
];

const EventSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section id="evento" className="relative py-0">
      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block text-xs font-body uppercase tracking-[0.3em] text-[#C8F542] border border-[#C8F542] px-4 py-2 mb-6">
            Próximo Evento
          </span>

          <p className="font-body text-base md:text-lg text-muted-foreground -mb-3">
            Desde ITALIA
          </p>

          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.75rem] text-foreground leading-none mt-8 mb-5">
            IVORY
          </h2>

          <p className="font-body text-base md:text-lg text-muted-foreground mb-12">
            Innervisions · Siamese · Diynamic
          </p>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Fecha</p>
                <p className="font-body text-foreground md:text-lg">Domingo 17 de Mayo, 2026 · 20:00hrs</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Lugar</p>
                <p className="font-body text-foreground md:text-lg">Km 1.5 Vía Termales · Santa Rosa de Cabal · CO</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Aforo</p>
                <p className="font-body text-foreground md:text-lg">600 personas</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Lineup</p>
                <p className="font-body text-foreground md:text-lg">IVORY · 2MT · ABSTRUSE · IMAO · LETTO</p>
              </div>
            </div>
          </div>

          {/* Prices + CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 mb-12">
            <div>
              <div className="grid grid-cols-1 gap-4">
                {prices.map((p) => (
                  <div
                    key={p.tier}
                    className={`inline-flex w-fit flex-col items-center border px-8 py-6 justify-self-start transition-all duration-300 ${
                      p.status === "Disponible"
                        ? "border-foreground bg-foreground/5"
                        : "border-border/50"
                    }`}
                  >
                    <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">
                      {p.tier}
                    </p>
                    <p className="font-heading text-2xl text-foreground mb-2 whitespace-nowrap">{p.price}</p>
                    <span
                      className={`text-xs font-body uppercase tracking-wider ${
                        p.status === "Agotado"
                          ? "text-destructive line-through"
                          : p.status === "Disponible"
                          ? "text-[#C8F542]"
                          : "text-muted-foreground"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={isDesktop ? { marginTop: "-90px" } : undefined}>
              {/* TODO: agregar link de tiquetera */}
              <a
                href="#"
                className="inline-block font-body text-sm font-bold uppercase tracking-widest bg-[#C8F542] text-[#0a0a0a] px-12 py-5 hover:brightness-110 transition duration-300 mt-6"
                style={isDesktop ? { marginTop: "120px" } : { marginTop: "24px" }}
              >
                COMPRAR BOLETAS
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventSection;
