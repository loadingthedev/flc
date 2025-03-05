import ContactUs from "../shared/ContactUs";
import Business from "./components/BusinessActivities";
import Header from "./components/Header";

export default function page() {
  return (
    <div>
      <Header />
      <Business />
      <ContactUs />
    </div>
  );
}
