import ContactUs from "../shared/ContactUs";
import Header from "./component/Header";
import Residence from "./component/Residency-Visas";
import Visas from "./component/visas";

export default function page() {
  return (
    <div>
      <Header />
      <Visas />
      <Residence />
      <ContactUs />
    </div>
  );
}
