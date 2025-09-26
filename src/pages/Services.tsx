import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Zap, 
  Database, 
  Shield, 
  Cloud, 
  Palette,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
      gradient: "bg-primary"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter.",
      features: ["Native Performance", "Cross-Platform", "App Store Optimization", "Push Notifications"],
      gradient: "bg-secondary"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with databases, APIs, and cloud infrastructure.",
      features: ["RESTful APIs", "Database Design", "Server Optimization", "Third-party Integrations"],
      gradient: "bg-accent"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Deploy and scale your applications with modern cloud platforms like AWS, Azure, and GCP.",
      features: ["Cloud Migration", "Auto Scaling", "Load Balancing", "Disaster Recovery"],
      gradient: "bg-primary"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "bg-secondary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Testing",
      description: "Comprehensive security audits and automated testing to ensure your applications are secure.",
      features: ["Security Audits", "Automated Testing", "Performance Testing", "Code Review"],
      gradient: "bg-accent"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience.",
      features: ["Speed Optimization", "Code Refactoring", "Database Tuning", "CDN Setup"],
      gradient: "bg-primary"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes.",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy", "Change Management"],
      gradient: "bg-secondary"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your solution using agile methodology with continuous testing and feedback."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your application and provide ongoing maintenance and support."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our{" "}
              <span className="text-primary">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world. 
              From web development to cloud solutions, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 h-6 w-6 text-muted-foreground transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB", 
              "PostgreSQL", "Docker", "Kubernetes", "React Native", "Flutter", 
              "Next.js", "GraphQL", "Redis", "Figma", "Tailwind CSS"
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to start{" "}
              <span className="text-primary">
                your project?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your requirements and create a custom solution that fits your needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}