import Business from "./components/BusinessActivities";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function page() {
  return (
    <div>
      <Hero />
      <Header />
      <Business />
    </div>
  );
}
