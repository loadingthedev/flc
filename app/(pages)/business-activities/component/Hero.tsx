import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="
      bg-muted-foreground w-full h-auto flex flex-col
      md:flex-row justify-between items-center
      px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32
      py-8 sm:py-12 md:py-16
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
          mt-10 md:mt-20
          text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
        "
        >
          FREE ZONE BUSINESS ACTIVITIES
        </h1>
        <p
          className="
          font-bold text-white mt-4 mb-6
          text-lg sm:text-xl md:text-3xl lg:text-4xl
        "
        >
          CHOOSING A UAE BUSINESS ACTIVITY
        </p>
        <p
          className="
          text-white mb-6 leading-relaxed
          text-sm sm:text-base md:text-xl lg:text-2xl
        "
        >
          Our Company Formation Specialists will guide you into selecting the
          most suitable <br className="hidden md:block" /> business activity for
          your UAE free zone company.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/contact">
            <button
              className="
              flex items-center gap-2
              px-6 sm:px-8 md:px-12 lg:px-16
              py-3 sm:py-4 lg:py-5
              border-2 border-white rounded transition-all
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
        w-full md:w-1/2 mt-16 md:mt-24
        md:pl-10 md:pt-12 flex justify-center items-center
      "
      >
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png.webp"
          alt="UAE Free Zone"
          className="
            w-full h-auto
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            rounded-lg shadow-lg
          "
        />
      </div>
    </div>
  );
};

export default Hero;
