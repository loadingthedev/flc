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
          Get access to an extensive range of health insurance packages with the
          most affordable rates in the market. Whether you are looking for a
          basic health insurance for your visa application, or a comprehensive
          insurance package for your family or employees, we’ve got you covered.
        </p>
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Health Insurance
          </h2>
          <div className="flex  gap-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex  gap-6">
                <div className="flex flex-col justify-center  ">
                  <div className="flex items-center mb-2 border-b-2 pb-4 bg-primary">
                    <img
                      src="https://virtuzone.com/wp-content/uploads/2022/02/Comprehensive-coverage.svg"
                      alt="Comprehensive coverage"
                      className="w-full h-auto rounded-md mb-4 p-8"
                    />
                  </div>
                  <h2 className="text-lg font-bold mt-4">
                    Comprehensive coverage
                  </h2>
                  <p>
                    Our health insurance packages offer you extensive in-patient
                    and out-patient coverage, giving you peace of mind that your
                    medical needs will be taken care of.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  gap-6">
              <div className="flex flex-col justify-center  ">
                <div className="flex items-center mb-2 border-b-2 pb-4 bg-primary">
                  <img
                    src="https://virtuzone.com/wp-content/uploads/2022/02/Excellent-healthcare-services.svg"
                    alt="Comprehensive coverage"
                    className="w-full h-auto rounded-md mb-4 p-8"
                  />
                </div>
                <h2 className="text-lg font-bold mt-4">
                  Excellent healthcare services
                </h2>
                <p>
                  Our network includes only the most reputable names in the
                  healthcare industry, ensuring you get to enjoy the highest
                  level of healthcare services, at all times.
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <div className="flex flex-col justify-center  ">
                <div className="flex items-center mb-2 border-b-2 pb-4 bg-primary">
                  <img
                    src="https://virtuzone.com/wp-content/uploads/2022/02/Tailored-to-your-needs.svg"
                    alt="Comprehensive coverage"
                    className="w-full h-auto rounded-md mb-4 p-8"
                  />
                </div>
                <h2 className="text-lg font-bold mt-4">
                  Tailored to your needs
                </h2>
                <p>
                  Our team will help you find and choose a health insurance
                  package that suits your unique needs, whether you are looking
                  for insurance for your family or your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted-foreground w-full py-8 ">
        <h2 className="text-3xl text-white bg-primary text-justify  py-8  mx-auto px-4 sm:px-6 lg:px-8 font-bold">
          Get your health insurance quote in only 30 seconds
        </h2>
        <p className="text-white text-base md:text-xl  mt-12 max-w-7xl bg-primary mx-auto px-4 sm:px-6 lg:px-8 text-justify py-12 mb-8">
          Safeguard your health and your future. Choose a health insurance
          package that meets your unique needs. Ready to see all the options
          available to you? Visit virtuzone.insured.ae or scan the QR code to
          get an instant health insurance quote. You can also compare various
          insurance packages from leading insurance companies in the industry
          and filter your search based on your more specific requirements.
        </p>
      </div>
    </>
  );
};

export default Header;
