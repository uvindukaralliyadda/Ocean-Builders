import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Best Contractors<br />In Kurunegala
        </h1>
        <p className="text-xl md:text-1xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          20+ Years of Excellence In Construction Field.
        </p>
        <Button
            size="lg"
            className="bg-[#100C08] hover:bg-[#100C08]/90 text-white font-semibold px-8 py-6 text-lg animate-fade-in transition-all hover:scale-105"
            style={{ animationDelay: "0.4s" }}
            onClick={() => {
              const element = document.querySelector("#credibility");
              if (element) {
                const offset = 80; 
                const top = element.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                  top,
                  behavior: "smooth"
                });
              }
            }}
          >
            Learn More
          </Button>
      </div>
    </section>
  );
};

export default Hero;