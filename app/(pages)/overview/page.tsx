import Header from "./component/Header";
import Steps from "./component/stepsGrid";

const UAEFreeZonePage = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <div className="bg-muted-foreground py-24 w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            FREE ZONE COMPANY SETUP
          </h1>
          <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
            GET YOUR FREE ZONE COMPANY RIGHT
          </p>

          <p className="text-white text-base md:text-xl mb-8">
            With over 50 free zones in the UAE, how do you know which one is
            best for you? <br /> Setting up in the right free zone will position
            your business for success.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center gap-2 px-8 md:px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <img
            src="https://virtuzone.com/wp-content/uploads/2021/09/Free-Zone-Company-Setup-Overview.png.webp"
            alt="UAE Free Zone"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Your UAE Free Zone Company Starts Here Section */}
      <div className="flex flex-col md:flex-row items-center my-12 px-4 md:px-20">
        <Header />
      </div>

      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center px-4 md:px-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-primary">
            Advantages of Setting up in a Free Zone
          </h2>
          <p className="text-base md:text-xl mb-8 text-center text-primary">
            What are the main benefits to starting your company in a free zone
            and how do they each operate?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
            <div className="bg-white p-6 shadow-lg rounded text-justify max-w-lg mx-auto">
              <p className="text-xl md:text-2xl text-primary font-bold">
                1. Retain Ownership:
              </p>
              <p className="text-justify mt-8">
                The main advantage offered by the UAE free zones is that foreign
                investors can retain 100% ownership of their businesses without
                the need for a local partner.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded text-justify max-w-lg mx-auto">
              <p className="text-xl md:text-2xl text-primary font-bold">
                2. Business License
              </p>
              <p className="text-justify mt-8">
                Some business categories require prior approvals from certain
                authorities. Contact us today for a free consultation. One of
                our experts will guide you through the necessary requirements to
                start your business.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded text-justify max-w-lg mx-auto">
              <p className="text-xl md:text-2xl text-primary font-bold">
                3. Financial Incentives
              </p>
              <p className="text-justify mt-8">
                Other financial incentives of free zones include a 0% income tax
                rate, no customs duties levied on imports and exports, and the
                option to repatriate 100% of the profits from the business.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded text-justify max-w-lg mx-auto">
              <p className="text-xl md:text-2xl text-primary font-bold">
                4. Sector-Specific
              </p>
              <p className="text-justify mt-8">
                Another factor that can present fantastic opportunities to free
                zone companies is that many of the UAE free zones are sector
                specific. This gives its entrepreneurs ready access to a hub of
                knowledge and expertise from others within their field.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className="flex justify-center px-4 md:px-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/c2.png.webp"
          alt="Additional Information"
          className="w-full max-w-4xl h-auto"
        />
      </div>

      {/* Steps to Set Up a Company in a UAE Free Zone Section */}
      <Steps />

      {/* Contact Us Form */}
      <div className="my-10 py-20 max-w-4xl mx-auto px-4 md:px-0">
        <div className="bg-gray-100 p-6 shadow-md rounded">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-start text-primary mb-8">
            Contact Us
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="help"
                  className="block text-sm font-medium text-gray-700"
                >
                  How Can We Help You
                </label>
                <select
                  id="help"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                >
                  <option value="">Select an option</option>
                  <option value="company-setup">Business Setup</option>
                  <option value="legal-advice">Corporate Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button className="flex items-center gap-2 px-8 md:px-12 py-4 my-16 border-2 border-white rounded-none transition-all text-white bg-primary hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UAEFreeZonePage;
