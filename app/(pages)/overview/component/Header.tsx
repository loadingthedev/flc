const Header = () => {
  return (
    <div className="bg-muted-foreground  w-full   h-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-40 mt-16 md:mt-0">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4 md:mt-0 text-white">
          FREE ZONE COMPANY SETUP
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 mb-8">
          GET YOUR FREE ZONE COMPANY RIGHT
        </p>

        <p className="text-white text-base md:text-xl mb-8">
          With over 50 free zones in the UAE, how do you know which one is best
          for you? <br /> Setting up in the right free zone will position your
          business for success.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 px-8 md:px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 md:pt-40">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/09/Free-Zone-Company-Setup-Overview.png.webp"
          alt="UAE Free Zone"
          className="w-full h-auto md:mt-auto"
        />
      </div>
    </div>
  );
};

export default Header;
