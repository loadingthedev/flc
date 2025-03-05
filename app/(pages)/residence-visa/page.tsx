import ContactUs from "../shared/ContactUs";
import Activities from "./components/activities";
import Header from "./components/Header";
import UAEResidence from "./components/UaeResidence";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <Header />
      <Activities />
      <UAEResidence />
      <ContactUs />
    </div>
  );
};

export default BusinessActivities;
