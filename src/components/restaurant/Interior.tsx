import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";

const Interior = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="interior" className="py-20 md:py-32 px-4 md:px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            ✦ The Space ✦
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Designed for Experience
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            { src: interior1, alt: "Main dining area", className: "col-span-2 row-span-2" },
            { src: interior2, alt: "Bar area", className: "col-span-2 lg:col-span-1" },
            { src: interior4, alt: "Table setting", className: "" },
            { src: interior3, alt: "Private dining", className: "col-span-2" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              className={`${img.className} overflow-hidden rounded-xl group`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interior;
