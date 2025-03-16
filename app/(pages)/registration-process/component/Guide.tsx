import { FaGlobe } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12">
      <div className="mt-8 md:mt-0">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center mt-8">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Our Step-by-step Guide to Registering a Company in Dubai and the UAE
        </h2>
        <div className="flex flex-col md:flex-row items-center md:ml-40 mt-20">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-20">
            <p className="px-4 md:px-0">
              The exact procedure for setting up a new business in the middle
              east can seem complex, but by{" "}
              <a href="" className="text-blue-500">
                following a simple step-by-step process
              </a>{" "}
              with the right support, it is more straightforward than you might
              think.
            </p>
            <h2 className="text-3xl mt-4 mb-4 font-bold px-4 md:px-0">
              Free Zone Vs. Mainland company setup in Dubai
            </h2>
            <p className="text-lg mb-8 px-4 md:px-0">
              When setting up a company in Dubai you may choose between a free
              zone company or a mainland company. Dubai has many free zones that
              offer{" "}
              <a href="" className="text-blue-500">
                tax benefits
              </a>{" "}
              to entrepreneurs and business owners and are monitored by
              independent free zone authorities or entities. The Dubai mainland
              is an economic zone monitored by the Department of Economic
              Development. Free zones in Dubai offer 100% foreign ownership,
              whilst mainland companies must have a local sponsor.
            </p>
            <p className="px-4 md:px-0">
              There are many pros and cons to consider when choosing where to
              set up your company in Dubai. Our expert team at FLC will guide
              you to making the right decision that suits you and your business
              activity.
            </p>
            <h2 className="text-3xl mt-4 mb-4 font-bold px-4 md:px-0">
              The company registration process
            </h2>
            <p className="px-4 md:px-0">
              Here is a brief outline of company registration in Dubai:
            </p>
            <ul className="list-disc list-inside px-4 md:px-0">
              <li>I. Determine the business activity of your company</li>
              <li>
                II. Work out if you need a local sponsor or not. (You will not
                need a local sponsor in free zones, but you will in mainland
                Dubai)
              </li>
              <li>III. Decide on a company structure for your new business</li>
              <li>IV. Determine the trade name of your new business</li>
              <li>V. Gain initial approvals and external permits</li>
              <li>VI. Decide on an office space to run your business from</li>
              <li>
                VII. Finalise all fees associated with company registration
              </li>
              <li>VIII. Receive your trade licence</li>
            </ul>
            <p className="text-lg mt-8 mb-8 px-4 md:px-0">
              These tasks may sound like hard work—and indeed it can be—but for
              us, not for you. <a href="">FLC comprehensive services </a> mean
              you don’t have to give a second thought to the mechanics of the
              business setup process. Once it is underway, simply supply us with
              the relevant information about your company and we’ll do the rest.
            </p>
            <p className="px-4 md:px-0">
              With FLC as your <a href="">company setup partner,</a> the company
              registration process in UAE is easy. The entire process can take
              as little as seven working days.
            </p>
            <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/10/secondry-1.png.webp"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
