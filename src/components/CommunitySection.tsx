import g1 from "@/assets/gallery-6.jpg";
import g2 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-5.jpg";
import g4 from "@/assets/gallery-8.jpg";

const posts = [
  { img: g1, text: "La pista es el punto de encuentro" },
  { img: g2, text: "Donde el sonido nos une" },
  { img: g3, text: "Sin etiquetas, sin fronteras" },
  { img: g4, text: "Tribu contemporánea" },
];

const CommunitySection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-6xl md:text-8xl text-foreground mb-4">
          #TREEBU
        </h2>
        <p className="font-body text-muted-foreground mb-16 max-w-lg">
          Somos más que eventos. Somos comunidad. Comparte tu experiencia y sé parte de la tribu.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {posts.map((post, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer">
              <img
                src={post.img}
                alt={post.text}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-500 flex items-end p-4">
                <p className="font-body text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {post.text}
                </p>
              </div>
            </div>
          ))}
        </div>

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
