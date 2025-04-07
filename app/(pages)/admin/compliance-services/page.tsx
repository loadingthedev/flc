import Business from "./components/business";
import Header from "./components/Header";
import Hero from "./components/Hero";
export const dynamic = "force-dynamic";

const Compliance = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:pt-20 container mx-auto">
      <Hero />
      <Header />
      <Business />
    </div>
  );
};

export default Compliance;
