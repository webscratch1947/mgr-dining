import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const dishes = [
  { name: "Saffron Lamb Biryani", desc: "Slow-cooked with aged basmati, rose petals, and hand-pounded spices", img: dish1 },
  { name: "Tandoori Lobster", desc: "Clay-oven roasted with Kashmiri chilli, smoked yoghurt, mint chutney", img: dish2 },
  { name: "Gulab Jamun Tasting", desc: "Cardamom-kissed milk dumplings, pistachio dust, saffron reduction", img: dish3 },
  { name: "Kerala Scallops", desc: "Coconut moilee, curry leaves, crispy shallots, tamarind glaze", img: dish4 },
  { name: "Malabar Prawn Curry", desc: "Kokum-infused coconut broth, fresh turmeric, appam crisp", img: dish5 },
  { name: "Duck Raan Confit", desc: "48-hour spiced slow roast, pomegranate raita, charred naan", img: dish6 },
];

const SignatureDishes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dishes" className="py-20 md:py-32 px-4 md:px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            ✦ The Menu ✦
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Signature Creations
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="overflow-hidden rounded-2xl mb-4 md:mb-5">
                <motion.img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
                {dish.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">{dish.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
