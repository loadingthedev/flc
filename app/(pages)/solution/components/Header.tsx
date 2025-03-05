import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-muted-foreground py-10 md:py-28 w-full h-auto md:h-[600px] flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          FREE ZONE SOLUTIONS
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
          Business Setup Consultants in Dubai
        </p>
        <p className="text-white text-base md:text-xl mb-8">
          Our business setup consultants have enabled more than 60,000
          entrepreneurs from <br className="hidden md:block" /> 180 countries to
          set up their business in Dubai.
        </p>
        <button className="items-center gap-2 px-6 md:px-8 py-3 md:py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
          <span className="absolute inset-0 bg-primary transition-transform transform -translate-x-full hover:translate-x-0"></span>
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10 flex justify-center md:justify-end">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/3.-Our-Solution-Business-Setup-Consultants.png.webp"
          alt="UAE Free Zone"
          className="w-full max-w-xs md:max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default Header;
