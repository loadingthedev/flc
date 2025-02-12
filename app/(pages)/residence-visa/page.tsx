import { FaMapMarkerAlt } from "react-icons/fa";
import ContactUs from "../shared/ContactUs";
import UAEResidence from "./components/UaeResidence";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <div className="bg-muted-foreground w-full h-[600px] flex flex-row justify-center items-center gap-20 p-10">
        <div>
          <h1 className="text-3xl text-primary font-bold text-start  mb-2">
            Your complete guide to {""}
          </h1>
          <p className="text-white text-4xl font-bold mb-2">
            GETTING A UAE RESIDENCE VISA
          </p>
          <p className="text-white text-xl ">
            We will help you get the UAE residence visas you need for <br />{" "}
            your employees and family members through a fast, <br />
            stress-free and proven process.
          </p>

          <button className="flex items-center bg-white text-black gap-2 mt-8 px-12 py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="https://virtuzone.com/wp-content/uploads/2021/09/2.-UAE-Visas.png.webp"
            alt="UAE Free Zone"
            className="w-[550px] h-[520px] mt-20"
          />
        </div>

        {/* Your UAE Free Zone Company Starts Here Section */}
      </div>
      <div className="flex flex-col md:flex-row items-center my-12 ">
        <div className="mt-8 md:mt-0 ">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
              <FaMapMarkerAlt color="red" size={40} />
            </div>
          </div>
          <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
            Your UAE Free Zone Company Starts Here
          </h2>
          <div className="flex flex-col md:flex-row items-center ml-40 mt-8 ">
            <div className="md:w-1/3">
              <img
                src="https://virtuzone.com/wp-content/uploads/2021/10/secondry.jpg.webp"
                alt="UAE Free Zone"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-30 md:pl-10 gap-8">
              <p className="text-lg mb-4">
                The United Arab Emirates is the jewel of the Middle East and a
                hotspot for anyone wanting to invest or start a new business.
                The rich economy and gorgeous capital city, Abu Dabi, make for
                an incredible place for you and your family members to live and
                work.{" "}
              </p>
              <p className="mb-4">
                If you’re one of the many people interested in moving to the
                UAE, you’ll first need to obtain a UAE residence visa. Doing so
                will allow you to invest in this beautiful country and truly
                call it home.
              </p>
              <p className="mb-6">
                To help you navigate the process, we’ve put together a guide on
                how to obtain this type of Visa. Keep reading to learn
                everything to know about this type of Visa.
              </p>
              <strong className="text-3xl mt-4">
                {" "}
                What is a UAE Residence Visa?
              </strong>{" "}
              <p className="mb-2 ">
                <br />
                UAE residence visa is a document that allows foreigners to live
                in the United Arab Emirates for extended periods of time. Unlike
                short stay visa options such as the tourist visa, residence
                visas are typically valid for between 2 and 3 years, but they
                can be extended up to 10 years through renewals.
              </p>
              <p className="mb-4">
                In fact, many UAE expatriates continuously renew their visas so
                that they and their family members can stay in this country.
              </p>
              <p className="mb-4">
                The reason why getting a UAE residence visa is so important is
                that the UAE does not offer permanent residency. Instead,
                foreigners are simply allowed to constantly renew their visas so
                that they can continue living in the country.
              </p>
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <UAEResidence />
      <ContactUs />
    </div>
  );
};

export default BusinessActivities;
