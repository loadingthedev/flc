import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-muted-foreground py-28 width-full h-[600px] flex flex-col md:flex-row justify-between items-center pl-20">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-white">
          FREE ZONE BUSINESS ACTIVITIES
        </h1>
        <p className="text-3xl font-bold text-white mt-4 mb-8">
          CHOOSING A UAE BUSINESS ACTIVITY
        </p>
        <p className="text-white text-xl mb-8">
          Our Company Formation Specialists will guide you into selecting the
          most suitable <br /> business activity for your UAE free zone company.
        </p>
        <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div className="md:w-1/1 mt-50 md:mb-0 md:pl-40">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png.webp"
          alt="UAE Free Zone"
          className="w-[650px] h-[520px] mt-20 md:mt-[50] mr-20"
        />
      </div>
    </div>
  );
};

export default Header;
