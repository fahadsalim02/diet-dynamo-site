const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Diet Dynamo</h3>
          <p className="text-background/80 mb-4">
            Premium Nutrition & Wellness Coaching
          </p>
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Diet Dynamo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
