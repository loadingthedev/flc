import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
    <div className="flex flex-col items-center my-12 md:flex-row md:items-start">
      <div className="mt-8 md:mt-0 md:ml-12">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary  md:mt-12 md:ml-36">
          Choose a Business Activity
        </h2>
        <div className="flex flex-col items-center md:flex-row md:items-start md:ml-0 mt-8 md:gap-10">
          <div className="md:w-1/3 w-full flex justify-center md:justify-start md:ml-16">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/09/freezone_overview.png.webp"
              alt="UAE Free Zone"
              className="w-3/4 md:w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 ">
            <p className="text-lg text-justify md:text-left m-4">
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
              company with Virtuzone.
            </p>
            <div className="flex justify-center md:justify-start">
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
