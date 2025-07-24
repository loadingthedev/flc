import Link from "next/link";

const Header = () => {
  return (
    <div
      className="
      bg-muted-foreground w-full h-auto flex flex-col
      md:flex-row justify-between items-center
      px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40
      py-10 md:py-24
      mt-8 md:mt-0
    "
    >
      <div className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1
          className="
          text-2xl sm:text-3xl md:text-3xl lg:text-5xl
          font-bold mb-4 mt-4 md:mt-0 text-white
        "
        >
          FREE ZONE COMPANY SETUP
        </h1>
        <p
          className="
 text-2xl sm:text-3xl md:text-3xl lg:text-5xl          font-bold text-white mt-4 mb-8
        "
        >
          GET YOUR FREE ZONE COMPANY RIGHT
        </p>
        <p
          className="
          text-white mb-8
          text-base sm:text-lg md:text-xl lg:text-2xl
        "
        >
          With over 50 free zones in the UAE, how do you know which one is best
          for you? <br /> Setting up in the right free zone will position your
          business for success.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/contact">
            <button
              className="
              flex items-center gap-2
              px-6 sm:px-8 md:px-12 lg:px-16
              py-3 sm:py-4 md:py-5
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
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 md:pt-24 flex justify-center items-center">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/09/Free-Zone-Company-Setup-Overview.png.webp"
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

export default Header;
