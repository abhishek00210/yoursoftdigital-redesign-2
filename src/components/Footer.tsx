import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get a Quote Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get a Quote</h3>
            <p className="text-muted-foreground">Lets Start Talking</p>
            <Button variant="gradient" size="sm" className="w-full">
              Get Started
            </Button>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Official Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Official Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p>Surrey</p>
                  <p>British Columbia, Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <p>+1-236-234-1294</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Open Hours:</p>
                  <p>Mon – Sat: 9:00 am – 5:00 pm,</p>
                  <p>Sunday: CLOSED</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Stay Ahead With Our Upcoming Releases! Subscribe Now.
            </p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Email address"
                  className="flex-1"
                />
                <Button variant="gradient" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 YourSoft Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};