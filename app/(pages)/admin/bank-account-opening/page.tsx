import Business from "./components/business";
import AdminHeader from "./components/Header";
import Hero from "./components/Hero";
export const dynamic = "force-dynamic";

function BankAccount() {
  return (
    <div className="bg-gray-100 min-h-screen md:pt-20 container mx-auto">
      <Hero />
      <AdminHeader />
      <Business />
    </div>
  );
}

export default BankAccount;
