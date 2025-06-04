import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-muted-foreground w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-10">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white mt-10 md:mt-20">
          FREE ZONE BUSINESS ACTIVITIES
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl font-bold text-white mt-4 mb-6">
          CHOOSING A UAE BUSINESS ACTIVITY
        </p>
        <p className="text-white text-sm sm:text-base md:text-xl mb-6 leading-relaxed">
          Our Company Formation Specialists will guide you into selecting the
          most suitable <br className="hidden md:block" /> business activity for
          your UAE free zone company.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/contact">
            <button className="flex items-center gap-2 px-6 sm:px-8 md:px-12 py-3 sm:py-4 border-2 border-white rounded transition-all text-white hover:bg-primary hover:text-primary-foreground">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/1.-Business-Activities-1.png.webp"
          alt="UAE Free Zone"
          className="w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
