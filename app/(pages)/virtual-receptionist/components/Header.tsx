const Header = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <p
          className="text-md md:text-lg md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Our virtual receptionist services make sure your clients are greeted
          with a welcoming and personalised greeting whenever they give your
          business a call. As part of this service, you will be provided with a
          local 04 number and a 24/7 staffed team to convey your personalised
          greeting.
        </p>
        <div className="max-w-7xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Virtual Receptionist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center align-center">
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Personalised greeting
              </h2>
              <p>
                Your client calls will be answered with a personalised greeting.
                Simply provide us with a personalised welcome message, so our
                team can start handling your calls.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">
                Landline phone number
              </h2>
              <p>
                Having a landline phone number helps establish your credibility
                as a company. Our virtual receptionist services will provide you
                with a local 04 number where your clients can easily reach you.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <h2 className="text-lg font-bold mt-4 mb-4">24/7 availability</h2>
              <p>
                With our virtual receptionist services, your clients will not be
                simply put on hold and your calls will be managed by a team with
                24/7 availability. Whether you are getting calls from local or
                international clients, you can be sure they will be able to
                reach you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
