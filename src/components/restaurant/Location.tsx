import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-20 md:py-32 px-5 md:px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            ✦ Find Us ✦
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Visit Us
          </h2>
          <motion.div
            className="w-16 h-px bg-accent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-base md:text-lg text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-xs md:text-base">
                  42 Connaught Place
                  <br />
                  New Delhi, 110001, India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-base md:text-lg text-foreground mb-1">Hours</h3>
                <div className="text-muted-foreground space-y-1 text-xs md:text-base">
                  <p>Tuesday – Sunday: 12:00 – 15:00 & 19:00 – 23:00</p>
                  <p>Monday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="aspect-[4/3] md:aspect-auto bg-card rounded-xl border border-border flex items-center justify-center min-h-[180px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-6 md:p-8">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-accent/40 mx-auto mb-3 md:mb-4" />
              <p className="font-serif text-foreground text-base md:text-lg">New Delhi, India</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Connaught Place
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
