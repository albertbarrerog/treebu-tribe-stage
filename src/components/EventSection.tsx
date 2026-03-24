import { useState, useEffect } from "react";
import eventBg from "@/assets/event-bg.jpg";

const targetDate = new Date("2026-05-17T20:00:00-05:00").getTime();

const prices = [
  { tier: "Early Bird", price: "$40.000", status: "Agotado" },
  { tier: "Preventa", price: "$55.000", status: "Disponible" },
  { tier: "Taquilla", price: "$80.000", status: "Próximo" },
];

const EventSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="evento" className="relative py-0">
      <img
        src={eventBg}
        alt="TREEBU 002 evento"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block text-xs font-body uppercase tracking-[0.3em] text-muted-foreground border border-border px-4 py-2 mb-8">
            Próximo Evento
          </span>

          <h2 className="font-display text-7xl md:text-9xl lg:text-[11rem] text-foreground leading-none mb-8">
            TREEBU 002
          </h2>

          {/* Countdown */}
          <div className="flex gap-6 md:gap-10 mb-12">
            {[
              { val: timeLeft.days, label: "Días" },
              { val: timeLeft.hours, label: "Hrs" },
              { val: timeLeft.mins, label: "Min" },
              { val: timeLeft.secs, label: "Seg" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="font-display text-4xl md:text-6xl text-foreground">
                  {String(item.val).padStart(2, "0")}
                </span>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Fecha</p>
                <p className="font-body text-foreground">Sábado 17 de Mayo, 2026</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Hora</p>
                <p className="font-body text-foreground">8:00 PM — 5:00 AM</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Lugar</p>
                <p className="font-body text-foreground">Km 1.5 Vía Termales · Santa Rosa de Cabal</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">Aforo</p>
                <p className="font-body text-foreground">500 personas</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-3">Headliner</p>
              <h3 className="font-display text-5xl md:text-7xl text-foreground mb-2">IVORY</h3>
              <p className="font-body text-sm text-muted-foreground mb-6">DJ internacional · Swarm Agency</p>

              <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">Lineup completo</p>
              <p className="font-display text-2xl text-foreground tracking-wide">
                IVORY + 2MT · Abstruse · iMAO · LËTTÖ
              </p>
            </div>
          </div>

          {/* Prices */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {prices.map((p) => (
              <div
                key={p.tier}
                className={`border p-6 text-center transition-all duration-300 ${
                  p.status === "Disponible"
                    ? "border-foreground bg-foreground/5"
                    : "border-border/50"
                }`}
              >
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">
                  {p.tier}
                </p>
                <p className="font-display text-4xl text-foreground mb-2">{p.price}</p>
                <span
                  className={`text-xs font-body uppercase tracking-wider ${
                    p.status === "Agotado"
                      ? "text-destructive line-through"
                      : p.status === "Disponible"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block font-body text-sm uppercase tracking-widest bg-foreground text-background px-12 py-5 hover:bg-foreground/80 transition-colors duration-300"
          >
            COMPRAR BOLETAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
