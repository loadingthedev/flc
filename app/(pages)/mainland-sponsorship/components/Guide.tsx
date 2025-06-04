import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center mt-8">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Advantages{" "}
        </h2>
        <p className="text-lg mb-8 text-center">
          Corporate sponsorship offers the same advantages as dealing with an
          individual sponsor, while <br /> providing services that are designed
          to address the challenges that can arise. With Virtuzone’s <br />{" "}
          corporate sponsorship service, you’ll benefit from:
        </p>
        <div className="flex flex-col md:flex-row items-center ml-40 mt-20 ">
          <div className="md:w-1/2 mt-8 md:mt-30 md:pl-20">
            <h2 className="text-3xl mt-4  font-bold text-primary ">
              1. No interference from the sponsor
            </h2>

            <p className="text-lg  mb-4">
              With corporate sponsorship, entrepreneurs maintain complete
              control over their business, despite the local sponsor holding a
              narrow majority of the company shares.
            </p>
            <p className="text-lg mb-8">
              As a rule, corporate local sponsor does not get involved in the
              day-to-day running of the company, allowing business owners to
              continue to have full management of their staff, clients, and
              service offering
            </p>

            <h2 className="text-3xl font-bold text-primary ">2. Easy</h2>
            <p>
              We’ll do all the heavy lifting—that’s what makes us the premier
              business <br />
              setup consultants in Dubai and the UAE. FLC is a one-stop-shop for{" "}
              <br /> company formation. We manage the process from start to
              finish, meaning <br /> you don’t have to meet with countless
              government department authorities to <br /> get your business up
              and running.
            </p>
            <h2 className="text-3xl mt-4  font-bold text-primary ">
              3. In-depth proactive contracts
            </h2>
            <p className="text-lg  mb-8">
              Side agreements are often a difficult part of the process.
              Luckily, this is another area in which corporate sponsorship may
              be advantageous. Many corporate sponsors offer detailed contracts
              drafted by first-tier legal counsel, so that the rights of the
              business owner and their shareholders are fully protected.
            </p>
            <Link href="/contact">
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/10/Group-2.png.webp"
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
