import { FaGlobe } from "react-icons/fa";

const SubHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-12">
      <div className="mt-8 md:mt-0">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4">
          Attention PTs, Yoga Teachers, Sports Coaches <br /> and Lifestyle
          Gurus! Sick of Losing Sleep at Night?
        </h2>
        <p className="text-center mt-8 ">
          Working throughout Dubai requires a DED trade licence. FLC has the
          only officially recognised solution called FLC , and it won’t cost you
          an arm and a leg, <br /> literally. Work officially. Protect yourself
          and your customers with the only insurable solution in Dubai.
        </p>
        <div className="flex items-center justify-center mt-8">
          <img
            src="https://virtuzone.com/wp-content/uploads/2021/10/secondry-2.png.webp"
            alt="Description of image"
            className="w-[1000px] h-[600px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SubHero;
