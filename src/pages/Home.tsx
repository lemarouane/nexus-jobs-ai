import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Search, Users, Zap, Star, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced algorithms match you with jobs that perfectly fit your skills and preferences."
    },
    {
      icon: Search,
      title: "Smart Job Search",
      description: "Intelligent search filters and recommendations help you discover opportunities you'd never find elsewhere."
    },
    {
      icon: Users,
      title: "Employer Network",
      description: "Connect with top companies actively seeking talent in your field."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time alerts when new opportunities matching your profile become available."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      content: "AIJobMatch found me the perfect role in just 2 weeks. The AI recommendations were spot-on!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist",
      company: "InnovateLabs",
      content: "The platform's intelligence is incredible. It understood my career goals better than I did.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "HR Director",
      company: "Future Inc",
      content: "As an employer, this platform has revolutionized how we find and hire top talent.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Find Your Dream Job with{" "}
                  <span className="bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                    AI Precision
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                  Revolutionary AI technology that understands your career aspirations 
                  and connects you with opportunities that match your unique potential.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                    Get Started Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Browse Jobs
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-primary-foreground"
                      />
                    ))}
                  </div>
                  <span className="text-sm">1000+ success stories</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="AI Job Matching Platform"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose AIJobMatch?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of job searching with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from professionals who found their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Join thousands of professionals who've already discovered their perfect job match
          </p>
          <Link to="/signup">
            <Button size="lg" variant="hero" className="bg-accent hover:bg-accent/90">
              Start Your Journey Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;