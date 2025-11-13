import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your Health?
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Take the first step towards a healthier, happier you. Connect with us today 
            and begin your personalized wellness journey with Diet Dynamo.
          </p>

          <Button
            size="lg"
            variant="whatsapp"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-6 h-auto mb-12"
          >
            <MessageCircle className="mr-2" size={24} />
            Start Your Journey on WhatsApp
          </Button>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@dietdynamo.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
