import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

          {/* ✅ Logo from /public folder */}
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Diet Dynamo Logo"
            className="mx-auto mb-6 w-24 md:w-32 object-contain drop-shadow-lg"
          />

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Transform Your Health with{" "}
            <span className="text-blue-600 font-semibold">Diet Dynamo</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Premium personalized nutrition coaching designed to help you achieve your wellness goals through expert guidance and continuous support.
          </p>

          {/* WhatsApp Button */}
          <Button
            size="lg"
            variant="whatsapp"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-6 h-auto"
          >
            <MessageCircle className="mr-2" size={24} />
            Connect Now on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
