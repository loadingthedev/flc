import {
  FaBuilding,
  FaGlobe,
  FaLightbulb,
  FaShoppingBag,
} from "react-icons/fa";

export default function Steps() {
  return (
    <div className="bg-white p-6  rounded text-center flex flex-col items-center mt-20 max-w-6xl mx-auto">
      <FaGlobe color="#0f5471" size={"80"} />
      <h2 className="text-3xl font-bold mb-4 mt-8 text-center text-primary">
        Steps to Set Up a Company in a UAE Free Zone
      </h2>
      <p className="text-center text-primary text-xl mb-8">
        Starting a business in Dubai is simple with Virtuzone. We can help you
        set up in a free zone, on <br />
        mainland or offshore.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
          <FaLightbulb color="#0f5471" size={"80"} />

          <p className="mt-8">
            You will be guided through the process step-by-step in a very
            transparent manner that gives you a full overview of exactly where
            you are at any given time of the setup journey.
          </p>
        </div>
        <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
          <FaShoppingBag color="#0f5471" size={"80"} />
          <p className="mt-8">
            We do all the heavy lifting for you so that you don’t have to give
            anything a second thought, but we make sure you are well-informed
            along the way.
          </p>
        </div>
        <div className="bg-white p-6 shadow-md rounded text-center flex flex-col items-center ">
          <FaBuilding color="#0f5471" size={"80"} />
          <p className="mt-8">
            While the entire process can take as little as seven working days,
            Virtuzone is doing a lot behind the scenes to ensure your UAE free
            zone company setup is a complete success.
          </p>
        </div>
      </div>
      <button className="flex items-center gap-2 px-12 py-4 my-16 border-2 border-white rounded-none transition-all text-white bg-primary hover:bg-muted-foreground hover:text-primary-foreground">
        Get Started
      </button>
    </div>
  );
}
