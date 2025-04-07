import Business from "./components/business";
import Header from "./components/header";
import Hero from "./components/hero";
export const dynamic = "force-dynamic";

function page() {
  return (
    <div>
      <Hero />
      <Header />
      <Business />
    </div>
  );
}

export default page;
