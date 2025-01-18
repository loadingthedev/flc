import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sarah Johnson",
    role: "Senior Developer",
    quote:
      "Joining this organization was the best decision of my career. The opportunities for growth are endless.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Michael Chen",
    role: "Project Manager",
    quote:
      "The collaborative environment and support system here is unmatched. I've grown both professionally and personally.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          What Our Members Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-accent"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-accent">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteRight className="text-accent/30 text-5xl absolute -top-2 -left-2" />
                <p className="pl-12 text-foreground text-lg italic">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
