import { FaHistory, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: (
      <FaUsers className="text-primary hover:scale-110 transition-transform" />
    ),
    title: "Strong Community",
    description: "Join a thriving community of like-minded individuals",
  },
  {
    icon: (
      <FaHistory className="text-primary hover:scale-110 transition-transform" />
    ),
    title: "Rich Heritage",
    description: "15+ years of excellence and innovation",
  },
  {
    icon: (
      <FaMapMarkedAlt className="text-primary hover:scale-110 transition-transform" />
    ),
    title: "Global Presence",
    description: "Operating in over 50 countries worldwide",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl text-accent mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
