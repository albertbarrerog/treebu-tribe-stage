import { gsap } from 'gsap'
import { useEffect, useMemo, useRef, useState } from "react";
import lanzamiento1 from "@/assets/community/lanzamiento/1.png";
import lanzamiento2 from "@/assets/community/lanzamiento/2.png";
import lanzamiento3 from "@/assets/community/lanzamiento/3.png";
import lanzamiento4 from "@/assets/community/lanzamiento/4.png";
import lanzamiento5 from "@/assets/community/lanzamiento/5.png";
import lanzamiento6 from "@/assets/community/lanzamiento/6.png";
import lanzamiento7 from "@/assets/community/lanzamiento/7.png";
import lanzamiento8 from "@/assets/community/lanzamiento/8.png";
import lanzamiento9 from "@/assets/community/lanzamiento/9.png";
import lanzamiento10 from "@/assets/community/lanzamiento/10.png";
import lanzamiento11 from "@/assets/community/lanzamiento/11.png";
import lanzamiento12 from "@/assets/community/lanzamiento/12.png";
import lanzamiento13 from "@/assets/community/lanzamiento/13.png";
import lanzamiento14 from "@/assets/community/lanzamiento/14.png";
import lanzamiento15 from "@/assets/community/lanzamiento/15.png";
import aot1 from "@/assets/community/aot/1.png";
import aot2 from "@/assets/community/aot/2.png";
import aot3 from "@/assets/community/aot/3.png";
import aot4 from "@/assets/community/aot/4.png";
import aot5 from "@/assets/community/aot/5.png";
import aot6 from "@/assets/community/aot/6.png";
import aot7 from "@/assets/community/aot/7.png";
import aot8 from "@/assets/community/aot/8.png";

const events = [
  {
    id: "001",
    label: "LANZAMIENTO TREEBU",
    date: "SEPTIEMBRE 2025",
    photos: [
      { img: lanzamiento1, text: "Lanzamiento Treebu" },
      { img: lanzamiento2, text: "Lanzamiento Treebu" },
      { img: lanzamiento3, text: "Lanzamiento Treebu" },
      { img: lanzamiento4, text: "Lanzamiento Treebu" },
      { img: lanzamiento5, text: "Lanzamiento Treebu" },
      { img: lanzamiento6, text: "Lanzamiento Treebu" },
      { img: lanzamiento7, text: "Lanzamiento Treebu" },
      { img: lanzamiento8, text: "Lanzamiento Treebu" },
      { img: lanzamiento9, text: "Lanzamiento Treebu" },
      { img: lanzamiento10, text: "Lanzamiento Treebu" },
      { img: lanzamiento11, text: "Lanzamiento Treebu" },
      { img: lanzamiento12, text: "Lanzamiento Treebu" },
      { img: lanzamiento13, text: "Lanzamiento Treebu" },
      { img: lanzamiento14, text: "Lanzamiento Treebu" },
      { img: lanzamiento15, text: "Lanzamiento Treebu" },
    ],
  },
  {
    id: "002",
    label: "AOT",
    date: "FEBRERO 2026",
    photos: [
      { img: aot1, text: "AOT" },
      { img: aot2, text: "AOT" },
      { img: aot3, text: "AOT" },
      { img: aot4, text: "AOT" },
      { img: aot5, text: "AOT" },
      { img: aot6, text: "AOT" },
      { img: aot7, text: "AOT" },
      { img: aot8, text: "AOT" },
    ],
  },
];

type FilterValue = "ALL" | (typeof events)[number]["id"];

type PhotoItem = {
  eventId: (typeof events)[number]["id"];
  eventLabel: string;
  eventDate: string;
  img: string;
  text: string;
};

