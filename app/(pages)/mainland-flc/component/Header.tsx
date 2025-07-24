import Link from "next/link";

const Header = () => {
  return (
    <div
      className="
      bg-muted-foreground w-full h-auto flex flex-col
      md:flex-row justify-center items-center
      px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40
      py-10 sm:py-16 md:py-24
      gap-10 md:gap-20
      min-h-[450px] md:min-h-[600px]
    "
    >
      <div
        className="
        text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start
      "
      >
        <h1
          className="
          font-bold mb-4 text-white
          pl-2
          mt-10 md:mt-20
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        "
        >
          MAINLAND LICENCES
        </h1>
        <p
          className="
          font-bold text-white mt-4 mb-8
          text-2xl sm:text-3xl md:text-5xl lg:text-6xl
        "
        >
          CHOOSE THE RIGHT
          <br className="hidden md:block" /> DUBAI MAINLAND LICENCE
        </p>
        <p
          className="
          text-white mb-8
          text-base sm:text-lg md:text-xl lg:text-2xl
        "
        >
          Our specialists will help you select the most suitable and
          <br className="hidden md:block" />
          advantageous Dubai mainland licence for your company –
          <br className="hidden md:block" />
          be it commercial, industrial or professional.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/contact">
            <button
              className="
              flex items-center gap-2
              px-6 sm:px-8 md:px-12 lg:px-16
              py-3 sm:py-4
              border-2 border-white rounded-none transition-all
              text-white hover:bg-primary hover:text-primary-foreground
              text-base sm:text-lg md:text-xl
            "
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div
        className="
        w-full md:w-1/2 mt-10 md:mt-20 md:mb-0 md:pl-8 flex justify-center items-center
      "
      >
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/7.-VirtuFit.png.webp"
          alt="UAE Free Zone"
          className="
            w-full h-auto
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            md:w-[600px] md:h-[520px]
            rounded-lg shadow-lg
          "
        />
      </div>
    </div>
  );
};

export default Header;
