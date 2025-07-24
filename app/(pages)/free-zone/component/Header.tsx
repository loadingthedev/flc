import Link from "next/link";

export default function Header() {
  return (
    <div
      className="
      bg-muted-foreground w-full h-auto flex flex-col
      md:flex-row justify-between items-center
      px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40
      py-8 sm:py-12 md:py-16
      mt-10 md:mt-0
    "
    >
      <div
        className="
        md:ml-12 text-center md:text-left py-2
        w-full md:w-1/2 flex flex-col items-center md:items-start
      "
      >
        <h1
          className="
          font-bold mb-4 text-white
          mt-10 md:mt-20
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
        "
        >
          Explore top UAE free zones and their unique benefits for your business
        </h1>
        <p
          className="
          text-white mb-4
          text-base sm:text-lg md:text-xl lg:text-2xl
        "
        >
          With over 40 free zone jurisdictions in the UAE, selecting the right{" "}
          <br className="hidden md:block" />
          one for your business can seem overwhelming. That’s where{" "}
          <br className="hidden md:block" /> FLC makes a difference.
        </p>
        <p
          className="
          text-white mb-8
          text-base sm:text-lg md:text-xl lg:text-2xl
        "
        >
          Our Company Formation Specialists are here to guide you, helping{" "}
          <br className="hidden md:block" /> you choose the most suitable free
          zone based on your business type, <br className="hidden md:block" />
          activities, requirements, and budget.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/contact">
            <button
              className="
              flex items-center gap-2
              px-6 sm:px-8 md:px-12 lg:px-16
              py-3 sm:py-4 lg:py-5
              mt-6
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
        w-full md:w-1/2 mt-10 sm:mt-12 md:mt-0
        md:pl-10 md:pt-10 flex justify-center items-center
      "
      >
        <img
          src="https://go.virtuzone.com/wp-content/uploads/2024/12/over-1.png.webp"
          alt="UAE Free Zone"
          className="
            w-full h-auto
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            rounded-lg shadow-lg
            mt-10 md:mt-20
          "
        />
      </div>
    </div>
  );
}
