import BusinessForm from "./business";
import Header from "./Header";
import Hero from "./Hero";

export const AccountServices = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Header />
      <BusinessForm />
    </div>
  );
};
