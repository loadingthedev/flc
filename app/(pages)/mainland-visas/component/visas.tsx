import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Visas = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center my-12 ">
        <div className="mt-8 md:mt-0 ">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
              <FaMapMarkerAlt color="red" size={40} />
            </div>
          </div>
          <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
            Mainland Visas
          </h2>
          <div className="flex flex-col md:flex-row items-center ml-40 mt-20 ">
            <div className="md:w-1/3">
              <img
                src="https://virtuzone.com/wp-content/uploads/2021/10/mainland_visa_secondry-min.png.webp"
                alt="UAE Free Zone"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-30 md:pl-20">
              <h2 className="text-2xl text-justify font-bold text-primary mb-4 mt-8">
                Private Companies
              </h2>

              <ul>
                {" "}
                <li className="text-md  mb-4">
                  Private companies can obtain new employment entry permits for
                  their employees provided they apply for residence visa status
                  within 30 days of the employee’s entry into the UAE.
                </li>
                <li className="text-md text-justify mb-4">
                  If your company is registered in a free zone, the employment
                  visa will be valid for three years.
                </li>
                <li className="text-md text-justify mb-4">
                  If you are an onshore registered company, the visa will be
                  valid for two years.
                </li>
                <li className="text-md text-justify mb-4">
                  It is also the responsibility of the employer to ensure all
                  travel arrangements are made for the new employee, including
                  the ‘okay to board’ that may be required by some airlines.
                </li>
              </ul>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visas;
