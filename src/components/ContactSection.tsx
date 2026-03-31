import { Instagram, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding" style={{ background: "transparent" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-6xl text-foreground mb-6">
          CONTACTO
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12">
          ¿Quieres ser parte de la tribu? Escríbenos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href="mailto:info@treebumusic.com"
            className="flex items-center gap-3 font-body text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            <Mail size={18} />
            info@treebumusic.com
          </a>
          <a
            href="https://instagram.com/treebu.music"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            <Instagram size={18} />
            @treebu.music
          </a>
          <a
            href="https://wa.me/573001173678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            <Phone size={18} />
            +57 300 117 3678
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
