import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabella Chen",
    text: "An unforgettable evening. Every course was a revelation — flavours I've never experienced, presented with breathtaking artistry.",
    stars: 5,
  },
  {
    name: "Marcus Lefevre",
    text: "Velora understands that fine dining is about emotion, not excess. The tasting menu was a masterclass in restraint and depth.",
    stars: 5,
  },
  {
    name: "Sophia Andersson",
    text: "From the moment you enter, you feel transported. The atmosphere, the service, and of course the food — all impeccable.",
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Guest Impressions
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card p-8 rounded-xl shadow-sm border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-serif text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
