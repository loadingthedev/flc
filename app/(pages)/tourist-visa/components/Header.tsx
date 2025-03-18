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
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center text-primary mb-8">
            Our Tourist Visa Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground w-128 h-128">
                <img
                  src="https://virtuzone.com/wp-content/uploads/2022/02/Convenient-process.svg"
                  alt="Convenient process"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">Convenient process</h2>
              <p className="text-justify px-4">
                We offer a simplified and easy process for tourist visa
                applications. Our team will ask you to send the required
                documents via email or WhatsApp. These include:
              </p>
              <ul className="list-disc list-inside  text-justify mt-4">
                <li>A copy of the applicant’s passport</li>
                <li>A passport photo of the applicant</li>
                <li>A copy of the previous visa (for extensions)</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground w-128 h-128">
                <img
                  src="https://virtuzone.com/wp-content/uploads/2022/02/End-to-end-management.svg"
                  alt="End-to-end management"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">End-to-end management</h2>
              <p className="text-center px-4">
                Our team will assist you throughout the complete application
                process and will keep you updated on the progress of your
                application.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2 border-b-2 pb-4 bg-muted-foreground w-128 h-128">
                <img
                  src="https://virtuzone.com/wp-content/uploads/2022/02/Fast-results.svg"
                  alt="Fast results"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">Fast results</h2>
              <p className="text-center px-4">
                The normal processing time for tourist visa applications takes
                only 2 to 5 working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
