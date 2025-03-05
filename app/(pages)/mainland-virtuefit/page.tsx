import ContactUs from "../shared/ContactUs";
import Steps from "./component/Grid";
import Header from "./component/Header";
import List from "./component/list";
import SubHero from "./component/SubHero";

export default function page() {
  return (
    <div>
      <Header />
      <SubHero />
      <Steps />
      <List />
      <ContactUs />
    </div>
  );
}
