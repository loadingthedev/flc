import AdminPanel from "./components/business";
import AdminServicesForm from "./components/Header";
import Hero from "./components/Hero";
export const dynamic = "force-dynamic";

export default function AccountingServices() {
  return (
    <div className="bg-gray-100 min-h-screen md:pt-20 container mx-auto">
      <Hero />
      <AdminServicesForm />
      <AdminPanel />
    </div>
  );
}
