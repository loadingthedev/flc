const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-md md:text-lg mb-4 mt-8 text-justify display:flex justify-center">
          {" "}
          team of highly experienced and qualified accountants will help you
          easily understand and comply with the UAE’s Value Added Tax policy. We
          will assess your invoices, quotations, contracts and purchase orders
          and help you determine if your business falls under any of these two
          categories: mandatory and voluntary registration.
        </p>
        <p className="text-md md:text-lg mb-4  text-justify display:flex justify-center">
          <strong>Mandatory registration:</strong> Your company’s value of
          taxable goods and services exceeded the mandatory registration
          threshold (AED 375,000.00) over the previous 12-month period, or your
          company’s anticipated total value of all taxable goods and services
          will exceed the mandatory registration threshold (AED 375,000.00) in
          the next 30 days.
        </p>
        <p className="text-md md:text-lg   text-justify display:flex justify-center">
          <strong>Voluntary registration:</strong> Your company’s value of
          taxable goods and services exceeded the voluntary registration
          threshold (AED 187,500.00) over the previous 12-month period, or your
          company’s anticipated total value of all taxable goods and services
          will exceed the voluntary registration threshold (AED 187,500.00) in
          the next 30 days.
        </p>

        <h2 className="text-4xl font-bold mt-8">Must Know</h2>

        <div className="flex flex-row justify-center  md:mt-4 mt-12 py-12 gap-8  px-4">
          <p className="text-md md:text-lg mb-4 text-justify bg-muted-foreground p-4 rounded-md w-1/2">
            If your company has generated revenues below AED 187,500.00, then
            you are not yet eligible for VAT registration. If your company
            crosses the mandatory threshold limit, you have 20 working days to
            submit the application.
          </p>
          <p className="text-md md:text-lg mb-4  text-justify bg-muted-foreground p-4 rounded-md">
            You need to have a corporate bank account to facilitate the
            registration process.
          </p>
        </div>

        <div className="max-w-8xl mx-auto md:mt-4 mt-4 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our VAT & Tax Consultancy
          </h2>
          <ul>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/02/Tax-residency.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold ">Tax Residency</h2>
                <p className="mb-4">
                  Our tax advisors can assist you in securing an individual or
                  corporate tax residency certificate from the Federal Tax
                  Authority.
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/02/Documentation-2.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Tax Consultations</h2>
                <p className="mb-4">
                  Speak one-on-one to our qualified tax experts for customised
                  planning, so your business can achieve efficient tax outcomes
                  whilst ensuring compliance with all your tax obligations.
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/02/Tax-Registration-Number-TRN-certificate.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">
                  FTA Portal and Documentation
                </h2>
                <p className="mb-4">
                  From creating an online account through the FTA portal to
                  assisting and submitting any required documents in formats
                  mandated by the FTA, our experienced accountants will guide
                  you through each step.
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/02/Documentation-2.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">VAT Returns</h2>
                <p className="mb-4">
                  Our team prepares quarterly VAT reports to help you determine
                  if you have VAT payable/refund.
                </p>
              </div>
            </li>

            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/02/Tax-Registration-Number-TRN-certificate.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">VAT Registration (TRN)</h2>
                <p className="mb-4">
                  Our in-house accountants will assist in registering your
                  business for VAT with the FTA, including providing you advice
                  on eligibility for a VAT exception. Upon completing the
                  registration process, you will be issued with a Tax
                  Registration Number (TRN) certificate.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
