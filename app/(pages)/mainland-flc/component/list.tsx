import Link from "next/link";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

export default function List() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-8 text-center ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-primary mb-10 mt-8">
          Setting Up Your UAE Company Starts with FLC
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-80 mx-auto shadow-md my-25 rounded-lg">
          <div className="mt-8 md:mt-0 md:pl-20 mx-10">
            <ul className="pl-5 text-justify text-lg">
              {[
                "Operate in full legality",
                "Protect your family",
                "Be fully insurable",
                "Get access to credit card payment facility",
                "No more visa runs",
                "Get a Dubai driver’s licence",
                "Open a corporate bank account",
                "Be a resident of Dubai",
                "Have full control of your business",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-md mb-8">
                  <div className="bg-green-500 rounded-full p-1 mr-2">
                    <FaCheck color="white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-20 md:mt-0 mx-20">
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
}
