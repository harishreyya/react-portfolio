import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/duoqzn6tv/image/upload/v1748940272/text-to-image/bllej76tuvxqmmsacepy.png)`,
        }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/40 backdrop-blur-sm z-0" />

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-primary">Reyya</span>{" "}
              <span className="text-accent">Harish</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Full Stack Web Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Building scalable and high-performance web applications with around{" "}
            <span className="text-accent font-semibold">2 years</span> of experience.
            Passionate about clean code, modern technologies, and creating exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-portfolio transition-smooth hover:shadow-portfolio-lg hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Palasa, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:harishrebel0@gmail.com" className="hover:text-accent transition-smooth">
                harishrebel0@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+917002092915" className="hover:text-accent transition-smooth">
                +91-70020 92915
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/harishreyya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110 shadow-portfolio"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/r-harish-832793218/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110 shadow-portfolio"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
