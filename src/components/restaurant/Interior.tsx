import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Interior = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="interior" className="py-32 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Space
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Designed for Experience
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Masonry-style grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl group">
            <img
              src={interior1}
              alt="Main dining area"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 overflow-hidden rounded-xl group">
            <img
              src={interior2}
              alt="Bar area"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl group">
            <img
              src={interior4}
              alt="Table setting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-xl group">
            <img
              src={interior3}
              alt="Private dining"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
