import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CulinaryStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Our Journey
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
          The Art of Dining
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Every great dish begins as a memory — the scent of rosemary from a
            Provençal garden, the salt-kissed air of a Sicilian coastline, the quiet
            discipline of a Tokyo kappo counter. Our chef carries these impressions
            like a map, tracing flavours across continents and centuries.
          </p>
          <p>
            At Velora, tradition is not a constraint but a conversation. We honour
            classical technique while inviting spontaneity: a unexpected pairing, a
            texture reimagined, a presentation that surprises without spectacle. The
            result is a cuisine that feels both familiar and revelatory.
          </p>
          <p className="font-serif text-foreground italic text-2xl leading-snug pt-4">
            "We don't serve meals. We compose moments that linger long after
            the last course."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CulinaryStory;
