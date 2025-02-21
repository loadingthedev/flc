import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-muted-foreground py-28 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-white">
          FREE ZONE SOLUTIONS
        </h1>
        <p className="text-3xl font-bold text-white mt-4 mb-8">
          Business Setup Consultants in Dubai
        </p>
        <p className="text-white text-xl mb-8">
          Our business setup consultants have enabled more than 60,000
          entrepreneurs from <br /> 180 countries to set up their business in
          Dubai.
        </p>
        <button className="flex items-center gap-2 px-12 bg-white py-4 border-2 border-white rounded-none transition-all text-primary hover:bg-primary hover:text-primary-foreground relative overflow-hidden">
          <span className="absolute inset-0 bg-primary transition-transform transform -translate-x-full hover:translate-x-0"></span>
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
      <div className="md:w-1/1 mt-50 md:mb-0 md:pl-40">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/3.-Our-Solution-Business-Setup-Consultants.png.webp"
          alt="UAE Free Zone"
          className="w-[650px] h-[520px] mt-20 md:mt-[50] mr-20"
        />
      </div>
    </div>
  );
};

export default Header;
