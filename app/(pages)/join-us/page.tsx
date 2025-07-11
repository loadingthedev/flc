"use client";
import ContactUsSection from "./component/ContactUsSection";
import FAQSection from "./component/FAQSection";
import FeaturesSection from "./component/FeaturesSection";
import HeroSection from "./component/HeroSection";
import TestimonialsSection from "./component/TestimonialsSection";

const JoinUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <section className="container mx-auto px-4 py-20">
        <p className="text-xl text-foreground text-center max-w-3xl mx-auto leading-relaxed font-light">
          We are a forward-thinking organization dedicated to fostering
          innovation, collaboration, and growth. Our mission is to create
          meaningful impact through technology and human connection.
        </p>
      </section>
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <TimelineSection /> */}
      <ContactUsSection />
    </div>
  );
};

export default JoinUsPage;
