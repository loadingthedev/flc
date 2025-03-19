import FreeZoneAdvantages from "../free-zone/component/Advantages";
import Business from "./component/Business-activities";
import Chat from "./component/chat";
import Header from "./component/Header";
import { How } from "./component/How";
import { Testimonial } from "./component/Testimonial";

const BusinessActivities = () => {
  return (
    <div>
      <Header />

      <Business />

      <div className="my-30 flex justify-center px-4 sm:px-6 lg:px-8">
        <FreeZoneAdvantages />
      </div>

      <How />

      <Chat />

      <Testimonial />
    </div>
  );
};

export default BusinessActivities;
