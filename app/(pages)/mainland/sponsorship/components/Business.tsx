import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
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
            Setting Up Your UAE Company Starts with Virtuzone
          </h2>
          <div className="flex flex-col md:flex-row items-center ml-40 mt-20 ">
            <div className="md:w-1/3">
              <img
                src="https://virtuzone.com/wp-content/uploads/2021/10/Group-3.png.webp"
                alt="UAE Free Zone"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-30 md:pl-20">
              <p className="text-lg mb-8">
                One of the most common questions asked by first-time
                entrepreneurs in this part of the world is whether they need a
                local sponsor (Nominee Shareholder) in Dubai. The answer depends
                on many factors, including your nationality and the type of
                business you wish to set up.
              </p>

              <p className="text-lg mb-8">
                If you’re a non-Gulf Cooperation Council (GCC) national looking
                to set up a business with a commercial or industrial licence on
                the United Arab Emirates mainland, then yes, you will need a
                local sponsor as a business partner. If, however, you are
                setting up in a free zone, or your business activity is covered
                by a professional services licence, a local sponsor is not
                required.
              </p>
              <h2 className="text-2xl text-justify font-bold text-primary mb-4 mt-8">
                If your business does require a local sponsor, Virtuzone is on
                hand to help.
              </h2>
              <p className="text-lg mb-8">
                First, you’ll need to establish a mainland{" "}
                <a href="" className="text-blue-500">
                  Limited Liability Company{" "}
                </a>{" "}
                (LLC)—of which you retain 49% ownership with the other 51% going
                to the local sponsor. Rest assured, however, that profits are
                not split along the same lines and your local partner will have
                little-to-no say in the day-to-day running of your company.
              </p>

              <p className="text-lg mb-4   mt-4">
                Finding a local sponsor in Dubai, can be a demanding process for
                startups and new entrepreneurs. The local sponsor must either be
                a UAE national (also knows as an Emirati) or a corporate entity.
                The corporate entity must be completely owned by UAE nationals
                and comprised of a board of directors.
              </p>
              <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-20 mb-12">
        <h2 className="text-3xl text-justify font-bold text-white mb-4 mt-8 ml-60">
          Choosing a Local Sponsor in Dubai – The Corporate Option
        </h2>
        <p className="text-white text-lg text-justify  text-white mb-4 mt-8 ml-60">
          At{" "}
          <a href="" className="text-blue-500">
            FLC
          </a>
          , we understand that many entrepreneurs find the concept of engaging a
          local sponsor and passing off a 51% share of their company worrying.{" "}
          <br />
          That’s why our corporate sponsorship service is designed to give you
          complete peace of mind.
        </p>
        <p className="text-white text-lg text-justify  text-white mb-4 mt-8 ml-60">
          By partnering with Virtuzones service agents, there’s no need to spend
          time searching for and building a rapport with an individual. Instead,
          we’ll provide a premier <br /> corporate nominee to act as your 51%
          local sponsor in Dubai.
        </p>
        <p className="text-white text-justify  text-white mb-4 mt-8 ml-60">
          Our main objective is to give you 100% financial and operational
          control, while protecting your shareholder rights in your Limited
          Liability Company company. The <br /> agreements and documents we use
          are drafted by first-tier legal counsel, and have been tried and
          tested for over a decade. We’ll make sure you’re armed with all the{" "}
          <br />
          documentation you need to protect your business and secure the
          financial rights of your business.
        </p>
      </div>
    </>
  );
};

export default Business;
