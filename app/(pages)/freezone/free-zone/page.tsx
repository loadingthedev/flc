import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import FreeZoneAdvantages from "../free-zone/component/Advantages";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <div className="bg-muted-foreground py-18 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-white mt-20">
            Explore top UAE free zones and their unique benefits for your
            business{" "}
          </h1>
          <p className="text-white text-xl mb-8 mt-12">
            With over 40 free zone jurisdictions in the UAE, selecting the right{" "}
            <br />
            one for your business can seem overwhelming. That’s where <br />{" "}
            Virtuzone makes a difference.
          </p>

          <p className="text-white text-xl mb-8">
            Our Company Formation Specialists are here to guide you, helping{" "}
            <br /> you choose the most suitable free zone based on your business
            type, <br />
            activities, requirements, and budget.
          </p>

          <button className="flex items-center bg-white  text-black gap-2 mt-12 px-12 py-4 border-2 border-white rounded-none transition-all hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
        <div className="md:w-1/1 mt-50 md:mb-0 md:pl-25">
          <img
            src="https://go.virtuzone.com/wp-content/uploads/2024/12/over-1.png.webp"
            alt="UAE Free Zone"
            className="w-[1200px] h-[520px] mt-20 md:mt-[50] mr-20 "
          />
        </div>
      </div>
      {/* Your UAE Free Zone Company Starts Here Section */}
      <div className="max-w-7xl mx-auto my-20">
        <div className="flex flex-col md:flex-row items-center my-10 gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose UAE Free Zones for Your Business?
            </h2>
            <ul className="list-disc ml-5 text-lg space-y-6 my-8">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                100% Company Ownership Enjoy 100% operational and financial
                control of your company.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                100% Profit Repatriation Send your capital and profits to your
                home country.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                0% Personal Income Tax Receive your salary in full and say
                goodbye to tax deductions.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                UAE Residence Visa Secure visas for yourself, your family and
                dependents.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Corporate Tax and VAT Exemption Get potential exemption from
                corporate tax and VAT (subject to meeting certain criteria).
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Minimum Paperwork and Fast Setup Get your business up and
                running quicker with a free zone setup in Dubai or anywhere in
                the UAE.
              </li>
            </ul>
            <strong className="text-3xl">Why Virtuzone?</strong>
            <p className="text-md my-8 ">
              Setting up a business in a UAE free zone offers unique benefits,
              from tax advantages to streamlined operations. With over 40
              jurisdictions, consider factors like location, costs, office
              space, and legal requirements.
            </p>
            <p>
              Virtuzone simplifies this. Our team offers expert advice, ensures
              compliance, saves money, and makes your company incorporation
              journey smooth and stress-free.
            </p>
          </div>{" "}
          <div className=" max-w-3xl md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <div>
              <form className="bg-secondary p-6 shadow-md rounded max-w-3xl">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Book Your Free Consultation
                </h2>
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      id="countryCode"
                      className="mt-1 block w-1/4 border-gray-300 rounded-md shadow-sm"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      {/* Add more country codes and flags as needed */}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
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
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="">Select a timeline</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
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
                <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center">
        <FreeZoneAdvantages />
      </div>

      {/* // Business Activities Section */}

      <div className="max-w-6xl  mx-auto  bg-gray-100  rounded-lg shadow-md p-12 my-20">
        <h2 className="text-3xl font-bold  text-primary mb-8">
          Business Activities
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Trading Activities</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Professional Services</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Manufacturing</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Retail Services</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Financial Services</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Technology and Innovation</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Media and Creative Services</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">Manufacturing</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-lg">E-commerce</span>
          </div>
        </div>
      </div>

      {/* // How */}
      <div className="max-w-6xl mx-auto bg-black text-white py-20 mb-20 rounded-lg shadow-md">
        <div className="px-8">
          <h2 className="text-3xl font-bold text-start mb-12 ml-5">
            How It Works:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-5">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold flex items-center textalign-start ">
                Step 1 <FaArrowRight className="ml-auto text-blue-500" />
              </h3>
              <p className="text-start">
                <a href="#step1" className="underline text-blue-500">
                  Speak with one of our experts.
                </a>{" "}
                - We’ll guide you through the entire process and answer all your
                questions.
              </p>
            </div>

            <div className="flex flex-col ">
              <h3 className="text-xl font-bold flex items-center textalign-start ">
                Step 2 <FaArrowRight className="ml-auto text-blue-500" />
              </h3>
              <p className="text-start">
                <a href="#step1" className="underline text-blue-500">
                  Submit Your Documents
                </a>{" "}
                - Our team will handle the paperwork and get things moving
                quickly.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold textalign-start "> Step 3</h3>
              <p className="text-start">
                <a href="#step1" className="underline text-blue-500">
                  Receive your trade license, visa, and Emirates ID
                </a>{" "}
                - With everything in place, your business setup is complete, and
                you’re ready to operate in Dubai.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* // Chat */}
      <div className="max-w-6xl mx-auto bg-primary text-white py-20 mb-20 rounded-lg shadow-md">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-start mb-12 ml-5">
            Ready to get started? Let's chat!
          </h2>
          <div className="grid  gap-8 ml-5">
            <p>
              We’re here to make your business journey smooth and successful.
              Reach out to our team today for a free, <br /> no-obligation
              consultation to learn how we can help with your business setup.
            </p>
          </div>
          <button className="flex items-center  gap-2 px-8 py-4  mt-20  ml-5 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
            Talk to an expert
          </button>
        </div>
      </div>
      {/* // grid box */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 my-20">
        <div className="bg-gray-300 text-black p-6  shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl"> 15+</span> <br /> Years in
            the Business
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl"> 80,000+ </span>
            <br /> Happy Customer
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6 r shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl">250+ </span>
            <br /> team members
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6  shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl"> 40+ </span>
            <br /> languages spoken
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6  shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            {" "}
            <span className="text-primary text-4xl "> 20+ </span> <br />{" "}
            industry awards{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessActivities;
