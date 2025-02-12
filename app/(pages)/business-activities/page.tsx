import FreeZoneAdvantages from "../free-zone/component/Advantages";
import ContactUs from "../shared/ContactUs";
import Business from "./component/BusinessActivities";
import Header from "./component/Header";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <Header />
      {/* Your UAE Free Zone Company Starts Here Section */}

      <Business />
      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center">
        <FreeZoneAdvantages />
      </div>

      {/* Contact Us Form */}
      <ContactUs />
    </div>
  );
};

export default BusinessActivities;
