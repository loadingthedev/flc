const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-md md:text-md md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          The UAE Golden Visa was launched in 2019 to attract and retain
          professionals, investors, entrepreneurs and outstanding students from
          all over the world. Our team will assist you and help you have a
          seamless application process for a golden visa, so you can fully enjoy
          its benefits, which include long-term residency in the UAE, 100%
          company ownership in the mainland, and the opportunity to live, work
          and study in the country.
        </p>

        <p className="mt-12 text-3xl font-bold">MUST KNOW</p>

        <p className="text-md md:text-md md:mt-8 mt-8 text-start bg-muted-foreground p-4">
          The standard application processing time may take 2 to 4 weeks,
          subject to additional requirements.
        </p>
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Golden Visa UAE Services
          </h2>

          <div className="flex flex-col gap-12">
            <div className="flex flex-row justify-center items-start gap-8">
              <div className="flex items-center mb-2 pb-4">
                <img
                  src="https://virtuzone.com/wp-content/uploads/2022/02/Client-assessment-2.svg"
                  alt="Client assessment"
                  className="w-48 h-48 rounded-full mb-4 p-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl text-muted-foreground font-bold mt-4">
                  Client Assessment
                </h2>
                <p className="text-justify mt-4">
                  Our team will assess your profile and eligibility for the Visa
                  programs and walk you through the complete process and all the
                  requirements involved.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-8">
              <div className="flex items-center mb-2 pb-4">
                <img
                  src="https://virtuzone.com/wp-content/uploads/2022/02/Documentation-3.svg"
                  alt="Documentation"
                  className="w-48 h-48 rounded-full mb-4 p-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl text-muted-foreground font-bold mt-4">
                  Documentation
                </h2>
                <p className="text-justify mt-4">
                  We will assist you in collecting, preparing, and submitting
                  the required documents, such as the following for the Golden
                  Visa application process in the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-bold mb-4 bg-muted-foreground p-4">
            Standard requirements
          </h3>
          <ul className="px-8 text-justify">
            <li className="list-disc mb-4">
              Copies of your passport, visa and EID card copy
            </li>
            <li className="list-disc mb-4">UAE labour contract</li>
            <li className="list-disc mb-4">
              Salary certificate/income confirmation letter
            </li>
            <li className="list-disc mb-4">
              Education certificate fully attested and legalised by the UAE
              Ministry of Foreign Affairs
            </li>
            <li className="list-disc mb-4">
              6 months of personal bank statements
            </li>
            <li className="list-disc mb-4">
              Title deed, if you own property in the UAE
            </li>
            <li className="list-disc mb-4">
              Reference letter from your employer or a person of influence
              regarding your contribution to your industry or the UAE economy
            </li>
            <li className="list-disc mb-4">
              Copy of your CV or LinkedIn profile
            </li>
            <li className="list-disc mb-4">
              Published articles and write-ups about you, your business or your
              contribution to the UAE economy
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-bold mb-4 bg-muted-foreground p-4">
            Existing UAE residents on a non-Dubai visa
          </h3>
          <ul className="px-8 text-justify">
            <li className="list-disc mb-4">
              Minimum Down Payment: Removed; no longer required.
            </li>
            <li className="list-disc mb-4">
              Eligible Properties: Mortgaged and off-plan properties can qualify
              if there is significant progress in development.
            </li>
            <li className="list-disc mb-4">
              Appreciated Properties: Properties bought for less than AED 2
              million can qualify if their current value is now at least AED 2
              million.
            </li>
            <li className="list-disc mb-4">
              Fixed Deposit: AED 2 million non-breakable deposit in a local bank
              for two years required.
            </li>
            <li className="list-disc mb-4">
              Bank Confirmation: Letter confirming the deposit is mandatory.
            </li>
            <li className="list-disc mb-4">
              Early Withdrawal: Withdrawing or encashing the deposit before term
              completion will result in automatic visa cancellation, as
              confirmed by immigration authorities.
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-bold mb-4 bg-muted-foreground p-4">
            Existing UAE residents on a Dubai visa (company owners/investors)
          </h3>
          <ul className="px-8 text-justify ">
            <li className="list-disc mb-4">
              Bank statements showing approximately AED 2 to 3 million worth of
              movement/cash in bank accounts
            </li>
            <li className="list-disc mb-4">
              All corporate document copies licence, share certificate, etc.
            </li>
            <li className="list-disc mb-4">
              If you hold the position of CEO, you must have been in this
              position for more than 3 years
            </li>
            <li className="list-disc mb-4">
              If you are a company executive, you must have been in this
              position for more than 5 years.
            </li>
            <li className="list-disc mb-4">Office lease or Ejari</li>
            <li className="list-disc mb-4">Audited financial statements</li>
            <li className="list-disc mb-4">Audit firm’s licence copy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
