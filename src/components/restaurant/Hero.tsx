import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-32">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="overflow-hidden">
            <p
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              A Culinary Journey
            </p>
          </div>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Restaurant
            <br />
            Website Demo
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            Where culinary craftsmanship meets immersive dining experiences.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
            <a
              href="#about"
              className="inline-block border border-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Explore Our Story
            </a>
          </div>
        </div>

        {/* Circular Image */}
        <div
          className="flex-1 flex justify-center animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={heroDish}
                alt="Signature dish at Velora Dining"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-accent/20" />
            <div className="absolute -inset-8 rounded-full border border-accent/10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
