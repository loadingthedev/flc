import ContactUs from "../../shared/ContactUs";
import Business from "./components/BusinessActivities";
import Header from "./components/Header";
import Guide from "./components/table";

export default function page() {
  return (
    <div>
      <Header />
      <Business />
      <Guide />
      <ContactUs />
    </div>
  );
}
