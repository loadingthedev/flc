import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-column w-[100%] items-center ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center mt-8">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          The Best Business Setup Consultants in Dubai
        </h2>
        <p className="text-lg text-center md:mb-8 ">
          Our process is both straightforward and transparent. We’ll guide you
          through every step of the way.
        </p>
        <div className="flex flex-col md:flex-row items-center  p-10  ">
          <div className="md:w-1/2  md:mt-30 flex flex-col items-center md:items-start">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">1. Simple</h3>
              <ul className="list-disc list-inside">
                <li className="list-none">
                  Our simple process as business setup consultants includes
                  helping you <br /> decide whether to set up in the mainland or
                  in a free zone, advising on the <br /> right business activity
                  and name for your company, and seeing <br /> you through all
                  the required paperwork to get your business licence with DED
                  and open your corporate bank account.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                2. Business License
              </h3>
              <ul className="list-disc list-inside">
                <li className="list-none">
                  We’ll do all the heavy lifting—that’s what makes us the
                  premier business <br /> setup consultants in Dubai and the
                  UAE. FLC is a one-stop-shop for <br />
                  company formation. We manage the process from start to finish,
                  meaning <br />
                  you don’t have to meet with countless government authorities
                  to get up <br />
                  and running with your business in Dubai.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                3. Financial Incentives
              </h3>
              <ul className="list-disc list-inside">
                <li className="list-none">
                  It all starts with a free consultation with one of our
                  friendly and professional <br /> business setup consultants.
                  The consultation is all about you and your <br />{" "}
                  business—you’ll have the opportunity to ask any questions you
                  might have <br />
                  about company formation and we’ll make sure you’re completely
                  prepared <br />
                  before we formally start the process.
                </li>
                <li className="list-none mt-4">
                  By the end of your personal consultation, we’ll have a deep
                  understanding of <br /> your business and its requirements and
                  you’ll know the best path to take <br /> when setting up your
                  business in the UAE.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/09/Flat-Illustration.svg"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-12">
        <Link href="/contact">
          <button className="flex justify-center mb-4 gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Guide;
