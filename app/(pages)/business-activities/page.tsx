import { FaMapMarkerAlt } from "react-icons/fa";
import FreeZoneAdvantages from "../free-zone/component/Advantages";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <div className="bg-muted-foreground py-28 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            FREE ZONE BUSINESS ACTIVITIES{" "}
          </h1>
          <p className="text-3xl font-bold text-white mt-4 mb-8">
            CHOOSING A UAE BUSINESS ACTIVITY
          </p>

          <p className="text-white text-xl mb-8">
            Our Company Formation Specialists will guide you into selecting the
            most suitable <br /> business activity for your UAE free zone
            company.
          </p>

          <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
        <div className="md:w-1/1 mt-50 md:mb-0 md:pl-40">
          <img
            src="https://virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png.webp"
            alt="UAE Free Zone"
            className="w-[650px] h-[520px] mt-20 md:mt-[50] mr-20"
          />
        </div>
      </div>

      {/* Your UAE Free Zone Company Starts Here Section */}
      <div className="flex flex-col md:flex-row items-center my-12 ">
        <div className="mt-8 md:mt-0 ">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
              <FaMapMarkerAlt color="red" size={40} />
            </div>
          </div>
          <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
            Choose a Business Activity
          </h2>
          <div className="flex flex-col md:flex-row items-center ml-40 mt-8 ">
            <div className="md:w-1/3">
              <img
                src="https://virtuzone.com/wp-content/uploads/2021/10/Secondry.png.webp"
                alt="UAE Free Zone"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-30 md:pl-10">
              <p className="text-lg">
                One of the very first decisions to take on your journey towards
                incorporating a UAE free zone company, and any company in the
                UAE for that matter, is to select the most suitable business
                activity. This process is very straightforward, and you can even
                select multiple business activities. In your initial free
                consultation with us we will help you identify the most suitable
                activity or activities for your business to ensure a seamless
                application process for your UAE trade licence.
                <br /> <br />
                The categories below outline some of the most popular business
                activities you can choose from when setting up your UAE free
                zone company with Virtuzone.
              </p>
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center">
        <FreeZoneAdvantages />
      </div>

      {/* Contact Us Form */}
      <div className="my-10 py-20 max-w-4xl mx-auto">
        <div className="bg-gray-100 p-6 shadow-md rounded">
          <h2 className="text-4xl font-bold mb-4 text-start text-primary mb-8">
            Contact Us
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="help"
                  className="block text-sm font-medium text-gray-700"
                >
                  How Can We Help You
                </label>
                <select
                  id="help"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                >
                  <option value="">Select an option</option>
                  <option value="company-setup">Business Setup</option>

                  <option value="legal-advice">Corporate Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button className="flex items-center gap-2 px-12 py-4 my-16 border-2 border-white rounded-none transition-all text-white bg-primary hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessActivities;
