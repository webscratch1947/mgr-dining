import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutChef from "@/assets/about-chef.jpg";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <motion.img
                src={aboutChef}
                alt="Chef preparing Indian-inspired cuisine"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 border border-accent/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
              ✦ Est. 2019
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Our Philosophy
            </h2>
            <div className="w-16 h-px bg-accent" />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              At Velora, we honour India's rich culinary tapestry — from the fragrant biryanis of Lucknow to the coastal treasures of Kerala. Every dish is a dialogue between time-honoured traditions and modern artistry, rooted in craftsmanship and guided by the wisdom of our land's ancient kitchens.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Our kitchen draws from a deep well of regional Indian heritage while embracing contemporary presentation. Each plate tells a story of provenance and care — of hand-ground masalas, seasonal harvests, and the gentle warmth of a dining room designed to slow time and sharpen the senses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
