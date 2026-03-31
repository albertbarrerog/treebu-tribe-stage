import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

const GallerySection = () => {
  return (
    <section id="galeria" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Momentos
        </p>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-16">
          GALERÍA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square">
              <img
                src={img}
                alt={`TREEBU galería ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/treebu.music"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm uppercase tracking-widest border border-foreground/40 text-foreground px-8 py-4 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
