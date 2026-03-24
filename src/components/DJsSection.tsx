import { useState } from "react";
import dj1 from "@/assets/dj-1.jpg";
import dj2 from "@/assets/dj-2.jpg";
import dj3 from "@/assets/dj-3.jpg";
import dj4 from "@/assets/dj-4.jpg";

const djs = [
  {
    name: "IVORY",
    genres: "Progressive House · Melodic Techno",
    bio: "DJ internacional representada por Swarm Agency. Su sonido fusiona melodías etéreas con bajos profundos que transportan a otra dimensión.",
    image: dj1,
  },
  {
    name: "2MT · Abstruse",
    genres: "Minimal · Deep Tech",
    bio: "Dúo local que explora las texturas más oscuras del minimal, creando atmósferas hipnóticas en cada set.",
    image: dj2,
  },
  {
    name: "iMAO",
    genres: "Techno · Industrial",
    bio: "Residente TREEBU. Su energía raw y selección implacable definen el sonido del colectivo en la pista.",
    image: dj3,
  },
  {
    name: "LËTTÖ",
    genres: "House · Afro House",
    bio: "Ritmos orgánicos y percusiones tribales que conectan con la raíz ancestral del movimiento colectivo.",
    image: dj4,
  },
];

const DJsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="djs" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Artistas
        </p>
        <h2 className="font-display text-6xl md:text-8xl text-foreground mb-16">
          LINEUP
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {djs.map((dj, i) => (
            <div
              key={dj.name}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dj.image}
                  alt={dj.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/80 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-1">
                  {dj.name}
                </h3>
                <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-2">
                  {dj.genres}
                </p>
                <p
                  className={`text-sm font-body text-foreground/80 leading-relaxed transition-all duration-500 ${
                    hoveredIdx === i ? "opacity-100 max-h-40 mt-2" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {dj.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJsSection;
