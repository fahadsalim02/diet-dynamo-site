const About = () => {
  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Diet Dynamo
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Diet Dynamo is a premium online nutrition and wellness platform dedicated to helping health-conscious individuals achieve their goals through personalized coaching and expert guidance.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe in a holistic approach to wellness, combining science-backed nutrition strategies with continuous support to create sustainable lifestyle changes that last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
