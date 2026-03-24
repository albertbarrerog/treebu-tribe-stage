const values = [
  "Colabora", "Comparte", "Expresa",
  "Escucha", "Respeta", "Crea",
  "Conciencia", "Pluralidad", "Expansión",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Colectivo de música electrónica
        </p>
        <h2 className="font-display text-6xl md:text-8xl text-foreground mb-8">
          TREEBU
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          TREEBU nació como una idea simple: crear un espacio donde la música electrónica sea el lenguaje común. En Santa Rosa de Cabal, entre montañas y termales, construimos experiencias inmersivas donde la pista de baile se convierte en un punto de encuentro sin etiquetas, sin juicio, sin fronteras.
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
          Somos una tribu contemporánea. Un colectivo que cree en la diversidad, la expresión libre y el poder transformador del sonido. Cada evento es una invitación a perderse en el ritmo y encontrarse en la comunidad.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto">
          {values.map((value) => (
            <div
              key={value}
              className="border border-border/50 py-4 px-2 text-center hover:border-foreground/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <span className="font-display text-lg md:text-xl tracking-wider text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
