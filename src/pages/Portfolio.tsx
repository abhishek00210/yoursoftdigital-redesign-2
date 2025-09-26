import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management and advanced analytics.",
      image: "bg-primary",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Payment Integration", "Admin Dashboard", "Mobile Responsive", "Real-time Updates"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "bg-secondary", 
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "TypeScript", "Plaid API"],
      features: ["Biometric Auth", "Push Notifications", "Offline Support", "Security Compliance"]
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management and appointment scheduling.",
      image: "bg-accent",
      category: "Web Application",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Socket.io"],
      features: ["Patient Portal", "Doctor Dashboard", "Appointment System", "HIPAA Compliant"]
    },
    {
      title: "Social Media Analytics Tool",
      description: "Advanced analytics dashboard for social media performance tracking and insights.",
      image: "bg-primary",
      category: "SaaS Platform",
      technologies: ["Vue.js", "Python", "Redis", "Chart.js"],
      features: ["Real-time Analytics", "Custom Reports", "API Integration", "Team Collaboration"]
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours and CRM integration.",
      image: "bg-secondary",
      category: "Web Application", 
      technologies: ["React", "Express.js", "MySQL", "Google Maps API"],
      features: ["Virtual Tours", "CRM Integration", "Search Filters", "Lead Management"]
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform fitness app with workout tracking and social features.",
      image: "bg-accent",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      features: ["Workout Tracking", "Social Features", "Health Integration", "Progress Analytics"]
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "SaaS Platform"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our{" "}
              <span className="text-primary">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform 
              their digital presence with cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Project Image Placeholder */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "150%",
                description: "Average increase in user engagement",
                detail: "Our optimized UX/UI designs led to significantly higher user interaction rates."
              },
              {
                metric: "10x",
                description: "Faster application performance",
                detail: "Through code optimization and modern architecture, we delivered lightning-fast apps."
              },
              {
                metric: "99.9%",
                description: "Uptime across all deployments",
                detail: "Robust cloud infrastructure ensures maximum availability for your users."
              }
            ].map((story, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {story.metric}
                  </CardTitle>
                  <CardDescription className="font-medium text-lg">
                    {story.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {story.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to create your{" "}
              <span className="text-primary">
                success story?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and create something amazing together. 
              Join our list of satisfied clients across Canada and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}