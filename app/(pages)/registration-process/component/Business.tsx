import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 px-4 md:px-0">
      <div className="mt-8 md:mt-0 w-full md:w-auto">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Your business venture starts with company registration in Dubai
        </h2>
        <div className="flex flex-col md:flex-row items-center md:ml-40 mt-8 md:mt-20">
          <div className="w-full md:w-1/3">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/09/Key_Steps_Desktop.svg"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-20">
            <p className="text-lg mb-8">
              At{" "}
              <a href="" className="text-blue-500">
                FLC
              </a>
              , we understand that launching a new business can be
              challenging—particularly if you’re an overseas entrepreneur
              starting up in a new country for the first time.
            </p>

            <p className="text-lg mb-8">
              That’s why we’re on hand to make registering your company in the
              UAE as easy as possible. We’ll do all the heavy lifting for you,
              liaising with the relevant government authorities and departments.
            </p>

            <p className="text-lg mb-8">
              FLC covers all of the technical and administrative aspects of{" "}
              <a href="" className="text-blue-500">
                business setup in Dubai
              </a>
              —we’ll work with you to determine the most suitable trade licence
              based on the business activities and services you wish to provide.
              Finally, we’ll prepare all the relevant legal documents, assist
              with the visa application process and provide corporate bank
              account opening introductions.
            </p>

            <p className="text-lg mb-4 border-l-4 border-primary pl-4 mt-4">
              It is this multi-layered service that has made FLC one of the
              leading company formation specialists in the region and is the
              reason why thousands of entrepreneurs have turned to us for
              support and guidance with{" "}
              <a href="" className="text-blue-500">
                company formation in Dubai
              </a>{" "}
              and the UAE.
            </p>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
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
