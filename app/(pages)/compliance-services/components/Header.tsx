import { FiDollarSign, FiFolder } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="mt-12 text-lg textalign-justify md:px-8 mb-8">
          We have a dedicated team of experts who will guide you through the
          UAE’s regulatory requirements for businesses, including goAML
          compliance and Ultimate Beneficial Owner (UBO) registration.
        </p>

        <h2 className="text-xl  md:text-4xl font-bold text-primary md:px-8 mt-16 mb-12 text-center md:text-center">
          Our Mandatory Compliance Services
        </h2>

        <div className="px-4 md:px-6 flex flex-col md:flex-row p-4 mb-4 ml-4 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <FiFolder className="w-20 h-20 rounded-full md:w-40 md:h-40 p-4 text-white text-center border-2 border-solid border-primary bg-primary mx-auto" />

            <h3 className="text-2xl mt-4 md:text-3xl font-bold text-primary">
              goAML Compliance
            </h3>

            <p className="mt-4 text-justify">
              goAML is now a key requirement for businesses in the UAE to
              prevent money laundering and terrorism financing.
            </p>
            <p className="mt-2  text-justify">
              Our team will help you register with the goAML platform, ensure
              timely suspicious activity reporting, and maintain full compliance
              with the UAE’s financial crime regulations.
            </p>
          </div>

          <div className="flex-1 text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <FiDollarSign className="w-20 h-20 md:w-40 md:h-40 p-4 rounded-full text-white border-2 border-solid border-primary bg-primary mx-auto" />

            <h3 className="text-2xl mt-4 md:text-3xl font-bold text-primary">
              UBO
            </h3>
            <p className="mt-4 text-justify">
              The UAE requires the registration of Ultimate Beneficial Owners to
              ensure transparency across all mainland and free zone companies
              operating in the country. The exceptions to this rule are
              businesses licenced in certain jurisdictions and entities directly
              or indirectly owned by the Government.
            </p>
            <p className="mt-4 text-justify">
              Our team will assist you in completing your UBO declaration to
              ensure you are fully compliant with the UAE’s laws.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
