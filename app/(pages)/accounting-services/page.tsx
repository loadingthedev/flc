import Business from "./component/BusinessActivities";
import Header from "./component/Header";
import Hero from "./component/Hero";

export default function page() {
  return (
    <div>
      <Hero />
      <Header />
      <Business />
    </div>
  );
}
