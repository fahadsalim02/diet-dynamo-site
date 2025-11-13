import { CheckCircle2, Clock, HeadphonesIcon, UserCheck } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "One-to-One Online Consultation",
      description: "Personalized attention with dedicated coaching sessions tailored to your unique needs and goals.",
    },
    {
      icon: HeadphonesIcon,
      title: "24×7 Support",
      description: "Round-the-clock assistance whenever you need guidance, motivation, or have questions.",
    },
    {
      icon: Clock,
      title: "Full-Time Monitoring",
      description: "Continuous progress tracking and plan adjustments to ensure optimal results throughout your journey.",
    },
  ];

  return (
    <section id="why-us" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Diet Dynamo
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium care with features designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary text-lg font-semibold">
            <CheckCircle2 className="w-6 h-6" />
            <span>Professional. Personalized. Premium.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
