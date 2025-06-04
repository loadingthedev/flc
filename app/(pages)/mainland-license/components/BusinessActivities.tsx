import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
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
              src="https://virtuzone.com/wp-content/uploads/2021/09/freezone_overview.png.webp"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-30 md:pl-10">
            <p className="text-md mb-4">
              Just like many places around the globe, entrepreneurs and
              companies must obtain a trade licence to validate their mainalnd
              company as a legal entity in the United Arab Emirates. This trade
              licence must be granted before commencing business activity. This
              applies in both free zone jurisdictions and Mainland Dubai. Having
              a trade licence in Duabi ascertains your customers that you are a
              legitimate business that complies with local laws and regulations.{" "}
            </p>
            <p className="text-md mb-4">
              Whilst there are many steps to get your business registered in the
              mainland, obtaining a trade licence in Dubai is the most crucial
              to business setup.
            </p>
            <p className="text-md mb-4">
              When starting a new business in the UAE, you need to acquire the
              right trade licence to ensure that your mainland company is set up
              properly for the long-term. The type of business activities,
              company structure and jurisdiction where you will operate can
              affect the type of trade licence you need to acquire and the
              requirements applicable to you.
            </p>
            <p className="text-md mb-4">
              Below are the three types of trade licences that you need to
              consider as you begin the company formation process and start a
              mainland business in Dubai:
            </p>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
