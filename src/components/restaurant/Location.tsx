import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock } from "lucide-react";

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="location" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Visit Us
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  42 Rue de l'Élégance
                  <br />
                  Paris, 75008, France
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Tuesday – Saturday: 18:00 – 23:00</p>
                  <p>Sunday Brunch: 11:00 – 15:00</p>
                  <p>Monday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant map placeholder */}
          <div className="aspect-square md:aspect-auto bg-card rounded-xl border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-10 h-10 text-accent/40 mx-auto mb-4" />
              <p className="font-serif text-foreground text-lg">Paris, France</p>
              <p className="text-sm text-muted-foreground mt-1">
                8th Arrondissement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
