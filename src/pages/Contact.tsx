import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Toronto, Ontario", "Canada"],
      gradient: "bg-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (416) 123-4567", "+1 (647) 987-6543"],
      gradient: "bg-secondary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["hello@yoursoftdigital.ca", "support@yoursoftdigital.ca"],
      gradient: "bg-accent"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
      gradient: "bg-primary"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Transformation",
    "Consulting",
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get In{" "}
              <span className="text-primary">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and 
              create something amazing together. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 ${info.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <CardDescription key={detailIndex} className="font-medium">
                      {detail}
                    </CardDescription>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Let's Start a Project</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>
                      Tell us about your project requirements and goals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (416) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/ /g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range.toLowerCase()}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-2-months">1-2 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="6-months-plus">6+ Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full group">
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose YourSoftDigital?</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Canadian Excellence",
                      description: "Proudly Canadian company with deep understanding of local and international markets."
                    },
                    {
                      title: "Proven Track Record",
                      description: "Over 100 successful projects delivered with 99.9% client satisfaction rate."
                    },
                    {
                      title: "Modern Technology Stack",
                      description: "We use cutting-edge technologies to ensure your solution is future-proof."
                    },
                    {
                      title: "Ongoing Support",
                      description: "24/7 technical support and maintenance to keep your applications running smoothly."
                    }
                  ].map((item, index) => (
                    <Card key={index} className="p-4 hover:shadow-card transition-all duration-300">
                      <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-primary relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <h4 className="text-xl font-bold">Toronto, Ontario</h4>
                      <p className="text-sm opacity-90">Serving clients across Canada and globally</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most web applications take 6-12 weeks, while mobile apps typically require 12-16 weeks."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer comprehensive maintenance packages including updates, security patches, and 24/7 technical support."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely. We frequently collaborate with in-house teams and can integrate seamlessly into your existing development workflow."
              },
              {
                question: "What's your development process?",
                answer: "We follow agile methodology with regular sprints, continuous feedback, and iterative development to ensure quality and timely delivery."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}