import Business from "./components/BusinessActivities";
import Header from "./components/Header";
import Hero from "./components/Hero";
export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div>
      <Hero />
      <Header />
      <Business />
    </div>
  );
}
