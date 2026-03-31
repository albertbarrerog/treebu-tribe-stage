import { Instagram, Youtube } from 'lucide-react'
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dj1 from "@/assets/section-djs/2MT.png";
import dj2 from "@/assets/section-djs/ABSTRUSE.png";
import dj3 from "@/assets/section-djs/IMAO.png";
import dj4 from "@/assets/section-djs/LËTTÖ.png";

const SoundCloudIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 12.2V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v8.92c.32-.14.66-.21 1-.22z" />
    <path d="M8.5 9.2c-.28 0-.5.22-.5.5v7.53c.32.17.66.32 1 .45V9.7c0-.28-.22-.5-.5-.5z" />
    <path d="M6.5 10.7c-.28 0-.5.22-.5.5v4.9c.32.36.66.69 1 1v-5.9c0-.28-.22-.5-.5-.5z" />
    <path d="M4.5 12.2c-.28 0-.5.22-.5.5v1.65c.3.63.64 1.22 1 1.78V12.7c0-.28-.22-.5-.5-.5z" />
    <path d="M14.2 8.5c-1.1 0-2.1.44-2.83 1.16-.23.23-.37.55-.37.88v6.96h7.55c1.92 0 3.45-1.48 3.45-3.3 0-1.64-1.26-3-2.93-3.25-.16-1.6-1.55-2.45-2.87-2.45z" />
  </svg>
);

const BandcampIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 17.5 10.9 6.5H19.5L13.1 17.5H4.5Z" />
  </svg>
);

const SpotifyIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.59 14.53a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.56-1.16a.75.75 0 0 1-.33-1.46c4.56-1.04 8.47-.59 11.59 1.32.35.21.46.68.33 1.05Zm1.47-3.27a.9.9 0 0 1-1.23.3c-3.23-1.98-8.16-2.55-11.98-1.39a.9.9 0 1 1-.52-1.72c4.37-1.33 9.8-.68 13.52 1.62.42.26.55.8.21 1.19Zm.13-3.4C14.34 7.6 8.03 7.4 4.42 8.5a1.05 1.05 0 1 1-.6-2.02c4.15-1.26 11.04-1.01 15.39 1.58a1.05 1.05 0 1 1-1.02 1.8Z" />
  </svg>
);

const djs = [
  {
    name: "2MT",
    genres: "Indie Dance · Melodic House y Techno",
    bio: "DJ y productor colombiano radicado en el Eje Cafetero. Cofundador de TREEBU. Ha compartido cabina con Agents of Time, Julio Victoria, M.A.N.D.Y., Fernando Ferreyra y Verraco. Sus sets destacan por narrativas progresivas, grooves hipnóticos y una carga melódica que conecta lo emocional con la energía de la pista.",
    image: dj1,
    links: [
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/2mtmusic", label: "Instagram" },
      { icon: SoundCloudIcon, url: "https://soundcloud.com/diemti", label: "SoundCloud" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/@TreebuCollective", label: "YouTube" },
    ],
  },
  {
    name: "ABSTRUSE",
    genres: "Deep House · Techno · Minimal",
    bio: "DJ, productor y diseñador gráfico con más de una década en la escena electrónica colombiana. Fundador del colectivo ataraxis y los sellos Nada Espacial y Lame Insults. Su universo sonoro combinado con su visión como artista visual, convierte cada presentación en algo que se siente antes de entenderse",
    image: dj2,
    links: [
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/abstruse______/", label: "Instagram" },
      { icon: SoundCloudIcon, url: "https://soundcloud.com/abstruse_01", label: "SoundCloud" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/@TreebuCollective", label: "YouTube" },
      { icon: BandcampIcon, url: "https://abstr.bandcamp.com/", label: "Bandcamp" },
      { icon: SpotifyIcon, url: "https://open.spotify.com/intl-es/artist/63eCr54gBuG425RwVEN52s", label: "Spotify" },
    ],
  },
  {
    name: "iMAO",
    genres: "Breakbeat · Melodic House · Indie Dance",
    bio: "Los sets de imaO construyen viajes envolventes con el bajo como protagonista principal — líneas melódicas y texturas de break y electro que rompen la tensión en el momento justo. Sus gustos musicales van más allá de la electrónica, con un proyecto paralelo donde explora generos como el R&B y el Hip Hop, influencias que moldean su oído y hacen que su selección suene diferente.",
    image: dj3,
    links: [
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/imao.dj/", label: "Instagram" },
      { icon: SoundCloudIcon, url: "https://soundcloud.com/imao-dj", label: "SoundCloud" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/@TreebuCollective", label: "YouTube" },
    ],
  },
  {
    name: "LETTO",
    genres: "Indie Dance · Melodic House y Techno",
    bio: "Sus sets se construyen con paciencia y precisión. Grooves profundos, melodías envolventes y texturas atmosféricas que avanzan progresivamente hasta generar una conexión total con la pista. Cada sesión es una curaduría pensada para el contexto, el espacio y la audiencia, manteniendo siempre una identidad reconocible.",
    image: dj4,
    links: [
      { icon: <Instagram size={18} />, url: "https://www.instagram.com/dj.letto/", label: "Instagram" },
      { icon: SoundCloudIcon, url: "https://soundcloud.com/dj-lettoe", label: "SoundCloud" },
      { icon: <Youtube size={18} />, url: "https://www.youtube.com/@TreebuCollective", label: "YouTube" },
    ],
  },
];

const DJsSection = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const innerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const stickyTop = useMemo(() => 80, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      for (let i = 0; i < djs.length - 1; i++) {
        const cardEl = cardRefs.current[i];
        const inner = innerRefs.current[i];
        if (!cardEl || !inner) continue;

        gsap.to(inner, {
          scale: 0.92,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: cardEl,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="djs" className="section-padding" style={{ background: "transparent" }}>
      <div className="w-full mx-auto">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Artistas
        </p>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-16">
          DJS
        </h2>

        <div className="relative px-4 md:px-16 overflow-visible">
          <div className="flex flex-col gap-0 overflow-visible">
            {djs.map((dj, i) => (
              <div
                key={dj.name}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                data-idx={i}
                className="sticky overflow-visible"
                style={{
                  top: stickyTop,
                  zIndex: i + 1,
                  margin: 0,
                  marginBottom: i === djs.length - 1 ? 0 : 8,
                  cursor: "default",
                  userSelect: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div
                  ref={(el) => {
                    innerRefs.current[i] = el;
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div
                    className="w-full rounded-[16px] overflow-hidden flex flex-col md:grid md:min-h-[480px] md:grid-cols-[45%_55%] border border-white/40"
                    style={{ transition: "border-color 0.3s ease" }}
                  >
                    <div className="bg-[#111111] p-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
                      <h3 className="font-heading text-lg md:text-xl text-foreground leading-none">
                        {dj.name}
                      </h3>
                      <p className="mt-4 text-xs md:text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
                        {dj.genres}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        {dj.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-white/50 hover:text-white transition-colors duration-200"
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                      <p className="mt-6 text-sm md:text-lg font-body text-foreground/80 leading-relaxed max-w-prose">
                        {dj.bio}
                      </p>
                    </div>

                    <div className="relative p-0 m-0 h-[280px] md:h-auto order-1 md:order-2">
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ borderRadius: "12px 0 0 12px" }}
                      >
                        <img
                          src={dj.image}
                          alt={dj.name}
                          loading="lazy"
                          width={1280}
                          height={800}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJsSection;
