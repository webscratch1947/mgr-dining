import { motion } from "framer-motion";
import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-5 md:px-6">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 rounded-full bg-secondary blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mandala-inspired decorative ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.2" className="text-accent" transform={`rotate(${i * 30} 100 100)`} />
          ))}
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-20 py-28 md:py-32">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-5 md:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground"
          >
            ✦ A Culinary Journey ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground"
          >
            MGR
            <br />
            <motion.span
              className="text-accent inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Dining
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Where Indian culinary heritage meets contemporary artistry — a symphony of spices, tradition, and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#about"
              className="inline-block border border-foreground px-7 md:px-8 py-3.5 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Story
            </motion.a>
          </motion.div>
        </div>

        {/* Circular Image */}
        <motion.div
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={heroDish}
                alt="Signature Indian-inspired dish at Velora Dining"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative animated rings */}
            <motion.div
              className="absolute -inset-3 md:-inset-4 rounded-full border border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-6 md:-inset-8 rounded-full border border-accent/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
