const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-md md:text-lg md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Our legal team will guide you in understanding the nuances and
          intricacies of the UAE’s business laws and regulations. Our legal
          consultants have specialised expertise in mergers and acquisitions,
          company law, corporate restructuring, financial law, economic law and
          dispute resolution, among others. Through our legal services, you can
          make informed decisions about your business while ensuring compliance
          with the UAE’s corporate policies.
        </p>
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Legal Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">Corporate law</h2>
              <p>
                Our lawyers will advise you on company restructuring, financing
                operations, creation of specific governance, and devising
                incentive mechanisms for employees and corporate officers.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Economic law and competition
              </h2>
              <p>
                We will assist you in all aspects of economic and competition
                law and in negotiations with your trading partners, from
                negotiation and implementation of licenses and commercial
                agreements, to developing pricing and commercial practices.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Mergers and acquisitions
              </h2>
              <p>
                Backed with years of experience and profound market knowledge,
                our team will guide you in the acquisition and sale of companies
                and implementation of joint venture agreements. We will also
                assist you through each stage of these processes, including
                preparatory work, negotiations and signing of the final
                documentation.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Dispute resolution
              </h2>
              <p>
                Our team will represent you in complex civil cases and
                commercial disputes before all jurisdictions. The scope of our
                service includes pre-litigation and litigation (both local and
                international), as well as commercial and corporate litigation
                related to payment guarantees, cancellation of sales or
                shareholder agreements, and stock and capital markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
