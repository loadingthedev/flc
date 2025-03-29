import Hero from "./components/Hero";
export const dynamic = "force-dynamic";

function BankAccount() {
  return (
    <div className="bg-gray-100 min-h-screen md:pt-20 container mx-auto">
      <Hero />
    </div>
  );
}

export default BankAccount;
