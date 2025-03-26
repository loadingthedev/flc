import AdminForm from "./components/business";
import AdminServicesForm from "./components/Header";
import Hero from "./components/Hero";

const AccountServices = () => {
  return (
    <div className="container mx-auto p-10 mt-10">
      <Hero />
      <AdminServicesForm />
      <AdminForm />
    </div>
  );
};

export default AccountServices;
