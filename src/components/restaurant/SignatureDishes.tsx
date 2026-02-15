import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const dishes = [
  { name: "Seared Atlantic Salmon", desc: "Citrus beurre blanc, microgreens, edible flowers", img: dish1 },
  { name: "Wagyu Tenderloin", desc: "Truffle jus, bone marrow butter, seasonal roots", img: dish2 },
  { name: "Chocolate Sphere", desc: "Gold leaf, raspberry coulis, vanilla bean crème", img: dish3 },
  { name: "Diver Scallops", desc: "Sweet pea purée, crispy prosciutto, lemon oil", img: dish4 },
  { name: "Lobster Tail", desc: "Saffron butter, charred citrus, sea salt crystals", img: dish5 },
  { name: "Duck Breast Rôti", desc: "Cherry reduction, heirloom carrots, thyme jus", img: dish6 },
];

const SignatureDishes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="dishes" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Signature Creations
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                {dish.name}
              </h3>
              <p className="text-sm text-muted-foreground">{dish.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
