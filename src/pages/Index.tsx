import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredibilityBanner from "@/components/CredibilityBanner";
import Expertise from "@/components/Expertise";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import AboutCompany from "@/components/AboutCompany";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <CredibilityBanner />
        <Expertise />
        <FeaturedProjects />
        <Process />
        <AboutCompany />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;