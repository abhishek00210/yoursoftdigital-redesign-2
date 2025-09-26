import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X , Mail, MapPin} from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <div className={`fixed top-0 w-full bg-primary text-primary-foreground text-sm py-2 z-50 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Grow your business online</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm text-right">
            {/* Mail Icon */}
            <span className="relative flex items-center">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-primary-foreground/20 rounded-full">
                <Mail className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
              <span className="pl-6">info@yoursoftdigital.ca</span>
            </span>
           
            {/* Location Icon */}
            <span className="relative flex items-center">
              <span className="absolute left-0 flex items-center justify-center w-5 h-5 bg-primary-foreground/20 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
              <span className="pl-6">Surrey, BC, Canada</span>
            </span>
            <span className="mx-1">|</span>
            YourSoft Digital.
          </span>
        </div>
      </div>

      
      <nav className={`fixed w-full bg-background/95 backdrop-blur-sm border-b z-40 transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-8'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="YourSoft Digital Logo" 
                className="h-12 w-auto"
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="gradient" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};