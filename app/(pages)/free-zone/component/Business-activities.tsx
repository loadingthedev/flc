import { FaCheckCircle } from "react-icons/fa";

export default function Business() {
  return (
    <div>
      {" "}
      <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center my-10 gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold text-primary mb-4 ml-6">
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
            <strong className="text-3xl">Why FLC ?</strong>
            <p className="text-md my-8 ">
              Setting up a business in a UAE free zone offers unique benefits,
              from tax advantages to streamlined operations. With over 40
              jurisdictions, consider factors like location, costs, office
              space, and legal requirements.
            </p>
            <p>
              FLC simplifies this. Our team offers expert advice, ensures
              compliance, saves money, and makes your company incorporation
              journey smooth and stress-free.
            </p>
          </div>
          <div className="max-w-3xl md:w-1/2 mt-8 md:mt-0 md:pl-10">
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
    </div>
  );
}
