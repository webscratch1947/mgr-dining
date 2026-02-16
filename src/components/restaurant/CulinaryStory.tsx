import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CulinaryStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-5 md:px-6 bg-secondary/30" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          ✦ Our Journey ✦
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
          The Art of Dining
        </h2>
        <motion.div
          className="w-16 h-px bg-accent mx-auto mb-8 md:mb-10"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <div className="space-y-5 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every great dish begins as a memory — the fragrance of cardamom in a grandmother's kitchen, the smoky warmth of a tandoor in Peshawar, the delicate art of a Bengali pantry. Our chef carries these impressions like a compass, tracing flavours across India's vast culinary landscape.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            At Velora, tradition is not a constraint but a living conversation. We honour the masala-grinding rituals of Rajasthan while inviting the spontaneity of modern plating — an unexpected pairing, a texture reimagined, a presentation that surprises without spectacle.
          </motion.p>
          <motion.p
            className="font-serif text-foreground italic text-lg md:text-2xl leading-snug pt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            "We don't serve meals. We compose moments that linger long after the last course."
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default CulinaryStory;
