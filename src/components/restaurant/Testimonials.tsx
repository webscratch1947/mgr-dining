import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "An unforgettable evening. The saffron biryani was a revelation — flavours I've never experienced, presented with breathtaking artistry.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    text: "Velora understands that fine dining is about emotion, not excess. The tasting menu was a masterclass in balance and depth of Indian spices.",
    stars: 5,
  },
  {
    name: "Ananya Reddy",
    text: "From the moment you enter, you feel transported to a royal Indian palace. The atmosphere, the service, and the food — all impeccable.",
    stars: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            ✦ What They Say ✦
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Guest Impressions
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.15)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm md:text-base">
                "{t.text}"
              </p>
              <p className="font-serif text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
