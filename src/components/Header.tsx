
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scrolling for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Smoothly scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "py-6"
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-primary">
          Kushagra<span className="text-foreground">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={cn(
                    "relative px-1 py-2 text-sm font-medium transition-colors",
                    activeSection === item.id ? "text-primary" : "hover:text-primary"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Elements */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn(
                "block h-0.5 w-full bg-foreground transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-foreground transition-all duration-300",
                isMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-foreground transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 md:hidden",
        isMenuOpen ? "max-h-[calc(100vh-60px)] overflow-y-auto" : "max-h-0 overflow-hidden"
      )}>
        <nav className="container py-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
