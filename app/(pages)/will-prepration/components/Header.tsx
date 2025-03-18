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
          Our experts will help you understand the type of will options
          available and which one is right for you. DIFC provides a common law
          environment for non-Muslims to draw up a will in English to determine
          how their assets should be distributed if they pass away. All seven
          emirates in the UAE are covered by DIFC Wills, which ensure
          non-Muslims’ estates are not subject to the UAE Shariah law. The
          assets can include real estate, cash, possessions, company shares,
          bank and brokerage accounts and more.
        </p>
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            TYPES OF WILLS OFFERED BY DIFC WILLS REGISTRY
          </h2>
          <ul>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/10/Full-will.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold ">DIFC Full Will</h2>
                <p className="mb-4">
                  This type of will includes both the distribution of assets and
                  the appointment of guardians. .
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/10/Financial-Assets.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">
                  DIFC Financial Assets Will
                </h2>
                <p className="mb-4">
                  This is for any money, shares, or securities which are in a
                  UAE bank or financial institution. Up to 10 separate bank
                  accounts or shares in up to 10 different bank accounts
                  registered in your sole name or in joint names can be included
                  in this will.
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/10/Guardianship.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">DIFC Guardianship Will</h2>
                <p className="mb-4">
                  This is for any money, shares, or securities which are in a
                  UAE bank or financial institution. Up to 10 separate bank
                  accounts or shares in up to 10 different bank accounts
                  registered in your sole name or in joint names can be included
                  in this will.
                </p>
              </div>
            </li>
            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/10/Property.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">DIFC Property Will</h2>
                <p className="mb-4">
                  This deals with property owned in the UAE. It enables you to
                  appoint beneficiaries for a maximum of 5 properties (or a
                  share in up to five real estate properties) situated in the
                  UAE.
                </p>
              </div>
            </li>

            <li className="flex items-center mb-8">
              <img
                src="https://virtuzone.com/wp-content/uploads/2022/10/Business-Owners.svg"
                alt=""
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold">
                  DIFC Business Owners Will
                </h2>
                <p className="mb-4">
                  This ensures the transfer of your shares in your business
                  without going through probate. A beneficiary may be appointed
                  for up to five separate shareholdings in a free zone or UAE
                  onshore company. You must hold shares in a UAE-incorporated
                  company that operates under UAE Federal Law. .
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
