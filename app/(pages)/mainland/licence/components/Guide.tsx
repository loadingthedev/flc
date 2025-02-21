import { FaGlobe } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center ml-12 mt-8">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 ml-20 mt-8">
          Types of mainland trade licence
        </h2>
        <div className=" flex flex-col md:flex-row items-center ml-40 mt-20 ">
          <div className=" max-w-7xl mt-8 md:mt-30 md:pl-20">
            <h2 className="text-3xl mt-4 mb-4 font-bold ">
              Professional trade licence
            </h2>

            <p className="text-md mb-8">
              The UAE government requires businesses and entrepreneurs to obtain
              a professional business trade licence from the Department of
              Economic Development (DED) before they can be authorised to
              provide their professional services to clients from the Dubai
              mainland.
            </p>
            <p className="text-md mb-8">
              The purpose of professional licensing is to establish that the
              person or business is qualified to provide services in a certain
              profession. Issuance of these licences generally requires the
              applicant to show certain skills or training.
            </p>

            <p className="text-md mb-8">
              All professionals, specialists, craftsmen and artisans need to
              acquire a professional trade licence to set up a mainland company
              in Dubai.
            </p>

            <p className="text-md mb-8">
              When dealing with mainland company formation in Dubai, there are
              several company structures that can be formed with a professional
              licence: A Limited Liability Company where a local sponsor holds
              51% of the company; and a Civil Company and a Sole Establishment
              where the foreign investor(s) have 100% ownership of their
              company.
            </p>
            <p className="text-md mb-8">
              However, in setting up a Civil Company or a Sole Establishment, a
              UAE national must be appointed as a local service agent (LSA) to
              complete the legal formalities.
            </p>

            <h2 className="text-3xl mt-4 mb-4 font-bold ">
              Commercial trade licence
            </h2>

            <p className="text-md mb-8">
              Mainland companies dealing with buying and selling of goods and
              commodities, or any kind of trade activities, require a commercial
              trade licence to operate in the UAE. This business licence can be
              used to form a limited liability company (LLC) or set up a sole
              establishment, and it can be used for both specialised trading and
              general trading activities in the UAE.
            </p>
            <p className="text-md mb-8">
              There are different types of commercial trade licences in the UAE.
              If you are navigating the process of company formation, you must
              apply for the correct type of commercial trade licence that will
              permit you to carry out trading activities specific to your
              business.
            </p>

            <p className="text-md mb-8">
              Broadcast and communications companies, rental transportation
              services, retail companies, construction companies, healthcare
              businesses, real estate businesses, and other general trading
              entities also need to apply for a commercial trade licence in
              Dubai.
            </p>

            <h2 className="text-3xl mt-4 mb-4 font-bold ">
              Industrial trade licence
            </h2>

            <p className="text-md mb-8">
              Businesses that want to conduct industrial or manufacturing-based
              activities in the UAE must acquire an industrial trade licence,
              which will allow them to engage in activities related to
              converting natural materials or incorporating natural resources
              into their end products.
            </p>
            <p className="text-md mb-8">
              This business licence is issued by the DED but additional
              approvals might be required from the Ministry of Finance, Ministry
              of Economy, the Ministry of Energy and Infrastructure and other
              authorities, depending on the industrial activity involved.
            </p>

            <h2 className="text-3xl mt-4 mb-4 font-bold ">
              Requirements to obtain a UAE trade licence
            </h2>

            <p className="text-md mb-8">
              When applying for a mainland licence in Dubai you must do so
              through the Dubai Economic Department.
            </p>
            <p className="text-md mb-8">
              Before opening any business with the Dubai Economic Department,
              one must meet the following legal requirements to obtain a trade
              licence in the UAE:
            </p>
            <ul>
              <li className="mb-2">
                • Determine the business category – whether it is professional,
                commercial, or industrial;
              </li>
              <li className="mb-2">
                • Determine the type of business activity;
              </li>
              <li className="mb-2">
                • Determine the legal structure of the business entity; and
              </li>
              <li className="mb-2">
                • Determine the trade name of your business.
              </li>
              <li className="mb-2">
                • The local department of economic development registers your
                trade name
              </li>
              <li className="mb-2">
                • The Ministry of Economy registers your trademark (if
                applicable).
              </li>
            </ul>
            <p className="text-md mb-8">
              Depending on the legal form of a business, it is also a
              requirement to complete and sign a Memorandum of association (MoA)
              or a local service agent agreement (LSA). The memorandum of
              association is required for the following business legal forms:
            </p>
            <ul>
              <li className="mb-2">• Limited partnership</li>
              <li className="mb-2">• Public joint stock company (PJSC)</li>
              <li className="mb-2">• Limited liability company (LLC)</li>
              <li className="mb-2">• Private joint stock company (PrJSC)</li>
            </ul>

            <h2 className="text-3xl mt-4 mb-4 font-bold ">
              Get expert help in starting your new business in Dubai
            </h2>

            <p className="text-md mb-8">
              It can be difficult to identify all of the licences and permits
              that apply to your business on the Dubai mainland. Hence, it’s
              always best to consult a business setup specialist to make sure
              you comply with the licencing and regulatory requirements
              applicable to your business acitivity.
            </p>

            <p className="text-md mb-8">
              As the leading corporate service provider in the UAE, Virtuzone
              can help you start your company with the right Dubai mainland
              licence, ensuring you are positioned for future growth and
              success. Virtuzone also provides value-added business support
              services that can help your company start strong and thrive in a
              competitive market.
            </p>
            <p className="text-md mb-8">
              Do you need help in choosing a trade licence for your business?
              Contact us today so our team can assist you.
            </p>

            <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
