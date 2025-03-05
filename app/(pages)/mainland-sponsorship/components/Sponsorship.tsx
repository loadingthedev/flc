import { FaGlobe } from "react-icons/fa";

const Sponsorship = () => {
  return (
    <div className="flex bg-gray-100 flex-col md:flex-row items-center py-10  ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center ">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 ">
          LLC Sponsorship
        </h2>
        <div className="flex flex-col md:flex-row items-center ml-40 mt-20 gap-20 ">
          <div className="md:w-1/2 mt-8 md:mt-30 md:pl-20">
            <p className="text-lg mb-8">
              FLC provides a premier corporate nominee to act as your 51% local
              sponsor in Dubai. Our main objective is to give you 100% financial
              and operational control, whilst protecting your shareholder rights
              in your LLC company. The agreements and documents used are drafted
              by first-tier legal counsel, and they have been tried and tested
              for nearly 10 years and adapted over time to remain cutting edge.
              We believe our corporate nominee is the best available product in
              the market when it comes to finding a local sponsor. Our
              sponsorship services will provide you with all the documentation
              to protect your business and secure the financial rights of your
              company.
            </p>

            <p className="text-lg mb-8">
              Operating since 2009, our team of 100 employees provides the
              combined resources necessary to deliver ongoing support in company
              formation, licence renewal, visa services and much more. We are
              truly a one-stop shop for company formation and our clients
              appreciate having a dedicated service agent to assist with all
              their corporate services needs.
            </p>

            <p className="text-lg mb-8">
              In addition to LLC companies we are able to assist you in
              establishing any of the below entities in the UAE mainland:
            </p>
            <ul>
              <li>• Branch</li>
              <li>• Representative Office</li>
              <li>• Sole Establishment</li>
              <li>• Civil Company</li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/10/Group-4.png.webp"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
