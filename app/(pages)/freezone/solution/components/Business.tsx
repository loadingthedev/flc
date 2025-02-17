import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
    <div className=" max-w-8xl flex-col md:flex-row items-center justify-center my-12 ">
      <div className="mt-8 md:mt-0 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaMapMarkerAlt color="red" size={40} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-primary mb-4 mt-8">
          The Leading Business Setup Consultants in Dubai and UAE
        </h2>
        <div className="  items-center mt-20">
          <div className="mt-8 md:mt-30">
            <p className="text-lg mb-4  mt-4">
              Setting up a company anywhere in the world can be daunting.
              However, with the right business setup consultants <br /> in Dubai
              at your side, it doesn’t have to be challenging. We have been
              operating as business setup consultants for <br /> almost 15
              years, having helped more than 70,000 entrepreneurs like yourself
              to get off to the right start. <br /> Business setup in Dubai
              doesn’t have to be daunting with us by your side.
            </p>
            <button className=" items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
