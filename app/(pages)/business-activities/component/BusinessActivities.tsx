import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 ">
      <div className="mt-8 md:mt-0 w-full md:w-auto">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Choose a Business Activity
        </h2>
        <div className="flex flex-col md:flex-row items-center md:ml-40 mt-8 w-full">
          <div className="w-full md:w-1/3">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/10/Secondry.png.webp"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-justify p-5">
            <p className="text-lg">
              One of the very first decisions to take on your journey towards
              incorporating a UAE free zone company, and any company in the UAE
              for that matter, is to select the most suitable business activity.
              This process is very straightforward, and you can even select
              multiple business activities. In your initial free consultation
              with us we will help you identify the most suitable activity or
              activities for your business to ensure a seamless application
              process for your UAE trade licence.
              <br /> <br />
              The categories below outline some of the most popular business
              activities you can choose from when setting up your UAE free zone
              company with FLC .
            </p>
            <div className="flex justify-center md:justify-start mt-2">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
