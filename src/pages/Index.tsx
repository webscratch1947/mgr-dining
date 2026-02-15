import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import About from "@/components/restaurant/About";
import SignatureDishes from "@/components/restaurant/SignatureDishes";
import Interior from "@/components/restaurant/Interior";
import CulinaryStory from "@/components/restaurant/CulinaryStory";
import Testimonials from "@/components/restaurant/Testimonials";
import Location from "@/components/restaurant/Location";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <Interior />
      <CulinaryStory />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
