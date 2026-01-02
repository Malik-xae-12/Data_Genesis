import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Training", id: "training" },
    { label: "Job Support", id: "job-support" },
    { label: "Projects", id: "projects" },
    { label: "Internships", id: "internships" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 focus:outline-none hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo-removebg-preview.png" 
                alt="Data Genesis Logo"
                className="h-auto w-[133px] rounded-lg object-contain"
              />
            
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-gradient-blue-green text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-brand-blue-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue-primary hover:bg-white rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-left px-3 py-2 mt-2 bg-gradient-blue-green text-white text-sm font-semibold rounded-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
