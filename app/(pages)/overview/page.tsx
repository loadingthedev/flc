import Advantaages from "./component/Advantaages";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Steps from "./component/stepsGrid";

const UAEFreeZonePage = () => {
  return (
    <div>
      <Header />
      <Hero />

      <Advantaages />

      <div className="flex justify-center px-4 md:px-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/c2.png.webp"
          alt="Additional Information"
          className="w-full max-w-4xl h-auto"
        />
      </div>

      <Steps />
    </div>
  );
};

export default UAEFreeZonePage;
