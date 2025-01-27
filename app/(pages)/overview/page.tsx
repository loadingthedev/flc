import {
  FaBuilding,
  FaGlobe,
  FaLightbulb,
  FaMapMarkerAlt,
  FaShoppingBag,
} from "react-icons/fa";

const UAEFreeZonePage = () => {
  return (
    <div>
      {/* Heading and Get Started Button */}
      <div className="bg-muted-foreground py-24 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            FREE ZONE COMPANY SETUP
          </h1>
          <p className="text-3xl font-bold text-white mt-4 mb-8">
            GET YOUR FREE ZONE COMPANY RIGHT
          </p>

          <p className="text-white text-xl mb-8">
            With over 50 free zones in the UAE, how do you know which one is
            best for you? <br /> Setting up in the right free zone will position
            your business for success.
          </p>

          <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-30 md:mb-0 md:pl-35">
          <img
            src="https://virtuzone.com/wp-content/uploads/2021/09/Free-Zone-Company-Setup-Overview.png.webp"
            alt="UAE Free Zone"
            className="w-[600px] h-[600px]"
          />
        </div>
      </div>

      {/* Your UAE Free Zone Company Starts Here Section */}
      <div className="flex flex-col md:flex-row items-center my-12 ">
        <div className="mt-8 md:mt-0 ">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
              <FaMapMarkerAlt color="red" size={40} />
            </div>
          </div>
          <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
            Your UAE Free Zone Company Starts Here
          </h2>
          <div className="flex flex-col md:flex-row items-center ml-40 mt-8 ">
            <div className="md:w-1/3">
              <img
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                alt="UAE Free Zone"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-30 md:pl-10">
              <p className="text-lg">
                FLC assists with company incorporation across more than 50 UAE
                free zones. There’s no doubt a lot of information to review and
                much to consider when making the decision on which free zone is
                best suited to your specific business requirements, including
                location, price, business type, flexi-desk or office space
                options, auditing and bookkeeping and share capital
                requirements, and much more. <br /> <br />
                That’s where the Virtuzone team comes in, walking you through it
                step-by-step, steering you in the right direction, saving you
                money, and ultimately making the entire experience a stress-free
                one.
              </p>
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages of Setting up in a Free Zone Section */}
      <div className="my-30 flex justify-center">
        <div className="max-w-7xl ">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">
            Advantages of Setting up in a Free Zone
          </h2>
          <p className="text-xl  mb-8 text-center text-primary">
            What are the main benefits to starting your company in a free zone
            and how do they each operate?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
            <div className="bg-white  p-6 shadow-lg rounded text-justify max-w-lg max-h-md mx-auto ">
              <p className="text-2xl text-primary font-bold">
                1. Retain Ownership:
              </p>
              <p className="text-justify mt-8">
                The main advantage offered by the UAE free zones is that foreign
                investors can retain 100% ownership of their businesses without
                the need for a local partner.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded text-justify max-w-lg max-h-md mx-auto ">
              <p className="text-2xl text-primary font-bold">
                2. Business License
              </p>
              <p className="text-justify mt-8">
                Some business categories require prior approvals from certain
                authorities. Contact us today for a free consultation. One of
                our experts will guide you through the necessary requirements to
                start your business.
              </p>
            </div>
            <div className="bg-white  p-6 shadow-md rounded text-justify max-w-lg max-h-md mx-auto ">
              <p className="text-2xl text-primary font-bold">
                3. Financial Incentives
              </p>
              <p className="text-justify mt-8">
                Other financial incentives of free zones include a 0% income tax
                rate, no customs duties levied on imports and exports, and the
                option to repatriate 100% of the profits from the business.
              </p>
            </div>
            <div className="bg-white  p-6 shadow-md rounded text-justify max-w-lg max-h-md mx-auto ">
              <p className="text-2xl text-primary font-bold">
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
      <div className="flex justify-center ">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/c2.png.webp"
          alt="Additional Information"
          className="w-full max-w-4xl h-auto"
        />
      </div>

      {/* Steps to Set Up a Company in a UAE Free Zone Section */}
      <div className="bg-white p-6  rounded text-center flex flex-col items-center mt-20 max-w-6xl mx-auto">
        <FaGlobe color="#0f5471" size={"80"} />
        <h2 className="text-3xl font-bold mb-4 mt-8 text-center text-primary">
          Steps to Set Up a Company in a UAE Free Zone
        </h2>
        <p className="text-center text-primary text-xl mb-8">
          Starting a business in Dubai is simple with Virtuzone. We can help you
          set up in a free zone, on <br />
          mainland or offshore.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
            <FaLightbulb color="#0f5471" size={"80"} />

            <p className="mt-8">
              You will be guided through the process step-by-step in a very
              transparent manner that gives you a full overview of exactly where
              you are at any given time of the setup journey.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
            <FaShoppingBag color="#0f5471" size={"80"} />
            <p className="mt-8">
              We do all the heavy lifting for you so that you don’t have to give
              anything a second thought, but we make sure you are well-informed
              along the way.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
            <FaBuilding color="#0f5471" size={"80"} />
            <p className="mt-8">
              While the entire process can take as little as seven working days,
              Virtuzone is doing a lot behind the scenes to ensure your UAE free
              zone company setup is a complete success.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-12 py-4 my-16 border-2 border-white rounded-none transition-all text-white bg-primary hover:bg-muted-foreground hover:text-primary-foreground">
          Get Started
        </button>
      </div>

      {/* Contact Us Form */}
      <div className="my-10 py-20 max-w-4xl mx-auto">
        <div className="bg-gray-100 p-6 shadow-md rounded">
          <h2 className="text-4xl font-bold mb-4 text-start text-primary mb-8">
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
            <button className="flex items-center gap-2 px-12 py-4 my-16 border-2 border-white rounded-none transition-all text-white bg-primary hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UAEFreeZonePage;
