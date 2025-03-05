const Header = () => {
  return (
    <div className="bg-muted-foreground py-12 md:py-24 width-full h-auto md:h-[600px] flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-10 md:gap-20">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-xl font-bold mb-4 text-white pl-2 mt-10 md:mt-20">
          MAINLAND ACTIVITIES
        </h1>
        <p className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8">
          CHOOSING MAINLAND
          <br className="hidden md:block" /> BUSINESS ACTIVITIES
        </p>

        <p className="text-white text-lg md:text-xl mb-8">
          Setting up a mainland company gives you the benefit of
          <br className="hidden md:block" />
          choosing from over 3,000 business activities. Let us guide
          <br className="hidden md:block" />
          you through your mainland business setup.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 px-6 md:px-12 py-3 md:py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-20 md:mb-0 md:pl-8">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/Mainland-Activities-2-min-1.png.webp"
          alt="UAE Free Zone"
          className="w-full md:w-[650px] h-auto md:h-[520px]"
        />
      </div>
    </div>
  );
};

export default Header;
