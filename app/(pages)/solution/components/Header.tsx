import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className=" bg-muted-foreground w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 mt-10 md:mt-10">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
          FREE ZONE SOLUTIONS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mt-3 sm:mt-4 mb-5 sm:mb-8">
          Business Setup Consultants in Dubai
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
          Our business setup consultants have enabled more than 60,000
          entrepreneurs from <br className="hidden md:block" /> 180 countries to
          set up their business in Dubai.
        </p>
        <Link href="/contact">
          <button className="relative flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mt-4 sm:mt-6 border-2 border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground overflow-hidden">
            <span className="absolute inset-0 bg-primary transition-transform transform -translate-x-full hover:translate-x-0"></span>
            <span className="relative z-10">Get Started</span>
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:pt-8 flex justify-center">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/3.-Our-Solution-Business-Setup-Consultants.png.webp"
          alt="UAE Free Zone"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Header;
