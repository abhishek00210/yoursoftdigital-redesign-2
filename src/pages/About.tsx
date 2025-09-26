import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Globe className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      gradient: "bg-primary"
    },
    {
      title: "Quality",
      description: "Every line of code is crafted with precision and attention to detail.",
      gradient: "bg-secondary"
    },
    {
      title: "Partnership",
      description: "We work closely with clients as true technology partners.",
      gradient: "bg-accent"
    },
    {
      title: "Canadian Values",
      description: "Proudly Canadian, we bring integrity and excellence to every project.",
      gradient: "bg-primary"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      skills: ["React", "Node.js", "TypeScript"]
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      skills: ["Figma", "Design Systems", "User Research"]
    },
    {
      name: "Mike Rodriguez",
      role: "Full Stack Developer",
      skills: ["Python", "AWS", "Database Design"]
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      skills: ["Agile", "Client Relations", "Strategy"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About{" "}
              <span className="text-primary">
                YourSoftDigital
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and strategists based in Canada, 
              dedicated to creating exceptional digital experiences that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-medium">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 ${value.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform`}></div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals who are passionate about creating amazing digital experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to work with{" "}
              <span className="text-primary">
                our team?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}