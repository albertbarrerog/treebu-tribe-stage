import { Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-6xl md:text-8xl text-foreground mb-6">
          CONTACTO
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12">
          ¿Quieres ser parte de la tribu? Escríbenos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:info@treebumusic.com"
            className="flex items-center gap-3 font-body text-foreground hover:text-muted-foreground transition-colors"
          >
            <Mail size={18} />
            info@treebumusic.com
          </a>
          <a
            href="https://instagram.com/treebu.music"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-foreground hover:text-muted-foreground transition-colors"
          >
            <Instagram size={18} />
            @treebu.music
          </a>
        </div>

        <a
          href="https://instagram.com/treebu.music"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-sm uppercase tracking-widest bg-foreground text-background px-12 py-5 hover:bg-foreground/80 transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
