const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Join Us Hero"
        className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center animate-fade-in">
            Join Us
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto px-4">
            Empowering innovation through collaboration
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
