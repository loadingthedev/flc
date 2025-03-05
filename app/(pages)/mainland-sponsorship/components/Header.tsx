const Header = () => {
  return (
    <div className="bg-muted-foreground py-24 width-full h-[600px] flex flex-col md:flex-row justify-center items-center pl-20 gap-20">
      <div>
        <h1 className="text-xl font-bold mb-4 text-primary mt-20">
          LOCAL OR CORPORATE SPONSORSHIP
        </h1>
        <p className="text-5xl font-bold text-white mt-4 mb-8">
          FIND A LOCAL
          <br /> SPONSOR IN THE UAE
        </p>

        <p className="text-white text-xl mb-8">
          Our corporate nominee sponsorship programme allows you <br /> to have
          100% beneficial ownership and 100% operational <br /> and financial
          control.
        </p>

        <button className="flex items-center gap-2 px-12 py-4 border-2 border-white rounded-none transition-all text-white hover:bg-primary hover:text-primary-foreground">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-30 md:mb-0 md:pl-35 mt-20">
        <img
          src="https://virtuzone.com/wp-content/uploads/2021/10/4.-Sponsorship-Local-or-Corporate-Sponsor.png.webp"
          alt="UAE Free Zone"
          className="w-[700px] h-[500px] mt-5"
        />
      </div>
    </div>
  );
};

export default Header;
