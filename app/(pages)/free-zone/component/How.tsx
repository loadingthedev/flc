import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const How = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl  mx-auto bg-gray-100 rounded-lg shadow-md p-12 my-20 px-4 sm:px-8 lg:px-8 p-10 md:p-20 lg:p-20">
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
                  <a href="/contact" className="underline text-blue-500">
                    Speak with one of our experts.
                  </a>{" "}
                  - We’ll guide you through the entire process and answer all
                  your questions.
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
                  - With everything in place, your business setup is complete,
                  and you’re ready to operate in Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
