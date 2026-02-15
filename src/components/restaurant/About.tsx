import aboutChef from "@/assets/about-chef.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutChef}
                alt="Chef at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30" />
          </div>

          {/* Text */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Est. 2019
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
              Our Philosophy
            </h2>
            <div className="w-16 h-px bg-accent" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Velora, we believe that extraordinary dining begins with reverence for
              the ingredient. Every dish is a dialogue between the season's finest
              offerings and the patient hands that transform them — rooted in
              craftsmanship, guided by intuition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our kitchen draws from a deep well of culinary tradition while embracing
              the unexpected. Each plate tells a story of provenance and care, served
              within an atmosphere designed to slow time and sharpen the senses.
              From the warmth of our amber-lit dining room to the quiet precision
              of our open kitchen, every detail exists to create moments worth
              remembering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
