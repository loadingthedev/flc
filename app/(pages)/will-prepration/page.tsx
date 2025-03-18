import ContactUs from "../shared/ContactUs";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function page() {
  return (
    <div>
      <Hero />
      <Header />
      <ContactUs />
    </div>
  );
}
