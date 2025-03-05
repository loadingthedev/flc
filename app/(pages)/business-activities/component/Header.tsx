const Header = () => {
  return (
    <div className="bg-muted-foreground py-20 w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          FREE ZONE BUSINESS ACTIVITIES
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
          CHOOSING A UAE BUSINESS ACTIVITY
        </p>
        <p className="text-white text-base md:text-xl mb-8">
          Our Company Formation Specialists will guide you into selecting the
          most suitable <br className="hidden md:block" /> business activity for
          your UAE free zone company.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 px-8 md:px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 ml-8 md:mt-0 md:pl-10 flex justify-center md:justify-end">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png.webp"
          alt="UAE Free Zone"
          className="w-full md:w-[650px] h-auto "
        />
      </div>
    </div>
  );
};

export default Header;
