import aboutImg from "@/assets/about-company.jpg";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <img 
              src={aboutImg} 
              alt="About our company"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Ocean Builders
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With over <b>25 years of experience</b>, Ocean Builders has become a trusted partner in construction projects of all types. While handling diverse projects, we specialize in government sector developments, particularly in the healthcare industry.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our team of skilled professionals ensures the highest standards of <b>quality, safety, and environmental responsibility</b>. We are dedicated to delivering projects on time, within budget, and exceeding client expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              <b>From residential buildings to large-scale healthcare and infrastructure projects</b>, we bring expertise, innovation, and commitment to every endeavor. Our proven track record reflects our dedication to building a better future, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;