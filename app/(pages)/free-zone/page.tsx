import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import FreeZoneAdvantages from "../free-zone/component/Advantages";
import Business from "./component/Business-activities";
import Header from "./component/Header";

const BusinessActivities = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <Header />
      {/* Your UAE Free Zone Company Starts Here Section */}
      <Business />
      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center px-4 sm:px-6 lg:px-8">
        <FreeZoneAdvantages />
      </div>

      {/* Business Activities Section */}
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-12 my-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">
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

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto bg-black text-white py-20 mb-20 rounded-lg shadow-md px-4 sm:px-6 lg:px-8">
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

      {/* Chat Section */}
      <div className="max-w-6xl mx-auto bg-primary text-white py-20 mb-20 rounded-lg shadow-md px-4 sm:px-6 lg:px-8">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-start mb-12 ml-5">
            Ready to get started? Let's chat!
          </h2>
          <div className="grid gap-8 ml-5">
            <p>
              We’re here to make your business journey smooth and successful.
              Reach out to our team today for a free, <br /> no-obligation
              consultation to learn how we can help with your business setup.
            </p>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 mt-20 ml-5 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
            Talk to an expert
          </button>
        </div>
      </div>

      {/* Grid Box Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 my-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-300 text-black p-6 shadow-md rounded-lg">
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
        <div className="bg-gray-300 text-black p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl">250+ </span>
            <br /> team members
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl"> 40+ </span>
            <br /> languages spoken
          </h3>
        </div>
        <div className="bg-gray-300 text-black p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold">
            <span className="text-primary text-4xl"> 20+ </span> <br /> industry
            awards
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessActivities;
