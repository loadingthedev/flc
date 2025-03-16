const Header = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-md md:text-lg md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Our mail management service allows you to use our premium office
          address with P.O. Box as your business correspondence address. Through
          our mail management service, you can make sure there is always someone
          to receive any incoming mail for your business. Our team will receive,
          sort and store all your incoming letters, parcels and packages, and
          will immediately notify you of these, so you can pick them up at any
          convenient time.
        </p>
        <div className="max-w-7xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Mail Management Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Mail handling, sorting and storage
              </h2>
              <p>
                With our mail management service, you never have to worry if
                someone will be there to collect your mail, especially if you
                are out of the country or tied up with another appointment.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Alerts and notifications
              </h2>
              <p>
                Our team will immediately notify you of any delivered mail,
                allowing you to pick a convenient time for collection.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Security and verification
              </h2>
              <p>
                We do not release your mail to just anybody. If you wish to
                authorise a third party to collect the mail on your behalf, you
                need to notify our team via email. The authorised person should
                bring their Emirates ID for verification purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
