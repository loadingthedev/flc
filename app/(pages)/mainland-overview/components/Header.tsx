import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-muted-foreground py-24 width-full h-[600px] flex flex-col md:flex-row justify-center items-center pl-20 gap-20">
      <div>
        <h1 className="text-xl font-bold mb-4 text-white pl-2 mt-20">
          SET UP YOUR MAINLAND COMPANY IN DUBAI
        </h1>
        <p className="text-5xl font-bold text-white mt-4 mb-8">
          Mainland Company <br /> Formation in Dubai
        </p>

        <p className="text-white text-xl mb-8">
          Is a Dubai mainland company the right choice for you? <br /> Choose
          from over 3,000 business activities and enjoy the <br />
          freedom to trade anywhere in the UAE and overseas.
        </p>
        <Link href="/contact">
          <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-30 md:mb-0 md:pl-35 mt-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/09/Mainland-Company-Setup-Overview.png.webp"
          alt="UAE Free Zone"
          className="w-[650px] h-[520px]"
        />
      </div>
    </div>
  );
};

export default Header;
