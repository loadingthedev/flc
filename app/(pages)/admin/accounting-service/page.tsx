// import AdminForm from "./components/business";
import AdminServicesForm from "./components/Header";
import Hero from "./components/Hero";

export default function AccountingServices() {
  return (
    <div className="bg-gray-100 min-h-screen md:pt-20">
      <Hero />
      <AdminServicesForm />
      {/* <AdminForm /> */}
    </div>
  );
}
