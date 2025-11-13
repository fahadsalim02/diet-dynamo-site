import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Heart, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: "15-Day Quick Start",
      description: "Perfect for kickstarting your wellness journey with focused guidance and measurable results.",
    },
    {
      icon: Heart,
      title: "30-Day Transformation",
      description: "Comprehensive program to build sustainable habits and achieve significant health improvements.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Programs",
      description: "Extended support for lasting lifestyle changes with continuous monitoring and adjustments.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible, duration-based plans designed to meet you where you are on your wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 shadow-soft hover:shadow-elegant"
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Comprehensive Wellness Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground text-lg">
                Our programs cover all aspects of nutrition and wellness including personalized diet plans, 
                nutritional counseling, lifestyle coaching, fitness guidance, and ongoing progress monitoring. 
                Each plan is tailored to your unique goals and health requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
