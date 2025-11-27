import { Building2, Phone, Mail, MapPin } from "lucide-react";
import Logo from '../assets/Ocean_logo.png'

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="Logo" className="w-20 h-auto object-contain"/>
              
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Building excellence with over 25 years of experience in delivering world-class infrastructure projects. Your trusted partner for construction solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#expertise" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Our Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#process" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">+94 71 800 1467</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-secondary-foreground/80">oceanbuilders@yahoo.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-secondary-foreground/80">
                  3rd Mile Post, Maraluwawa<br />
                  Kurunegala<br />
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ocean Builders. All rights reserved.</p>
        <b> <p>Developed by <a href="https://www.karalliyaddaone.com" target="_blank" rel="noopener noreferrer">
     Karalliyadda One
  </a>
</p></b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;