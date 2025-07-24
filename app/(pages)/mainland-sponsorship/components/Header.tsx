import Link from "next/link";

const Header = () => {
  return (
    <div
      className="
      bg-muted-foreground w-full h-auto flex flex-col
      md:flex-row justify-center items-center
      px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40
      py-16 md:py-24
      gap-10 md:gap-20
      min-h-[450px] md:min-h-[600px]
    "
    >
      <div className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1
          className="
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          font-bold mb-4 text-white mt-10 md:mt-20
        "
        >
          LOCAL OR CORPORATE SPONSORSHIP
        </h1>
        <p
          className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold text-white mt-4 mb-8
        "
        >
          FIND A LOCAL
          <br /> SPONSOR IN THE UAE
        </p>
        <p
          className="
          text-white mb-8
          text-base sm:text-lg md:text-xl lg:text-2xl
        "
        >
          Our corporate nominee sponsorship programme allows you <br /> to have
          100% beneficial ownership and 100% operational <br /> and financial
          control.
        </p>
        <Link href="/contact">
          <button
            className="
            flex items-center gap-2
            px-8 sm:px-10 md:px-12 lg:px-16
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
      <div className="w-full md:w-1/2 mt-10 md:mt-20 md:mb-0 md:pl-8 flex justify-center items-center">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/4.-Sponsorship-Local-or-Corporate-Sponsor.png.webp"
          alt="UAE Free Zone"
          className="
            w-full h-auto
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            md:w-[700px] md:h-[500px]
            rounded-lg shadow-lg mt-5
          "
        />
      </div>
    </div>
  );
};

export default Header;
