import { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from '../assets/Ocean_logo.png'

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? "bg-white/95 backdrop-blur-sm shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <a 
        href="#home" 
        onClick={(e) => handleNavClick(e, "#home")}
        className={`flex items-center gap-2 transition-colors ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <img src={Logo} alt="Logo" className="w-20 h-auto object-contain"/>
        <span className="text-xl font-bold hidden sm:block">
          Ocean Builders
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`font-medium transition-colors ${
              isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
        ) : (
          <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
        )}
      </Button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className={`md:hidden border-t animate-fade-in ${
        isScrolled ? "bg-white" : "bg-black/80"
      }`}>
        <div className="py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-3 font-medium rounded-md transition-colors ${
                isScrolled 
                  ? "text-black hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>
  );
};

export default Navigation;