const CommunitySection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("ALL");
  const [deckOpacity, setDeckOpacity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const filteredPhotos: PhotoItem[] = useMemo(() => {
    const source = activeFilter === "ALL" ? events : events.filter((e) => e.id === activeFilter);
    return source.flatMap((event) =>
      event.photos.map((p) => ({
        eventId: event.id,
        eventLabel: event.label,
        eventDate: event.date,
        img: p.img,
        text: p.text,
      })),
    );
  }, [activeFilter]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = (matches: boolean) => {
      isMobileRef.current = matches;
      setIsMobile(matches);
    };
    apply(mq.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const updateCarousel = (indexOverride?: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const total = filteredPhotos.length;
    if (total === 0) return;

    const currentIndex = (indexOverride ?? activeIndex) % total;
    const containerWidth = container.getBoundingClientRect().width;
    const mobile = isMobileRef.current;
    const centerX = containerWidth / 2 - (mobile ? 100 : 150);

    const maybeTeleportForWrap = (el: HTMLDivElement, targetX: number) => {
      const currentXRaw = gsap.getProperty(el, "x");
      const currentX = typeof currentXRaw === "number" ? currentXRaw : Number(currentXRaw);
      if (!Number.isFinite(currentX)) return;

      const distance = Math.abs(targetX - currentX);
      if (distance > containerWidth * 0.6) {
        const offscreenX = targetX > currentX ? containerWidth + 200 : -200;
        gsap.set(el, { x: offscreenX, opacity: 0 });
      }
    };

    for (let i = 0; i < total; i += 1) {
      const el = cardRefs.current[i];
      if (!el) continue;

      const rawDelta = i - currentIndex;
      let delta = rawDelta;
      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const absDelta = Math.abs(delta);
      const dir = delta === 0 ? 0 : delta > 0 ? 1 : -1;

      const base = {
        duration: 0.6,
        ease: "power2.inOut" as const,
      };

      if (absDelta === 0) {
        maybeTeleportForWrap(el, centerX);
        gsap.to(el, {
          ...base,
          x: centerX,
          y: mobile ? -130 : -200,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          filter: "grayscale(0%)",
        });
        continue;
      }

      if (absDelta === 1) {
        const targetX = centerX + dir * (mobile ? 110 : 220);
        maybeTeleportForWrap(el, targetX);
        gsap.to(el, {
          ...base,
          x: targetX,
          y: mobile ? -110 : -170,
          scale: 0.82,
          opacity: 1,
          zIndex: 9,
          filter: "grayscale(100%)",
        });
        continue;
      }

      if (absDelta === 2) {
        const targetX = centerX + dir * (mobile ? 190 : 380);
        maybeTeleportForWrap(el, targetX);
        gsap.to(el, {
          ...base,
          x: targetX,
          y: mobile ? -100 : -150,
          scale: 0.68,
          opacity: 0.85,
          zIndex: 8,
          filter: "grayscale(100%)",
        });
        continue;
      }

      if (absDelta === 3) {
        const targetX = centerX + dir * (mobile ? 260 : 520);
        maybeTeleportForWrap(el, targetX);
        gsap.to(el, {
          ...base,
          x: targetX,
          y: mobile ? -100 : -150,
          scale: 0.55,
          opacity: 0.6,
          zIndex: 7,
          filter: "grayscale(100%)",
        });
        continue;
      }

      gsap.to(el, {
        ...base,
        opacity: 0,
        zIndex: 1,
      });
    }
  };

  useEffect(() => {
    setActiveIndex(0);

    const centerX = carouselRef.current ? carouselRef.current.offsetWidth / 2 - (isMobileRef.current ? 100 : 150) : 0;
    cardRefs.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, {
        scale: 0,
        opacity: 0,
        x: centerX,
      });
    });

    window.setTimeout(() => updateCarousel(0), 50);
  }, [filteredPhotos]);

  useEffect(() => {
    window.setTimeout(() => updateCarousel(activeIndex), 50);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const onFilterClick = (value: FilterValue) => {
    if (value === activeFilter) return;
    if (isAnimating) return;

    setIsAnimating(true);

    const total = filteredPhotos.length;
    const els = cardRefs.current.slice(0, total).filter(Boolean) as HTMLDivElement[];

    gsap.to(els, {
      duration: 0.25,
      ease: "power2.in",
      scale: 0,
      opacity: 0,
      stagger: 0,
      onComplete: () => {
        setActiveFilter(value);
        setIsAnimating(false);
      },
    });
  };

  const goNext = () => {
    if (filteredPhotos.length === 0) return;
    setActiveIndex((prev) => {
      const nextIndex = (prev + 1) % filteredPhotos.length;
      updateCarousel(nextIndex);
      return nextIndex;
    });
  };

  const goPrev = () => {
    if (filteredPhotos.length === 0) return;
    setActiveIndex((prev) => {
      const prevIndex = (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
      updateCarousel(prevIndex);
      return prevIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 30) return;
    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <section id="comunidad" className="section-padding" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display font-bold text-foreground tracking-[0.15em] mb-4"
          style={{ fontSize: "clamp(16px, 2.2vw, 30px)" }}
        >
          #COMUNIDAD
        </h2>
        <p className="font-body text-muted-foreground mb-10 whitespace-nowrap overflow-hidden text-ellipsis max-w-none">
          Espacios seguros, diversos y respetuosos
        </p>

        <div className="flex items-center flex-wrap gap-3 md:gap-8 mb-10">
          <button
            type="button"
            onClick={() => onFilterClick("ALL")}
            className={`font-body text-sm uppercase tracking-widest pb-2 transition-colors duration-300 ${
              activeFilter === "ALL"
                ? "text-foreground border-b border-foreground"
                : "text-muted-foreground"
            }`}
          >
            TODOS
          </button>
          {events.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => onFilterClick(event.id)}
              className={`font-body text-sm uppercase tracking-widest pb-2 transition-colors duration-300 ${
                activeFilter === event.id
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {event.label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden"
        style={{ height: isMobile ? "340px" : "500px", opacity: deckOpacity, transition: "opacity 0.3s" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          aria-label="Anterior"
          onClick={goPrev}
          className="absolute left-[24px] top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer"
          style={{ fontSize: "28px" }}
        >
          ←
        </button>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={goNext}
          className="absolute right-[24px] top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer"
          style={{ fontSize: "28px" }}
        >
          →
        </button>

        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            {filteredPhotos.map((card, i) => (
              <div
                key={`${card.eventId}-${card.text}-${i}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveIndex(i);
                  updateCarousel(i);
                }}
                onMouseEnter={() => {
                  if (i === activeIndex) return;
                  const el = cardRefs.current[i];
                  if (!el) return;
                  gsap.to(el, { duration: 0.25, ease: "power2.out", filter: "grayscale(0%)" });
                }}
                onMouseLeave={() => {
                  if (i === activeIndex) return;
                  const el = cardRefs.current[i];
                  if (!el) return;
                  gsap.to(el, { duration: 0.25, ease: "power2.out", filter: "grayscale(100%)" });
                }}
                onKeyDown={(e) => {
                  if (e.key !== "Enter" && e.key !== " ") return;
                  setActiveIndex(i);
                  updateCarousel(i);
                }}
                className="absolute left-0"
                style={{
                  width: isMobile ? "200px" : "300px",
                  height: isMobile ? "280px" : "400px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  top: "50%",
                }}
              >
                <div
                  className="group relative w-full h-full"
                  style={{ transition: "all 0.6s", willChange: "transform, opacity, filter" }}
                >
                  <img
                    src={card.img}
                    alt={card.text}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div className="w-full">
                      <div className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">
                        {card.eventDate}
                      </div>
                      <div className="font-body text-sm text-foreground">{card.eventLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/treebu.music"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-foreground/80 transition-colors duration-300"
          >
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
