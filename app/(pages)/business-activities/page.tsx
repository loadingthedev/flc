import ContactUs from "../shared/ContactUs";
import FreeZoneAdvantages from "./component/Advantages";
import Business from "./component/BusinessActivities";
import Header from "./component/Header";

const BusinessActivities = () => {
  return (
    <div>
      <Header />

      <Business />

      <FreeZoneAdvantages />

      <ContactUs />
    </div>
  );
};

export default BusinessActivities;
